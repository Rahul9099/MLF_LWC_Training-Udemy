import { LightningElement, api } from 'lwc';

export default class P2cProgressBarChild extends LightningElement {
    @api progressValue;
    @api handleAlert(){
        window.alert('child method has been called');
    }
}