import { useState, useEffect } from 'react'
import CountriesList from './components/CountriesList/CountriesList'

export default function App() {
  const [countriesList, setCountriesList] = useState([])
  useEffect(() => {
  	fetch('https://restcountries.com/v3.1/all')
  		.then(response => response.json())
  		.then(data => setCountriesList([...data]))
  		.catch(error => console.log(error))
  }, [])
  
  return (<>
  	{countriesList.length > 0 && <CountriesList countriesList={countriesList} />}
  </>)
}
