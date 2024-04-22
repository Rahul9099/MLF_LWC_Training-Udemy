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
    handleqSelector(){
       const allh1Ele= this.template.querySelectorAll("h1");
       Array.from(allh1Ele).forEach(ele=>{
        ele.innerHTML = `Change all h1 values`; 
       })
       const h1Element= this.template.querySelector(".select");
       h1Element.innerHTML = `Hello change from queryselector`;

       const child = this.template.querySelector(".child");
       child.innerHTML = `<p> hello i am child </p>`;
    }
}