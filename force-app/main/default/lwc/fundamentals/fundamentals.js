import { LightningElement,api,track } from 'lwc';

export default class Fundamentals extends LightningElement {
    @api recordId
    name='User'
    isTrue=false;
   @track person={
        age:23,
        city:'Nagpur',
        lastName:'dange'
    }
   @track props={
        age:0,
        onclick:this.handleIncrement.bind(this)
    }
    handleIncrement(){
        this.props.age += 1;
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
    isLoaded = false
    renderedCallback(){
        if(this.isLoaded){return}

        const style =document.createElement('style');
        style.innerText = `c-shadow-dom-styling .slds-button{
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style);
        this.isLoaded = true;
    }

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