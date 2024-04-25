import { LightningElement,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import { getPicklistValues,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Id from '@salesforce/user/Id';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
import USER_EMAIL_FIELD from '@salesforce/schema/User.Email'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class WafWireAdaperFunction extends LightningElement {
    userId = Id
/*
      @wire(getRecord,{ recordId: Id,fields:[USER_EMAIL_FIELD,USER_NAME_FIELD]})
     userDetails({data,error}){
        if(data){
           // console.log('----user data'+JSON.stringify(data)); 
        }
        if(error){
          //  console.log('--eroor'+error);
        }

    }

    

    objArray =[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    @wire(getObjectInfos,{objectApiName:'$objArray'})
    multipleObject({data,error}){
        if(data){
            console.log("---mulitple objects"+data);
        }
        if(error){
            console.log(error);
        }
    }

     @wire(getPicklistValues,{})
    picklistValue({data,error}){
        if(data){
            console.log("---picklist"+data);
        }
        if(error){
            console.log(error);
        }
    }

*/
   recordTypeId
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accountWire({data,error}){
        if(data){
            console.log('----object data'+JSON.stringify(data.defaultRecordTypeId));
            this.recordTypeId =data.defaultRecordTypeId;
        }
        if(error){
            console.log("---error "+error);
        }
    }
    //get picklist values
    array=[]
    get options(){
        return this.array
    }
    get value(){
        return this.array[0];
    }
   @wire(getPicklistValues,{recordTypeId:'$recordTypeId',fieldApiName:INDUSTRY_FIELD})
   picklistValues({data,error}){
    if(data){
        console.log('----picklist data'+JSON.stringify(data));
        this.array = data.map(item =>({label:item.label,value:item.value}))
    }
    if(error){
        console.log('--pick'+error);
    }
   }
}