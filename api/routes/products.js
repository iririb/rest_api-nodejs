const express = require('express');
const router = express.Router();

router.get('/', (req, res, nexxt) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request to /products'
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You pass special as ID, great'
        })
    } else {
        res.status(200).json({
            message: 'You have passed an ID'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Update product!'
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Delete product!'
    })
})

module.exports = router;