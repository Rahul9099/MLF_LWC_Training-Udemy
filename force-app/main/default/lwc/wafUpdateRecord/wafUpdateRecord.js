import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { deleteRecord, updateRecord } from 'lightning/uiRecordApi';
const columns =[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone',editable:true},
    {label:'Email',fieldName:'Email',editable:true},
]
export default class WafUpdateRecord extends LightningElement{

    columns=columns;
    contacts=[];
    draftValues=[];
    @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewApiName:'AllContacts'})
    getAllContact({data,error}){
        if(data){
            this.contacts = data.records.records.map(item=>{
                return {
                    "Id":this.getValues(item,"Id"),
                    "Name":this.getValues(item,"Name"),
                    "Phone":this.getValues(item,"Phone"),
                    "Email":this.getValues(item,"Email"),
                }
            })
        }
    }

    getValues(data,name){
        return data.fields[name].value
    }

    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues));
        const recordInput = event.detail.draftValues.map(item=>{
            const fields={...item}
            return {fields:fields}
        })
       const promises = recordInput.map(item=>{
            updateRecord(item)
        })
        Promise.all(promises).then(result=>{
            console.log(result);
            this.draftValues=[]
        }).catch(error=>{
            console.log(error);
        })
    }
    accountToBeDeleted=[];
    getSelectedRows(event){
        const ids = event.detail.row.id;
        const name =event.detail.action.name;
        if(name === 'delete'){
            this.deleteContacts(ids)
        }
    }
    deleteContacts(ids){
      const promises = ids.map(item=>{
        deleteRecord(item)
      })
      Promise.all(promises).then(result=>{
        console.log('deleted ='+result);
      }).catch(error=>{
        console.log(error);
      })
    }
}