import { LightningElement } from 'lwc';

export default class LyfCycleHook extends LightningElement {
    isTrue = false;
    constructor(){
        super();
        console.error('constructor');
    }
    connectedCallback(){
        console.error('connected callback');
    }
    renderedCallback(){
        if(this.isTrue){
            return
        }
        this.isTrue = true;
        console.error('render callback');
    }
    disconnectedCallback(){
        console.error('disconnectedCallback callback');
    }
    errorCallback(err,stack){
        console.log('error callbak'+err.message,stack);
    }
    changeTemplate(){
        this.isTrue = !this.isTrue;
    }
}