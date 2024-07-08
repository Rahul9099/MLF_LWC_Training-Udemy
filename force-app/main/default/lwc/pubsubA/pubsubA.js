import { LightningElement, wire } from 'lwc';
import {registerListener,fireEvent} from 'c/pubsub';
import {currentPageReference} from 'lightning/navigation';
export default class PubsubA extends LightningElement {

    @wire(currentPageReference)
    pageRef

    message = 'send message';

    sendMessage(){
        fireEvent(this.pageRef,'message',this.message);
    }
}