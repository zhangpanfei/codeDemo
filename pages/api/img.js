
import fs from 'fs'

export default function handler(req, res) {

    const data = [
        '1.png',
        '1.webp',
        '2.webp',
        '3.webp',
    ];

    const cs = fs.createReadStream(`./public/imgs/${data[Math.floor(Math.random() * data.length)]}`);
    cs.on("data", chunk => {
        res.write(chunk);
    })
    cs.on("end", () => {
        res.status(200);
        res.end();
    })

}
