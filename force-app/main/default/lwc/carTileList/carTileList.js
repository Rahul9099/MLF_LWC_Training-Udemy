import { LightningElement, track, wire } from 'lwc';
import getCarDetails from '@salesforce/apex/Car.getCarDetails'
export default class CarTileList extends LightningElement {
   @track cars=[];
    error;
    filters={}
    @wire(getCarDetails,{filters:'$filters'})
    carHandler({data,error}){
        if(data){
            console.log(JSON.stringify(data));
            this.cars = data
        }
        if(error){
            this.error =error
        }
    }
    get carslist(){
        return this.cars.length>0 ? true: false
    }
}