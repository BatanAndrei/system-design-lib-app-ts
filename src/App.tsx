import React from 'react';
import './App.css';
import { Button } from 'antd';
import { Button as BluePrintButton } from "@blueprintjs/core";
import { Button as MUIButton, ButtonProps } from '@mui/material';


function App() {
  const handleButtonClick = () => {
    alert('Clicked')
}

  const buttonProps: ButtonProps = {
    color: 'success',
    variant: 'contained'
}

  return (
    <div className="App">
           <p>Ant Disign</p>
           <div className={'wrapper'}>
               <Button type={'primary'} onClick={handleButtonClick}>Click Me</Button>
               <Button type={'primary'} disabled>Disabled</Button>
           </div>
           <p>Blueprint</p>
           <div className={'wrapper'}>
               <BluePrintButton onClick={handleButtonClick}>Click Me</BluePrintButton>
               <BluePrintButton disabled>Disabled</BluePrintButton>
           </div>
           <p>Material UI</p>
           <div className={'wrapper'}>
               <MUIButton {...buttonProps} onClick={handleButtonClick}>Click Me</MUIButton>
               <MUIButton {...buttonProps} disabled>Disabled</MUIButton>
           </div>
       </div>
  );
}

export default App;
