const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/api/ice', (req,res) => {
    res.status(200).send('You get vanilla and Strawberry flavor')
   })
   
   app.listen(4000, () => console.log("server running on 4000"))