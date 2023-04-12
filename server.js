import express from 'express'
import { bands } from './data/bands.js'

const app = express()
app.set('view engine', 'ejs')

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

// app.get('/', function(req, res) {
//   res.send('<h1>hello, friend</h1>')
// })

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/bands', function(req, res) {
  res.render('bands/index', {
    bands: bands
  })
})