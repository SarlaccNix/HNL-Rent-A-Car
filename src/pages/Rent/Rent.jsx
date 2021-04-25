import { React, useEffect, useState }  from 'react';

// redux
import { connect } from 'react-redux'

// Firebase
import { updateQty } from '../../service/database'

//MUI
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const useStyles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,
        paddingTop: '1%',
        paddingLeft: '1%',
        margin: theme.spacing(1),
      },
    form: {
      flexGrow: 1,
      margin: theme.spacing(2),
      display: 'inline-block',
    },
    title: {
      fontSize: 25,
      justify: 'center',
    },
    subtitle:{
        fontSize: 15,
        align: 'center',
    },
    pos: {
      align:'center',
    },
    button: {
        marginRight: 'auto',
        color: 'red',
        fontSize: 20,
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        minWidth: '700',
      },
      grid: {
        flexGrow: 1,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      
}));

const Rent = (props)=> {
    const classes = useStyles();
    const[rental,setRental] = useState([])
    const[user,setUser] = useState([]) 
    const [selectedDate, setSelectedDate] = useState(new Date('2021-01-01T00:00:00'))

    useEffect(()=>{
        let parsedRental = JSON.parse(localStorage.getItem("rental"))
        setRental(parsedRental)
        setUser(props.user)
        console.log(user)
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const updateStock = (props) => {
        updateQty(-1, rental.id)
    }

    const submitHandler = (props) =>{
        updateStock();
        window.location="/"
    }

    return (
        <div className={classes.root}> 
            <div className={classes.grid}>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                    <Grid item xs={12} className={classes.title}>
                        <h1>Make your Reservation!</h1>
                    </Grid>

                    <Grid item xs={6} className={classes.subtitle}>
                            <h2>You are one step closer to your adventure</h2>
                    </Grid>
                    </Grid>
                </div>
            <div> 
            <Grid container  spacing={4} xs={12}>
                <Grid item xs={4}>
                  <Card >
                    <CardContent>
                        <CardMedia
                            className={classes.media}
                            image={rental.image}
                            title={rental.Model}
                            />
                            <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                            {rental.Type}
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            {rental.Brand} {rental.Model}
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Price: ${rental.Price} per Day
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Transmission: {rental.Transmission}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Passengers: {rental.Passengers}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Color: {rental.Color}
                                            </Typography>
                                            </CardContent>
                                            </Card>
                </Grid>
                <Grid item xs={6}>
                    
                    <Card>
                        <form>
                            <Grid container 
                            spacing={0}
                            direction="row"
                            display="inline-block">
                                <Grid item xs={4}>
                                <TextField className={classes.form} type="text" autoFocus="true" id="outlined-basic" label="Name" variant="outlined"></TextField></Grid>
                                
                                <Grid item xs={4}>
                                <TextField className={classes.form}  type="text" id="outlined-basic" label="Last Name" variant="outlined"></TextField></Grid>

                                <Grid item xs={4}>
                                <TextField className={classes.form} type="email" id="outlined-basic" label="Email" variant="outlined"></TextField></Grid>
                                
                                <Grid item xs={4}>
                                <TextField className={classes.form} type="text" id="outlined-basic" label="Id Number" variant="outlined" placeholder="X-XXX-XXXX"></TextField></Grid>
                                
                                <Grid item xs={4}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker 
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                                className={classes.form}  id="outlined-basic" label="Birthday" variant="outlined"></KeyboardDatePicker></MuiPickersUtilsProvider></Grid>

                                <Grid item xs={4} >
                                <Button className={classes.button} variant="contained" color="primary.light" onClick={()=>submitHandler(-1, rental.id)} >Reserve!</Button></Grid>


                            </Grid>
                        </form>
                    </Card>    
                    
                </Grid>                      
            </Grid>
            </div> 
        </div>
    );
}

const mapStatetoProps = (state) =>{
  
    return {
             user: state.authreducer.user
            }

}

export default connect(mapStatetoProps)(Rent);