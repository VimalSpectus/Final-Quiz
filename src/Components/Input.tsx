import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";


const Input = () => {

    const [value, SetValue] = useState<String | null>();

    const ChangeVal = (e:any)=>{
        SetValue(e.target.value);
    }
     
    let navigate = useNavigate();
    const handleRout = ()=> {
     navigate("/ques", {state : value});
    }

    return (
        <div>
            <p><TextField id="filled-basic" label="Enter Your Name" value={value} onChange={ChangeVal}/></p>



            <p> <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Plese Select Your Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl></p>


            <p>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Please Select Your Lang</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1" control={<Radio />} label="React" />
                        <FormControlLabel value="2" control={<Radio />} label="Python" />
                        <FormControlLabel value="3" control={<Radio />} label="C" />
                    </RadioGroup>
                </FormControl>
            </p>
            <p> <Button variant="contained"  disabled= {!value} onClick={handleRout}>Submit</Button> </p>
        </div>
    )
}

export default Input