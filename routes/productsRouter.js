import express from 'express';

const router = express.Router();

router.get('/',
    function (req, res) {
        res.send("Products Home Page");
    })

export default router;