import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        fontSize: 20,
        color: theme.palette.text.secondary,
        background: theme.palette.success.light,
    }
}));

export const Home = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={5} className={classes.grid}>
           <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                    <div className='heading'>
                        <h1>Cape Towns <br/>
                            Best Driving School</h1>  
                        <h3>R200 per hour for Driving Lessons done by a qualified and patient instructor</h3>
                        <p>Contact 0846610906 / Whatsapp<br/>
                            or
                            email: <a href="mailto:faeez.hartley@gmail.com">faeez.hartley@gmail.com</a>
                        </p>
                    </div>
                </Paper>         
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper}> 
                    <div className='myimage' > 
                        <img src ="/pictures/Cape-Town-Driving-Schoo-PASSED.jpg" alt=''/>
                    </div>
                </Paper>         
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <h2>Price for Driving Lessons</h2>
                    <p>
                        Driving Lessons prices start at a rate of R200 per hour. A package of 10 lessons costs R1900.<br/>
                    </p>
                    <h3>Car hire on the day of the test</h3>
                    <p> I fetch the learner 2 hours before the test to prepare and charge R600
                        for using the car to test
                    </p>
                    <h2>Learner Classes</h2>
                    <p>
                        Learner Classes costs R300 per class in which we revise all the questions and answers in the Learner Test paper
                    </p>
                </Paper>         
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <h2>Areas I Teach</h2>
                    <p>
                         Cape Town City Bowl, UCT, Athlone, Camps Bay, Constantia, Bishopscourt, Claremont,  Harfield Village, Kenilworth, Kenwyn, Kirstenbosch, Landsdown, Mowbray, Newlands, Pinelands, Observatory, Salt River, Rondebosch and Ronderbosch East, Rosebank, University Estate, Tokai, Bergvliet, Southfield, Steenberg, Westlake, Fish Hoek, Ottery, Plumstead, Wynberg, Woodstock, Silverhurst, Muizenburg.
                    </p>
                </Paper>         
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <h2>Get in touch</h2>
                    <img src ="/pictures/contact.png" alt=''/>
                    <p>
                        Whatsapp or call: 0846610906 <br/>
                        or <br/>
                        email: <a href="mailto:faeez.hartley@gmail.com">faeez.hartley@gmail.com</a>
                    </p>
                </Paper>         
            </Grid>
        </Grid>
    )
}
