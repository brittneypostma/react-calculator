import React from 'react'
import {Button} from './Button'
import '../styles/styles.css'

export const ButtonGroup = ({ click, buttons = [] }) => {
    let btns = buttons.map(value =>
      <Button value={value} id={value} key={value} click={() => click(value)} />
    );
    return (
      <div className="Button">
        {btns}
      </div>
    );
  };