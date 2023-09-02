import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import CountriesList from './components/CountriesList/CountriesList'

export default function App() {
  const [countriesList, setCountriesList] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')
  
  useEffect(() => {
  	fetch('https://restcountries.com/v3.1/all')
  		.then(response => response.json())
  		.then(data => setCountriesList([...data]))
  		.catch(error => console.log(error))
  }, [])
  
  return (<>
  	<SearchInput setSearchInputValue={setSearchInputValue} countriesList={countriesList} />
  	{
  		countriesList.length > 0 &&
  		<CountriesList
  			countriesList={countriesList}
  			searchInputValue={searchInputValue}
  		/>
  	}
  </>)
}
