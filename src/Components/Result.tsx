import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from "./Style.module.css";
import { PieChart } from 'react-minimal-pie-chart';

const Result = () => {

    let location: any = useLocation();
    let result = location.state;

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/ques")
    }

    let right = 0;
    let wrong = 0;
  
    if (result.quesAns[0].userAns === "3") {
      right++;
    }
    else {
      wrong++;
    }
    if (result.quesAns[1].userAns === [1, 3] ) {
      right++;
    }
    else {
      wrong++;
    }
    if (result.quesAns[2].userAns === "1") {
      right++;
    }
    else {
      wrong++;
    }
    if (result.quesAns[3].userAns === "Audi") {
      right++;
    }
    else {
      wrong++;
    }
    if (result.quesAns[4].userAns === "1") {
      right++;
    }
    else {
      wrong++;
    }
  



    return (
        <div>
            <h1 className={classes.head}>Welcome To The  Result {result.New}</h1>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Questions</TableCell>
                                <TableCell align="center">Correct Answer</TableCell>
                                <TableCell align="center">User Answer</TableCell>
                                <TableCell align="center">Result</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* 1st */}
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{result.quesAns[0].questions}</TableCell>
                                <TableCell align="center">{result.quesAns[0].options[3]}</TableCell>
                                <TableCell align="center"> {result.quesAns[0].options[result.quesAns[0].userAns]}</TableCell>
                                <TableCell align="center">{result.quesAns[0].userAns === "3" ? "True" : "false"}</TableCell>
                            </TableRow>

                            {/* 2nd */}
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{result.quesAns[1].questions}</TableCell>


                                <TableCell align="center">

                                    {result.quesAns[1].options[1]},{result.quesAns[1].options[3]}

                                </TableCell>

                                <TableCell align="center">
                                    {Object.keys(result.quesAns[1].userAns).map((item: any, index) => {
                                        if (result.quesAns[1].userAns[item]) {
                                            return (
                                                `${result.quesAns[1].options[index + 1]} `
                                            )
                                        }
                                    })
                                    }
                                </TableCell>
                                <TableCell align="center">{result.quesAns[1].userAns === [1, 3] ? "True" : "false"}</TableCell>
                            </TableRow>


                            {/* 3rd */}
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{result.quesAns[2].questions}</TableCell>
                                <TableCell align="center">{result.quesAns[2].options[1]}</TableCell>
                                <TableCell align="center">{result.quesAns[2].options[result.quesAns[2].userAns]}</TableCell>
                                <TableCell align="center">{result.quesAns[2].userAns === "1" ? "True" : "false"}</TableCell>
                            </TableRow>

                            {/* 4th */}
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{result.quesAns[3].questions}</TableCell>
                                <TableCell align="center">{result.quesAns[3].options[1]}</TableCell>
                                <TableCell align="center">{result.quesAns[3].userAns}</TableCell>
                                <TableCell align="center">{result.quesAns[3].userAns === "Audi" ? "True" : "false"}</TableCell>
                            </TableRow>

                            {/* 5th */}
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{result.quesAns[4].questions}</TableCell>
                                <TableCell align="center">{result.quesAns[4].options[1]}</TableCell>
                                <TableCell align="center">{result.quesAns[4].options[result.quesAns[4].userAns]}</TableCell>
                                <TableCell align="center">{result.quesAns[4].userAns === "1" ? "True" : "false"}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <p><Button variant="contained" onClick={handleClick}>Back To Quiz </Button></p>
            <div>
                <PieChart
                 radius={18} startAngle={140} viewBoxSize={[100, 100]} labelPosition={55}
                 label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                 labelStyle={{
                    fontSize: '4px'
                  }}
                  center={[50, 25]}
                    data={[
                        { title: 'Right', value: right, color: '#E38627' },
                        { title: 'Wrong', value: wrong  , color: '#C13C37' },
                    ]}
                />;
            </div>
        </div>
    )
}

export default Result