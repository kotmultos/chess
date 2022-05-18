import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";

import './Timer.css'

const Timer = () => {
    const  defaultTime = 5;

    let [time1, setTime1] = useState(0);
    let [time2, setTime2] = useState(0);

    const [disableStartButton, setDisableStartButton] = useState(false);
    const [disableStopButton, setDisableStopButton] = useState(true);
    const [disableFirstPlayerButton, setDisableFirstPlayerButton] = useState(true);
    const [disableSecondPlayerButton, setDisableSecondPlayerButton] = useState(true);
    const [activeFirst, setActiveFirst] = useState(false);
    const [activeSecond, setActiveSecond] = useState(false);
    const [isTimeSet, setIsTimeSet] = useState(false);

    let interval = 0;

    useEffect(() => {
          interval = setInterval(() => {
              if(isTimeSet){
               if (activeFirst) {
                   if (time1 > 0) {
                       setTime1((prevTime1) => prevTime1 - 1);
                   }
                   else {
                       alert("time is over for player 1!");
                       stopTimer();
                   }
               }

               if (activeSecond) {
                   if (time2 > 0) {
                       setTime2((prevTime2) => prevTime2 - 1);
                   }
                   else {
                       alert("time is over for player 2!")
                       stopTimer();
                    }
               }
          }
        }, 1000);
        return () => clearInterval(interval);

    }, [activeFirst, activeSecond, time1, time2]);

    const setTimer = (e) => {
        e.preventDefault();
        let newTime = defaultTime;

        if(e.target.inputTimeFirst.value.length !== 0)
        {
            let value = parseInt(e.target.inputTimeFirst.value, 10);
            if(value <= 15 || value >= 300)
                alert(`Отримане значення поза доступним діапазоном. Буде використано значення за замовчуванням: ${newTime}`)
            else newTime = value;
        }

        setTime1(newTime);
        setTime2(newTime);
        setActiveFirst(true);
        setIsTimeSet(true);
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

    function stopTimer()
    {
        clearInterval(interval);

        setTime1(0);
        setTime2(0);

        setIsTimeSet(false);

        setActiveFirst(false);
        setActiveSecond(false);

        setDisableStartButton(false);
        setDisableStopButton(true);
        setDisableFirstPlayerButton(true);
        setDisableSecondPlayerButton(true);
    }

    return (
        <div className={'mt-3 mb-3'}>
        <Form onSubmit={setTimer}>
                <Form.Label>First player</Form.Label>
                <div className={'d-flex height-38'}>
                    {isTimeSet &&
                    <Form.Control
                        itemID={"displayTime1"}
                        type="number"
                        readOnly
                        className={'width-125'}
                        value={time1}
                    /> }

                    {!isTimeSet &&
                    <Form.Group controlId={"inputTimeFirst"}>
                        <Form.Control
                            itemID={"setTime"}
                            type="number"
                            placeholder="set time"
                            className={'width-125'}
                        />
                    </Form.Group>  }

                    <Button className={'width-125 mx-3'} disabled={disableFirstPlayerButton} onClick={player1Click} >Player 1</Button>
                    <Button className={'width-125 mx-3'} disabled={disableStartButton} type={"submit"} >Set timer</Button>
                </div>


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

        </div>
    );
};

export {Timer};