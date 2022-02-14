const express = require('express');
const cors = require('cors');
const axiosApp2 = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/api/tickers', function (req, res) {

    axiosApp2
            .get('https://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.KRW-BTC')
            .then(response => {
                console.log(response.data);
                res.json(response.data);
            }).catch(async err => {
                console.log(err);
            })
});

app.listen(3001, () => console.log('Server Running at http://localhost:3000/api/tickers'));