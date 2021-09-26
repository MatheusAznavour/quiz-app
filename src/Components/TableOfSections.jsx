import React from "react";
import QuestionBlockHealty from './QuestionBlockHealty'
import QuestionBlockUnhealty from './QuestionBlockUnhealty'
import Results from './Results'

import { healthyPoint } from './QuestionBlockHealty'
import { unhealthyPoint } from './QuestionBlockUnhealty'

let loops = 0

const images = [
<img src="https://media.istockphoto.com/photos/broccoli-on-white-picture-id1135308302?k=20&m=1135308302&s=612x612&w=0&h=KyMlWfbSv0Xhc5AzdY7xqhM2rhbKTPkbZKwRSW8AE2w=" alt=""/>,
<img src="https://flabfix.com/wp-content/uploads/2016/05/Eat-healthy-without-cooking.png"></img>,
<img src="https://cdn.shopify.com/s/files/1/0066/7569/3639/files/how-to-eat-healthy_600x600.jpg?v=1611987959"></img>,
<img src="https://www.who.int/images/default-source/wpro/countries/philippines/feature-stories/6-f2-300032016-ph-06573-lr.tmb-1366v.jpg?sfvrsn=f4bc39b4_2"></img>

]

//Description index
const descriptionText = [
    "We always have time to change, well sometimes we have..",
    "I know somethimes is hard to change but i know you can."
]
const dcIndex = Math.floor(Math.random() * descriptionText.length);

const arrayQuestions = [
    <div>
        <div>{images[0]}</div>
        <h3>On morning</h3>
        <QuestionBlockHealty Question='Eat Eggs' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Breakfast Cereals' ></QuestionBlockUnhealty>
        <QuestionBlockHealty Question='Oatmeal' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Pancakes and Waffles' ></QuestionBlockUnhealty>
    </div>,
    <div>
        <div>{images[1]}</div>
        <h3>On late-night</h3>
        <QuestionBlockHealty Question='Tart Cherries' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Pizza' ></QuestionBlockUnhealty>
        <QuestionBlockHealty Question='Banana With Almond Butter' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Chocolate' ></QuestionBlockUnhealty>
    </div>,
    <div>
        <div>{images[2]}</div>
        <h3>On night</h3>
        <QuestionBlockHealty Question='Turkey' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Ice Cream' ></QuestionBlockUnhealty>
        <QuestionBlockHealty Question='White Rice' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Wine' ></QuestionBlockUnhealty>
    </div>,
    <div>
        <div>{images[3]}</div>
        <h3>On your rotine, you usually do</h3>
        <QuestionBlockHealty Question='Consume less salt and sugar' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Whatch TV more than 3 hours' ></QuestionBlockUnhealty>
        <QuestionBlockHealty Question='Don’t smoke' ></QuestionBlockHealty>
        <QuestionBlockUnhealty Question='Don’t are active' ></QuestionBlockUnhealty>
    </div>,
    <Results
    resultTitle={`Eat better make you better!`}
    resultDescription={descriptionText[dcIndex]}
    ></Results>
]


export default class CurrentTableSection extends React.Component{
    state = {
        loops: Number
      };

    nextQuestions = () =>{
        if(loops == arrayQuestions.length - 1){
            return
        } else {
            loops += 1
            this.forceUpdate()
        }
    }
    
    lastQuestions = () =>{
        if(loops == 0){
            return
        } else{
            loops -= 1
            this.forceUpdate()
        }
    }

    render(){
        return(
            <div>
                <div className="PageNumber">
                <span>Question: {loops}</span>
                </div>
                <div className='QuestionBox'>
                    <div className='Question'> {arrayQuestions[loops]} </div>
                    <button className='QuestionLastBtn' onClick={this.lastQuestions}> Last </button>
                    <button className='QuestionNextBtn' onClick={this.nextQuestions}> Next </button>
                </div>
            </div>
        )
    }
}