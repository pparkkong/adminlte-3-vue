const express = require('express');
const request = require('request');
const cors = require('cors');
const https = require('https');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/api/tickers', function (req, res) {
    request({
        url: 'https://api.upbit.com/v1/ticker?markets=KRW-BTC',
        method: 'GET'
    }, (error, response, xml) => {
        res.json(JSON.parse(response.body));
    });
});

app.listen(3000, () => console.log('Server Running at http://localhost:3000/api/tickers'));