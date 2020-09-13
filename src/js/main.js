/** @type {CharData} */
let characterData       = [];   // Initial character data set used.
/** @type {CharData} */
let characterDataToSort = [];   // Character data set after filtering.
/** @type {Options} */
let options             = [];   // Initial option set used.

let currentVersion      = '';   // Which version of characterData and options are used.

/** @type {(boolean|boolean[])[]} */
let optTaken  = [];             // Records which options are set.

/** Save Data. Concatenated into array, joined into string (delimited by '|') and compressed with lz-string. */
let timestamp = 0;        // savedata[0]      (Unix time when sorter was started, used as initial PRNG seed and in dataset selection)
let timeTaken = 0;        // savedata[1]      (Number of ms elapsed when sorter ends, used as end-of-sort flag and in filename generation)
let choices   = '';       // savedata[2]      (String of '0', '1' and '2' that records what sorter choices are made)
let optStr    = '';       // savedata[3]      (String of '0' and '1' that denotes top-level option selection)
let suboptStr = '';       // savedata[4...n]  (String of '0' and '1' that denotes nested option selection, separated by '|')
let timeError = false;    // Shifts entire savedata array to the right by 1 and adds an empty element at savedata[0] if true.

/** Intermediate sorter data. */
let sortedIndexList = [];
let recordDataList  = [];
let parentIndexList = [];
let tiedDataList    = [];

let leftIndex       = 0;
let leftInnerIndex  = 0;
let rightIndex      = 0;
let rightInnerIndex = 0;
let battleNo        = 1;
let sortedNo        = 0;
let pointer         = 0;

/** A copy of intermediate sorter data is recorded for undo() purposes. */
let sortedIndexListPrev = [];
let recordDataListPrev  = [];
let parentIndexListPrev = [];
let tiedDataListPrev    = [];

let leftIndexPrev       = 0;
let leftInnerIndexPrev  = 0;
let rightIndexPrev      = 0;
let rightInnerIndexPrev = 0;
let battleNoPrev        = 1;
let sortedNoPrev        = 0;
let pointerPrev         = 0;

/** Miscellaneous sorter data that doesn't need to be saved for undo(). */
let finalCharacters = [];
let loading         = false;
let totalBattles    = 0;
let sorterURL       = window.location.host + window.location.pathname;
let storedSaveType  = localStorage.getItem(`${sorterURL}_saveType`);

/** Initialize script. */
function init() {

  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', () => pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', () => pick('right'));
  
  //document.querySelector('.sorting.tie.button').addEventListener('click', () => pick('tie'));
   
   
  document.querySelector('.sorting.undo.button').addEventListener('click', undo);
  document.querySelector('.sorting.save.button').addEventListener('click', () => saveProgress('Progress'));
  
  document.querySelector('.finished.save.button').addEventListener('click', () => saveProgress('Last Result'));
  document.querySelector('.finished.getimg.button').addEventListener('click', generateImage);
  document.querySelector('.finished.list.button').addEventListener('click', generateTextList);

  document.querySelector('.clearsave').addEventListener('click', clearProgress);

  /** Define keyboard controls (up/down/left/right vimlike k/j/h/l). */
  document.addEventListener('keypress', (ev) => {
    /** If sorting is in progress. */
    if (timestamp && !timeTaken && !loading && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 's': case '3':                   saveProgress('Progress'); break;
        case 'h': case 'ArrowLeft':           pick('left'); break;
        case 'l': case 'ArrowRight':          pick('right'); break;
        case 'k': case '1': case 'ArrowUp':   pick('tie'); break;
        case 'j': case '2': case 'ArrowDown': undo(); break;
        default: break;
      }
    }
    /** If sorting has ended. */
    else if (timeTaken && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 'k': case '1': saveProgress('Last Result'); break;
        case 'j': case '2': generateImage(); break;
        case 's': case '3': generateTextList(); break;
        default: break;
      }
    } else { // If sorting hasn't started yet.
      switch(ev.key) {
        case '1': case 's': case 'Enter': start(); break;
        case '2': case 'l':               loadProgress(); break;
        default: break;
      }
    }
  });

  document.querySelector('.image.selector').insertAdjacentElement('beforeend', document.createElement('select'));

  //migrate test


  /** Show load button if save data exists. */
  if (storedSaveType) {
    document.querySelector('.starting.load.button > span').insertAdjacentText('beforeend', storedSaveType);
    //document.querySelectorAll('.starting.button').forEach(el => {
	
	/*document.querySelectorAll('.start-btn').forEach(el =>{
      //el.style['grid-row'] = 'span 3';
      el.style.display = 'block';
    });*/
	$('#three-two').removeClass('d-none');
	$('.starting.button').addClass('d-flex');
  }

  setLatestDataset();

  /** Decode query string if available. */
  if (window.location.search.slice(1) !== '') decodeQuery();
}

/** Begin sorting. */
function start() {
  /** Copy data into sorting array to filter. */
  characterDataToSort = characterData.slice(0);

  /** Check selected options and convert to boolean array form. */
  optTaken = [];

  options.forEach(opt => {
    if ('sub' in opt) {
      if (!document.getElementById(`cbgroup-${opt.key}`).checked) optTaken.push(false);
      else {
        const suboptArray = opt.sub.reduce((arr, val, idx) => {
          arr.push(document.getElementById(`cb-${opt.key}-${idx}`).checked);
          return arr;
        }, []);
        optTaken.push(suboptArray);
      }
    } else { optTaken.push(document.getElementById(`cb-${opt.key}`).checked); }
  });

  /** Convert boolean array form to string form. */
  optStr    = '';
  suboptStr = '';

  optStr = optTaken
    .map(val => !!val)
    .reduce((str, val) => {
      str += val ? '1' : '0';
      return str;
    }, optStr);
  optTaken.forEach(val => {
    if (Array.isArray(val)) {
      suboptStr += '|';
      suboptStr += val.reduce((str, val) => {
        str += val ? '1' : '0';
        return str;
      }, '');
    }
  });

  /** Filter out deselected nested criteria and remove selected criteria. */
  options.forEach((opt, index) => {
    if ('sub' in opt) {
      if (optTaken[index]) {
        const subArray = optTaken[index].reduce((subList, subBool, subIndex) => {
          if (subBool) { subList.push(options[index].sub[subIndex].key); }
          return subList;
        }, []);
        characterDataToSort = characterDataToSort.filter(char => {
          if (!(opt.key in char.opts)) console.warn(`Warning: ${opt.key} not set for ${char.name}.`);
          return opt.key in char.opts && char.opts[opt.key].some(key => subArray.includes(key));
        });
      }
    } else if (optTaken[index]) {
      characterDataToSort = characterDataToSort.filter(char => !char.opts[opt.key]);
    }
  });

  if (characterDataToSort.length < 2) {
    alert('Cannot sort with less than two characters. Please reselect.');
    return;
  }

  /** Shuffle character array with timestamp seed. */
  timestamp = timestamp || new Date().getTime();
  if (new Date(timestamp) < new Date(currentVersion)) { timeError = true; }
  Math.seedrandom(timestamp);

  characterDataToSort = characterDataToSort
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

  /**
   * tiedDataList will keep a record of indexes on which characters are equal (i.e. tied) 
   * to another one. recordDataList will have an interim list of sorted elements during
   * the mergesort process.
   */

  recordDataList  = characterDataToSort.map(() => 0);
  tiedDataList    = characterDataToSort.map(() => -1);

  /** 
   * Put a list of indexes that we'll be sorting into sortedIndexList. These will refer back
   * to characterDataToSort.
   * 
   * Begin splitting each element into little arrays and spread them out over sortedIndexList
   * increasing its length until it become arrays of length 1 and you can't split it anymore. 
   * 
   * parentIndexList indicates each element's parent (i.e. where it was split from), except 
   * for the first element, which has no parent.
   */

  sortedIndexList[0] = characterDataToSort.map((val, idx) => idx);
  parentIndexList[0] = -1;

  let midpoint = 0;   // Indicates where to split the array.
  let marker   = 1;   // Indicates where to place our newly split array.

  for (let i = 0; i < sortedIndexList.length; i++) {
    if (sortedIndexList[i].length > 1) {
      let parent = sortedIndexList[i];
      midpoint = Math.ceil(parent.length / 2);

      sortedIndexList[marker] = parent.slice(0, midpoint);              // Split the array in half, and put the left half into the marked index.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      marker++;                                                         // Increment the marker to put the right half into.

      sortedIndexList[marker] = parent.slice(midpoint, parent.length);  // Put the right half next to its left half.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      marker++;                                                         // Rinse and repeat, until we get arrays of length 1. This is initialization of merge sort.
    }
  }

  leftIndex  = sortedIndexList.length - 2;    // Start with the second last value and...
  rightIndex = sortedIndexList.length - 1;    // the last value in the sorted list and work our way down to index 0.

  leftInnerIndex  = 0;                        // Inner indexes, because we'll be comparing the left array
  rightInnerIndex = 0;                        // to the right array, in order to merge them into one sorted array.

  /** Disable all checkboxes and hide/show appropriate parts while we preload the images. */
  document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.disabled = true);
  //document.querySelectorAll('.starting.button').forEach(el => el.style.display = 'none');
  $('.starting.button').removeClass('d-flex');
  $('.starting.button').addClass('d-none');
  $('#three-two').addClass('d-none');
  //document.querySelector('.loading.button').style.display = 'block';
  $('.loading.button').removeClass('d-none');
  $('.loading.button').addClass('d-flex');
  //document.querySelector('.progress-container').style.display = 'block';
  $('.progress-container').removeClass('d-none');
  $('.sorter-options').addClass('d-none');
  
  loading = true;

  preloadImages().then(() => 
	{
    loading = false;
    //document.querySelector('.loading.button').style.display = 'none';
		$('.loading.button').removeClass('d-flex');
		$('.loading.button').addClass('d-none');
		//document.querySelector('.test-two').style.display = 'none';
    //document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'block');
		$('#three-two').removeClass('d-none');
		$('.sorting.button').removeClass('d-none');
		$('.sorting.button').addClass('d-flex');
		//document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'block');
		$('.sort-names').removeClass('d-none');
		//if selected is embed, display embed frameElement
		if(document.getElementById(`cbgroup-sembed`).checked)
		{
			$('.spotify').removeClass('d-none');
		}
    display();
  });
}

/** Displays the current state of the sorter. */
function display() {
  const percent         = Math.floor(sortedNo * 100 / totalBattles);
  const leftCharIndex   = sortedIndexList[leftIndex][leftInnerIndex];
  const rightCharIndex  = sortedIndexList[rightIndex][rightInnerIndex];
  const leftChar        = characterDataToSort[leftCharIndex];
  const rightChar       = characterDataToSort[rightCharIndex];

  const charNameDisp = name => {
    const charName = reduceTextWidth(name, 'Arial 12px', 500);
    const charTooltip = name !== charName ? name : '';
    return `<p title="${charTooltip}">${charName}</p>`;
  };

  progressBar(`Battle No. ${battleNo}`, percent);

  document.querySelector('.left.sort.image').src = leftChar.img;
  document.querySelector('.right.sort.image').src = rightChar.img;  

  document.querySelector('.left.sort.text').innerHTML = charNameDisp(leftChar.name);
  document.querySelector('.right.sort.text').innerHTML = charNameDisp(rightChar.name);
	
	document.querySelector('.left.spotify').src = leftChar.song;
	document.querySelector('.right.spotify').src = rightChar.song;

  /** Autopick if choice has been given. */
  if (choices.length !== battleNo - 1) {
    switch (Number(choices[battleNo - 1])) {
      case 0: pick('left'); break;
      case 1: pick('right'); break;
      case 2: pick('tie'); break;
      default: break;
    }
  } else { saveProgress('Autosave'); }
}

/**
 * Sort between two character choices or tie.
 * 
 * @param {'left'|'right'|'tie'} sortType
 */
function pick(sortType) {
  if ((timeTaken && choices.length === battleNo - 1) || loading) { return; }
  else if (!timestamp) { return start(); }

  sortedIndexListPrev = sortedIndexList.slice(0);
  recordDataListPrev  = recordDataList.slice(0);
  parentIndexListPrev = parentIndexList.slice(0);
  tiedDataListPrev    = tiedDataList.slice(0);

  leftIndexPrev       = leftIndex;
  leftInnerIndexPrev  = leftInnerIndex;
  rightIndexPrev      = rightIndex;
  rightInnerIndexPrev = rightInnerIndex;
  battleNoPrev        = battleNo;
  sortedNoPrev        = sortedNo;
  pointerPrev         = pointer;

  /** 
   * For picking 'left' or 'right':
   * 
   * Input the selected character's index into recordDataList. Increment the pointer of
   * recordDataList. Then, check if there are any ties with this character, and keep
   * incrementing until we find no more ties. 
   */
  switch (sortType) {
    case 'left': {
      if (choices.length === battleNo - 1) { choices += '0'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      break;
    }
    case 'right': {
      if (choices.length === battleNo - 1) { choices += '1'; }
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }

  /** 
   * For picking 'tie' (i.e. heretics):
   * 
   * Proceed as if we picked the 'left' character. Then, we record the right character's
   * index value into the list of ties (at the left character's index) and then proceed
   * as if we picked the 'right' character.
   */
    case 'tie': {
      if (choices.length === battleNo - 1) { choices += '2'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      tiedDataList[recordDataList[pointer - 1]] = sortedIndexList[rightIndex][rightInnerIndex];
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }
    default: return;
  }

  /**
   * Once we reach the limit of the 'right' character list, we 
   * insert all of the 'left' characters into the record, or vice versa.
   */
  const leftListLen = sortedIndexList[leftIndex].length;
  const rightListLen = sortedIndexList[rightIndex].length;

  if (leftInnerIndex < leftListLen && rightInnerIndex === rightListLen) {
    while (leftInnerIndex < leftListLen) {
      recordData('left');
    }
  } else if (leftInnerIndex === leftListLen && rightInnerIndex < rightListLen) {
    while (rightInnerIndex < rightListLen) {
      recordData('right');
    }
  }

  /**
   * Once we reach the end of both 'left' and 'right' character lists, we can remove 
   * the arrays from the initial mergesort array, since they are now recorded. This
   * record is a sorted version of both lists, so we can replace their original 
   * (unsorted) parent with a sorted version. Purge the record afterwards.
   */
  if (leftInnerIndex === leftListLen && rightInnerIndex === rightListLen) {
    for (let i = 0; i < leftListLen + rightListLen; i++) {
      sortedIndexList[parentIndexList[leftIndex]][i] = recordDataList[i];
    }
    sortedIndexList.pop();
    sortedIndexList.pop();
    leftIndex = leftIndex - 2;
    rightIndex = rightIndex - 2;
    leftInnerIndex = 0;
    rightInnerIndex = 0;

    sortedIndexList.forEach((val, idx) => recordDataList[idx] = 0);
    pointer = 0;
  }

  /**
   * If, after shifting the 'left' index on the sorted list, we reach past the beginning
   * of the sorted array, that means the entire array is now sorted. The original unsorted
   * array in index 0 is now replaced with a sorted version, and we will now output this.
   */
  if (leftIndex < 0) {
    timeTaken = timeTaken || new Date().getTime() - timestamp;

    progressBar(`Battle No. ${battleNo} - Completed!`, 100);

    /** Initialize image quantity selector for results. */
	if (characterDataToSort.length < 7)
	{
	  for (let i = 1; i <= characterDataToSort.length+3; i+=3) {
        const select = document.createElement('option');
        select.value = i;
        select.text = i;
        if (i === 7) { select.selected = 'selected'; }
        document.querySelector('.image.selector > select').insertAdjacentElement('beforeend', select);

	    imageNum = 1;
	    result(Number(imageNum));
      }
	}
    else
	{
	  for (let i = 7; i <= characterDataToSort.length+3; i+=3) {
        const select = document.createElement('option');
        select.value = i;
        select.text = i;
        if (i === 7) { select.selected = 'selected'; }
        document.querySelector('.image.selector > select').insertAdjacentElement('beforeend', select);
        
		result();
	  }
	}
	
    document.querySelector('.image.selector > select').addEventListener('input', (e) => {
      const imageNum = e.target.options[e.target.selectedIndex].value;
      result(Number(imageNum));
    });	
	
	if(characterDataToSort.length < 7)
	{
	}
	else
	{
	  
	}
    //result();
  } else {
    battleNo++;
    display();
  }
}

/**
 * Records data in recordDataList.
 * 
 * @param {'left'|'right'} sortType Record from the left or the right character array.
 */
function recordData(sortType) {
  if (sortType === 'left') {
    recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
    leftInnerIndex++;
  } else {
    recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
    rightInnerIndex++;
  }
  
  pointer++;
  sortedNo++;
}

/**
 * Modifies the progress bar.
 * 
 * @param {string} indicator
 * @param {number} percentage
 */
function progressBar(indicator, percentage) {
  document.querySelector('.progressbattle').innerHTML = indicator;
  document.querySelector('.progressfill').style.width = `${percentage}%`;
  document.querySelector('.progresstext').innerHTML = `${percentage}%`;
}

/**
 * Shows the result of the sorter.
 * 
 * @param {number} [imageNum=3] Number of images to display. Defaults to 7.
 */
function result(imageNum = 7) {
  //document.querySelectorAll('.finished.button').forEach(el => el.style.display = 'block');
  //show result container
  $('.sorter-result-options').removeClass('d-none');
  $('.sorter-result-options').addClass('d-flex');
  
  $('.sorting.button').removeClass('d-flex');
  $('.sorting.button').addClass('d-none');
  $('.finished.button').removeClass('d-none');
  $('.finished.button').addClass('d-flex');
  $('#three-three').removeClass('d-none');
  
  
  document.querySelector('.image.selector').style.display = 'block';
  document.querySelector('.time.taken').style.display = 'block';
  
  //document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'none');
  $('.sorting.button').addClass('d-none');
  //document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'none');
  $('.sort-names').addClass('d-none');
  document.querySelector('.options').style.display = 'none';
  document.querySelector('.info').style.display = 'none';

  
  //this thing is a mess
  const kami = (char, num) => {
	let otpt = ``;
	const charName = reduceTextWidth(char.name, 'Arial 8px', 500);
	const charTooltip = char.name !== charName ? char.name : '';
	
	if((num-1) % 3 === 0)
	{
		otpt = `<div class="col-12"><div class="row"><div class="col-4 px-0"></div><div class="result kami col-4 pl-0 pr-1 pb-1 d-flex"><div class="flex-fill row mx-0 result-mcontainer p-1 border rounded-lg border-dark"><div class="d-flex left col-3 col-xl-2 align-items-center justify-content-end px-0">${num}位</div><div class="d-flex right col-9 col-xl-10 pl-1 pr-0"><div class="row mx-0"><img class="col-12 px-0 mx-xl-auto" src="${char.img}"><div class="d-flex col-12 pl-1 pr-0 text-break text-center justify-content-center" title"${charTooltip}">${charName}</div></div></div></div></div><div class="col-4 pl-0 pr-1"></div></div></div>`;
	}
	else
	{
		otpt = `<div class="col-12"><div class="row"><div class="col-4 pl-0 pr-1"></div><div class="result kami col-4 pl-0 pr-1 pb-1 d-flex"><div class="flex-fill row mx-0 result-mcontainer p-1 border rounded-lg border-dark"><div class="d-flex left col-3 align-items-center justify-content-end px-0">${num}位</div><div class="d-flex right col-9 pl-1 pr-0"><div class="row mx-0"><img class="col-12 px-0 mx-xl-auto" src="${char.img}"><div class="d-flex col-12 pl-1 pr-0 text-break text-center justify-content-center" title"${charTooltip}">${charName}</div></div></div></div></div><div class="col-4 pl-0 pr-1"></div></div></div>`;
	}
	
	return otpt;
  }
  
  const imgRes = (char, num) => 
  {
	let otpt = ``;
    const charName = reduceTextWidth(char.name, 'Arial 12px', 500);
    const charTooltip = char.name !== charName ? char.name : '';
	
	/*switch(${num})
	{
		case 2:
			otpt = `<div class="result image col-4 pl-0 pr-1"><div class="row mx-auto mt-1 px-1 pt-1"><div class="whitespc col-2"></div><div class="result-mcontainer d-flex left col-2 align-items-center justify-content-end">${num}位</div><div class="result-mcontainer d-flex right col-6"><div class="row"><img class="col-12" src="${char.img}"><div class="d-flex col-12 justify-content-start" title="${charTooltip}">${charName}</div></div></div></div>`;
			break;
		
	}*/
	
	if((num-1) % 3 === 0)
	{
		otpt = `<div class="result image col-4 px-0 pb-1 d-flex"><div class="flex-fill row mx-0 result-mcontainer p-1 border rounded-lg border-dark"><div class="d-flex left col-3 col-xl-2 align-items-center justify-content-end px-0">${num}位</div><div class="d-flex right col-9 col-xl-10 pl-1 pr-0"><div class="row mx-0"><img class="col-12 px-0 mx-xl-auto" src="${char.img}"><div class="d-flex col-12 pl-1 pr-0 text-break text-center justify-content-center" title="${charTooltip}">${charName}</div></div></div></div></div>`;
	}
	else
	{
		otpt = `<div class="result image col-4 pl-0 pr-1 pb-1 d-flex"><div class="flex-fill row mx-0 result-mcontainer p-1 border rounded-lg border-dark"><div class="d-flex left col-3 col-xl-2 align-items-center justify-content-end px-0">${num}位</div><div class="d-flex right col-9 col-xl-10 pl-1 pr-0"><div class="row mx-0"><img class="col-12 px-0 mx-xl-auto" src="${char.img}"><div class="d-flex col-12 pl-1 pr-0 text-break text-center justify-content-center" title="${charTooltip}">${charName}</div></div></div></div></div>`;
	}
	
    return otpt;
  }
  
  
  const res = (char, num) =>
  {
	let otpt = ``;
	const charName = reduceTextWidth(char.name, 'Arial 12px', 500);
	const charTooltip = char.name !== charName ? char.name : '';
	
	if((num-1) % 3 === 0)
	{
		otpt = `<div class="result col-4 px-0 pb-1 d-flex"><div class="flex-fill row mx-0 result-mcontainer p-1 align-items-center border rounded-lg border-dark"><div class="d-flex left col-3 col-xl-2 justify-content-end px-0">${num}位</div><div class="d-flex right col-9 col-xl-10 pl-1 pr-0 justify-content-center"><div class="row mx-0"><div class="pl-1 pr-0 d-flex col-12 align-items-center text-break text-center" title="${charTooltip}">${charName}</div></div></div></div></div>`;
	}
	else
	{
		otpt = `<div class="result col-4 pl-0 pr-1 pb-1 d-flex"><div class="flex-fill row mx-0 result-mcontainer p-1 align-items-center border rounded-lg border-dark"><div class="d-flex left col-3 col-xl-2 justify-content-end px-0">${num}位</div><div class="d-flex right col-9 col-xl-10 pl-1 pr-0 justify-content-center"><div class="row mx-0"><div class="pl-1 pr-0 d-flex col-12 align-items-center text-break text-center" title="${charTooltip}">${charName}</div></div></div></div></div>`;
	}
	
	return otpt;
  }
  const timeStr = `This sorter was completed on ${new Date(timestamp + timeTaken).toString()} and took ${msToReadableTime(timeTaken)}. <a href="${location.protocol}//${sorterURL}">Do another sorter?</a>`;
  
  let rankNum = 1;
  let tiedRankNum = 1;
  let imageDisplay = imageNum;
  let imageComparator = imageNum;
  let finotpt = ``;
  
  const finalSortedIndexes = sortedIndexList[0].slice(0);
  const resultTable = document.querySelector('.results');
  const timeElem = document.querySelector('.time.taken');
  
  resultTable.innerHTML = '';
  timeElem.innerHTML = timeStr;
  
  
  const charCount = characterDataToSort.length;
  characterDataToSort.forEach((val, idx) => {
    const characterIndex = finalSortedIndexes[idx];
    const character = characterDataToSort[characterIndex];
    if (imageDisplay-- > 0) 
    {
	  //console.log(rankNum);
	  if(rankNum === 1)
	  {
		resultTable.insertAdjacentHTML('beforeend', kami(character, rankNum));
	  }
      else
	  {
		if((rankNum-1) % 3 === 1)
		{
		  finotpt = `<div class="col-12"><div class="row">`;
		}
		finotpt += imgRes(character, rankNum);
		if(charCount === rankNum && ((rankNum-1) % 3 === 1 || (rankNum-1) % 3 === 2))
		{
		  resultTable.insertAdjacentHTML('beforeend', finotpt);
		}
		if((rankNum-1) % 3 === 0)
		{
		  finotpt += `</div></div>`;
		  resultTable.insertAdjacentHTML('beforeend', finotpt);
		}
		//resultTable.insertAdjacentHTML('beforeend', imgRes(character, rankNum));
	  }
    } 
    else 
	{
      resultTable.insertAdjacentHTML('beforeend', res(character, rankNum));
    }   
    finalCharacters.push({ rank: rankNum, name: character.name });

    if (idx < characterDataToSort.length - 1) 
	{
      if (tiedDataList[characterIndex] === finalSortedIndexes[idx + 1]) 
	  {
        tiedRankNum++;            // Indicates how many people are tied at the same rank.
      } 
	  else 
	  {
	    rankNum += tiedRankNum;   // Add it to the actual ranking, then reset it.
        tiedRankNum = 1;          // The default value is 1, so it increments as normal if no ties.
      }
    }
  });
  /*
  const header = '<div class="result head"><div class="left">Order</div><div class="right">Name</div></div>';
  const timeStr = `This sorter was completed on ${new Date(timestamp + timeTaken).toString()} and took ${msToReadableTime(timeTaken)}. <a href="${location.protocol}//${sorterURL}">Do another sorter?</a>`;
  const imgRes = (char, num) => {
    const charName = reduceTextWidth(char.name, 'Arial 12px', 160);
    const charTooltip = char.name !== charName ? char.name : '';
    return `<div class="result image"><div class="left"><span>${num}</span></div><div class="right"><img src="${char.img}"><div><span title="${charTooltip}">${charName}</span></div></div></div>`;
  }
  const res = (char, num) => {
    const charName = reduceTextWidth(char.name, 'Arial 12px', 160);
    const charTooltip = char.name !== charName ? char.name : '';
    return `<div class="result"><div class="left">${num}</div><div class="right"><span title="${charTooltip}">${charName}</span></div></div>`;
  }

  let rankNum       = 1;
  let tiedRankNum   = 1;
  let imageDisplay  = imageNum;

  const finalSortedIndexes = sortedIndexList[0].slice(0);
  const resultTable = document.querySelector('.results');
  const timeElem = document.querySelector('.time.taken');

  resultTable.innerHTML = header;
  timeElem.innerHTML = timeStr;

  characterDataToSort.forEach((val, idx) => {
    const characterIndex = finalSortedIndexes[idx];
    const character = characterDataToSort[characterIndex];
    if (imageDisplay-- > 0) {
      resultTable.insertAdjacentHTML('beforeend', imgRes(character, rankNum));
    } else {
      resultTable.insertAdjacentHTML('beforeend', res(character, rankNum));
    }
    finalCharacters.push({ rank: rankNum, name: character.name });

    if (idx < characterDataToSort.length - 1) {
      if (tiedDataList[characterIndex] === finalSortedIndexes[idx + 1]) {
        tiedRankNum++;            // Indicates how many people are tied at the same rank.
      } else {
        rankNum += tiedRankNum;   // Add it to the actual ranking, then reset it.
        tiedRankNum = 1;          // The default value is 1, so it increments as normal if no ties.
      }
    }
  });
  
  */
}

/** Undo previous choice. */
function undo() {
  if (timeTaken) { return; }

  choices = battleNo === battleNoPrev ? choices : choices.slice(0, -1);

  sortedIndexList = sortedIndexListPrev.slice(0);
  recordDataList  = recordDataListPrev.slice(0);
  parentIndexList = parentIndexListPrev.slice(0);
  tiedDataList    = tiedDataListPrev.slice(0);

  leftIndex       = leftIndexPrev;
  leftInnerIndex  = leftInnerIndexPrev;
  rightIndex      = rightIndexPrev;
  rightInnerIndex = rightInnerIndexPrev;
  battleNo        = battleNoPrev;
  sortedNo        = sortedNoPrev;
  pointer         = pointerPrev;

  display();
}

/** 
 * Save progress to local browser storage.
 * 
 * @param {'Autosave'|'Progress'|'Last Result'} saveType
*/
function saveProgress(saveType) {
  const saveData = generateSavedata();

  localStorage.setItem(`${sorterURL}_saveData`, saveData);
  localStorage.setItem(`${sorterURL}_saveType`, saveType);

  if (saveType !== 'Autosave') {
    const saveURL = `${location.protocol}//${sorterURL}?${saveData}`;
    const inProgressText = 'You may click Load Progress after this to resume, or use this URL.';
    const finishedText = 'You may use this URL to share this result, or click Load Last Result to view it again.';

    window.prompt(saveType === 'Last Result' ? finishedText : inProgressText, saveURL);
  }
}

/**
 * Load progress from local browser storage.
*/
function loadProgress() {
  const saveData = localStorage.getItem(`${sorterURL}_saveData`);

  if (saveData) decodeQuery(saveData);
}

/** 
 * Clear progress from local browser storage.
*/
function clearProgress() {
  storedSaveType = '';

  localStorage.removeItem(`${sorterURL}_saveData`);
  localStorage.removeItem(`${sorterURL}_saveType`);

  document.querySelectorAll('.starting.start.button').forEach(el => el.style['grid-row'] = 'span 6');
  
  $("#start-btn-load").addClass("d-none")
  //document.querySelectorAll('.starting.load.button').forEach(el => el.style.display = 'none');
}

function generateImage() {
  const timeFinished = timestamp + timeTaken;
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const filename = 'sort-' + (new Date(timeFinished - tzoffset)).toISOString().slice(0, -5).replace('T', '(') + ').png';

  html2canvas(document.querySelector('.results')).then(canvas => {
    const dataURL = canvas.toDataURL();
    const imgButton = document.querySelector('.finished.getimg.button');
    const resetButton = document.createElement('a');

    imgButton.removeEventListener('click', generateImage);
    imgButton.innerHTML = '';
    imgButton.insertAdjacentHTML('beforeend', `<a href="${dataURL}" download="${filename}">Download Image</a>`);

    resetButton.insertAdjacentText('beforeend', 'Reset');
    resetButton.addEventListener('click', (event) => {
      imgButton.addEventListener('click', generateImage);
      imgButton.innerHTML = 'Generate Image';
      event.stopPropagation();
    });
    imgButton.insertAdjacentElement('beforeend', resetButton);
  });
}

function generateTextList() {
  const data = finalCharacters.reduce((str, char) => {
    str += `${char.rank}. ${char.name}<br>`;
    return str;
  }, '');
  const oWindow = window.open("", "", "height=640,width=480");
  oWindow.document.write(data);
}

function generateSavedata() {
  const saveData = `${timeError?'|':''}${timestamp}|${timeTaken}|${choices}|${optStr}${suboptStr}`;
  return LZString.compressToEncodedURIComponent(saveData);
}

/** Retrieve latest character data and options from dataset. */
function setLatestDataset() {
  /** Set some defaults. */
  timestamp = 0;
  timeTaken = 0;
  choices   = '';

  const latestDateIndex = Object.keys(dataSet)
    .map(date => new Date(date))
    .reduce((latestDateIndex, currentDate, currentIndex, array) => {
      return currentDate > array[latestDateIndex] ? currentIndex : latestDateIndex;
    }, 0);
  currentVersion = Object.keys(dataSet)[latestDateIndex];

  characterData = dataSet[currentVersion].characterData;
  options = dataSet[currentVersion].options;

  populateOptions();
}

/** Populate option list. */
function populateOptions() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip, checked = true, disabled = false) => {
    return `<div class="col-6 col-md-4 col-xl-3"><label title="${tooltip?tooltip:name}"><input id="cb-${id}" name="${id.slice(0, 6)}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''} > ${name}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip, checked = true) => {
    return `<div class="col-12 large option text-center"><label title="${tooltip?tooltip:name}"><input id="cbgroup-${id}" name="rb" type="radio" ${checked?'checked':''}> ${name}</label></div>`;
  };

  /** Clear out any previous options. */
  optList.innerHTML = '';

  /** Insert sorter options and set grouped option behavior. */
  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.key, opt.tooltip, opt.checked));
      opt.sub.forEach((subopt, subindex) => {
        optList.insertAdjacentHTML('beforeend', optInsert(subopt.name, `${opt.key}-${subindex}`, subopt.tooltip, subopt.checked, opt.checked === false));
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');

    const groupbox = document.getElementById(`cbgroup-${opt.key}`);
	  const groups = document.getElementsByName(`groups`);
	  const single = document.getElementsByName(`single`);
		const sembed = document.getElementsByName(`sembed`);
	  const indivd = document.getElementsByName(`indivd`);
	  groupbox.addEventListener('click', () => {
		  
		if(document.getElementById(`cbgroup-groups`).checked)
		{
		  //test code
		  groups.forEach(input => input.disabled = false);
			sembed.forEach(input => input.disabled = true);
		  single.forEach(input => input.disabled = true);
		  indivd.forEach(input => input.disabled = true);
		}
		else if(document.getElementById(`cbgroup-single`).checked)
		{
		  //document.getElementsByName(`single`).disabled = false;
		  //document.getElementsByName(`groups`).disabled = true;
		  
		  groups.forEach(input => input.disabled = true);
			sembed.forEach(input => input.disabled = true);
		  single.forEach(input => input.disabled = false);
		  indivd.forEach(input => input.disabled = true);
		}
		else if(document.getElementById(`cbgroup-sembed`).checked)
		{
		  groups.forEach(input => input.disabled = true);
			sembed.forEach(input => input.disabled = false);
		  single.forEach(input => input.disabled = true);
		  indivd.forEach(input => input.disabled = true);
		}
		else if(document.getElementById(`cbgroup-indivd`).checked)
		{
		  //document.getElementsByName(`single`).disabled = false;
		  //document.getElementsByName(`groups`).disabled = true;
		  
		  groups.forEach(input => input.disabled = true);
			sembed.forEach(input => input.disabled = true);
		  single.forEach(input => input.disabled = true);
		  indivd.forEach(input => input.disabled = false);
		}
		/*
		if(groupbox.id === document.getElementById(`cbgroup-groups`).id)
		{
		  console.log("YES");
		  opt.sub.forEach((subopt, subindex) => {
          document.getElementById(`cb-groups-${subindex}`).disabled = !groupbox.checked;
		  document.getElementById(`cb-groups-${subindex}`).checked = false;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${subindex}`).checked = true; }
          
		  })
		}
		else
		{
		  console.log("NO");
		  opt.sub.forEach((subopt, subindex) => {
          document.getElementById(`cb-single-${subindex}`).disabled = !groupbox.checked;})
		}
		console.log(groupbox.id);
		console.log("the id of groups is " + document.getElementById(`cbgroup-groups`).id);
		console.log("the id of singles is " + document.getElementById(`cbgroup-single`).id);
        */
      });
	  
	  
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.key, opt.tooltip, opt.checked));
    }
  });
}

/**
 * Decodes compressed shareable link query string.
 * @param {string} queryString
 */
function decodeQuery(queryString = window.location.search.slice(1)) {
  let successfulLoad;

  try {
    /** 
     * Retrieve data from compressed string. 
     * @type {string[]}
     */
    const decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|');
    if (!decoded[0]) {
      decoded.splice(0, 1);
      timeError = true;
    }

    timestamp = Number(decoded.splice(0, 1)[0]);
    timeTaken = Number(decoded.splice(0, 1)[0]);
    choices   = decoded.splice(0, 1)[0];

    const optDecoded    = decoded.splice(0, 1)[0];
    const suboptDecoded = decoded.slice(0);

    /** 
     * Get latest data set version from before the timestamp.
     * If timestamp is before or after any of the datasets, get the closest one.
     * If timestamp is between any of the datasets, get the one in the past, but if timeError is set, get the one in the future.
     */
    const seedDate = { str: timestamp, val: new Date(timestamp) };
    const dateMap = Object.keys(dataSet)
      .map(date => {
        return { str: date, val: new Date(date) };
      })
    const beforeDateIndex = dateMap
      .reduce((prevIndex, currDate, currIndex) => {
        return currDate.val < seedDate.val ? currIndex : prevIndex;
      }, -1);
    const afterDateIndex = dateMap.findIndex(date => date.val > seedDate.val);
    
    if (beforeDateIndex === -1) {
      currentVersion = dateMap[afterDateIndex].str;
    } else if (afterDateIndex === -1) {
      currentVersion = dateMap[beforeDateIndex].str;
    } else {
      currentVersion = dateMap[timeError ? afterDateIndex : beforeDateIndex].str;
    }

    options = dataSet[currentVersion].options;
    characterData = dataSet[currentVersion].characterData;

    /** Populate option list and decode options selected. */
    populateOptions();

    let suboptDecodedIndex = 0;
    options.forEach((opt, index) => {
      if ('sub' in opt) {
        const optIsTrue = optDecoded[index] === '1';
        document.getElementById(`cbgroup-${opt.key}`).checked = optIsTrue;
        opt.sub.forEach((subopt, subindex) => {
          const subIsTrue = optIsTrue ? suboptDecoded[suboptDecodedIndex][subindex] === '1' : true;
          document.getElementById(`cb-${opt.key}-${subindex}`).checked = subIsTrue;
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = optIsTrue;
        });
        suboptDecodedIndex = suboptDecodedIndex + optIsTrue ? 1 : 0;
      } else { document.getElementById(`cb-${opt.key}`).checked = optDecoded[index] === '1'; }
    });

    successfulLoad = true;
  } catch (err) {
    console.error(`Error loading shareable link: ${err}`);
    setLatestDataset(); // Restore to default function if loading link does not work.
  }

  if (successfulLoad) { start(); }
}

/** 
 * Preloads images in the filtered character data and converts to base64 representation.
*/
function preloadImages() {
  const totalLength = characterDataToSort.length;
  let imagesLoaded = 0;

  const loadImage = (src, idx) => {
      return new Promise((resolve, reject) => {
          const img = new Image();

          img.crossOrigin = 'Anonymous';
          img.onload = () => {
            setImageToData(img, idx);
            resolve(img);
          };
          img.onerror = img.onabort = () => reject(src);
          if ( img.complete || img.complete === undefined ) {
            img.src = src;
          }
          img.src = src;
      });
  };

  const setImageToData = (img, idx) => {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    canvas.getContext('2d').drawImage(img, 0, 0);
    characterDataToSort[idx].img = canvas.toDataURL();
    progressBar(`Loading Image ${++imagesLoaded}`, Math.floor(imagesLoaded * 100 / totalLength));
  };

  const promises = characterDataToSort.map((char, idx) => loadImage(imageRoot + char.img, idx));
  return Promise.all(promises);
}

/**
 * Returns a readable time string from milliseconds.
 * 
 * @param {number} milliseconds
 */
function msToReadableTime (milliseconds) {
  let t = Math.floor(milliseconds/1000);
  const years = Math.floor(t / 31536000);
  t = t - (years * 31536000);
  const months = Math.floor(t / 2592000);
  t = t - (months * 2592000);
  const days = Math.floor(t / 86400);
  t = t - (days * 86400);
  const hours = Math.floor(t / 3600);
  t = t - (hours * 3600);
  const minutes = Math.floor(t / 60);
  t = t - (minutes * 60);
  const content = [];
	if (years) content.push(years + " year" + (years > 1 ? "s" : ""));
	if (months) content.push(months + " month" + (months > 1 ? "s" : ""));
	if (days) content.push(days + " day" + (days > 1 ? "s" : ""));
	if (hours) content.push(hours + " hour"  + (hours > 1 ? "s" : ""));
	if (minutes) content.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
	if (t) content.push(t + " second" + (t > 1 ? "s" : ""));
  return content.slice(0,3).join(', ');
}

/**
 * Reduces text to a certain rendered width.
 *
 * @param {string} text Text to reduce.
 * @param {string} font Font applied to text. Example "12px Arial".
 * @param {number} width Width of desired width in px.
 */
function reduceTextWidth(text, font, width) {
  const canvas = reduceTextWidth.canvas || (reduceTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  if (context.measureText(text).width < width * 0.8) {
    return text;
  } else {
    let reducedText = text;
    while (context.measureText(reducedText).width + context.measureText('..').width > width * 0.8) {
      reducedText = reducedText.slice(0, -1);
    }
    return reducedText + '..';
  }
}

window.onload = init;
