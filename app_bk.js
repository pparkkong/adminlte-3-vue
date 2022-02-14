const express = require('express');
const cors = require('cors');
const axiosApp = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/api/tickers2', function (req, res) {

    axiosApp
            .get('https://api.upbit.com/v1/ticker?markets=KRW-BTC')
            .then(response => {
                console.log(response.data);
                res.json(response.data);
            }).catch(async err => {
                console.log(err);
            })
});

app.listen(3002, () => console.log('Server Running at http://localhost:3000/api/tickers'));