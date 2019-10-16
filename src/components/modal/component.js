import React from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
export default class Component extends React.Component{
    
    render(){
        const { classes } = this.props;
        // getModalStyle is not a pure function, we roll the style only on the first render
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return(
            <div>
                <Button
            type="button"
            onClick={handleOpen}
            variant="contained"
            color="primary"
            className={classes.button}
        >
            Add New
        </Button>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Add New</h2>
                <form>
                    <TextField
                        id="outlined-bare"
                        className={classes.textField}
                        placeholder="Bare"
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                    <TextField
                        id="outlined-bare"
                        className={classes.textField}
                        placeholder="Bare"
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                </form>
                <div className={classes.buttons}>
                <Button variant="outlined" color="secondary" className={classes.button}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  Save
                </Button>
                </div>
            </div>
        </Modal>
            </div>
        );
    }
}