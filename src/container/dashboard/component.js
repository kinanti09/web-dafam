import React from 'react';
import Chart from '../../components/chart';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Chart />
            </div>
        );
    }
}

export default Dashboard;