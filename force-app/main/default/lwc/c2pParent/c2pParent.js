import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {
    value='';
    handleChild(event){
        this.value = event.detail.value;
    }
}