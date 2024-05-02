import { LightningElement } from 'lwc';

export default class ChildError extends LightningElement {
    throwAnError(){
        throw new Error('child component throw Error')
    }

}