import { LightningElement } from 'lwc';
import {subscribe, unsubscribe, onError} from 'lightning/empApi';

export default class PlatformEveReceiver extends LightningElement {

    channelName = '/event/messageChannel__e';
    isSubscribeDisabled = false;
    isUnsubscribeDisabled = !this.isSubscribeDisabled;
    receivedMessage;
 
    subscription = {};

    connectedCallback(){
        this.handleSubscribe();
    }
 
    handleSubscribe() {

        const messageCallback = (response) => {
            this.handleResponse(response);
        }
 
        subscribe(this.channelName, -1, messageCallback).then(response => {
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;
        });
 
         
    }
    handleResponse(response){
        this.receivedMessage = response.data.payload.message__c;
    }
 
     
    // Handles unsubscribe button click
    handleUnsubscribe() {
        this.toggleSubscribeButton(false);
 
        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, response => {
            console.log('unsubscribe() response: ' + JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }
 

 

}