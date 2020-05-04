import React, { Component } from 'react'
import "./credit_card.css"

/* validation function  */


const controleNumber = numberCard => {
           

            let n = numberCard.toString()
            

            let resultStr = ''
            for(let i =0; i <16; i= i+4) {
              resultStr = resultStr + n.slice(i, i + 4)+" "
            }
            return resultStr
          }
const controleName = str =>{
            let azAZ=/[a-zA-Z ]/
            let rslt=azAZ.test(str)
            let rsltFinal
            if(rslt===true){
                
                rsltFinal=str.toUpperCase()
                
            }
            return rsltFinal
        }
const controleDate = jourMois =>{
            let ddDD =/\d/
            let rst = ddDD.test(jourMois)
            let final = " "
            if (rst===true){
            if(jourMois.slice( 0, 2 )<13 &&  jourMois.slice( 2, 4 )>19){
                return final = final + jourMois.slice( 0, 2 )+"/"+jourMois.slice( 2,4 )
                }
            
            }
            


}


  /* fin validation function */


class Input extends Component {
    constructor(){
        super()
        /* state rib , name , date */
        this.state={
            numberCard: "****************",
            nameCard : " ",
            dateCard: "MMYY",

        } 
             /* fin state  */
    }
    /* setstate rib */

    changeNumber =(event)=>{

        
        this.setState(
            {
                numberCard : event.target.value
            }
        )
        
         
    }
    /* fin setstate rib */

    /* state name */
    changeName =(n)=>{
        this.setState(
            {
                  nameCard : n.target.value
                
            }
        )
        
    }
    /* fin setstate name */

    /* setstate date */
    changeDate =(d)=>{
        this.setState(
            {
                dateCard : d.target.value
            }
        )
    }
    /* fin setstate date */
    render(){
        return(
            <div>

                <h1>credit card</h1>
                <div className="page_card">
 
                    <div className="input_card">
                        <h2>Insert here</h2>
                        <form>
                            <h4>Card number</h4>
                            <input   placeholder="insert 16 number"type="number" onFocus={this.state.numberCard} onChange= {this.changeNumber} ></input>
                            <h4>Name</h4>
                            <input  placeholder="your name" type="text" onChange={this.changeName} ></input>
                            <h4>Expiration date</h4>
                            <input  placeholder="MM/YY" type="text" onChange={this.changeDate}></input>
                        </form>
                    </div>
                    <div className="card">
                        <div className="head">
                        <div className="logo"></div>
                        <img  className="image" src ={"data:image/png;base64,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"}></img>
                        </div>
                        <div className="numero">
                            {/* appl function */}
                            <h2> N° : {controleNumber(this.state.numberCard)} </h2>
                        </div>
                        <div className="nom">
                            <h2> Name : {controleName(this.state.nameCard)} </h2>
                        </div>
                        <div className="date">
                            <h2> Expiry : {controleDate(this.state.dateCard)} </h2>
                            {/* fin appl function */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Input