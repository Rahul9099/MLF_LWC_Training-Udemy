import { LightningElement } from 'lwc';

export default class ChildLyf extends LightningElement {
    constructor(){
        super();
        console.error('child constructor');
    }
    personData
    timer;
    connectedCallback(){
        console.error('child connected callback');
        //this is to show about disconnected callback
       // window.addEventListener('click',this.handleClick)
    //   this.timer = setInterval(()=>{
    //     console.log('---set interval called (child)');
    //   },400)

        let personData = JSON.parse(localStorage.getItem('person')); 
        this.personData =personData;
        console.log(this.personData);

       // throw new error('child connected callback failed');
    }
    renderedCallback(){
        console.error('child render callback');
    }
    disconnectedCallback(){
        console.error('child disconnectedCallback callback');
        window.alert('child is removed');
       // window.removeEventListener('click',this.handleClick);
       window.clearInterval(this.timer)
        localStorage.setItem('personData',JSON.stringify(this.person));

    }
    errorCallback(err,stack){
        console.error('child error callbak'+err,stack);
    }
    handleClick(){
        console.log('child window click');
    }
    person=[];
    handleChange(event){
        const {name,value} = event.target;
        this.person[name] = value;
    }
    submitform(event){
       // event.preventDefault();
    }
}