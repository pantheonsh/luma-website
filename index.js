const express = require('express');
const exphbs = require('express-handlebars');
const path = require("path");
let app = express();

app.engine('html', exphbs({ defaultLayout: 'main', extname: "html" }));
app.set('view engine', 'html');

app.use("/js", express.static(path.join(__dirname, "public/js/")));
app.use("/css", express.static(path.join(__dirname, "public/css/")));

app.get('/dashboard/:guild', (req, res) => {
    res.render('dashboard/prefix', { layout: "dashboard" });
});

app.listen(process.env.PORT || 3000);