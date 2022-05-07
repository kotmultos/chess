import React from 'react';

import './ChessChart.css';
import Chart from "chart.js/auto";
import {Button} from "react-bootstrap";
import {drawPoint} from "chart.js/helpers";

const ChessChart = () => {

    function displayChart() {
        const histogram = document.getElementById('histogram');
        let context = histogram.getContext('2d');

        const prevChart = Chart.getChart("histogram");
        if(prevChart !== undefined) {prevChart.destroy();}

        let iWhitePawnCount = document.querySelectorAll('.white-pawn').length;
        let iWhiteCastleCount = document.querySelectorAll('.white-castle').length;
        let iWhiteBishopCount = document.querySelectorAll('.white-bishop').length;
        let iWhiteHorseCount = document.querySelectorAll('.white-horse').length;
        let iWhiteQueenCount = document.querySelectorAll('.white-queen').length;
        let iWhiteKingCount = document.querySelectorAll('.white-king').length;

        let iBlackPawnCount = document.querySelectorAll('.black-pawn').length;
        let iBlackCastleCount = document.querySelectorAll('.black-castle').length;
        let iBlackBishopCount = document.querySelectorAll('.black-bishop').length;
        let iBlackHorseCount = document.querySelectorAll('.black-horse').length;
        let iBlackQueenCount = document.querySelectorAll('.black-queen').length;
        let iBlackKingCount = document.querySelectorAll('.black-king').length;

        // setup
        const chartData = {
            labels: ["Pawn", "Castle", "Bishop", "Horse", "Queen", "King"],
            datasets: [{
                label: 'Player 2',
                data: [iBlackPawnCount, iBlackCastleCount, iBlackBishopCount, iBlackHorseCount, iBlackQueenCount, iBlackKingCount],
                backgroundColor: 'rgba(0, 0, 0,0.5)',
                borderColor:   'rgba(86,83,82, 1)',
                borderWidth: 1
            },{
                label: 'Player 1',
                data: [iWhitePawnCount, iWhiteCastleCount, iWhiteBishopCount, iWhiteHorseCount, iWhiteQueenCount, iWhiteKingCount],
                backgroundColor: 'rgb(255,255,255, 0.5)',
                borderColor: 'rgb(234,0,0)',
                borderWidth: 1
            },]
        };

        // config
        const config = {
            type: 'bar',
            data: chartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#0a0a0a'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#0a0a0a'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#0a0a0a'
                        }
                    }
                }
            }
        };

        // render init block
        const chart = new Chart(context, config);
    }

    function toggleChart() {
        const prevChart = Chart.getChart("histogram");
        if(prevChart !== undefined) {
            prevChart.clear();
            prevChart.destroy();
            document.getElementById("chartButton").innerText = "Draw chart";
        }
        else{
            displayChart();
            document.getElementById("chartButton").innerText = "Hide chart";
        }
    }

    return (
        <div className={"mt-3"}>
            <div><Button id={"chartButton"} onClick={toggleChart}>Draw chart</Button></div>
                <canvas id={"histogram"} height="300px" width="300px"> </canvas>
        </div>
    );
};

export {ChessChart}