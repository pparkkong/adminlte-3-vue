import {Options, Vue} from 'vue-class-component';
import axios from 'axios';

@Options({})
export default class Dashboard extends Vue {

    getResult: any;

    data() {
        return {
            getResult : Array
        }
    }

    getTicker() {
        const crypto = "KRW-BTC,KRW-ETH,KRW-ORBS"; //비트코인 이더리움 오브스
        const upbitUrl = "https://api.upbit.com/v1/ticker?markets=";

        axios
            .get(upbitUrl + crypto)
            .then(res => {
                this.getResult = res.data;
            } 
            )
            .catch(err => {
                console.log(err);
            });
    }
  
    created () {
        this.getTicker;
    }
  
    mounted () {
        setInterval(this.getTicker,1000); //1초(1000) * 60
    }
    
}
