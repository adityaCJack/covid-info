import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react'


export default function Charts({ covidData }) {

    //Chart.js config
    //Data has been divided for proper pie chart view

    ChartJS.register(ArcElement, Tooltip, Legend);

    const { NewConfirmed, TotalConfirmed, TotalDeaths } = covidData

    const data = {
        labels: ['Cases today', 'Total confirmed', 'Total Deaths'],
        datasets: [
            {
                label: '# of Votes',
                data: [Math.floor(NewConfirmed / 2), Math.floor(TotalConfirmed / 25), Math.floor(TotalDeaths / 4)],
                backgroundColor: [
                    'rgb(254, 228, 64)',
                    'rgb(0, 187, 249)',
                    'rgb(0, 245, 212)',


                ],
                borderColor: [
                    'rgba(254, 228, 64, 1)',
                    'rgba(0, 187, 249, 1)',
                    'rgba(0, 245, 212)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ display: "flex", minWidth: "90%", justifyContent: "center", }}>
            <Box boxSize={['sm', 'md',]}>
                <Pie data={data} />
            </Box>
        </div>
    )
}

