const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, My Server!')
})

app.get("/getData", (req, res) => {
    var nm = Number(req.query.number, 10);
    var result = 0;

    if (req.query.number === undefined || req.query.number === "") {
        res.send("Lack of Parameter");
    } else {
        if (isNaN(nm) || nm % 1 != 0) {
            res.send("Wrong Parameter");
        } else {
            for (var i = 1; i <= nm; i++)
                result += i;
            res.send(String(result));
        }
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
