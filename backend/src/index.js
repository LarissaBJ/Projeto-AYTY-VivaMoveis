const express = require('express');
const bodyParser = require('body-parser');
const briefingRoutes = require('./routes/briefingRoutes');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use("/", briefingRoutes);


app.listen(PORT, () => {
    (`App online na porta ${PORT}`);
});


