import { LightningElement, wire } from 'lwc';
// current page ref
import {CurrentPageReference} from 'lightning/navigation';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigationInLwc extends NavigationMixin(LightningElement) {

    pageRef
    @wire(CurrentPageReference)
    getCurrentPageRef(data,error){
        if(data){ 
            this.pageRef = JSON.stringify(data);
            console.log(JSON.stringify(data));
        }
        if(error){

        }
    }
    //navigate to home page
    navigateToHomePage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'home',
            }
        })
    }
    //navigate to chatter
    navigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
               pageName:'chatter'
            }
        })
    }
    //new record page
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
    //navigate to list view
    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }
    //navigate to file
    navigateToFile(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
    //navigate to record page (view/edit)
    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName:'Contact',
                recordId:'003IU00002V9gxJYAR',
               // actionName:'view'
               actionName:'edit'
            }
        })
    }
    //navigate to record page (view/edit)
    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName:'Contact',
                recordId:'003IU00002V9gxJYAR',
               // actionName:'view'
               actionName:'edit'
            //  edit will open the record to edit
            }
        })
    }
    //navigate to tab
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
            apiName:'lwc_melonleaf_app_page'  
            }
        })
    }
    //navigate to Related record
    navigateToRelatedRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
            recordId:'001IR00001pDcyZYAS',
            objectApiName:'Account',
            relationshipApiName:'Contacts',
            actionName:'view'
            }
        })
    }
    //navigate to external web page
    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
            url:'https://www.google.com'  
            }
        })
    }
    //navigate to lwc
    navigateToLwc(){
        let defination={
            componentDef:'c:fundamentals',
            attributes:{
                recordId:'323243'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
            url:'/one/one.app#'+Buffer.from(JSON.stringify(defination),'binary').toString('base64')
           // url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

}