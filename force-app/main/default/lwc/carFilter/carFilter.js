import { LightningElement, wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

import {APPLICATION_SCOPE,subscribe,publish,unsubscribe,MessageContext} from 'lightning/messageService'


export default class CarFilter extends LightningElement {

    @wire(MessageContext)
    context;
    timer;

    DELAY = 300
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
        this.publishData()
    }

    handleMaxPriceChange(event){
        let value = event.target.value
        const filter = {...this.filters,'maxPrice':value}
        this.filters = filter
        this.publishData()
    }
    handleCheckBox(event){
        if(!this.filters.categories){
            const categories = this.categories.data.values.map(item=>item.value);
            const makeType = this.makeType.data.values.map(item=>item.value);
            this.filters={...this.filters,categories,makeType}
        }
        const {name,value}=event.target.dataset;
        if(event.target.checked){
            if(!this.filters[name].includes(value)){
                this.filters[name]=[...this.filters[name],value]
            }
        }else{
            this.filters[name] = this.filters[name].filter(item=>item!=value);
        }
        this.publishData()
    }


    publishData(){
        window.clearTimeout(this.timer);
        this.timer= setTimeout(()=>{
            publish(this.context,SAMPLEMC,{
                filters:this.filters
            })
        },this.DELAY)
       
    }
}