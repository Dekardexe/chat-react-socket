const express = require('express');
const router = express.Router();

router.get("/", (request, response)=> {
    console.log(`connect to server`)
});

module.exports = router;