import React from 'react';
import {Button, Form} from "react-bootstrap";

import './Timer.css'
import {logDOM} from "@testing-library/react";

const Timer = () => {
    // опрацювання таймерів ------------------------
    let time1 = 0;
    let time2 = 0;

    const timer1 = React.createRef();
    const timer2 = React.createRef();
    const btnPlayer1 = React.createRef();
    const btnPlayer2 = React.createRef();
    const resetBtn = React.createRef();
    const stopBtn = React.createRef();
    console.log('after')

    let timeIntervals = 0
    let displayIntervals = 0

    function countDown1() {
        if (time1 > 0) {  time1--;  }
        else {
            alert('time is over for player 1 ');
            console.log('time is over for player 1 ');
            stopTimer();
        }
    }

    function countDown2() {
        if (time2 > 0) { time2--; }
        else {
            alert('time is over for player 2');
            console.log('time is over for player 2');
            stopTimer();
        }
    }

    function displayValues() {
        console.log(`time: ${time1} & ${time2}`)
        timer1.value = time1.toString()
        timer2.value = time2.toString();
    }

    function  stopTimer() {
        timer1.value = "";
        timer2.value = "";
        clearInterval(timeIntervals);
        clearInterval(displayIntervals);
        resetBtn.disabled = false;
        stopBtn.disabled = true;
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
        timer1.style.color = "black";
        timer2.style.color = "black";
    }

    function setTimer() {
        console.log('\nsetTimer()\n');

        time1 = 60;
        time2 = 60;

        if(timer1 !== undefined)
        {console.log("undef wtf")}

        if(timer1.value  !==  '') {
            try{
                let newTime = parseInt(timer1.value, 10);

                if(newTime < 30) {
                    throw new Error(`Значення часу має бути як мінімум 30 секунд!\nБуде використано значення за замовчуванням: ${time1} секунд`)
                }
                if(newTime >= 300) {
                    throw new Error(`Значення часу має бути не більше за 300 секунд!\nБуде використано значення за замовчуванням: ${time1} секунд`)
                }
                time1 = newTime;
                time2 = time1;
            }
            catch (e) {
                alert(e)
                console.log(e);
            }
        }

        console.log(`time: ${time1} & ${time2}` )

        timeIntervals = setInterval(countDown1, 1000);
        displayIntervals = setInterval(displayValues, 1000);

        timer1.style.color = "red";
        timer2.style.color = "black";

        btnPlayer1.disabled = false;
        resetBtn.disabled = true;
        stopBtn.disabled = false;
    }

    function player1Click() {
        actionsOnPlayerButtonClick(btnPlayer1, btnPlayer2, timer1, timer2, countDown2);
    }

    function player2Click() {
        actionsOnPlayerButtonClick(btnPlayer2, btnPlayer1, timer2, timer1, countDown1);
    }

    function actionsOnPlayerButtonClick(btnClicked, btnElse, tmrClicked, tmrElse, func) {
        btnElse.disabled = false;
        btnClicked.disabled = true;
        tmrElse.style.color = "red";
        tmrClicked.style.color = "black";
        clearInterval(timeIntervals);
        timeIntervals = setInterval(func, 1000);
    }


    return (
        <div className={'mt-3'}>

            <Form.Group className="mb-3" >
                <Form.Label>First player</Form.Label>
                <div className={'d-flex'}>
                    <Form.Control
                        type="number"
                        ref={timer1}
                        placeholder="set time"
                        className={'width-125'}/>

                    <Button className={'width-125 mx-3'} ref={btnPlayer1} onClick={player1Click} disabled>Player 1</Button>
                    <Button className={'width-125 mx-3'} ref={resetBtn} onClick={setTimer} >Set timer</Button>
                </div>
                <Form.Label>Second player</Form.Label>

                <div className={'d-flex'}>
                    <Form.Control
                        type="number"
                        ref={timer2}
                        readOnly
                        className={'width-125'}/>

                    <Button className={'width-125 mx-3'} ref={btnPlayer2}  onClick={player2Click} disabled>Player 2</Button>
                    <Button className={'width-125 mx-3'} ref={stopBtn} onClick={stopTimer} disabled>Stop timer</Button>
                </div>
            </Form.Group>



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