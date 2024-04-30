import { LightningElement } from 'lwc';
import { createRecord, getFieldDisplayValue,getFieldValue } from 'lightning/uiRecordApi';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_OBJECT from '@salesforce/schema/Contact'

export default class WafGetFields extends LightningElement {

/*
//wire for create record

*/
fields={}

handleChange(event){
const {name,value} = event.target;
this.fields[name]=value
}
handleSubmit(){
    const recordInput ={apiName:ACCOUNT_OBJECT.objectApiName,fields:this.fields}
    createRecord(recordInput).then(result=>{
        console.log(result);
        this.fields={}
        const form = this.template.querySelector('form.createForm');
        form.reset();
    }).catch((err)=>{
        console.log(err);
    })
}


}