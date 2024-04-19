import { LightningElement,track } from 'lwc';

export default class Fundamentals extends LightningElement {
    name='User'
    isTrue=false;
   @track person={
        age:23,
        city:'Nagpur',
        lastName:'dange'
    }
    ceoList=[
        {
            id:1,
            company:'melonleaf',
            name:'rahul'
        },
        {
            id:1,
            company:'google',
            name:'chich'
        },
        {
            id:1,
            company:'amazone',
            name:'bez'
        }
    ]
    handleCityChange(event){
    //  this.person = {...this.person,'city':event.target.value};
     this.person.city =event.target.value;
    }
    handleNameChange(event){
      this.name = event.target.value;
    }
 
    get fullName(){
        return this.name.toUpperCase() +" "+ this.person.lastName.toUpperCase()
    }
   
    handleShow(){
        this.isTrue = !this.isTrue
    }
    get isShowing(){
        return this.isTrue
    }
}