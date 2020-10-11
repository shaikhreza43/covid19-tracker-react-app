import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdated } } = await axios.get(url);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdated
        }

        return modifiedData;
    }
    catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate
        }))

        return modifiedData;
    }
    catch (error) {

    }
}