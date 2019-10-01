import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import { FormGroup, Button } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';


  
const useStyles = makeStyles ({
    root: {
      width: 600,
      background: '#B9CCEE',
      borderRadius: 5,
      padding: 25

    }
}); 

 

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root}>

                <Typography variant="subtitle1">Perustietokaavake</Typography>

                <TextField error fullWidth margin="normal" label="First name" variant="outlined" color="secondary">
                </TextField>

                <TextField error fullWidth margin="normal" label="Last name" variant="outlined" color="primary">
                </TextField>

                <TextField error fullWidth margin="normal" label="Email" variant="outlined" color="primary">
                </TextField>

                <TextField error fullWidth margin="normal" label="Phone" variant="outlined" color="primary">
                </TextField>

                <TextField error fullWidth margin="normal" label="Password" type='password' variant="outlined" color="primary">
                </TextField>

                <RadioGroup aria-label="gender" name="gender1" >
                    <Typography variant="subtitle1">Sukupuoli</Typography>
                    <FormControlLabel value="female" control={<Radio />} label="Female"></FormControlLabel>
                    <FormControlLabel value="male" control={<Radio />} label="Male"></FormControlLabel>
                    <FormControlLabel value="other" control={<Radio />} label="Other"></FormControlLabel>
                </RadioGroup>

                <FormGroup> 
                <Typography variant="subtitle1">Kirjaudu käyttäjäksi</Typography>   
                <FormControlLabel
                
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Subscribe for newsletter"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Send me all"
                    labelPlacement="end"
                />    
                <Typography variant="subtitle1">Palauteboksi</Typography>    
                <TextField
                    id="outlined-full-width"
                    label="Kirjoita palaute tänne"
                    style={{ margin: 8 }}
                    placeholder=""
                    helperText=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />    


                </FormGroup> 
                                  
                

                <Button variant="outlined" color="primary">Submit</Button> 

                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                    label="Like"
                /> 

                <DeleteIcon />
                     

            </form>
                    </div>
                );
            
};


export default Footer;