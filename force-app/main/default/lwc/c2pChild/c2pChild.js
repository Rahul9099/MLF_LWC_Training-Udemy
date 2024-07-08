import { LightningElement, api } from 'lwc';

export default class C2pChild extends LightningElement {
    @api props;

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