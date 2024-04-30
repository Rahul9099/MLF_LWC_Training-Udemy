import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE,publish,subscribe,unsubscribe,MessageContext} from 'lightning/messageService';

export default class LmsCompB extends LightningElement {
    @wire(MessageContext)
    context;
    subsciption
    connectedCallback(){
       this.subsciption = subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    message
    data
    get value(){
        return this.data.lmsData
    }
    handleChange(event){
        this.message =event.target.value;
    }
    handleClick(){
       const values={lmsData:this.message}
       publish(this.context,SAMPLEMC,values);
    }
    handleMessage(message){
        if(message.receipent === 'sales'){
            this.data = message.values.lmsData;
        }

    }
    handleUnSubscribe(){
        unsubscribe(this.subsciption)
        this.subsciption = null;
    }
}