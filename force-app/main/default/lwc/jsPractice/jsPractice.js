import { LightningElement } from 'lwc';

export default class JsPractice extends LightningElement {
    person ={
        age:23,
        name:'xht',
        gender:'male',
        marriedStatus:'unmarried'
    }
    data = [
        {
        "isTrusted": false,
        "composed": false,
        "detail": {
          "selectedRows": [
            {
              "Id": "003IR00001dVIJ1YAO",
              "Name": "Andy Young",
              "Phone": "(785) 241-6200",
              "Email": "a_young@dickenson.com"
            }
          ],
          "config": {
            "action": "rowSelect",
            "value": "003IR00001dVIJ1YAO"
          }
        },
        "type": "rowselection",
        "target": {},
        "currentTarget": {},
        "eventPhase": 2,
        "bubbles": false,
        "cancelable": false,
        "defaultPrevented": false,
        "timeStamp": 13210.699999988079,
        "srcElement": {},
        "returnValue": true,
        "cancelBubble": false,
        "NONE": 0,
        "CAPTURING_PHASE": 1,
        "AT_TARGET": 2,
        "BUBBLING_PHASE": 3,
        "path": [
          {},
          {}
        ]
      },{
        "isTrusted": false,
        "composed": false,
        "detail": {
          "selectedRows": [
            {
              "Id": "003IR00001dVIJ1YAO",
              "Name": "Andy Young",
              "Phone": "(785) 241-6200",
              "Email": "a_young@dickenson.com"
            }
          ],
          "config": {
            "action": "rowSelect",
            "value": "003IR00001dVIJ1YAO"
          }
        },
        "type": "rowselection",
        "target": {},
        "currentTarget": {},
        "eventPhase": 2,
        "bubbles": false,
        "cancelable": false,
        "defaultPrevented": false,
        "timeStamp": 13210.699999988079,
        "srcElement": {},
        "returnValue": true,
        "cancelBubble": false,
        "NONE": 0,
        "CAPTURING_PHASE": 1,
        "AT_TARGET": 2,
        "BUBBLING_PHASE": 3,
        "path": [
          {},
          {}
        ]
      },{
        "isTrusted": false,
        "composed": false,
        "detail": {
          "selectedRows": [
            {
              "Id": "003IR00001dVIJ1YAO",
              "Name": "Andy Young",
              "Phone": "(785) 241-6200",
              "Email": "a_young@dickenson.com"
            }
          ],
          "config": {
            "action": "rowSelect",
            "value": "003IR00001dVIJ1YAO"
          }
        },
        "type": "rowselection",
        "target": {},
        "currentTarget": {},
        "eventPhase": 2,
        "bubbles": false,
        "cancelable": false,
        "defaultPrevented": false,
        "timeStamp": 13210.699999988079,
        "srcElement": {},
        "returnValue": true,
        "cancelBubble": false,
        "NONE": 0,
        "CAPTURING_PHASE": 1,
        "AT_TARGET": 2,
        "BUBBLING_PHASE": 3,
        "path": [
          {},
          {}
        ]
      },{
        "isTrusted": false,
        "composed": false,
        "detail": {
          "selectedRows": [
            {
              "Id": "003IR00001dVIJ1YAO",
              "Name": "Andy Young",
              "Phone": "(785) 241-6200",
              "Email": "a_young@dickenson.com"
            }
          ],
          "config": {
            "action": "rowSelect",
            "value": "003IR00001dVIJ1YAO"
          }
        },
        "type": "rowselection",
        "target": {},
        "currentTarget": {},
        "eventPhase": 2,
        "bubbles": false,
        "cancelable": false,
        "defaultPrevented": false,
        "timeStamp": 13210.699999988079,
        "srcElement": {},
        "returnValue": true,
        "cancelBubble": false,
        "NONE": 0,
        "CAPTURING_PHASE": 1,
        "AT_TARGET": 2,
        "BUBBLING_PHASE": 3,
        "path": [
          {},
          {}
        ]
      }]
    connectedCallback(){
        const keys=Object.keys(this.person);
        console.log(keys);
        const values=Object.values(this.person);
        console.log(values);
        const arr=this.data.map(curr=>{
            console.log(curr.selectedRows);
            const flat = curr.selectedRows
            const ans = flat.flat();
            console.log(ans);
        })
    }
    
}