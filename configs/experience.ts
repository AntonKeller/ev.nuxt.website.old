interface logotypeType {
  id: number,
  img: string,
}

interface TabType {
  id: number,
  value: string,
  logotypes: Array<logotypeType>
}

export const tabs: Array<TabType> = [
  {
    id: 1,
    value: "оценка бизнеса, оценка имущественных активов",
    logotypes: [
      {id: 1, img: "inter-rao"},
      {id: 2, img: "rosatom"}
    ]
  },
  {
    id: 2,
    value: "оценка",
    logotypes: [
      {id: 1, img: "moskowkiy-bank"},
      {id: 2, img: "rosekim-bank"},
      {id: 3, img: "rosselhoz-bank"},
      {id: 4, img: "afk-systema"},
      {id: 5, img: "web-rf"},
      {id: 6, img: "sber"},
      {id: 7, img: "mkb"},
      {id: 8, img: "novikom-bank"}
    ]
  },
  {
    id: 3,
    value: "строительный аудит",
    logotypes: [
      {id: 1, img: "pcb"},
      {id: 2, img: "otkritie-bank"},
      {id: 3, img: "cb-rf"},
      {id: 4, img: "almaz-antay"},
      {id: 5, img: "turizm-rf"},
      {id: 6, img: "frp"},
      {id: 7, img: "rosteh"}
    ]
  },
  {
    id: 4,
    value: "строительная экспертиза, технологическая экспертиза",
    logotypes: [
      {id: 1, img: "otkritie-bank"},
      {id: 2, img: "cb-rf"},
      {id: 3, img: "almaz-antay"},
      {id: 4, img: "turizm-rf"},
      {id: 5, img: "frp"},
      {id: 6, img: "rosteh"}
    ]
  },
  {
    id: 5,
    value: "финансово-технический надзор",
    logotypes: [
      {id: 1, img: "pcb"}
    ]
  },
]
