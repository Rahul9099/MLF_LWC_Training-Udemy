import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

import {APPLICATION_SCOPE,subscribe,publish,unsubscribe,MessageContext} from 'lightning/messageService'

export default class LmsCompA extends LightningElement {

    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscription = subscribe(this.context,SAMPLEMC,(message)=>{handleMessage},{scope:APPLICATION_SCOPE})
    }
    message
    handleChange(event){
        this.message =event.target.value;
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