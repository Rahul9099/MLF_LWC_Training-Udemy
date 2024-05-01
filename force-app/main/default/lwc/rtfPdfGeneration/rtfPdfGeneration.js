import { LightningElement, api } from 'lwc';
import generatePdf from '@salesforce/apex/PdfController.generatePdf';


export default class RtfPdfGeneration extends LightningElement {
    imageUrl='https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg'
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]

    get totalAmount(){
        const val = this.services.reduce((total,curr)=>{
            return total+= curr.amount 
        },0)
        return val;
    }

    @api recordId;
    attachmentId;
    generatePdf(){
        let content = this.template.querySelector('.container');
        let contenttml = content.outerHTML;
        console.log('---content'+contenttml);
        generatePdf({contentHtml:contenttml,recordId:this.recordId}).then(result=>{
            console.log(result);
            this.attachmentId = result.Id;
            window.open(`https://cloudintellect-4b0-dev-ed.develop.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
        }).catch(err=>{
            console.log(err);
        })
    }
}