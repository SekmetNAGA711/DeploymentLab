const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8affa7a9742d47d7a3617e4107b354c9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get('/api/ice', (req,res) => {
    rollbar.info("Someone requested some ice cream")
    res.status(200).send('You get vanilla and Strawberry flavor').catch((err)=>{
        rollbar.error(err)
        console.log(err)
    })
    
   })
   
   app.listen(4000, () => console.log("server running on 4000"))