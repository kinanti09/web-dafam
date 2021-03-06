import React from 'react';
import {
  BarChart,
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,

} from 'recharts';
import Paper from '@material-ui/core/Paper';

const data = [
  {
    name: 'Rank 5', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Rank 4', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Rank 3', uv: 2000, pv: 2800, amt: 2290,
  },
  {
    name: 'Rank 2', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Rank 1', uv: 1890, pv: 4800, amt: 2181,
  },
];

export default class Chart extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#2979FF" />
        <Bar dataKey="uv" fill="#00E676" />
        <Bar dataKey="uv" fill="#FBC02D" />
      </BarChart>
      </Paper>
    );
  }
}
