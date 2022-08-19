let express = require('express');
//const path = require('path');

let app = express();
app.use(express.static("client/public")) // Klient mappen

const getInfo = (req, res, next) => {
    console.log('OBS här hänt nån=> ' + `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(getInfo) // DEMO

app.get("/api", (req, res) => {
    res.json({"users": ["one", "two", "tree"]})
})






// server
const PORT = 5000;

app.listen(PORT, function () {
    console.log(`server started at port ${PORT}`)
})

