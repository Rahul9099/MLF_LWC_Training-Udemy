import { LightningElement } from 'lwc';

export default class ReuseableComponent extends LightningElement {

    handleSlotChange(){
       const footer = this.refs.footer
       if(footer){
        footer.classList.remove('slds-hide');
       }
    }
}