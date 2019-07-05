import React from 'react'
import '../styles/styles.css'
import {ButtonGroup} from './ButtonGroup'

export const ButtonPad = (props) => {
    const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];
    const operators = ["C", "DEL", "/", "*", "-", "+"];
  
//     const numbers = [
//         {
//            id: 'one',
//            text: 1 
//         },
//         {
//             id: 'two',
//             text: 2
//         },
//         {
//             id: 'three',
//             text: 3
//         },
//         {
//             id: 'four',
//             text: 4
//          },
//          {
//              id: 'five',
//              text: 5
//          },
//          {
//              id: 'six',
//              text: 6
//          },
//          {
//             id: 'seven',
//             text: 7
//          },
//          {
//              id: 'eight',
//              text: 8
//          },
//          {
//              id: 'nine',
//              text: 9
//          },
//          {
//             id: 'zero',
//             text: 0
//          }
// ]

// const operators = [
//          {
//              id: 'clear',
//              text: 'C'
//          },
//          {
//              id: 'all-clear',
//              text: 'AC'
//          },
//          {
//              id: 'equals',
//              text: '=='
//          },
//          {
//              id: 'add',
//              text: '+'
//          },
//          {
//             id: 'multiply',
//             text: 'x'
//         },
//         {
//             id: 'divide',
//             text: '/'
//         },
//         {
//             id: 'percent',
//             text: '%'
//         },
//         {
//             id: 'subtract',
//             text: '-'
//         },
//         {
//             id: 'decimal',
//             text: '.'
//         }
//     ]
    
    return (
        <div className="Button">
      {
    //     operators.map((btn, i) => 
    //     <ButtonGroup 
    //         key={i}
    //         name={btn.text}
    //         id={btn.id}
    //         click={props.click}>
    //             {btn.text}
    //         </ButtonGroup>
    //         )
    //   }
    //   {
    //     numbers.map((number, i) => 
    //     <ButtonGroup
    //         key={i}
    //         name={number.text}
    //         id={number.id}
    //         click={props.click}>
    //             {number.text}
    //         </ButtonGroup>
    //     )
    //   }
      }
      <div className="calculator-side-menu">
        <ButtonGroup buttons={operators} click={props.click} />
      </div>
      <div className="calculator-main">
        <ButtonGroup buttons={buttons} click={props.click} />
      </div>
    </div>
    )
}