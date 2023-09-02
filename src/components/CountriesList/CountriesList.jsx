import CountriesListItems from './CountriesListItems'

export default function CountriesList({ countriesList, searchInputValue, toggleCountryInfo, setToggleCountryInfo }) {
	return (<>
		{
			searchInputValue === false ?
			<section className="no-result" style={{ display: toggleCountryInfo ? 'none' : '' }}>
				<p>No result found.</p>
			</section> :
			<section className="countries-list" style={{ display: toggleCountryInfo ? 'none' : '' }}>
				<CountriesListItems countriesList={countriesList} searchInputValue={searchInputValue} setToggleCountryInfo={setToggleCountryInfo} />
			</section>
		}
	</>)
}