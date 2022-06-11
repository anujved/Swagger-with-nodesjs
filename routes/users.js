const express = require("express")
const router = express.Router();

/**
 * @swagger
 * /users:
 *      get:
 *
 *          responses:
 *              200:
 *                 description: Returns a mysteries  string
 */

router.route("/")
.get((req,res)=>{
    res.send({"users":["test 1","test 2","test 3"]})
})
/**
 * @swagger
 * /users:
 *      post:
 *
 *          responses:
 *              201:
 *                 description: Returns a mysteries  string
 */

.post((req,res)=>{
    res.json({"user":"update successfully"})
})






module.exports = router