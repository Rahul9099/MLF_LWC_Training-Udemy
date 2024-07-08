import { LightningElement, wire } from 'lwc';

import CAR_OBJECT from '@salesforce/schema/Car__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import NAME_FIELD from '@salesforce/schema/Car__c.Name'
import NUMBER_OF_SEATS_FIELD from '@salesforce/schema/Car__c.seats__c'
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
import FUEL_TYPE_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c'
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c'
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_Url__c'
import { getFieldValue } from 'lightning/uiRecordApi';

//import CarRecordId_MC from '@salesforce/messageChannel/CarRecordId__c';
//import { MessageContext,subscribe,unsubscribe,APPLICATION_SCOPE } from 'lightning/messageService';

export default class CarCard extends LightningElement {

    car = CAR_OBJECT
    recordId = 'a0R5j00000CajZJEAZ'
    image;
    carName;
    seats = NUMBER_OF_SEATS_FIELD;
    category=CATEGORY_FIELD;
    msrp = MSRP_FIELD;
    make = MAKE_FIELD;
    fuel = FUEL_TYPE_FIELD;
    control = CONTROL_FIELD;
    subscription;

    // @wire(MessageContext)
    // context

    // connectedCallback(){
    //     this.subscription = subscribe(this.context,CarRecordId_MC,(message)=>{this.handleMessage(message)},{'scope':APPLICATION_SCOPE})
    // }

    // handleMessage(message){
    //     this.recordId = message.carRecordId;
    // }

    // errorCallback(){
    //     unsubscribe(this.subscription);
    // }
    
    handleRecordViewOnLoad(event){
        const {records} = event.detail
        const record = records[this.recordId];
        this.carName = getFieldValue(record,NAME_FIELD);
        this.image = getFieldValue(record,PICTURE_URL_FIELD);
    }

    get notAvailable(){
        return false;
    }
}