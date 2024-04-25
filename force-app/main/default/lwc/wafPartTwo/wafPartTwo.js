import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import Name_field from '@salesforce/schema/Account.Name';
import Owner_field from '@salesforce/schema/Account.Owner.Name';
import Annual_revenue_field from '@salesforce/schema/Account.AnnualRevenue';

export default class WafPartTwo extends LightningElement {

    name;
    AnnualRevenue;
    owner
    @api recordId;
    @wire(getRecord,{recordId:'$recordId',fields:[Name_field,Owner_field,Annual_revenue_field]})
    getAccountRecord({data,error}){
        if(data){
            console.log('--accountdata'+JSON.stringify(data));
            this.name = getFieldValue(data,Name_field);
            this.AnnualRevenue =getFieldDisplayValue(data,Annual_revenue_field);
            this.owner = getFieldValue(data,Owner_field);
        }
        if(error){
            console.log(error);
        }
    }

}