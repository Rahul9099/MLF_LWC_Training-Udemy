import { LightningElement } from 'lwc';

export default class DataValidation extends LightningElement {
    startDate;
    endDate;
    error;
    handleDate(event){
        const{name,value} = event.target;
        this[name] =value;
    }
    handleValidate(){
        const result = new Date(this.startDate).getTime() < new Date(this.endDate).getTime();
        if(!result){
            this.error = true;
        }
    }
}