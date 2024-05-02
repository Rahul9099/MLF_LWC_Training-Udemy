import { LightningElement, api } from 'lwc';

export default class ErrorThrowComponent extends LightningElement {
    @api recordId;
    error;

    //check if error boundary work for decendent childeren error also
    //handleError form child
    errorCallback(error,stack){
        this.error = error;
    }

    //for record edit form errors
    handleFormError(event){
        this.error = event.detail;
        console.log('---form error'+event);
    }
    // handle errors from self
    handleError(error){
        this.error =  error.detail.value;   
    }
}