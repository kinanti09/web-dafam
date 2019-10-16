import React from 'react';
import Tabel from '../../components/tabel';
// import Modal from '../../components/modal';
// import AddIcon from '@material-ui/icons/Add';
import Input from '../../components/input';

class Report extends React.Component{
    render(){
        return(
            <div>
                <h1>Report</h1>
                <div align="right">
                    <Input />
                </div>
                <Tabel />
            </div>
        );
    }
}

export default Report;