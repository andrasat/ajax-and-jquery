const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000 || process.env.PORT

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/* APP ROUTES */
app.get('/colors', (req,res)=> {
  res.send({
    color: randomColor(),
    num: randomNum()
  })
})

function randomColor() {
  let lett = '0123456789ABCDEF',
      color = '#'
  for(let i=0;i<6;i++){
    color += lett[Math.floor(Math.random() * 16)]
  }
  return color
}

function randomNum() {
  return Math.floor(Math.random() * 9) + 1
}

/* SERVER */
app.listen(port)
console.log('Connected to port'+port)