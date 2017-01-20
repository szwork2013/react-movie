import Mock from 'mockjs';
let ip = 'localhost:8080';
// 详情页mock数据
Mock.mock('http://mockdata/get/detail', 'get', {
    "film": {
              "id": 3562,
              "name": "降临",
              "imageryType": "1",
              "origin": "http://"+ ip +"/images/m-cover-img1.jpg",
              "intro": "外星来访客 目地难预测",
              "synopsis": " 影片由《囚徒》《边境杀手》导演丹尼斯·维伦纽瓦执导，根据星云奖以及雨果奖得主、华裔科幻作家特德·姜的短篇小说《你一生的故事》改编，讲述了外星人飞船来到地球，艾米·亚当斯饰演的语言学家受雇于政府，来与外星人沟通了解它们此行的目的。然而当用外星语言“七肢桶”与这些来客交流时， 她眼前突然浮现了她从出生到死亡、已知或未知的完整一生。杰瑞米·雷纳将饰演一名物理学教授，他与亚当斯饰演的语言学家一同受雇于政府。",            "premiereAt": 1484841600000,
              "mins": 116,
              "language": "英语",
              "director": "丹尼斯·维伦纽瓦",
              "actors": [
                  {
                      "name": "艾米·亚当斯"
                  },
                  {
                      "name": "杰瑞米·雷纳"
                  },
                  {
                      "name": "福里斯特·惠特克"
                  },
                  {
                      "name": "迈克尔·斯图巴"
                  },
                  {
                      "name": "马志"
                  }
              ],

              "nation": "美国",
              "category": "剧情|科幻",
              "grade": "8.0",
              "cinemaCount": 1
          }

})

//导航mock数据
Mock.mock('http://mockdata/get/nav', 'get', {
  "data" : [
        {
            "link": "/",
            "name": "首页",
            "id": 0
        },
        {
            "link": "/film",
            "name": "影片",
            "id": 1
        },
        {
            "link": "/cinema",
            "name": "影院",
            "id": 2
        },
        {
            "link": "/user",
            "name": "我的",
            "id": 3
        }
    ]


})



//Home组件 电影列表数据 browserHistory
Mock.mock('http://mockdata/get/filmlist', 'get', {
    "slider" :{
      "id" : "@id",
      "data":[
        {
          "url" : "/film/01",
          "imgUrl" :  "http://"+ ip +"/images/timg1.jpg",
          "id":"@id"
        },
        {
          "url" : "/film/02",
          "imgUrl" :  "http://"+ ip +"/images/timg2.jpg",
           "id":"@id"
        },
        {
          "url" : "/film/03",
          "imgUrl" :  "http://"+ ip +"/images/timg3.jpg",
           "id":"@id"
        }
      ]
    },

    "playingData" : [
      {
        "id": 3545,
        "name": "太空旅客",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼1",
        "grade": "8.51",
        "watchCount": 3679251,
        "cinemaCount": 1221,
      },
      {
        "id": 3546,
        "name": "情圣",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img2.jpg"
        },
        "intro": "未达目的地 太空铁达尼",
        "grade": "8.52",
        "watchCount": 3679252,
        "cinemaCount": 2,
      },
      {
        "id": 3547,
        "name": "星球大战外传：侠盗一号",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img3.jpg"
        },
        "intro": "未达目的地 太空铁达尼3",
        "grade": "8.53",
        "watchCount": 3679253,
        "cinemaCount": 3,
      },
      {
        "id": 3548,
        "name": "降临",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img4.jpg"
        },
        "intro": "未达目的地 太空铁达尼4",
        "grade": "8.54",
        "watchCount": 3679254,
        "cinemaCount": 1,
      }
    ],

    "comingData" : [
      {
        "id": 3555,
        "name": "西游伏妖篇",
        "cover": {
            "origin": "http://"+ ip +"/images/c-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼1",
        "grade": "8.51",
        "watchCount": 3679251,
        "cinemaCount": 1221,
      },
      {
        "id": 3556,
        "name": "功夫瑜伽",
        "cover": {
            "origin": "http://"+ ip +"/images/c-img2.jpg"
        },
        "intro": "未达目的地 太空铁达尼",
        "grade": "8.52",
        "watchCount": 3679252,
        "cinemaCount": 1222,
      },
      {
        "id": 3557,
        "name": "乘风破浪",
        "cover": {
            "origin": "http://"+ ip +"/images/c-img3.jpg"
        },
        "intro": "未达目的地 太空铁达尼3",
        "grade": "8.53",
        "watchCount": 3679253,
        "cinemaCount": 1223,
      },
      {
        "id": 3558,
        "name": "大闹天竺",
        "cover": {
            "origin": "http://"+ ip +"/images/c-img4.jpg"
        },
        "intro": "未达目的地 太空铁达尼4",
        "grade": "8.54",
        "watchCount": 3679254,
        "cinemaCount": 1224,
      }
    ]

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '300'
})
