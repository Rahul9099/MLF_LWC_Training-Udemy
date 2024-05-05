import { LightningElement, wire } from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';
// Car__c schema
import CAR_OBJECT from '@salesforce/schema/Car__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import NAME_FIELD from '@salesforce/schema/Car__c.Name'
import NUMBER_OF_SEATS_FIELD from '@salesforce/schema/Car__c.seats__c'
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
import FUEL_TYPE_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c'
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c'
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_Url__c'
//import message channel
import CarSelected_Mc from '@salesforce/messageChannel/CarSelected__c';
import {APPLICATION_SCOPE,subscribe,publish,unsubscribe,MessageContext} from 'lightning/messageService'

export default class CarCard extends LightningElement {
    recordId
    carName;
    carPictureUrl;
    car=CAR_OBJECT
    categoryField =CATEGORY_FIELD;
    msrpField =MSRP_FIELD;
    fuelField = FUEL_TYPE_FIELD ;
    seatsField = NUMBER_OF_SEATS_FIELD;
    makeField =MAKE_FIELD;
    controlField = CONTROL_FIELD;
    subscription;

    @wire(MessageContext)
    context 

    connectedCallback(){
        this.subscription = subscribe(this.context,CarSelected_Mc,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.recordId = message.recordId
    }
    handleRecordLoad(event){
        const{records}=event.detail;
        console.log('---------------------------------------------------lightning view form'+JSON.stringify(event.detail));
        const recordData = records[this.recordId]
        this.carName = getFieldValue(recordData,NAME_FIELD);
        this.carPictureUrl = getFieldValue(recordData,PICTURE_URL_FIELD);
    }
    disconnectedCallback(){
        unsubscribe(this.subscription);
        this.subscription=null;
    }
}