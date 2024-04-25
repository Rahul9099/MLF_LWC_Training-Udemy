import { LightningElement, wire } from 'lwc';
import getfilterContact from '@salesforce/apex/ApexWireDemo.getfilterContact'
export default class FilterDataTable extends LightningElement {

    heading=['Id','Name','Title','Email'];
    filteredData=[]
    serverData=[]
    searchKey;
    timer;
    sortDirection = 'asc'
    selectedValue='Name'
    options=[
        {label:'Name',value:'Name'},
        {label:'Title',value:'Title'},
        {label:'Email',value:'Email'},
    ]
    handleFilterChange(e){
        this.selectedValue =e.target.value;
    }
    handleSeachInput(e){
       window.clearTimeout(this.timer);
       this.searchKey =e.target.value;
       this.filterHandler(this.searchKey)
      
    }
    filterHandler(value){
        this.timer = setTimeout(()=>{
            this.filteredData = this.serverData.filter(item=>{

                //filter based on checkbox
                const val = item[this.selectedValue] ?item[this.selectedValue] : ''
                return val.toLowerCase().includes(value)
                /*filter based on all properties
                return Object.keys(item).some(key=>{
                    return item[key].toLowerCase().includes(value)
                })
                */                
            })
        },1000)
       
    }
    @wire(getfilterContact)
    contactHandler({data,error}){
        if(data){
            console.log('---data'+JSON.stringify(data));
            this.serverData=data;
            this.filteredData=data;
        }
    }

    /*sorting of table */
    sortHandler(event){
        this.sortedBy =event.target.value;
        this.filteredData =[...this.sortedBy(this.filteredData)];
    }
    sortBy(data){
        const cloneData =[...data];
        cloneData.sort((a,b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0;
            }
            this.sortDirection === 'desc' ?a[this.sortedBy] > b[this.sortedBy] ?-1:1:a[this.sortedBy]<b[this.sortedBy] ?-1:1
        })
        return cloneData;
    }
}