import React from "react";
import '../app.css'
import { loops } from './TableOfSections'

let unhealthyPoint = 0
export { unhealthyPoint }


export default class QuestionBlockUnhealty extends React.Component {
    questionCard(){
        unhealthyPoint += 1
    }
    
    render(){
        return(
            <div className='checkBox'>
                <button className={this.props.Ishealt} onClick={this.questionCard}>{this.props.Question}</button>
            </div>
        )
    }
}

setTimeout(() => {
    
}, 10);