import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'; 
import { registerListener, } from 'c/pubsub';
import { unregisterAllListeners } from 'c/pubsub';
import { unregisterListener } from '../pubsub/pubsub';

export default class PubsubB extends LightningElement {

    @wire(CurrentPageReference)
    pageRef
    compAmessage
    connectedCallback(){
        registerListener('message',(message)=>{
            this.handlePubSubMessage 
        },this)
    }
    disconnectedCallback(){
        unregisterAllListeners(this)
    }

    handlePubSubMessage(message){
        this.compAmessage = message;
    }

    handleUnsubscribe(){
        unregisterListener('message',this.handlePubSubMessage,this)
    }
}