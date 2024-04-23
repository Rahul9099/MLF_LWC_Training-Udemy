import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.lastName';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';




export default class LdsRecordForm extends LightningElement {
    recordId = '003IR00001bogULYAY';
    object=CONTACT_OBJECT;
    fields=[NAME_FIELD,ACCOUNT_ID_FIELD,EMAIL_FIELD];
    handleSubmit(e){
        console.log(e);
        e.preventDefault();
        console.log(JSON.stringify(e.detail));
        const fields = e.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);
    }
    handleSuccess(e){
        console.log('---create form'+JSON.stringify(e));
    }
}