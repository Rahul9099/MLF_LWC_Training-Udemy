import { LightningElement, wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';

export default class CarFilter extends LightningElement {
    filters={
        searchKey:'',
        maxPrice:999999
    }
    @wire(getObjectInfo,{objectApiName:CAR_OBJECT})
    carObject

    @wire(getPicklistValues,{recordTypeId:'$carObject.data.defaultRecordTypeId',fieldApiName:CATEGORY_FIELD})
    categories

    @wire(getPicklistValues,{recordTypeId:'$carObject.data.defaultRecordTypeId',fieldApiName:MAKE_FIELD})
    makeType

    handleCategoryBox(event){
        let value = event.target.value
        const filter = {...this.filters,'searchKey':value}
        this.filters = filter
    }

    handleMaxPriceChange(event){
        let value = event.target.value
        const filter = {...this.filters,'maxPrice':value}
        this.filters = filter
    }
    handleCheckBox(event){
        const {name,value}= event.target.dataset;
        console.log('name'+name);
        console.log('value'+value);
    }


}