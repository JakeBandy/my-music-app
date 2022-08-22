import React from 'react';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function MySlider(props) {
  const { state, setState } = props;

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Volume"
        value={state}
        // valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        // getAriaValueText={valuetext}
        onChange={(e) => {
          setState(e.target.value)
        }}
      />
    </Box>
);
}