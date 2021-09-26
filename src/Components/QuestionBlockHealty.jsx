import React from "react";
import '../app.css'

let healthyPoint = 0
export { healthyPoint }

export default class QuestionBlockHealty extends React.Component {
    aswerQuestion(){
        healthyPoint += 1
    }

    render(){
        return(
            <div className='checkBox'>
                <button className={this.props.Ishealt} onClick={this.aswerQuestion}>{this.props.Question}</button>
            </div>
        )
    }
}

