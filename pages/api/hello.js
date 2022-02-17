// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

export default function handler(req, res) {
  fs.writeFile('./public/test.txt', Date.now().toString(), () => { })
  res.status(200).json({ name: 'John Doe' })
}
