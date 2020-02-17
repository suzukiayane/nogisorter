dataSetVersion = "2018-10-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "1st gen graduates", key: "1grad" },
      { name: "2nd gen graduates", key: "2grad" },
      { name: "Imoutozaka", key: "imouto" },
      { name: "Sayuringo gundan", key: "sayuringogun" },
      { name: "Manatsu-san respect gundan", key: "manatangun" },
      { name: "Wakasama gundan", key: "wakagun" },
      { name: "Inumen", key: "inumen" },
      { name: "Suika", key: "suika" },
      { name: "Tulip", key: "tulip" },
      { name: "Pudding kai", key: "purin" } 
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Akimoto Manatsu",
    img: "jZpgTgV.jpg",
    opts: {
      groups: ["1gen", "manatangun"]
    }
  },
  {
    name: "Eto Misa",
    img: "WboSXmU.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Higuchi Hina",
    img: "UrH4iX0.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Hoshino Minami",
    img: "fmB2Maj.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Ikuta Erika",
    img: "FAAtJHY.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Inoue Sayuri",
    img: "Aacfd2E.jpg",
    opts: {
      groups: ["1gen", "inumen"]
    }
  },
  {
    name: "Kawago Hina",
    img: "ftLibM3.jpg",
    opts: {
      groups: ["1gen", "suika"]
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "VxhIk89.jpg",
    opts: {
      groups: ["1gen", "sayuringogun"]
    }
  },
  {
    name: "Nakada Kana",
    img: "EJXV7bF.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Nishino Nanase",
    img: "VwwIscV.jpg",
    opts: {
      groups: ["1gen", "suika"]
    }
  },
  {
    name: "Noujo Ami",
    img: "jNLrqFl.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Saito Asuka",
    img: "XqGnBQH.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Saito Yuri",
    img: "HyMCxWj.jpg",
    opts: {
      groups: ["1gen", "inumen", "suika"]
    }
  },
  {
    name: "Sakurai Reika",
    img: "BHfXt8R.jpg",
    opts: {
      groups: ["1gen", "inumen"]
    }
  },
  {
    name: "Shiraishi Mai",
    img: "pSY23Fj.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Takayama Kazumi",
    img: "ZwhSQE0.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Wada Maaya",
    img: "BMSEBMX.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Wakatsuki Yumi",
    img: "ABtvQVC.jpg",
    opts: {
      groups: ["1gen", "wakagun", "inumen"]
    }
  },
  
  {
    name: "Fukagawa Mai",
    img: "jwUK01F.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Hashimoto Nanami",
    img: "XVjK8Iu.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Ikoma Rina",
    img: "TqdTkM5.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    }
  },
  {
    name: "Ito Marika",
    img: "QzciyRX.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    }
  },
  {
    name: "Kawamura Mahiro",
    img: "3jITX02.jpg",
    opts: {
      groups: ["1grad", "tulip"]
    }
  },
  {
    name: "Nagashima Seira",
    img: "OuVh5y6.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Nakamoto Himeka",
    img: "PfEJwzY.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Saito Chiharu",
    img: "xMU6DsS.jpg",
    opts: {
      groups: ["1grad", "tulip"]
    }
  },
  
  
  {
    name: "Ando Mikumo",
    img: "BpAiQ72.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Kashiwa Yukina",
    img: "sZfUQOX.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Miyazawa Seira",
    img: "NQmZpWa.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Hatanaka Seira",
    img: "MgJDSi6.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Ichiki Rena",
    img: "vVAsvYX.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Ito Nene",
    img: "EfzITGW.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Iwase Yumiko",
    img: "cKNqccu.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Yamamoto Honoka",
    img: "ncGp7VD.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Yamato Rina",
    img: "IN0Ac2b.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  {
    name: "Yoshimoto Ayaka",
    img: "v0Ej2Js.jpg",
    opts: {
      groups: ["1grad"]
    }
  },
  
  
  {
    name: "Hori Miona",
    img: "BfU8oAk.jpg",
    opts: {
      groups: ["2gen", "purin"]
    }
  },
  {
    name: "Ito Junna",
    img: "nTQLYyI.jpg",
    opts: {
      groups: ["2gen", "suika"]
    }
  },
  {
    name: "Ito Karin",
    img: "N4jsPHB.jpg",
    opts: {
      groups: ["2gen", "sayuringogun", "suika"]
    }
  },
  {
    name: "Kitano Hinako",
    img: "BisAWX4.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  {
    name: "Sasaki Kotoko",
    img: "wOaMkpb.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Shinuchi Mai",
    img: "NVZ53Lx.jpg",
    opts: {
      groups: ["2gen", "inumen"]
    }
  },
  {
    name: "Suzuki Ayane",
    img: "5ZOL3kC.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Terada Ranze",
    img: "9uRPjQB.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Watanabe Miria",
    img: "r0E3ymQ.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Yamazaki Rena",
    img: "ptZesR1.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  
  
  {
    name: "Nishikawa Nanami",
    img: "eOLm5DR.jpg",
    opts: {
      groups: ["2grad"]
    }
  },
  {
    name: "Sagara Iori",
    img: "GbOs9MK.jpg",
    opts: {
      groups: ["2grad", "manatangun"]
    }
  },
  {
    name: "Yada Risako",
    img: "X4dFbzD.jpg",
    opts: {
      groups: ["2grad"]
    }
  },
  {
    name: "Yonetoku Kyoka",
    img: "lDoXZ8u.jpg",
    opts: {
      groups: ["2grad"]
    }
  },
  
  
  {
    name: "Ito Riria",
    img: "f2RE6IK.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Iwamoto Renka",
    img: "QfSkgPO.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Kubo Shiori",
    img: "Y1H533G.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Mukai Hazuki",
    img: "M0QhX56.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Nakamura Reno",
    img: "RHZMKfo.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Ozono Momoko",
    img: "OsvqkZj.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "FEzZXx8.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Sato Kaede",
    img: "0ipKq6X.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Umezawa Minami",
    img: "FlCUMWU.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Yamashita Mizuki",
    img: "AmEx9lJ.jpg",
    opts: {
      groups: ["3gen", "imouto", "wakagun"]
    }
  },
  {
    name: "Yoda Yuki",
    img: "1asoaHh.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Yoshida Ayano Christie",
    img: "F7BYttA.jpg",
    opts: {
      groups: ["3gen"]
    }
  }
]
