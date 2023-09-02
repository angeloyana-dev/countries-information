export default function CountriesListItems({ countriesList, searchInputValue }) {
	const countriesItems = countriesList.map((country) => {
		return (<div style={{ display:
			country.name.common.toLowerCase().includes(searchInputValue) ||
			country.name.official.toLowerCase().includes(searchInputValue) ?
			'' : 'none'
		}} key={country.name.official}>
			<div className="img-holder">
				<img src={country.flags.png} alt={country.flags.alt} />
			</div>
			<div>
				<h4>{country.name.common}</h4>
				<p>{country.name.official}</p>
			</div>
		</div>)
	})
	
	return (<>
		{countriesItems}
	</>)
}