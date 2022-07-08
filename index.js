const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
let courses = [
    {id: 1, title:"js"},
    {id: 2, title:"html"},
    {id: 3, title:"nodejs"}
]

// read
app.get('/courses', (req, res) => {
    res.send(courses)
})
// create
app.post('/courses', (req, res) => {
    courses.push({
        id:+(new Date()),
        title: req.body.title
    })
    res.send(courses)
})

// delete
app.delete('/courses/:id', (req, res) => {
    const id = +req.params.id;

    courses = courses.filter(c=> c.id !== id)

    res.send(courses)
})

// update
app.put('/courses/:id', (req, res) => {
    const id = +req.params.id;

    const course = courses.find(c=> c.id === id)
        course.title =req.body.title
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})