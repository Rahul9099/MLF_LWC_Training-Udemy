import { LightningElement } from 'lwc';

export default class C2pChild extends LightningElement {
    handleClick(){
        const eve =new CustomEvent('child',{
            detail:{
                value:'rahul'
            },
            bubbles:true
        })
        this.dispatchEvent(eve);
    }
}