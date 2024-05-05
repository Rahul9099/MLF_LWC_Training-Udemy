import { LightningElement } from 'lwc';
import fontawsome from '@salesforce/resourceUrl/fontawsome';
import { loadStyle,loadScript } from 'lightning/platformResourceLoader';

export default class MemoryGame extends LightningElement {
    gameArray=[]

    isRender = false;
    renderedCallback(){
        if(this.isRender){
            return
        }else{
            loadStyle(this,fontawsome+'/fontawesome/css/font-awesome.min.css').then(result=>{
                console.log('---script load sucessfully');
                this.isRender =true;
            }).catch(error=>{
                console.log('--error in script loading');
            }
            )
        }
    }



}