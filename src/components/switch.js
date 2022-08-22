import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize({state, setState}) {
    const handleChange = (e) => {
        setState(!state) 
      }

  return (
    
    <div>
      <Switch {...label} value={state} onChange={handleChange}/>
    </div>
  );
}