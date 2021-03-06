import React, { useEffect, useState } from 'react';

import { fetchDailyData } from '../../Api';

import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed,recovered,deaths},country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        async function fetchDataFromApi() {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData)
        }

        fetchDataFromApi();
    }, []);

    const lineChart = (
        dailyData.length ? (<Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            },
            {
                data: dailyData.map(({ recovered }) => recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0,255,0,0.5)',
                fill: true
            },
             {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
            }]
        }}></Line>) : null
    );

    const barChart = (
        confirmed?(
            <Bar data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={
                {legend:{display:false},
            title:{display:true,text:`Current State in ${country}`}
        }}/>
        ):null
    );
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>
    )
}

export default Chart;