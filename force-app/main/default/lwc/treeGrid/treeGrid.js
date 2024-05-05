import { LightningElement, wire } from 'lwc';
import getAccount from 'TreeGrid.getAccount';

export default class TreeGrid extends LightningElement {
    columns=[
        {
            label:'Account Name',
            fieldName:'Name',
            type:'text'
        },
        {
            label:'Phone',
            fieldName:'Phone',
            type:'text'
        },
        {
            label:'Website',
            fieldName:'Website',
            type:'text'
        },
        {
            label:'Contact Email',
            fieldName:'Email',
            type:'email'
        },
    ]
    gridData=[];
    error;
    @wire(getAccount)
    getAccountData({data,error}){
        if(data){
            this.add_Children(data);
        }
        if(error){
            this.error = error
        }
    }
    add_Children(data){
        this.gridData = data.map(item=>{
            const {Contacts,...Accounts} = item;
            return {...Accounts,'_children':Contacts}
        })
    }
    get isAvailable(){
        return this.gridData.length > 0 ? true :false
    }
    handleError(event){
        this.error = event.detail;
    }
}