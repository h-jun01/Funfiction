import { db } from "../../firebase/firebase";

// let a: [] = [];
// export const AllComicss = db
//   .collection("books")
//   .orderBy("id")
//   .get()
//   .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       console.log(doc.data());
//       // a.push(doc.data());
//       return doc.data()
//     });
//   });

export const AllComics = {
  comics: [
    {
      id: 1,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book1.jpg",
      title: "路地裏とネコ",
      creator: "No Copy Right Girl",
      star: 23
    },
    {
      id: 2,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book2.jpg",
      title: "“I”を忘れた人魚姫",
      creator: "No Copy Right Girl",
      star: 29
    },
    {
      id: 3,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book3.jpg",
      title: "虚ろなセカイと死神嬢",
      creator: "No Copy Right Girl",
      star: 21
    },
    {
      id: 4,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book4.jpg",
      title: "パステル・パラダイム",
      creator: "No Copy Right Girl",
      star: 25
    },
    {
      id: 5,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book5.jpg",
      title: "さよなら、きみの世界。",
      creator: "No Copy Right Girl",
      star: 28
    },
    {
      id: 6,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book6.jpg",
      title: "Re:スノーホワイト",
      creator: "No Copy Right Girl",
      star: 22
    },
    {
      id: 7,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book7.jpg",
      title: "ツキナミ。",
      creator: "No Copy Right Girl",
      star: 20
    },
    {
      id: 8,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book8.jpg",
      title: "異世界JK侵略",
      creator: "No Copy Right Girl",
      star: 19
    },
    {
      id: 9,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book9.jpg",
      title: "十五夜月見のうさぎ族",
      creator: "No Copy Right Girl",
      star: 18
    },
    {
      id: 10,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book10.jpg",
      title: "枯れた世界に蒼き救いを",
      creator: "No Copy Right Girl",
      star: 10
    },
    {
      id: 11,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book11.jpg",
      title: "隠れ上手の立花さん",
      creator: "No Copy Right Girl",
      star: 8
    },
    {
      id: 12,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book12.jpg",
      title: "ハツネゴコロ vol.2",
      creator: "No Copy Right Girl",
      star: 13
    },
    {
      id: 13,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book13.jpg",
      title: "花とアリス",
      creator: "No Copy Right Girl",
      star: 9
    },
    {
      id: 14,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book14.jpg",
      title: "ヤンデレ彼女は笑わない",
      creator: "No Copy Right Girl",
      star: 23
    },
    {
      id: 15,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book15.jpg",
      title: "ヤキモチのやき方",
      creator: "No Copy Right Girl",
      star: 5
    },
    {
      id: 16,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book16.jpg",
      title: "ハツネゴコロ vol.3",
      creator: "No Copy Right Girl",
      star: 7
    },
    {
      id: 17,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book17.jpg",
      title: "MayDay",
      creator: "No Copy Right Girl",
      star: 12
    },
    {
      id: 18,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book18.jpg",
      title: "巨大な傘の使い道",
      creator: "No Copy Right Girl",
      star: 9
    },
    {
      id: 19,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book19.jpg",
      title: "ようこそ水槽世界へ",
      creator: "No Copy Right Girl",
      star: 8
    },
    {
      id: 20,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book20.jpg",
      title: "街中デリバリーサーカス",
      creator: "No Copy Right Girl",
      star: 2
    },
    {
      id: 21,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book21.jpg",
      title: "やがて神話の世界創造",
      creator: "No Copy Right Girl",
      star: 1
    },
    {
      id: 22,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book22.jpg",
      title: "三度の飯より眠りたい！",
      creator: "No Copy Right Girl",
      star: 13
    },
    {
      id: 23,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book23.jpg",
      title: "飛べない蝶は空に哭く",
      creator: "No Copy Right Girl",
      star: 24
    },
    {
      id: 24,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book24.jpg",
      title: "アーガルム国戦記",
      creator: "No Copy Right Girl",
      star: 12
    },
    {
      id: 25,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book25.jpg",
      title: "喋るなキケン×××",
      creator: "No Copy Right Girl",
      star: 2
    },
    {
      id: 26,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book26.jpg",
      title: "弱肉強食",
      creator: "No Copy Right Girl"
    },
    {
      id: 27,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book27.jpg",
      title: "冬と君と白",
      creator: "No Copy Right Girl",
      star: 4
    },
    {
      id: 28,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book28.jpg",
      title: "死もまた死するものなれば",
      creator: "No Copy Right Girl",
      star: 3
    },
    {
      id: 29,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book29.jpg",
      title: "カールズロック・ナンバー",
      creator: "No Copy Right Girl",
      star: 5
    },
    {
      id: 30,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book30.jpg",
      title: "エキサイティング登校日",
      creator: "No Copy Right Girl",
      star: 1
    },
    {
      id: 31,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book31.jpg",
      title: "甘き恋にはチョコレートを",
      creator: "No Copy Right Girl",
      crown: "/icons/ranking01.svg",
      star: 42
    },
    {
      id: 32,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book32.jpg",
      title: "ハツネゴコロ vol.1",
      creator: "No Copy Right Girl",
      crown: "/icons/ranking02.svg",
      star: 40
    },
    {
      id: 33,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book33.jpg",
      title: "Spring Works",
      creator: "No Copy Right Girl",
      crown: "/icons/ranking03.svg",
      star: 39
    },
    {
      id: 34,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book34.jpg",
      title: "恋日",
      creator: "No Copy Right Girl",
      visibility: "hidden",
      star: 35
    },
    {
      id: 35,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book35.jpg",
      title: "NEXT:verse",
      creator: "No Copy Right Girl",
      visibility: "hidden",
      star: 31
    },
    {
      id: 36,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book36.jpg",
      title: "空想将棋大怪",
      creator: "No Copy Right Girl",
      star: 12
    },
    {
      id: 37,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book37.jpg",
      title: "NEKO目",
      creator: "No Copy Right Girl",
      star: 13
    },
    {
      id: 38,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book38.jpg",
      title: "キオク馳せる果てまで",
      creator: "No Copy Right Girl",
      star: 14
    },
    {
      id: 39,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book39.jpg",
      title: "ノータイム・パラドクス",
      creator: "No Copy Right Girl",
      star: 15
    },
    {
      id: 40,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book40.jpg",
      title: "そして仔猫はギターを弾く",
      creator: "No Copy Right Girl",
      star: 16
    },
    {
      id: 41,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book41.jpg",
      title: "午前0時の恋心",
      creator: "No Copy Right Girl",
      star: 17
    },
    {
      id: 42,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book42.jpg",
      title: "ハッピーツリーフレンズ",
      creator: "No Copy Right Girl",
      star: 19
    },
    {
      id: 43,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book43.jpg",
      title: "きみと空で踊りたい",
      creator: "No Copy Right Girl",
      star: 18
    },
    {
      id: 44,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book44.jpg",
      title: "青と春と白",
      creator: "No Copy Right Girl",
      star: 23
    },
    {
      id: 45,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book45.jpg",
      title: "満たされたい",
      creator: "No Copy Right Girl",
      star: 10
    },
    {
      id: 46,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book46.jpg",
      title: "葉桜の季節に君を想う",
      creator: "No Copy Right Girl",
      star: 24
    },
    {
      id: 47,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book47.jpg",
      title: "文学少女見習いの初戀",
      creator: "No Copy Right Girl",
      star: 17
    },
    {
      id: 48,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book48.jpg",
      title: "月は無慈悲な夜の女王",
      creator: "No Copy Right Girl",
      star: 20
    },
    {
      id: 49,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book49.jpg",
      title: "ハツネゴコロ vol.1,5",
      creator: "No Copy Right Girl",
      star: 23
    },
    {
      id: 50,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book50.jpg",
      title: "心地よく秘密めいた",
      creator: "No Copy Right Girl",
      star: 14
    },
    {
      id: 51,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book51.jpg",
      title: "ジャイアントキリング",
      creator: "No Copy Right Girl",
      star: 12
    },
    {
      id: 52,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book52.jpg",
      title: "さもなくば喪服を",
      creator: "No Copy Right Girl",
      star: 8
    },
    {
      id: 53,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book53.jpg",
      title: "ほとんど記憶のない女",
      creator: "No Copy Right Girl",
      star: 2
    },
    {
      id: 54,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book54.jpg",
      title: "空を飛びたいから",
      creator: "No Copy Right Girl",
      star: 5
    },
    {
      id: 55,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book55.jpg",
      title: "いとお菓子",
      creator: "No Copy Right Girl",
      star: 0
    },
    {
      id: 56,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book56.jpg",
      title: "群青少女",
      creator: "No Copy Right Girl",
      star: 0
    },
    {
      id: 57,
      creatorid: "GP8g6HsHladcIq3L7kYDo1iaHPb2",
      synopsis: "作品詳細入るよ",
      src: "/books/book57.jpg",
      title: "はじまる恋とおわる冬",
      creator: "No Copy Right Girl",
      star: 2
    }
  ]
};
