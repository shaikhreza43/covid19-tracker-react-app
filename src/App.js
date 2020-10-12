import React, { useEffect, useState } from 'react';
import './App.css';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//OR Alternative way to import

import covidImg from './assets/images/image.png';

import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './Api';

function App() {

  const [data,setData] = useState({});
  const [country,setCountry] = useState('');

  useEffect(()=>{
    async function fetchCovidDataFromApi(){
      const fetchedData = await fetchData();
      setData(fetchedData);
    }

    fetchCovidDataFromApi();
  },[]);

  const handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  }

  return (
    <div className="container">

      <img src={covidImg} alt="Covid19" className="image"></img>
     <Cards data={data}/>
     <CountryPicker handleCountryChange={handleCountryChange}/>
     <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
