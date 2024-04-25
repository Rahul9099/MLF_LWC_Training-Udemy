import { LightningElement } from 'lwc';
import getAccountDetailsImp from '@salesforce/apex/ApexWireDemo.getAccountDetailsImp';
import getAccountSearch from '@salesforce/apex/ApexWireDemo.getAccountSearch';


export default class ApexLwcImperative extends LightningElement {

    async handleClick() {
        try {
            const data = await getAccountDetailsImp();
            console.log(JSON.stringify(data));
        } catch (error) {
            console.log('--error' + error);
        }
    }
    key;
    timer;
    handleChange(e) {
        this.key = e.target.value;
    }
    handleSearchClick() {
        this.timer = setTimeout(() => {
            const data = getAccountSearch({ searchKey: this.key }).then((data) => {
                console.log(JSON.stringify(data));
            }).catch((error) => {
                console.log(JSON.stringify(error));
            })

        }, 1000)
    }
    disconnectedCallback(){
        window.clearTimeout(this.timer)
    }
}