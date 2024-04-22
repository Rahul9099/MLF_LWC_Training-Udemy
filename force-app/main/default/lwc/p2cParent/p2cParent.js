import { LightningElement } from 'lwc';

export default class P2cParent extends LightningElement {
    value=0;
    handleChange(event){
        this.value =event.target.value;
    }
    handleClick(){
        const child = this.template.querySelector('c-p2c-progress-bar-child');
        child.handleAlert();
    }
}