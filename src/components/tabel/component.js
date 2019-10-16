import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Component extends React.Component{

    constructor(props){
        super(props);
        this.state={
            datas: [],
        }
    }

    componentDidMount(){
        this.refs.name.focus();
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        let data = {
            name, address
        }

        datas.push(data);

        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    render(){
        const { classes } = this.props;
        let datas = this.state.datas;
        return(
            <div>
                <form align="right" ref="myForm">
                <TextField
                        ref="name"
                        id="outlined-bare"
                        className={classes.textField}
                        placeholder="Your Name"
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                    <TextField
                        ref="address"
                        id="outlined-bare"
                        className={classes.textField}
                        placeholder="Your Address"
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                    <Button onClick={(e)=>this.fSubmit(e)} style={{marginRight:5}} size="small" variant="contained" color="primary" className={classes.button}>
                        Add
                    </Button>
                </form>
                {/* <pre>
                    {datas.map((data, i) =>
                        <li key={i} >
                           {i+1}. {data.name}, {data.address}
                           <button onClick={()=>this.fRemove(i)}>remove</button>
                           <button onClick={()=>this.fEdit(i)}>edit</button> 
                        </li>
                    )}
                </pre> */}
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow color="">
                                <TableCell>Nama</TableCell>
                                <TableCell align="right">Alamat</TableCell>
                                {/* <TableCell align="right">Umur</TableCell> */}
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {datas.map((data, i) =>
                                   <TableCell align="right" key={i}>
                                       {i+1}. {data.name}, {data.address}
                                       <Button style={{marginLeft:5}} size="small" variant="outlined" color="secondary" className={classes.button} onClick={()=>this.fRemove(i)}>Remove</Button>
                                       <Button style={{marginRight:5}} size="small" variant="contained" color="primary" className={classes.button} onClick={()=>this.fEdite(i)}>Edit</Button>
                                   </TableCell> 
                                    )}
                                    {/* <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="center">
                                        <Button style={{marginRight:5}} size="small" variant="contained" color="primary" className={classes.button}>
                                            Edit
                                        </Button>
                                        <Button style={{marginLeft:5}} size="small" variant="outlined" color="secondary" className={classes.button}>
                                            Delete
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Component;