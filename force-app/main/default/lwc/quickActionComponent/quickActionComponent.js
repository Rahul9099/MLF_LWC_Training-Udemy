import { LightningElement,api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class QuickActionComponent extends LightningElement {

    @api recordId;
   
    @api invoke(){
    const fields ={}
    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[STAGE_NAME_FIELD.fieldApiName] = 'Closed Won';
    const recordInput = {fields}
    updateRecord(recordInput).then(result=>{
        console.log('--update'+result);
    }).catch(err=>{
        console.log('--update'+err);
    })
    }
}