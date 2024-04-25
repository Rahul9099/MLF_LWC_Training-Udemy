import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ApexWireDemo.getContacts';
import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex'

const columns=[
    {label:'First Name',fieldName:'FirstName',editable:true},
    {label:'Last Name',fieldName:'LastName',editable:true},
    {label:'Email',fieldName:'Email',type:'email'},
]

export default class RefreshApex extends LightningElement {

    columns =columns;
    draftValues=[];
    handleSave(event){
        console.log('---draft values'+JSON.stringify(event.detail.draftValues));
        this.draftValues = event.detail.draftValues
        const recordToUpdate = this.draftValues.map((item)=>{
            const fields = {...item}
            return {fields}
        })
        console.log('---record input'+JSON.stringify(recordToUpdate));
        const promises = recordToUpdate.map((item)=>{updateRecord(item)});
        Promise.all(promises).then(result=>{
            console.log('---sucess update'+result);
            this.draftValues=[];
            return refreshApex(this.contacts);
        }).catch((error)=>{
            console.log('---unsuc'+error);
        })
    }
    @wire(getContacts)
    contacts

    get isContact(){
        console.log(this.contacts.data);
        return this.contacts && this.contacts.data && this.contacts.data.length >0? true : false
    }

}