import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {
    @api car={}
   
    handleCarSelected(){
        const eve = new CustomeEvent("selectedcar",{
            detail:{
                recordId:this.car.Id
            }
        })
        this.dispatchEvent(eve);
    }
    
    
}