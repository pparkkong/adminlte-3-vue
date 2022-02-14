import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

@Options({})
export default class Dashboard extends Vue {

    coins: any;

    data() {
        return {
            coins: Array
        }
    }

    async getTickers() {

        axios
            .get('http://localhost:3001/api/tickers')
            .then(res => {
                this.coins = res.data;
                console.log(res.data[0].tradePrice);
            })
            // .catch(async err => {
            //     const crypto = "KRW-BTC"; //비트코인
            //     const upbitUrl = "https://api.upbit.com/v1/ticker?markets=";

            //     const res = await axios.get(upbitUrl + crypto);
            //     this.coins = res.data;
            //     console.log(this.coins);
            // });
    }

    created() {
        this.getTickers();
    }

    mounted() {
        this.getTickers();
        setInterval(this.getTickers, 1000); //1초(1000) * 60
    }
}
