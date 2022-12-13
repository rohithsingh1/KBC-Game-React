const express=require('express')
const app=express()
const path = require("path");
require('dotenv').config()
const cors=require('cors')

app.use(express.json())
app.use(cors({
  origin:'*'
}))


const port=process.env.PORT||5000

app.get('/api/', (req, res) => {
  res.send('connected')
})

if (process.env.NODE_ENV === "production") {
 //*Set static folder up in production
    app.use(express.static('quiz/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'quiz', 'build','index.html')));
}

app.listen(port,() => {
    console.log(`node server listening at port no ${port}`)
})
