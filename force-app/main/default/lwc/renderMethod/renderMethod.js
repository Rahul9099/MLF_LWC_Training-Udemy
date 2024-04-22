import { LightningElement } from 'lwc';
import first from './first.html';
import second from './second.html';
import defaulttemp from './renderMethod.html';

export default class RenderMethod extends LightningElement {

    currentTemplate = '';
    render(){
        if(this.currentTemplate === 'first'){
            return first;
        }else if(this.currentTemplate === 'second'){
            return second;
        }else{
            return defaulttemp;
        }
    }
    handleClick(e){
      this.currentTemplate = e.target.label;
    }
}