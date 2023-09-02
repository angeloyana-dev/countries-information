import CountriesListItems from './CountriesListItems'

export default function CountriesList({ countriesList, searchInputValue }) {
	return (<>
		{
			searchInputValue === false ?
			<section className="no-result">
				<p>No result found.</p>
			</section> :
			<section className="countries-list">
				<CountriesListItems countriesList={countriesList} searchInputValue={searchInputValue} />
			</section>
		}
	</>)
}