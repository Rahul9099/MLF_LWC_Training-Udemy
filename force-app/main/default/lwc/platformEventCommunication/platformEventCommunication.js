import { LightningElement } from 'lwc';
import publishEvent from '@salesforce/apex/PublishPlatformEveMessage.publishEvent'

export default class PlatformEventCommunication extends LightningElement {
   sms
    handleInput(e){
        this.sms = e.target.value;
    }
    handlePublish(){
        publishEvent({message:this.sms}).then(result=>{
            console.log(result+'success');
        }).catch(err=>{
            console.log(err);
        })
    }
}