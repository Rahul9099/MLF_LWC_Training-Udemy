import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    API_URL = `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`;
    questions=[
        {id:'Question 1',
          que:'How many limbs in human?',
          options:{
            a:1,
            b:4,
            c:3,
            d:'None of above'
          },
          correct:'1'
        },
        {id:'Question 2',
          que:'How many hands in human?',
          options:{
            a:1,
            b:4,
            c:2,
            d:'None of above'
          },
          correct:'2'
        },
        {id:'Question 3',
          que:'How many teeth in human?',
          options:{
            a:32,
            b:4,
            c:3,
            d:'None of above'
          },
          correct:'32'
        }
    ]

    score = 0;
    handleReset(){
        this.score = 0;
    }
    handleClick(event){
        console.log('name',event.target.name);
        let name = event.target.name;
        console.log('value',event.target.value);
        let value = event.target.value;
        this.questions.map((it)=>{
            if(it.id == name){
                if(it.correct == value){
                    this.score ++;
                }
            }
        })
    }

}