import { healthyPoint } from './QuestionBlockHealty'
import { unhealthyPoint } from './QuestionBlockUnhealty'

function solvePoints(){
    if(healthyPoint > unhealthyPoint){
        return 'Healty'
    } else if(unhealthyPoint > healthyPoint){
        return 'unhealty'
    } else{
        return 'You need to aswer!'
    }
}

export default function Results(props){
    return(
        <div className='Results'>
            <h1>You're</h1>
            <div className='healtResult'>
                <h3>{solvePoints()}</h3>
            </div>

            <div className='healthyChoise'>
                <p>healthy choises: {healthyPoint}</p>
            </div>
            <div className='unhealthychoise'>
                <p>unhealthy choises: {unhealthyPoint}</p>
            </div>

            <div className='Description'>
                <h3 className='resultTitle'>{props.resultTitle}</h3>
                <p className='resultDescription'>{props.resultDescription}</p>
            </div>
        </div>
    )
}