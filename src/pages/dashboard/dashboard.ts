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
                //console.log(res.data[0].tradePrice);
            })
    }

    created() {
        this.getTickers();
    }

    mounted() {
        this.getTickers();
        setInterval(this.getTickers, 60000); //1초(1000) * 60
    }
}
