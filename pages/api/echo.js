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

export default function handler(req, res) {
    const { command } = req.query
    if (!command) {
        return res.send('illegal request!')
    }

    if (command.includes('ping')) {
        return res.json(success({ type: 'text', res: command.replace('ping', 'pong') }))
    }

    if (command.includes('list')) {
        const num = Number(command.replace(/\D/g, ''))
        if (!num) {
            return res.json(error('Command is Error! Enter for example "list 3 item"'))
        }
        const data = Array.from({ length: num }).map((v, k) => {
            return `${k + 1} xxxxx`
        })
        res.json(success({ type: 'list', res: data }))
    }

    if (command.includes('image')) {
        res.json(success({ type: 'image', res: 'https://joeschmoe.io/api/v1/7' }))
    }

    res.send(error('Command is Error! Please enter a command containing the keyword "list" or "image" or "ping"'))
}
