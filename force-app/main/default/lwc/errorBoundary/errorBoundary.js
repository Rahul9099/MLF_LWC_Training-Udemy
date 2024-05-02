import { LightningElement, api } from 'lwc';

export default class ErrorBoundary extends LightningElement {
    @api error;
    errorMessageToDisplay='';

    connectedCallback(){
        this.errorMessageToDisplay = 'some internal error has been occur \n';
        console.log(this.error);

        // getting meaningful error message depending on error type
        // handles errors from wire & regular apex methods
        if(this.error.body){
            if (Array.isArray(this.error.body)) {
                this.errorMessageToDisplay += this.error.body.map(e => e.message).join(', ');
            }
            else if(typeof this.error.body === 'object'){
                let fieldErrors = this.error.body.fieldErrors;
                let pageErrors = this.error.body.pageErrors;
                let duplicateResults = this.error.body.duplicateResults;
                let exceptionError = this.error.body.message;
 
                if(exceptionError && typeof exceptionError === 'string') {
                    this.errorMessageToDisplay += exceptionError;
                }
                
                if(fieldErrors){
                    for(var fieldName in fieldErrors){
                        let errorList = fieldErrors[fieldName];
                        for(var i=0; i < errorList.length; i++){
                            this.errorMessageToDisplay += errorList[i].statusCode + ' ' + fieldName + ' ' + errorList[i].message + ' ';
                        }
                    }
                }
        
                if(pageErrors && pageErrors.length > 0){
                    for(let i=0; i < pageErrors.length; i++){
                        this.errorMessageToDisplay += pageErrors[i].statusCode + ' '+ pageErrors[i].message;
                    }
                }
        
                if(duplicateResults && duplicateResults.length > 0){
                    this.errorMessageToDisplay += 'duplicate result error';
                }
            }  
        }
        // handles errors from the lightning record edit form
        if(this.error.message){
            this.errorMessageToDisplay += this.error.message;
        }
        if(this.error.detail){
            this.errorMessageToDisplay += this.error.detail;
        }
    }

    closeError() {
        // reset variables
        this.errorMessageToDisplay = '';
        this.error = false;
        // create a custom event for resetting the error state
        const closeErrorEvent = new CustomEvent("errorclosed", {detail: this.error});
    
        this.dispatchEvent(closeErrorEvent);
    }
}