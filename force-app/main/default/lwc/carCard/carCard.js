import { LightningElement } from 'lwc';
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

export default class CarCard extends LightningElement {
    recordId='a08IR00004J94kQYAR'
    carName;
    carPictureUrl;
    car=CAR_OBJECT
    categoryField =CATEGORY_FIELD;
    msrpField =MSRP_FIELD;
    fuelField = FUEL_TYPE_FIELD ;
    seatsField = NUMBER_OF_SEATS_FIELD;
    makeField =MAKE_FIELD;
    controlField = CONTROL_FIELD;

    handleRecordLoad(event){
        const{records}=event.detail;
        const recordData = records[this.recordId]
        this.carName = getFieldValue(recordData,NAME_FIELD);
        this.carPictureUrl = getFieldValue(recordData,PICTURE_URL_FIELD);
    }
}