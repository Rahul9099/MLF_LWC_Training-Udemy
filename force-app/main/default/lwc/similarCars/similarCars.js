import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import MAKE_TYPE_FIELD from '@salesforce/schema/Car__c.Make__c'
import getSimilarCars from '@salesforce/apex/Car.getSimilarCars';
import {NavigationMixin} from 'lightning/navigation';
import Car from '@salesforce/schema/Car__c';
export default class SimilarCars extends NavigationMixin(LightningElement) {
    @api recordId;

    objectApiName=Car 
    @wire(getRecord,{recordId:'$recordId',fields:[MAKE_TYPE_FIELD]})
    getCarRecord

    carData;
    error;
   fetchSimilarData(){
    getSimilarCars({recordId:this.recordId,makeType:this.getCarRecord.data.fields.Make__c.value}).then((result)=>{
        this.carData =result
    }).catch((error)=>{
        this.error =error
    })
   }

   handleViewDetailsClick(event){
    this[NavigationMixin.Navigate]({
        type:'standard__recordPage',
        attributes:{
            recordId:'',
            objectApiName:this.objectApiName,
            actionName:'view'
        }
    })
   }
}