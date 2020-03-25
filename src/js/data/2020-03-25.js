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
];

dataSet[dataSetVersion].characterData = [
  //1st gens
  {
    name: "Akimoto Manatsu",
    img: "TtlZWrj.jpg",
    opts: {
      groups: ["1gen", "manatangun"]
    }
  },
  {
    name: "Higuchi Hina",
    img: "lVDnfr8.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Hoshino Minami",
    img: "HQv084f.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Ikuta Erika",
    img: "BDUhPQT.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "wQjdmCX.jpg",
    opts: {
      groups: ["1gen", "sayuringogun"]
    }
  },
  {
    name: "Nakada Kana",
    img: "0C0K7WA.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Saito Asuka",
    img: "ta5SDZT.jpg",
    opts: {
      groups: ["1gen"]
    }
  },
  {
    name: "Takayama Kazumi",
    img: "nieq7Rz.jpg",
    opts: {
      groups: ["1gen", "tulip"]
    }
  },
  {
    name: "Wada Maaya",
    img: "yF2YTVz.jpg",
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
    name: "Inoue Sayuri",
    img: "kMYYkI6.jpg",
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
    name: "Saito Yuri",
    img: "UF1G85X.jpg",
    opts: {
      groups: ["1grad", "inumen", "suika"]
    }
  },
  {
    name: "Sakurai Reika",
    img: "8MVdQQG.jpg",
    opts: {
      groups: ["1grad", "inumen"]
    }
  },
  {
    name: "Shiraishi Mai",
    img: "8O7o6HJ.jpg",
    opts: {
      groups: ["1grad"]
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
    img: "O6atJAI.jpg",
    opts: {
      groups: ["2gen", "purin"]
    }
  },
  {
    name: "Ito Junna",
    img: "51X2Qkz.jpg",
    opts: {
      groups: ["2gen", "suika"]
    }
  },
  {
    name: "Kitano Hinako",
    img: "2BnKBlk.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  {
    name: "Shinuchi Mai",
    img: "JWVIsbr.jpg",
    opts: {
      groups: ["2gen", "inumen"]
    }
  },
  {
    name: "Suzuki Ayane",
    img: "rVdA5W7.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Terada Ranze",
    img: "TXWGLST.jpg",
    opts: {
      groups: ["2gen", "sayuringogun"]
    }
  },
  {
    name: "Watanabe Miria",
    img: "9PyFtNF.jpg",
    opts: {
      groups: ["2gen", "manatangun", "purin"]
    }
  },
  {
    name: "Yamazaki Rena",
    img: "robJHJK.jpg",
    opts: {
      groups: ["2gen"]
    }
  },
  
  //2nd grad
  {
    name: "Ito Karin",
    img: "u2NSKBe.jpg",
    opts: {
      groups: ["2grad", "sayuringogun", "suika"]
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
    name: "Sasaki Kotoko",
    img: "EJbMlci.jpg",
    opts: {
      groups: ["2grad", "sayuringogun"]
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
    img: "in41XUa.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Iwamoto Renka",
    img: "KPFZEsd.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Kubo Shiori",
    img: "UFM9YLf.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Mukai Hazuki",
    img: "ixos4ZE.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Nakamura Reno",
    img: "ofjwKar.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Ozono Momoko",
    img: "Bwb2Ir4.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "7ebMhr2.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Sato Kaede",
    img: "kdMAIL9.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  {
    name: "Umezawa Minami",
    img: "ZWuDJrh.jpg",
    opts: {
      groups: ["3gen", "wakagun"]
    }
  },
  {
    name: "Yamashita Mizuki",
    img: "2U7m93O.jpg",
    opts: {
      groups: ["3gen", "imouto", "wakagun"]
    }
  },
  {
    name: "Yoda Yuki",
    img: "9GcYHlR.jpg",
    opts: {
      groups: ["3gen", "imouto"]
    }
  },
  {
    name: "Yoshida Ayano Christie",
    img: "rKVxJn4.jpg",
    opts: {
      groups: ["3gen"]
    }
  },
  
  //4th gen
  {
    name: "Endo Sakura",
    img: "6SEQMvY.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Hayakawa Seira",
    img: "8gQogOb.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kakehashi Sayaka",
    img: "jo9p3Qe.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kaki Haruka",
    img: "gTuehTr.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kanagawa Saya",
    img: "7RF3xPT.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Kitagawa Yuri",
    img: "5nlZfEN.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Seimiya Rei",
    img: "duSewCV.jpg",
    opts: {
      groups: ["4gen"]
    }
  },  
  {
    name: "Shibata Yuna",
    img: "MxkoqLL.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Tamura Mayu",
    img: "SXQOl4t.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Tsutsui Ayame",
    img: "vFP2yyE.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Yakubo Mio",
    img: "CRa6ozG.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  
  //4.5 gen
  {
    name: "Kuromi Haruka",
    img: "fKjYtcK.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Matsuo Miyu",
    img: "qOkb93D.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Yumiki Nao",
    img: "OMPN61a.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Sato Rika",
    img: "P9rblNO.jpg",
    opts: {
      groups: ["4gen"]
    }
  },
  {
    name: "Hayashi Runa",
    img: "MRsDsY1.jpg",
    opts: {
      groups: ["4gen"]
    }
  }
]
