import { LightningElement } from 'lwc';
import img from '@salesforce/resourceUrl/DemoImage'
import label from '@salesforce/label/standarLabel';

// content assest
import tcFile from '@salesforce/contentAssetUrl/tcFile'

// Internationalization
import internationalizationPropertyName from '@salesforce/i18n/internationalizationProperty'
import currency from '@salesforce/i18n/currency'

// local
import local from '@salesforce/i18n/locale'

// permission check
import hasPermission from '@salesforce/userPermission/ViewAllData';
export default class SectionFifteen extends LightningElement {

    get image(){
        return img;
    }
    get file(){
        return tcFile;
    }
    get hasPermission(){
        return hasPermission
    }
/*
    num = 8347.58;
    formatedNum = new Intl.NumberFormat(local,{
        style:'currency',
        currency:currency,
        compactDisplay:'symbol'
    }).format(this.num);
*/    
}