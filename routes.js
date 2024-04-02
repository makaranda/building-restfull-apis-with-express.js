const express = require('express');
const router = express.Router();

router.post('/change-message',(req,res) => {
    const clientMessage = req.body.message;
    const changedMessage = `Server Says : ${clientMessage}`;
    res.json({message: changedMessage});
});

module.exports = router;