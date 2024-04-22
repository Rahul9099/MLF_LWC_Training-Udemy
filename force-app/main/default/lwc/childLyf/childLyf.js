import { LightningElement } from 'lwc';

export default class ChildLyf extends LightningElement {
    constructor(){
        super();
        console.error('child constructor');
    }
    connectedCallback(){
        console.error('child connected callback');
        window.addEventListener('click',this.handleClick)
        throw new error('child connected callback failed');
    }
    renderedCallback(){
        console.error('child render callback');
    }
    disconnectedCallback(){
        console.error('child disconnectedCallback callback');
        window.alert('child is removed');
        window.removeEventListener('click',this.handleClick);
    }
    errorCallback(err,stack){
        console.error('child error callbak'+err,stack);
    }
    handleClick(){
        console.log('child window click');
    }
}