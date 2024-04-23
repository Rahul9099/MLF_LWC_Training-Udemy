import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ID_FIELD from '@salesforce/schema/Account.Id';
import Name_FIELD from '@salesforce/schema/Account.Name';
import AnnualRevenue_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import Industry_FIELD from '@salesforce/schema/Account.Industry';
import Phone_FIELD from '@salesforce/schema/Account.Phone';


export default class LdsRecordViewForm extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    recordId = '001IR00001m9djRYAQ';
    fieldsOne=[ID_FIELD,Name_FIELD,AnnualRevenue_FIELD];
    fieldsTwo=[Industry_FIELD,Phone_FIELD];
}