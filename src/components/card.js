import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CustomCard(props) {
  const { title, body, state, setState, component: Component } = props;

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div className="card-title-container">
          <Typography variant="body2">{body}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Component state={state} setState={setState}/>
      </CardActions>
    </Card>
  );
}