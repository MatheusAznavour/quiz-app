//              ! How this thing works
//  - How a quiz works. quiz will catch your choises and return you something according,
// Each question have invisible points who will determine your destiny.
//  - You need to think in the theme of the quiz to add thesses "invisibles points"
// we trying to do a quiz about healt, so i will have 2 destinys, healthy and unhealty.
//  - when the quiz end whe will to check what value is high to set the destiny.
//              ! To Do
//  TODO -> My <QuestionBlock> need to have the points to set destiny(healthy, unhealthy)
//  TODO -> When the you aswers a question it will jump next to the others.
//  TODO -> Locate this point in somewhere(dummy sql)
//  TODO -> Check your monotonous destiny.
//  TODO -> Use JQuery with TS to let people mads


import React from "react";
import './app.css'
import CurrentTableSection from './Components/TableOfSections'

export default function App(){
    return(
            <div>
                <h1>Are you healt?</h1>

                <CurrentTableSection>
                </CurrentTableSection>
            </div>
    )

}

