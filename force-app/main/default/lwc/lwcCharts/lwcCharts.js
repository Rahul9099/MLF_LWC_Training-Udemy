import { LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import chartJs from '@salesforce/resourceUrl/chartJs';

export default class LwcCharts extends LightningElement {

    //to load a script after the component has 
    //been completely rendered in dom
    isRender=false;
    renderedCallback(){
        if(this.isRender){
            return
        }
        loadScript(chartJs).then(result=>{
            console.log('---chart js script loaded');
            this.isRender = true;
        }).catch(error=>{
            console.log('---error while loading script');
        })
    }
}