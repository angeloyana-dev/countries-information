export default function CountriesListItems({ countriesList }) {
	const countriesItems = countriesList.map((country) => {
		return (<div key={country.name.official}>
			<div className="img-holder">
				<img src={country.flags.png} alt={country.flags.alt} />
			</div>
			<div>
				<h4>{country.name.common}</h4>
				<p>{country.name.official}</p>
			</div>
		</div>)
	})
	
	return <>{countriesItems}</>
}