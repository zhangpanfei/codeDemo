const success = (data) => {
    return {
        code: 0,
        data,
        msg: 'ok'
    }
}

const error = (msg) => {
    return {
        code: 1,
        data: null,
        msg
    }
}

const data = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [{ type: "h1", text: "李白简介" }],
      },
      {
        type: "paragraph",
        content: [{ type: "image", src: "/imgs/libai.jpg", alt: '图片', styles: {width: '100px'} }],
      },
      {
        type: "paragraph",
        content: [{ type: "text", text: "李白（701年—762年12月），字太白，号青莲居士，又号“谪仙人”，唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫并称为“李杜”，为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”。《旧唐书》记载李白为山东人 [2]  ；《新唐书》记载，李白为兴圣皇帝李暠九世孙，与李唐诸王同宗。其人爽朗大方，爱饮酒作诗，喜交友" }],
      },
      {
        type: "table",
        content: [
          {
            type: "row",
            content: [
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "本名",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "李白",
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "所处时代",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "唐朝",
                  },
                ],
              },
            ],
          },

          {
            type: "row",
            content: [
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "别名",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "李十二、李翰林、李供奉、李拾遗、诗仙",
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "主要作品",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "静夜思、蜀道难、明堂赋、梦游天姥吟留别、行路",
                    styles: {
                        color: '#136ec2',
                    },
                  },
                ],
              },
            ],
          },

          {
            type: "row",
            content: [
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "字",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "太白",
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "难、将进酒、早发白帝城、望庐山瀑布",
                    styles: {
                        color: '#136ec2',
                    },
                  },
                ],
              },
            ],
          },

          {
            type: "row",
            content: [
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "号",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "青莲居士",
                    styles: {
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                    }
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "主要成就",
                    styles: {
                        color: '#999',
                        fontWeight: 'blod',
                    },
                  },
                ],
              },
              {
                type: "cell",
                content: [
                  {
                    type: "text",
                    text: "创造了古代浪漫主义文学高峰、歌行体和七绝达到后人难及的高度",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

export default function handler(req, res) {
    return res.json(success(data))
}
