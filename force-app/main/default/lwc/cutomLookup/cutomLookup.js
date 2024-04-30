import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/CustomLookup.getAccount'
export default class CutomLookup extends LightningElement {

    timer;
    searchKey;
    searchData=[];
    isDataAvailable;
    pillArray=[];
    handleSearchInput(event){
      window.clearTimeout(this.timer);
      this.timer=setTimeout(()=>{
            this.searchKey =event.target.value;
        },300)   
    }
    handleSelect(event){
        let recid = event.target.getAttribute('data-recid');
        console.log('--recid'+recid);
       const pl = this.searchData.find(item=>item.Id === recid);
       this.pillArray.push({
            type: 'icon',
            label: pl.Name,
            name: pl.Name,
            iconName: 'standard:account',
            alternativeText: 'Account',
       })
    }

    @wire(getAccount,{})
    getAccountData({data,error}){
        if(data){
            this.searchData =data;
            console.log('--data'+data);
            this.isDataAvailable =data.length>0?true:false;
        }
    }
    handleItemRemove(event) {
        const index = event.detail.index;
        this.items.splice(index, 1);
    }

}