import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

import {APPLICATION_SCOPE,subscribe,publish,unsubscribe,MessageContext} from 'lightning/messageService'

export default class LmsCompA extends LightningElement {

    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscription = subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    message
    messageSentFromB;
    handleMessage(event){
        this.messageSentFromB = event.lmsData
    }
    handleChange(message){
        this.message =message.target.value;
    }
    handleClick(){
       const values={lmsData:this.message}
       publish(this.context,SAMPLEMC,values);
    }
    handleUnSubscribe(){
        unsubscribe(this.subsciption)
        this.subsciption = null;
    }
}