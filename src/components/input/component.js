import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
                <form ref="myForm">
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
                <pre>
                    {datas.map((data, i) =>
                        <li key={i} >
                           {i+1}. {data.name}, {data.address}
                           <button onClick={()=>this.fRemove(i)}>remove</button>
                           <button onClick={()=>this.fEdit(i)}>edit</button> 
                        </li>
                    )}
                </pre>
            </div>
        );
    }
}

export default Component;