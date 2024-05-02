import { LightningElement } from 'lwc';

const API_URL = `https://www.googleapis.com/books/v1/volumes?q=`
export default class BookApiCallout extends LightningElement {

    serverResponse = [];
    query='Man';
    timer;
    error;
    connectedCallback(){
       this.fetchData()
    }
    async fetchData(){
        try {
            const response = await fetch(`${API_URL}${query}`);
            const data = await response.json();
            this.serverResponse = data.items;
        } catch (error) {
            console.log('---error in fetch api'+error);
        }
    }

    handleSearch(event){
        window.clearTimeout(this.timer)
        this.query = event.target.value;
        timer= setTimeout(()=>{
            this.fetchData();
        },300)
    }

    handleError(event){
        this.error = event.detail;
    }
}