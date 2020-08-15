var demo = [
  { id: 2, text: '研发计划', parent: 1 },
  { id: 3, text: '产品方案', parent: 1 },
  { id: 5, text: '技术方案', parent: 2 },
  { id: 4, text: '第二主题' },
  { id: 1, text: '中心主题' },
]
const props = (item, ...prop) =>
  prop.reduce((acc, cur) => ({ ...acc, [cur]: item[cur] }), {})
const displayProps = (item) => props(item, 'id', 'text')
const parentProps = (item) => ({
  ...displayProps(item),
  ...props(item, 'children'),
})
var result = []
demo.forEach((item) => {
  if (item.parent) {
    const parent = demo.find((d) => d.id === item.parent)
    if (parent) {
      if (parent.children && parent.children.length) {
        parent.children.push(item)
      } else {
        parent.children = [item]
      }
    }
  } else {
    result.push(item)
  }
})

console.log(result)

// 目标数组结构
// [
//   {
//    id: 1,
//    text: '中心主题',
//    children: [
//     {
//      id: 2,
//      text: '研发计划',
//      children: [
//       {
//        id: 5,
//        text: '技术方案'
//       }
//      ]
//     },
//     {
//      id: 3,
//      text: '产品方案'
//     }
//    ]
//   },
//   {
//    id: 4,
//    text: '第二主题'
//   }
//  ]
