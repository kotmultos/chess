import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

import './Timer.css'
import {logDOM} from "@testing-library/react";



const Timer = () => {
    // опрацювання таймерів ------------------------
    // let time1 = 0;
    // let time2 = 0;
    const  defaultTime = 5;

    let [time1, setTime1] = useState(defaultTime);
    let [time2, setTime2] = useState(defaultTime);

    const [firstInterval, setFirstInterval] = useState(0);
    const [secondInterval, setSecondInterval] = useState(0);
    const [disableStartButton, setDisableStartButton] = useState(false);
    const [disableStopButton, setDisableStopButton] = useState(true);
    const [disableFirstPlayerButton, setDisableFirstPlayerButton] = useState(true);
    const [disableSecondPlayerButton, setDisableSecondPlayerButton] = useState(true);


    // const timer1 = React.createRef();
    // const timer2 = React.createRef();
    // const btnPlayer1 = React.createRef();
    // const btnPlayer2 = React.createRef();
    // const resetBtn = React.createRef();
    // const stopBtn = React.createRef();

    // let timeIntervals = 0
    // let displayIntervals = 0

    function countDown1() {
        console.log(`time1: ${time1} \t time2: ${time2} FIRST`);
        if (time1 > 0) {  setTime1(time1--);  }
        else {
            // alert('time is over for player 1 ');
            console.log('time is over for player 1 ');
            clearInterval(firstInterval);
            // setFirstInterval(0);
            // console.log("--")
            // stopTimer();
        }
    }

    function countDown2() {
        console.log(`time1: ${time1} \t time2: ${time2} SECOND`);
        if (time2 > 0) { setTime2(time2--); }
        else {
            // alert('time is over for player 2');
            console.log('time is over for player 2');
            clearInterval(secondInterval);
            // console.log('========')
            // stopTimer();
        }
    }

    // function displayValues() {
    //     console.log(`time1: ${time1} \t time2: ${time2}`);
    //     // timer1.value = time1.toString();
    //     // timer2.value = time2.toString();
    // }

    function  stopTimer() {
        // timer1.value = "";
        // timer2.value = "";
        console.log('timer stopped');
        //clearInterval(timeIntervals); // important raw
        // setFirstInterval(0);
        // setFirstInterval(0);

        clearInterval(firstInterval);
        clearInterval(secondInterval);

        // clearInterval(displayIntervals);

        setDisableStopButton(true);
        setDisableFirstPlayerButton(true);
        setDisableSecondPlayerButton(true);
        setDisableStartButton(false);

        // resetBtn.disabled = false;
        // stopBtn.disabled = true;
        // btnPlayer1.disabled = true;
        // btnPlayer2.disabled = true;
        // timer1.style.color = "black";
        // timer2.style.color = "black";
    }

    function setTimer(event) {
        console.log('\nsetTimer()\n');
        event.preventDefault();

        // setTime1(60);
        // setTime2(60);

        // console.log(event.target);
        // console.log("------")
        // console.log(event.target.inputTimeFirst);
        // console.log("------value")
        // console.log(event.target.inputTimeFirst.value);
        // console.log("------length")
        // console.log(event.target.inputTimeFirst.value.length);

        if(event.target.inputTimeFirst.value.length !== 0) {
            try{
                let newTime = parseInt(event.target.inputTimeFirst.value, 10);
                console.log("newTime"); console.log(newTime);
                if(newTime < 30) {
                    throw new Error(`Значення часу має бути як мінімум 30 секунд!\nБуде використано значення за замовчуванням: ${time1} секунд`)
                }
                if(newTime >= 300) {
                    throw new Error(`Значення часу має бути не більше за 300 секунд!\nБуде використано значення за замовчуванням: ${time1} секунд`)
                }
                setTime1(newTime);
                setTime2(newTime);
            }
            catch (e) {
                alert(e)
                console.log(e);
                setTime1(defaultTime);
                setTime2(defaultTime);
            }
        }

        // console.log(`time: ${time1} & ${time2}` )

        setFirstInterval(setInterval(countDown1, 1000));
        // displayIntervals = setInterval(displayValues, 1000);

        event.target.inputTimeFirst.value = time1;

        setDisableStopButton(false);
        setDisableFirstPlayerButton(false);
        setDisableStartButton(true);
    }

    function player1Click() {
        clearInterval(firstInterval);
        setSecondInterval(setInterval(countDown2, 1000));

        setDisableFirstPlayerButton(true);
        setDisableSecondPlayerButton(false);
    }

    function player2Click() {
        clearInterval(secondInterval);
        setFirstInterval(setInterval(countDown1, 1000));

        setDisableFirstPlayerButton(false);
        setDisableSecondPlayerButton(true);
    }

    return (
        <div className={'mt-3 mb-3'}>
        <Form onSubmit={setTimer}>
            <Form.Group controlId={"inputTimeFirst"}>
                <Form.Label>First player</Form.Label>
                <div className={'d-flex'}>
                    <Form.Control
                        type="number"
                        placeholder="set time"
                        className={'width-125'}

                    />

                    <Button className={'width-125 mx-3'} disabled={disableFirstPlayerButton} onClick={player1Click} >Player 1</Button>
                    <Button className={'width-125 mx-3'} disabled={disableStartButton} type={"submit"} >Set timer</Button>
                </div>
            </Form.Group>

            <Form.Group controlId={"inputTimeSecond"} >
                <Form.Label>Second player</Form.Label>
                <div className={'d-flex'}>
                    <Form.Control
                        type="number"
                        readOnly
                        className={'width-125'}
                        value={time2}
                    />

                    <Button className={'width-125 mx-3'} disabled={disableSecondPlayerButton}  onClick={player2Click} >Player 2</Button>
                    <Button className={'width-125 mx-3'} disabled={disableStopButton} onClick={stopTimer} >Stop timer</Button>
                </div>
            </Form.Group>
        </Form>


            {/*<div className="flex align-center">*/}
            {/*    <div className="timer" id="timer-2"> </div>*/}
            {/*    <button id="btn-2" disabled onClick="player2Click()" className="btn" style="width:125px">Player 2*/}
            {/*    </button>*/}
            {/*    <button onClick="displayClick()" id="btn-display" className="btn">Show diagram</button>*/}
            {/*</div>*/}

            {/*<div className="flex align-center">*/}
            {/*    <input type="number" className="timer" id="timer-1" placeholder="time"*/}
            {/*           title="Type here time in seconds.">*/}
            {/*        <button disabled id="btn-1" onClick="player1Click()" className="btn">Player 1</button>*/}
            {/*        <button id="btn-reset" onClick="setTimer()" className="btn">Set timer</button>*/}
            {/*        <button disabled id="btn-stop" onClick="stopTimer()" className="btn">Stop timer</button>*/}
            {/*</div>*/}

        </div>
    );
};

export {Timer};