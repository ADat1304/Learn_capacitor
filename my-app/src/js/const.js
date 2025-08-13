import imgVoca from "../assets/imgs/abc/voca.png";
import imgGrammar from "../assets/imgs/abc/grammar.jpg";

import imgTopic1 from "../assets/imgs/topic/Lesson_1.avif";
import imgTime from "../assets/imgs/Lesson1/Time.png";
import imgConvince from "../assets/imgs/Lesson1/Convince.jpeg";
import imgContract from "../assets/imgs/Lesson1/Contract.jpg";
import imgExplain from "../assets/imgs/Lesson1/Explain.jpg";
import imgPurchase from "../assets/imgs/Lesson1/Purchase.jpg";
import imgUrge from "../assets/imgs/Lesson1/Urge.jpg";
import imgConsult from "../assets/imgs/Lesson1/Consult.jpg";
import imgHandle from "../assets/imgs/Lesson1/Handle.jpg";
import imgMaintain from "../assets/imgs/Lesson1/Maintain.png";
import imgAchievement from "../assets/imgs/Lesson1/Achievement.jpg";

export const MainMenuTypes = {
  VOCA: "voca",
  GRAMMAR: "grammar",
  READING: "reading",
};
export const MainScreenMenu = [
  {
    name: MainMenuTypes.VOCA,
    featureImage: imgVoca,
    description: "Từ vựng",
  },
  {
    name: MainMenuTypes.GRAMMAR,
    featureImage: imgGrammar,
    description: "Ngữ pháp",
  },
  {
    name: MainMenuTypes.READING,
    featureImage: imgReading,
    description: "Đọc hiểu",
  },
];

export const topics = [
  {
    name: "Chủ đề 1",
    description: "Mô tả chủ đề 1",
    featureImage: imgTopic1,
    lessons: [
      {
        vocab: "timing (n)",
        Pronunciation: "/ˈtaɪmɪŋ/",
        Meaning: "Thời gian",
        featureImage: imgTime,
      },
      {
        vocab: "Convince (v)",
        Pronunciation: "/kənˈvɪns/",
        Meaning: "Thuyết phục",
        featureImage: imgConvince,
      },
      {
        vocab: "Contract (n)",
        Pronunciation: "/ˈkɒntrækt/",
        Meaning: "Hợp đồng",
        featureImage: imgContract,
      },
      {
        vocab: "Explain (v)",
        Pronunciation: "/ɪkˈspleɪn/",
        Meaning: "Giải thích",
        featureImage: imgExplain,
      },
      {
        vocab: "Purchase (v)",
        Pronunciation: "/ˈpɜːrtʃəs/",
        Meaning: "Mua sắm",
        featureImage: imgPurchase,
      },
      {
        vocab: "Urge (v)",
        Pronunciation: "/ɜːrdʒ/",
        Meaning: "Thúc giục",
        featureImage: imgUrge,
      },
      {
        vocab: "Consult (v)",
        Pronunciation: "/kənˈsʌlt/",
        Meaning: "Tư vấn",
        featureImage: imgConsult,
      },

      {
        vocab: "Handle (v)",
        Pronunciation: "/ˈhændl/",
        Meaning: "Xử lý",
        featureImage: imgHandle,
      },
      {
        vocab: "Maintain (v)",
        Pronunciation: "/meɪnˈteɪn/",
        Meaning: "Bảo trì, Duy trì",
        featureImage: imgMaintain,
      },
      {
        vocab: "achievement (n)",
        Pronunciation: "/əˈtʃiːvmənt/",
        Meaning: "Thành tựu",
        featureImage: imgAchievement,
      },
    ],
  },
];
