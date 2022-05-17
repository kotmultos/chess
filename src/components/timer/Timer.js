import React, {useEffect, useState} from 'react';
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

    // damn code
    // const [disableStartButton, setDisableStartButton] = useState(false);
    // const [disableStopButton, setDisableStopButton] = useState(false);
    // const [disableFirstPlayerButton, setDisableFirstPlayerButton] = useState(false);
    // const [disableSecondPlayerButton, setDisableSecondPlayerButton] = useState(false);
    const [activeFirst, setActiveFirst] = useState(false);
    const [activeSecond, setActiveSecond] = useState(false);
    let interval = 0;

    useEffect(() => {
        // const interval = setInterval(() => {
          interval = setInterval(() => {
            if (activeFirst) {
                if (time1 > 0) {
                    setTime1((prevTime1) => prevTime1 - 1);
                    console.log(`time 1: ${time1}\ttime 2: ${time2} FIRST`)
                }
                else {
                    console.log("time is over for player 1")
                    clearInterval(interval);
                    stopTimer();
                }
            }

            if (activeSecond) {
                if (time2 > 0) {
                    setTime2((prevTime2) => prevTime2 - 1);
                    console.log(`time 1: ${time1}\ttime 2: ${time2} SECOND`)
                }
                else {
                    console.log("time is over for player 2")
                    clearInterval(interval);
                    stopTimer();
                }
            }
        }, 1000);
        return () => clearInterval(interval);

    }, [activeFirst, activeSecond, time1, time2]);


    const setTimer = (e) => {
        e.preventDefault();
        // setFirstInterval(setInterval(startFirst, 1000));
        setTime1(defaultTime);
        setTime2(defaultTime);
        setActiveFirst(true);
        setDisableFirstPlayerButton(false);
        setDisableStartButton(true);
        setDisableStopButton(false);
    }

    const player1Click = () => {
       setActiveFirst(false);
       setActiveSecond(true);

        setDisableFirstPlayerButton(true);
        setDisableSecondPlayerButton(false);
    }

    const player2Click = () => {
        setActiveFirst(true);
        setActiveSecond(false);

        setDisableFirstPlayerButton(false);
        setDisableSecondPlayerButton(true);
    }

    function startFirst() {
        console.log(`time 1: ${time1}\ttime 2: ${time2} FIRST`)
        if (time1 > 0) {
            setTime1(time1--);
        } else {
            clearInterval(firstInterval);

            setDisableStartButton(false);
            // setShowAlert(true);
        }
    }

    function startSecond() {
        console.log(`time 1: ${time1}\ttime 2: ${time2} SECOND`)
        if (time2 > 0) {
            setTime2(time2--);
        } else {
            clearInterval(secondInterval);

            setDisableStartButton(false);
            // setShowAlert(true);
        }
    }

    function stopTimer()
    {
        // clearInterval(firstInterval);
        // clearInterval(secondInterval);
        console.log("timer stopped")
        clearInterval(interval);

        setDisableStartButton(false);
        setDisableStopButton(true);
        setDisableFirstPlayerButton(true);
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

            <p>FIRST: {time1}</p>
            <p>SECOND: {time2}</p>

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