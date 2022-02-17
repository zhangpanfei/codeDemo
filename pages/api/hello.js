// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

export default function handler(req, res) {
  fs.writeFile('./public/test.txt', Date.now().toString(), (err) => {
    if(err) {
      return res.status(200).json({ name: '出错了写文件' })
    }
    fs.readFile('./public/test.txt', { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return res.status(200).json({ name: '出错了' })
      }
      res.status(200).json({ name: data })
    })
  })
  

}
