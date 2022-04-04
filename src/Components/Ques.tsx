import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import classes from "./Style.module.css";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';



const Ques = () => {

    const [next, setNext] = useState(1);
    const [isChecked, setIsChecked] = useState({
        one: false,
        two: false,
        three: false
    });
    
    const [quesAns, setQuesAns] = useState([
        {
            questions: "What is Capital Of India",
            userAns: "",
            correctAns: "New Delhi",
            options: {
                1: "Surat",
                2: "Allahabad",
                3: "New Delhi"
            }
        },

        {
            questions: "What is JavaScript",
            userAns: {
                "one": false,
                "two": false,
                "three": false
            },
            options: {
                1: "Programming Lang",
                2: "Normal lagg",
                3: "scripting lang"
            }
        },

        {
            questions: "2 + 2 = 4",
            userAns: "",
            options: {
                1: "True",
                2: "False",
            }
        },

        {
            questions: "Write  a Car Brand",
            userAns: "",
            options: {
                1: "Audi",
                2: "Tvs",
                3: "Hero"
            }
        },


        {
            questions: "select Taj Mahal City",
            userAns: "",
            options: {
                1: "Agra",
                2: "goa",
                3: "puna"
            }
        },

    ])

    const handleClick = () => {
        setNext(prev => prev + 1);
    }


    const handleClickPre = () => {
        setNext(prev => prev - 1);
    }

    let location = useLocation();
    let New = location.state;


    let navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/res", { state: { New, quesAns } });
    }


    const setData = (e: any, qNo: number, key: any = 0) => {
    
        const questionsData = quesAns;
        if (qNo == 1) {
            //  @ts-ignore 
            questionsData[qNo].userAns[key] = e.target.checked;
             //  @ts-ignore 
             setIsChecked({...isChecked, [key]: e.target.checked});
             return true;
        } else {
            questionsData[qNo].userAns = e.target.value;
        } 
        setQuesAns(questionsData);
     
    }

    const handlePagination = (value: number) => {
        setNext(value);
    }

    return (
        <div>
            <h1 className={classes.head}>WelCome To Quiz {New}</h1>
            <div>
                <p>
                    <span style={{ background: quesAns[0].userAns !== "" ? "red" : 'gray' }} onClick={() => { handlePagination(1) }} className={classes.pagination}>1</span>
                    <span style={{ background: Object.values(quesAns[1].userAns).filter((item) => item === true).length > 0 ? "red" : "gray" }} onClick={() => { handlePagination(2) }} className={classes.pagination}>2</span>
                    <span style={{ background: quesAns[2].userAns !== "" ? "red" : "gray" }} onClick={() => { handlePagination(3) }} className={classes.pagination}>3</span>
                    <span style={{ background: quesAns[3].userAns !== "" ? "red" : "gray" }} onClick={() => { handlePagination(4) }} className={classes.pagination}>4</span>
                    <span style={{ background: quesAns[4].userAns !== "" ? "red" : "gray" }} onClick={() => { handlePagination(5) }} className={classes.pagination}>5</span>
                </p>
            </div>

            {next === 1 ? (
                <div>
                    <p>{quesAns[0].questions}</p>
                    <p className={classes.align}>  <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <p>Select Capital</p>
                            <Select
                                onChange={(e) => setData(e, 0)}
                                defaultValue={quesAns[0].userAns}
                            >
                                <MenuItem id="1" value="1">{quesAns[0].options[1]}</MenuItem>
                                <MenuItem id="2" value="2">{quesAns[0].options[2]}</MenuItem>
                                <MenuItem id="3" value="3">{quesAns[0].options[3]}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box></p>
                </div>
            ) : null}

            {next === 2 ? (
                <div>
                    <p>{quesAns[1].questions}</p>
                    <p>
                        <Checkbox
                            inputProps={{ 'aria-label': 'controlled' }}
                            onChange={(e) => setData(e, 1, "one")}
                            checked={isChecked.one}
                
                        />
                        <span>{quesAns[1].options[1]}</span>
                    </p>

                    <p>
                        <Checkbox
                            inputProps={{ 'aria-label': 'controlled' }}
                            onChange={(e) => setData(e, 1, 'two')}
                            checked={isChecked.two}
                            />
                        <span>{quesAns[1].options[2]}</span>
                    </p>
                    <p>
                        <Checkbox
                            inputProps={{ 'aria-label': 'controlled' }}
                            onChange={(e) => setData(e, 1, "three")}
                            checked={isChecked.three}
                           />

                        <span>{quesAns[1].options[3]}</span>
                    </p>



                </div>
            ) : null}

            {next === 3 ? (
                <div>
                    <p>{quesAns[2].questions}</p>
                    <p> <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            onChange={(e) => setData(e, 2)}
                            defaultValue={quesAns[2].userAns}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="True" />
                            <FormControlLabel value="2" control={<Radio />} label="False" />
                        </RadioGroup>
                    </FormControl></p>

                </div>
            ) : null}

            {next === 4 ? (
                <div>
                    <p>{quesAns[3].questions}</p>
                    <p> <TextField id="standard-basic" defaultValue={quesAns[3].userAns} label="Answer" variant="standard" onChange={(e) => setData(e, 3)} /></p>

                </div>
            ) : null}


            {next === 5 ? (
                <div>
                    <p>{quesAns[4].questions}</p>
                    <p className={classes.align}>  <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <p>Select City</p>
                            <Select
                                onChange={(e) => setData(e, 4)}
                                defaultValue={quesAns[0].userAns}
                            >
                                <MenuItem value="1">{quesAns[4].options[1]}</MenuItem>
                                <MenuItem value="2">{quesAns[4].options[2]}</MenuItem>
                                <MenuItem value="3">{quesAns[4].options[3]}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box></p>
                    <p><Button variant="contained" onClick={handleSubmit}>Submit</Button></p>
                </div>
            ) : null}



            {next === 5 ? null : (
                <p>
                    <Button variant="contained" onClick={handleClick}>Next</Button>
                </p>
            )}

            {next === 1 ? null : (
                <p>
                    <Button variant="contained" onClick={handleClickPre}>Prev</Button>
                </p>
            )}


        </div>
    )
}

export default Ques