import { LightningElement } from 'lwc';
import lightningAlert from 'lightning/alert';

export default class STwentySix extends LightningElement {
    // lightning alert , confirm , prompt
    async handleAlert(){
        await lightningAlert.open({
            message:'this is the alert message from lwc',
            theme: 'error',
            label:'Error'
        })

    }

    async handleConfirm(){
        
    }
}