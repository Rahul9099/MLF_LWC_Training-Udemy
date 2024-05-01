import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapJs.getAccounts'

export default class LwcMaps extends LightningElement {

    accountData=[];
    mapMarkers=[];
    selectedMarkerValue = 'GenePoint';
    @wire(getAccounts)
    getAccountData({data,error}){
        if(data){
            console.log('--data'+JSON.stringify(data));
            this.accountData = data
            this.formatedResponse();
        }
        if(error){

        }
    }
    formatedResponse(){
       this.mapMarkers= this.accountData.map(item=>{
            return {
                location:{
                    Street:item.BillingStreet||'',
                    City:item.BillingCity||'',
                    PostalCode:item.BillingState||'',
                    State:item.BillingPostalCode||'',
                    Country:item.BillingCountry||''
                },
                icon:'utility:salesforce1',
                title:item.Name,
                value:item.Name,
                description:item.Description,
            }
        })
    }
    handleMarkerSelect(event){
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }

}