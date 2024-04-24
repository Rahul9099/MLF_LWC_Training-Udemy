import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';

export default class LdsRecordEditForm extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [{id:1,field:NAME_FIELD,label:'Enter Your Name'},{id:2,field:TITLE_FIELD,label:'Enter Your TITLE_FIELD'},{id:3,field:PHONE_FIELD,label:'Enter Your PHONE_FIELD'},{id:4,field:EMAIL_FIELD,label:'Enter Your EMAIL_FIELD'},{id:5,field:ACCOUNT_ID_FIELD,label:'Enter Your ACCOUNT_ID_FIELD'}];

    handleSubmit(e){
        e.preventDefault();
        console.log(JSON.stringify(e.detail));
        const field = e.detail.fields;
        field.phone = '11111';
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleSuccess(e){
        console.log('---generated record id is '+e.detail.id);
        this.handleResetAll();
    }
    handleError(e){
        console.log('error occur'+JSON.stringify(e));
    }
    handleResetAll(){
       const inputFields = this.template.querySelectorAll('lightning-input-field');
       if(inputFields){
        Array.from(inputFields).forEach(f=>f.reset());
       }
    }
    handleResetSpecific(){

    }
}