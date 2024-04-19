import { LightningElement } from 'lwc';

export default class LwcRefsDemo extends LightningElement {
    handleSubmit(){
        const name =this.refs.Name.value;
        const age =this.refs.Age.value;
        console.log(this.refs.Age.value);
        this.refs.Ans.innerHTML = `<p>name is${name},age is ${age}</p>`
    }
}