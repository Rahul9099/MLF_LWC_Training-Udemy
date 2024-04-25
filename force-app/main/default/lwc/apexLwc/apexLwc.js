import { LightningElement, wire } from 'lwc';
import getAccountDetails from '@salesforce/apex/ApexWireDemo.getAccountDetails';

export default class ApexLwc extends LightningElement {

    account
    selected=''
    handleChange(e){
        this.selected = e.target.value;
    }
    get options(){
        return [
            {label:'Customer - Channel',value:'Customer - Channel'},
            {label:'Customer - Direct',value:'Customer - Direct'},
            {label:'Energy',value:'Energy'}
        ]
    }
    @wire(getAccountDetails,{Acctype:'$selected'})
    accountDetails({data,error}){
        if(data){
            console.log('---'+JSON.stringify(data));
            this.account=data.map(item=>{
                let type
                if(item.type === 'Customer - Channel'){
                    type = 'Channel'
                }
                if(item.type === 'Customer - Direct'){
                    type = 'Direct'
                }
                if(item.type === null){
                    type = '--------'
                }
                return {...item,type}
            })
        }
        if(error){
        }
    }

}