import { LightningElement, track, wire } from 'lwc';
import getCarDetails from '@salesforce/apex/Car.getCarDetails';

import {APPLICATION_SCOPE,subscribe,publish,unsubscribe,MessageContext} from 'lightning/messageService'

import SAMPLE_MC from '@salesforce/messageChannel/SampleMessageChannel__c';
import CarSelected_Mc from '@salesforce/messageChannel/CarSelected__c';

export default class CarTileList extends LightningElement {
   @wire(MessageContext)
   context;
   subscription;
   selectedCarTile

   connectedCallback(){
    this.subscription = subscribe(this.context,SAMPLE_MC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
   }

   @track cars=[];
    error;
    filterMessage;
    filters={}
    @wire(getCarDetails,{filters:'$filters'})
    carHandler({data,error}){
        
        if(data){
            console.log(JSON.stringify(data));
            this.cars = data
        }
        if(error){
            this.error =error
        }
    }
    get carslist(){
        return this.cars.length>0 ? true: false
    }
    handleMessage(message){
        this.filters = {...message.filters}
    }

    disconnectedCallback(){
        unsubscribe(this.subscription)
    }

    handleSelectedCar(event){
        this.selectedCarTile = event.detail.recordId;
        publish(this.context,CarSelected_Mc,{
            recordId:this.selectedCarTile
        })
    }
    
}