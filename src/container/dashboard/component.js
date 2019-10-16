import React from 'react';
import Chart from '../../components/chart';

class Dashboard extends React.Component{
    render(){
        return(
            <div color="E0E0E0">
                <h1>Dashboard</h1>
                <Chart />
            </div>
        );
    }
}

export default Dashboard;