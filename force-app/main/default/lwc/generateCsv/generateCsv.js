import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/GenerateCsv.getAccount'

export default class GenerateCsv extends LightningElement {

    accountData=[]
    @wire(getAccount)
    acc({data,error}){
        if(data){
            this.accountData=data;
        }
    }
    
    accountHeaders={
        Id:'Record Id',
        Name:'Name',
        Industry:'Industry',
        AnnualRevenue:'Annual Revenue'
    }


    downloadCSVFile() {   
        let rowEnd = '\n';
        let csvString = '';
        // this set elminates the duplicates if have any duplicate keys
        let rowData = new Set();
 
        // getting keys from data
        this.accountData.forEach(function (record) {
            Object.keys(record).forEach(function (key) {
                rowData.add(key);
            });
        });
 
        // Array.from() method returns an Array object from any object with a length property or an iterable object.
        rowData = Array.from(rowData);
         
        // splitting using ','
        csvString += rowData.join(',');
        csvString += rowEnd;
 
        // main for loop to get the data based on key value
        for(let i=0; i < this.accountData.length; i++){
            let colValue = 0;
 
            // validating keys in data
            for(let key in rowData) {
                if(rowData.hasOwnProperty(key)) {
                    // Key value 
                    // Ex: Id, Name
                    let rowKey = rowData[key];
                    // add , after every value except the first.
                    if(colValue > 0){
                        csvString += ',';
                    }
                    // If the column is undefined, it as blank in the CSV file.
                    let value = this.accountData[i][rowKey] === undefined ? '' : this.accountData[i][rowKey];
                    csvString += '"'+ value +'"';
                    colValue++;
                }
            }
            csvString += rowEnd;
        }
 
        // Creating anchor element to download
        let downloadElement = document.createElement('a');
 
        // This  encodeURI encodes special characters, except: , / ? : @ & = + $ # (Use encodeURIComponent() to encode these characters).
        downloadElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);
        downloadElement.target = '_self';
        // CSV File Name
        downloadElement.download = 'Contact Data.csv';
        // below statement is required if you are using firefox browser
        document.body.appendChild(downloadElement);
        // click() Javascript function to download CSV file
        downloadElement.click(); 
    }


   

}