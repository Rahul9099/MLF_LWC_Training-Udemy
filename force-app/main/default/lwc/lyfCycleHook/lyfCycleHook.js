import { LightningElement } from 'lwc';

export default class LyfCycleHook extends LightningElement {
    isTrue = false;
    constructor(){
        super();
        console.log('constructor');
    }
    connectedCallback(){
        console.log('connected callback');
    }
    renderedCallback(){
        if(this.isTrue){
            return
        }
        this.isTrue = true;
        console.log('render callback');
    }
    disconnectedCallback(){
        console.log('disconnectedCallback callback');
    }
    errorCallback(err,stack){
        console.log('error callbak'+err.message,stack);
    }
    changeTemplate(){
        this.isTrue = !this.isTrue;
    }
}