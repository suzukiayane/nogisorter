dataSetVersion = "2020-03-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "4th generation", key: "4gen" },
      { name: "1st gen graduates", key: "1grad", checked: false },
      { name: "2nd gen graduates", key: "2grad", checked: false },
      { name: "Imoutozaka", key: "imouto", checked: false },
      { name: "Sayuringo gundan", key: "sayuringogun", checked: false },
      { name: "Manatsu-san respect gundan", key: "manatangun", checked: false },
      { name: "Wakasama gundan", key: "wakagun", checked: false },
      { name: "Inumen", key: "inumen", checked: false },
      { name: "Suika", key: "suika", checked: false },
      { name: "Tulip", key: "tulip", checked: false },
      { name: "Pudding kai", key: "purin", checked: false } 
    ]
  }
  /*,
	{
		name: "Filter by Single",
		key: "single",
		tooltip: "Select this to restrict to sort Singles.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "singles" }
		]
	},
	{
		name: "Filter by Single (embed BETA)",
		key: "sembed",
		tooltip: "Select this to restric to sort Singles with song samples.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "sembeds" }
		]
	}
	*/
	/*,
  {
    name: "Filter by Year/Single",
    key: "single",
    tooltip: "Check this to restrict to certain singles.",
    checked: false,
    sub: 
		[
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "4th generation", key: "4gen" },
    ]
  },
  {
    name: "Filter by Member",
    key: "indivd",
    tooltip: "Check this to restrict to certain members.",
    checked: false,
    sub: [
      { name: "Suzuki Ayane", key: "ayamine" }
    ]
  }*/
];

dataSet[dataSetVersion].characterData = [
  //1st gens
  {
    name: "Akimoto Manatsu",
    img: "TtlZWrj.jpg",
    opts: {
      groups: ["1gen", "manatangun"],
	  single: ["1gen", "manatangun"]
    },
		song: ""
  },
  {
    name: "Higuchi Hina",
    img: "lVDnfr8.jpg",
    opts: {
      groups: ["1gen"],
	  single: ["1gen"]
    },
		song: ""
  },
  {
    name: "Hoshino Minami",
    img: "HQv084f.jpg",
    opts: {
      groups: ["1gen"]
    },
		song: ""
  },
  {
    name: "Ikuta Erika",
    img: "BDUhPQT.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    },
		song: ""
  },
  {
    name: "Matsumura Sayuri",
    img: "wQjdmCX.jpg",
    opts: {
      groups: ["1gen", "sayuringogun"]
    },
		song: ""
  },
  {
    name: "Saito Asuka",
    img: "ta5SDZT.jpg",
    opts: {
      groups: ["1gen"]
    },
		song: ""
  },
  {
    name: "Takayama Kazumi",
    img: "nieq7Rz.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    },
		song: ""
  },
  {
    name: "Wada Maaya",
    img: "yF2YTVz.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    },
		song: ""
  },
  
  //1st gen grads
  {
    name: "Eto Misa",
    img: "VAlpytj.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Fukagawa Mai",
    img: "jwUK01F.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Hashimoto Nanami",
    img: "XVjK8Iu.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Ikoma Rina",
    img: "TqdTkM5.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    },
		song: ""
  },
  {
    name: "Inoue Sayuri",
    img: "kMYYkI6.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    },
		song: ""
  },
  {
    name: "Ito Marika",
    img: "QzciyRX.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    },
		song: ""
  },
  {
    name: "Kawago Hina",
    img: "FXMZF2Q.jpg",
    opts: {
      groups: ["1grad", "suika"]
    },
		song: ""
  },
  {
    name: "Kawamura Mahiro",
    img: "3jITX02.jpg",
    opts: {
      groups: ["1grad", "tulip"]
    },
		song: ""
  },
  {
    name: "Nakada Kana",
    img: "0C0K7WA.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Nagashima Seira",
    img: "OuVh5y6.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Nakamoto Himeka",
    img: "PfEJwzY.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Nishino Nanase",
    img: "S4n47VU.jpg",
    opts: {
      groups: ["1grad", "suika"]
    },
		song: ""
  },
  {
    name: "Noujo Ami",
    img: "31o61w4.jpg",
    opts: {
      groups: ["1grad", "tulip"]
    },
		song: ""
  },
  {
    name: "Saito Chiharu",
    img: "xMU6DsS.jpg",
    opts: {
      groups: ["1grad", "tulip"]
    },
		song: ""
  },
  {
    name: "Saito Yuri",
    img: "UF1G85X.jpg",
    opts: {
      groups: ["1grad", "inumen", "suika"]
    },
		song: ""
  },
  {
    name: "Sakurai Reika",
    img: "8MVdQQG.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    },
		song: ""
  },
  {
    name: "Shiraishi Mai",
    img: "8O7o6HJ.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Wakatsuki Yumi",
    img: "XngW8uI.jpg",
    opts: {
      groups: ["1grad", "wakagun", "inumen"]
    },
		song: ""
  },
  
  //non famous
  {
    name: "Ando Mikumo",
    img: "BpAiQ72.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Kashiwa Yukina",
    img: "sZfUQOX.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Miyazawa Seira",
    img: "NQmZpWa.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Hatanaka Seira",
    img: "MgJDSi6.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Ichiki Rena",
    img: "vVAsvYX.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Ito Nene",
    img: "EfzITGW.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Iwase Yumiko",
    img: "cKNqccu.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Yamamoto Honoka",
    img: "ncGp7VD.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Yamato Rina",
    img: "IN0Ac2b.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  {
    name: "Yoshimoto Ayaka",
    img: "v0Ej2Js.jpg",
    opts: {
      groups: ["1grad"]
    },
		song: ""
  },
  
  //2nd gen
  {
    name: "Hori Miona",
    img: "3lChyuh.jpg",
    opts: {
      groups: ["2gen", "purin"]
    },
		song: ""
  },
  {
    name: "Ito Junna",
    img: "lfbwyzB.jpg",
    opts: {
      groups: ["2gen", "suika"]
    },
		song: ""
  },
  {
    name: "Kitano Hinako",
    img: "hWbd1xn.jpg",
    opts: {
      groups: ["2gen"]
    },
		song: ""
  },
  {
    name: "Shinuchi Mai",
    img: "wMg7LYj.jpg",
    opts: {
      groups: ["2gen", "inumen"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "iPVf6Ba.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"],
	  indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Terada Ranze",
    img: "69THMMx.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    },
		song: ""
  },
  {
    name: "Watanabe Miria",
    img: "OUmN5Zh.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    },
		song: ""
  },
  {
    name: "Yamazaki Rena",
    img: "4ijKWKG.jpg",
    opts: {
      groups: ["2gen"]
    },
		song: ""
  },
  
  //2nd grad
  {
    name: "Ito Karin",
    img: "u2NSKBe.jpg",
    opts: {
      groups: ["2grad", "sayuringogun", "suika"]
    },
		song: ""
  },
  {
    name: "Nishikawa Nanami",
    img: "eOLm5DR.jpg",
    opts: {
      groups: ["2grad"]
    },
		song: ""
  },
  {
    name: "Sagara Iori",
    img: "GbOs9MK.jpg",
    opts: {
      groups: ["2grad", "manatangun"]
    },
		song: ""
  },
  {
    name: "Sasaki Kotoko",
    img: "vFlsdaZ.jpg",
    opts: {
      groups: ["2grad", "sayuringogun"]
    },
		song: ""
  },
  {
    name: "Yada Risako",
    img: "X4dFbzD.jpg",
    opts: {
      groups: ["2grad"]
    },
		song: ""
  },
  {
    name: "Yonetoku Kyoka",
    img: "lDoXZ8u.jpg",
    opts: {
      groups: ["2grad"]
    },
		song: ""
  },
  
  
  {
    name: "Ito Riria",
    img: "TD4crPl.jpg",
    opts: {
      groups: ["3gen"]
    },
		song: ""
  },
  {
    name: "Iwamoto Renka",
    img: "9uxbPVo.jpg",
    opts: {
      groups: ["3gen"]
    },
		song: ""
  },
  {
    name: "Kubo Shiori",
    img: "V1GzS1K.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    },
		song: ""
  },
  {
    name: "Mukai Hazuki",
    img: "2y1qSM0.jpg",
    opts: {
      groups: ["3gen"]
    },
		song: ""
  },
  {
    name: "Nakamura Reno",
    img: "jUO2LqQ.jpg",
    opts: {
      groups: ["3gen"]
    },
		song: ""
  },
  {
    name: "Ozono Momoko",
    img: "aUpgcQY.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    },
		song: ""
  },
  {
    name: "Sakaguchi Tamami",
    img: "WQSsIiD.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    },
		song: ""
  },
  {
    name: "Sato Kaede",
    img: "SPLiKbx.jpg",
    opts: {
      groups: ["3gen"]
    },
		song: ""
  },
  {
    name: "Umezawa Minami",
    img: "XRCGXke.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    },
		song: ""
  },
  {
    name: "Yamashita Mizuki",
    img: "nL6M36p.jpg",
    opts: {
      groups: ["3gen", "imouto", "wakagun"]
    },
		song: ""
  },
  {
    name: "Yoda Yuki",
    img: "GOzlrBU.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    },
		song: ""
  },
  {
    name: "Yoshida Ayano Christie",
    img: "uF2XxAD.jpg",
    opts: {
      groups: ["3gen"]
    },
		song: ""
  },
  
  //4th gen
  {
    name: "Endo Sakura",
    img: "n80nEcf.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Hayakawa Seira",
    img: "hhlwXpq.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },  
  {
    name: "Kakehashi Sayaka",
    img: "bdEk1dZ.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },  
  {
    name: "Kaki Haruka",
    img: "KBzmo6T.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },  
  {
    name: "Kanagawa Saya",
    img: "fDg20L2.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },  
  {
    name: "Kitagawa Yuri",
    img: "VRvB2BN.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },  
  {
    name: "Seimiya Rei",
    img: "4xpHqmz.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },  
  {
    name: "Shibata Yuna",
    img: "gZ8AXqJ.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Tamura Mayu",
    img: "DBpNl01.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Tsutsui Ayame",
    img: "K0PQixs.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Yakubo Mio",
    img: "uP3u6OR.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  
  //4.5 gen
  {
    name: "Kuromi Haruka",
    img: "0X4Tpi5.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Matsuo Miyu",
    img: "j0GQ7QC.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Yumiki Nao",
    img: "OhmMLbX.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Sato Rika",
    img: "wvAV2Ui.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  {
    name: "Hayashi Runa",
    img: "aegBOCj.jpg",
    opts: {
      groups: ["4gen"]
    },
		song: ""
  },
  
  
  
  
  //Individual members
  {
    name: "Suzuki Ayane2",
    img: "2Hx1i10.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "YRrTfD9.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "8Fhbcd0.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "e9sQMM6.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "ps4qEE8.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "wHxGJrM.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "e0Urs5u.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "7ypaZQc.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "3hcOBbt.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "4u3bPPw.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "5ZOL3kC.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "wrFi2Zv.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  },
  {
    name: "Suzuki Ayane",
    img: "rVdA5W7.jpg",
    opts: {
      indivd: ["ayamine"]
    },
		song: ""
  }
  /*,
	
	
	//Singles
	{
		name: "Guruguru Curtain",
		img: "rAaa7xP.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/543oTwiyGMmg7QIuH1Qifu"
	},
	{
		name: "Oide Shampoo",
		img: "C6iiatl.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/5gBUX1sJEhYeCO545xbbno"
	},
	{
		name: "Hashire! Bicycle",
		img: "951yukh.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/4L8q1KygopytvrdbMDmJLh"
	},
	{
		name: "Seifuku no Mannequin",
		img: "68lHzrH.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/4mT4ZR1TegWQkMz5V6fwPL"
	},
	{
		name: "Kimi no na wa Kibou",
		img: "AGnPHRl.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/4eBg8JfwC74tb43XitChtO"
	},
	{
		name: "Girl's Rule",
		img: "xPQ22HW.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1zhFnRUyOpt7AgRbJdAsZu"
	},
	{
		name: "Barrette",
		img: "StS9Uf9.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/0GNABrWxvsQEHoTWcpkF1l"
	},
	{
		name: "Kidzuitara Kataomoi",
		img: "786GHlZ.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1ruWEof4ofOYleQht85sQG"
	},
	{
		name: "Natsu no Free & Easy",
		img: "2PL8ATa.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1afi88irg6fr0kpBPpls53"
	},
	{
		name: "Nandome no Aozora ka?",
		img: "FQx1NCU.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/52HCpF8FBMEx5ChRXC4sZV"
	},
	{
		name: "Inochi wa Utsukushii",
		img: "2T5YF5K.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1YDXQnj1WQ6cOSeTMsqJZB"
	},
	{
		name: "Taiyou Knock",
		img: "PIDATl2.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/5oTzIH1l7kmXtC5xsy3s6W"
	},
	{
		name: "Ima, Hanashitai dareka ga iru",
		img: "hgYU6Ia.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/2697T8LStRvfSRJCCM7agG"
	},
	{
		name: "Harujion ga Sakukoro",
		img: "RzVdGIz.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/5xleb2pGwKEoKr6MzdRjyu"
	},
	{
		name: "Hadashi de Summer",
		img: "mEuDrY5.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1JlGxTflJnzRO6pUoHTE6B"
	},
	{
		name: "Sayonara no Imi",
		img: "VcWmcvE.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1Nzv7FjiYpCMNahBXGk030"
	},
	{
		name: "Influencer",
		img: "I3o5wYn.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/1FWVP6f31bLlm57GLmmszH"
	},
	{
		name: "Nigemizu",
		img: "LPLiL2C.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/5vN9lmPw0I8pTpWuTc1okR"
	},
	{
		name: "Itsuka dekirukara kyou dekiru",
		img: "wprkwjU.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/2EPrUKVFySW5edCkIuN5Y3"
	},
	{
		name: "Synchronicity",
		img: "bmE92GX.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/77m6PiiPEQGUxjNELzMyiF"
	},
	{
		name: "Jikochuu de Yukou!",
		img: "zFq1IOP.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/3YjZJjF5C1ob707uyxvkb9"
	},
	{
		name: "Kaerimichi wa Toomawari Shitaku naru",
		img: "J0c4bdK.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/08XBLK5BlN5ZBLukMO49jy"
	},
	{
		name: "Sing Out!",
		img: "posAZ42.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/2RUT8yZJklRTMV07TmaxIb"
	},
	{
		name: "Yoake made Tsuyogaranakutemo ii",
		img: "x4OCRRp.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/0WU3YULzh5YTXzONIaqzxO"
	},
	{
		name: "Shiawase no Hogoshoku",
		img: "fmld22j.jpg",
		opts:
		{
			single: ["singles"],
			sembed: ["sembeds"]
		},
		song: "https://open.spotify.com/embed/track/7xSuMjj8NwbT2nWmukOTUG"
	}*/
]
