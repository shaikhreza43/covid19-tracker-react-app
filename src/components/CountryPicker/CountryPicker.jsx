import React,{useEffect,useState} from 'react';

import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';


import {fetchCountries} from '../../Api';

const CountryPicker = ({handleCountryChange})=>{

    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchCountriesFromApi = async ()=>{
           const fetchedCountries= await fetchCountries();
           setFetchedCountries(fetchedCountries);
        } 

        fetchCountriesFromApi();
    },[setFetchedCountries]);


    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={e=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;