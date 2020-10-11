import React, { useEffect, useState } from 'react';
import './App.css';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//OR Alternative way to import

import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './Api';

function App() {

  const [data,setData] = useState({});

  useEffect(()=>{
    async function fetchCovidDataFromApi(){
      const fetchedData = await fetchData();
      setData(fetchedData);
    }

    fetchCovidDataFromApi();
  },[]);

  return (
    <div className="container">
     <Cards data={data}/>
     <CountryPicker/>
     <Chart/>
    </div>
  );
}

export default App;
