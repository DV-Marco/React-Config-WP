import React, { Component } from 'react';
import { withStyles, Button, AppBar, Typography, Toolbar, TextField, Snackbar, Modal, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import MuiAlert from '@material-ui/lab/Alert';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SendIcon from '@material-ui/icons/Send';

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        color: '#ffffff',
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

export class App extends Component {

    state = {
        open: false
    }

    handleClick = () => {
        this.setState({
            open: true
        })
    }


    handleClose = (e, reas) => {
        if (reas == "clickaway"){
            return;
        }

        this.setState({
            open: false
        })

    }


    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{flexGrow: "1"}}>React</Typography>
                    </Toolbar>
                </AppBar>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
                        <Typography variant="h5">
                            SignUp
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ padding: "15px"}, {display: "flex"}, {justifyContent: "center"}}>
                            <form>
                                <div>
                                <TextField type="text" label="Name" variant="filled" />
                                </div>
                                <br />
                                <div>
                                    <TextField type="email" label="Email" variant="filled" />
                                </div>
                                <br />
                                <div>
                                    <TextField type="password" label="Password" variant="filled" />
                                </div>
                                <br />
                                <BootstrapButton onClick={this.handleClick}><PersonAddIcon /></BootstrapButton>
                            </form>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
                        <Typography variant="h5">
                            SignIn
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ padding: "15px"}, {display: "flex"}, {justifyContent: "center"}}>
                            <form>
                                <div>
                                    <TextField type="email" label="Email" variant="filled" />
                                </div>
                                <br />
                                <div>
                                    <TextField type="password" label="Password" variant="filled" />
                                </div>
                                <br />
                                <BootstrapButton onClick={this.handleClick}><SendIcon /></BootstrapButton>
                            </form>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    This is a success message!
                </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default App;