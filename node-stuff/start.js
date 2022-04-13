const express = require('express')
const multer = require('multer')
const upload = multer()
const app = express()
const PORT = 3000

const assignments = {

}

app.post('/cad', upload.single('file'), (req, res) => {
    let [assignment_id, student_id] = [
        req.params.assignment_id,
        req.params.student_id
    ]

    let formData = req.body

    // Actual function would generate the jpg file and
    // save it to a directory that the html page can access.

    res
    .header("Access-Control-Allow-Origin", "*")
    .send(JSON.stringify({
        imagePath: '../image/student.jpg'
    }))
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})