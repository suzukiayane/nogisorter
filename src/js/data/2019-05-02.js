dataSetVersion = "2019-04-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
      { name: "1st generation", key: "1gen", checked: false },
      { name: "2nd generation", key: "2gen", checked: false },
      { name: "3rd generation", key: "3gen", checked: false },
      { name: "4th generation", key: "4gen", checked: false },
      { name: "1st gen graduates", key: "1grad", checked: false },
      { name: "2nd gen graduates", key: "2grad", checked: false },
      { name: "Imoutozaka", key: "imouto", checked: false },
      { name: "Sayuringo corps", key: "sayuringogun" },
      { name: "Manatsu respect corps", key: "manatangun" },
      { name: "Wakasama corps", key: "wakagun", checked: false },
      { name: "Inumen", key: "inumen", checked: false },
      { name: "Suika", key: "suika", checked: false },
      { name: "Tulip", key: "tulip", checked: false },
      { name: "Pudding club", key: "purin" } 
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  //1st gens
  {
    name: "Akimoto Manatsu",
    img: "0EuFyTi.jpg",
    opts: {
      groups: ["1gen", "manatangun"]
    }
  },
  {
    name: "Higuchi Hina",
    img: "TbnU1JE.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Hoshino Minami",
    img: "BLvQyCu.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Ikuta Erika",
    img: "SVxla0t.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Inoue Sayuri",
    img: "jfryYu6.jpg",
    opts: {
      groups: ["1gen", "inumen"]
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "hrMb1qV.jpg",
    opts: {
      groups: ["1gen", "sayuringogun"]
    }
  },
  {
    name: "Nakada Kana",
    img: "MGJdUTP.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Saito Asuka",
    img: "IMhGwd3.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Saito Yuri",
    img: "UF1G85X.jpg",
    opts: {
      groups: ["1gen", "inumen", "suika"]
    }
  },
  {
    name: "Sakurai Reika",
    img: "8MVdQQG.jpg",
    opts: {
      groups: ["1gen", "inumen"]
    }
  },
  {
    name: "Shiraishi Mai",
    img: "79kDfgb.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Takayama Kazumi",
    img: "4xhisZC.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Wada Maaya",
    img: "40H7WRa.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  
  //1st gen grads
  {
    name: "Eto Misa",
    img: "VAlpytj.jpg",
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
    img: "7OAfCRu.jpg",
    opts: {
      groups: ["2gen", "purin"]
    }
  },
  {
    name: "Ito Junna",
    img: "tjS3l9J.jpg",
    opts: {
      groups: ["2gen", "suika"]
    }
  },
  {
    name: "Ito Karin",
    img: "u2NSKBe.jpg",
    opts: {
      groups: ["2gen", "sayuringogun", "suika"]
    }
  },
  {
    name: "Kitano Hinako",
    img: "caDO0DV.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  {
    name: "Sasaki Kotoko",
    img: "aMzIOt3.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Shinuchi Mai",
    img: "cYt8RDV.jpg",
    opts: {
      groups: ["2gen", "inumen"]
    }
  },
  {
    name: "Suzuki Ayane",
    img: "NsYRVDv.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Terada Ranze",
    img: "QIQ4tpT.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Watanabe Miria",
    img: "3eeuDT4.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Yamazaki Rena",
    img: "jqRbH1q.jpg",
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
    img: "wUeqVmk.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Iwamoto Renka",
    img: "s5P0DDI.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Kubo Shiori",
    img: "UaM5miC.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Mukai Hazuki",
    img: "rEPzZCo.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Nakamura Reno",
    img: "0thOs4l.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Ozono Momoko",
    img: "RsHln6O.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "awW4819.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Sato Kaede",
    img: "0IUa1zI.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Umezawa Minami",
    img: "Zi9xlpY.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Yamashita Mizuki",
    img: "gfKqOpK.jpg",
    opts: {
      groups: ["3gen", "imouto", "wakagun"]
    }
  },
  {
    name: "Yoda Yuki",
    img: "QqC3jfI.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Yoshida Ayano Christie",
    img: "dmViEFt.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  
  
  {
    name: "Endo Sakura",
    img: "RbRVLBp.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Hayakawa Seira",
    img: "fROSV1b.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kakehashi Sayaka",
    img: "CoVc22e.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kaki Haruka",
    img: "eRL9NMm.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kanagawa Saya",
    img: "PLgQHpf.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kitagawa Yuri",
    img: "414Nw28.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Seimiya Rei",
    img: "4EvWeh3.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Shibata Yuna",
    img: "YAimbhx.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Tamura Mayu",
    img: "t8pWB5h.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Tsutsui Ayame",
    img: "c4xQV4y.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Yakubo Mio",
    img: "f7te6eA.jpg",
    opts: {
      groups: ["4gen"]
    }
  }
]
