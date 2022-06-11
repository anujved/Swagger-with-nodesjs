const express = require("express");
const app = express();
const users = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");

const port = process.env.port || 3000;


const jsOptions = {
    swaggerDefinition:{
        info:{
            title:'anuj',
            version:'1.00.'
        },
        servers:["https://localhost:3000"]
    },
    apis:['index.js',"./routes/*.js"]
}
const jsdoc = swaggerjsdoc(jsOptions);



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(jsdoc))
app.use('/users',users)




app.listen(port,(error)=>{  
    if(error) {
        return console.log(error)
    }
    console.log("listening port", port)
})

