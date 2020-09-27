const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello, My Server!')
})

app.get("/getData", (req, res) => {
    let nm = Number(req.query.number, 10);
    if (req.query.number === undefined || req.query.number === "") {
        res.json({
            sum: "Lack of Parameter"
        });
    } else {
        if (isNaN(nm) || nm % 1 != 0) {
            res.json({
                sum: "Wrong Parameter"
            });
        } else {
            res.json({
                sum: `${((nm + 1) * nm) / 2}`
            });
        }
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
