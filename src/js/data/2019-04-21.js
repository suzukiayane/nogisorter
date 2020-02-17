dataSetVersion = "2019-04-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "1st gen graduates", key: "1grad" },
      { name: "2nd gen graduates", key: "2grad" },
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
];

dataSet[dataSetVersion].characterData = [
  //1st gens
  {
    name: "Akimoto Manatsu",
    img: "hBaA7oM.jpg",
    opts: {
      groups: ["1gen", "manatangun"]
    }
  },
  {
    name: "Higuchi Hina",
    img: "J2MVC2C.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Hoshino Minami",
    img: "cGg2dLk.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Ikuta Erika",
    img: "tmuwKAg.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Inoue Sayuri",
    img: "A8rEdFD.jpg",
    opts: {
      groups: ["1gen", "inumen"]
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "VUTog9x.jpg",
    opts: {
      groups: ["1gen", "sayuringogun"]
    }
  },
  {
    name: "Nakada Kana",
    img: "axiiZXd.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Saito Asuka",
    img: "2dM5lpA.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Saito Yuri",
    img: "fwv6Fms.jpg",
    opts: {
      groups: ["1gen", "inumen", "suika"]
    }
  },
  {
    name: "Sakurai Reika",
    img: "eVvmGub.jpg",
    opts: {
      groups: ["1gen", "inumen"]
    }
  },
  {
    name: "Shiraishi Mai",
    img: "KocyGo0.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Takayama Kazumi",
    img: "pjt1zd1.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Wada Maaya",
    img: "aFZLZR9.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  
  //1st gen grads
  {
    name: "Eto Misa",
    img: "PlnerRo.jpg",
    opts: {
      groups: ["1grad"]
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
    name: "Kawago Hina",
    img: "FXMZF2Q.jpg",
    opts: {
      groups: ["1grad", "suika"]
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
    name: "Nishino Nanase",
    img: "S4n47VU.jpg",
    opts: {
      groups: ["1grad", "suika"]
    }
  },
  {
    name: "Noujo Ami",
    img: "31o61w4.jpg",
    opts: {
      groups: ["1grad", "tulip"]
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
    name: "Wakatsuki Yumi",
    img: "XngW8uI.jpg",
    opts: {
      groups: ["1grad", "wakagun", "inumen"]
    }
  },
  
  //non famous
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
  
  //2nd gen
  {
    name: "Hori Miona",
    img: "ULaItGq.jpg",
    opts: {
      groups: ["2gen", "purin"]
    }
  },
  {
    name: "Ito Junna",
    img: "9B8B9Xo.jpg",
    opts: {
      groups: ["2gen", "suika"]
    }
  },
  {
    name: "Ito Karin",
    img: "obLRpfZ.jpg",
    opts: {
      groups: ["2gen", "sayuringogun", "suika"]
    }
  },
  {
    name: "Kitano Hinako",
    img: "VOlXSHd.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  {
    name: "Sasaki Kotoko",
    img: "6jtSMNg.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Shinuchi Mai",
    img: "C8U9BX8.jpg",
    opts: {
      groups: ["2gen", "inumen"]
    }
  },
  {
    name: "Suzuki Ayane",
    img: "wrFi2Zv.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Terada Ranze",
    img: "32aSco7.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Watanabe Miria",
    img: "YgSmY9l.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Yamazaki Rena",
    img: "hiYmjEw.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  
  //2nd grad
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
    img: "7StHYsW.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Iwamoto Renka",
    img: "vYYK5e4.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Kubo Shiori",
    img: "PVD1MDI.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Mukai Hazuki",
    img: "fZMxsAP.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Nakamura Reno",
    img: "CeaXrZr.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Ozono Momoko",
    img: "XJrt4if.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "FoudhxG.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Sato Kaede",
    img: "CqkIlCB.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Umezawa Minami",
    img: "cYITDk5.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Yamashita Mizuki",
    img: "MZwemaL.jpg",
    opts: {
      groups: ["3gen", "imouto", "wakagun"]
    }
  },
  {
    name: "Yoda Yuki",
    img: "cL0itVF.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Yoshida Ayano Christie",
    img: "lt7qc1F.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  
  
  {
    name: "Endo Sakura",
    img: "d3yVq7Y.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Hayakawa Seira",
    img: "92VknBK.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kakehashi Sayaka",
    img: "p6lxu1y.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kaki Haruka",
    img: "a9e8FUW.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kanagawa Saya",
    img: "zhwlgpX.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kitagawa Yuri",
    img: "1aXy7x3.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Seimiya Rei",
    img: "oPrqecg.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Shibata Yuna",
    img: "m99LtgZ.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Tamura Mayu",
    img: "2GudVhb.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Tsutsui Ayame",
    img: "DACDz54.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Yakubo Mio",
    img: "8f1M3iW.jpg",
    opts: {
      groups: ["4gen"]
    }
  }
]
