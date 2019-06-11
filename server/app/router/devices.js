const router = require('express').Router()

let data = {
    devices: [
        {
            'type': 'light',
            'state': 'on'
        },
        {
            'type': 'shade',
            'state': '38'
        },
        {
            'type': 'heat',
            'state': '23',
            'unit': 'C'
        }
    ]
}

router.get('', (req, res, next) => {
    res.send(data)
    return next()
})

router.get('/:id', (req, res, next) => {
    let output = {
        devices: []
    }
    let id = req.params.id
    if(id > data.devices.length) {
        res.send({error: 'device not found'})
        return next()
    }
    output.devices.push(data.devices[id])
    res.send(output)
    next()
})

module.exports = router