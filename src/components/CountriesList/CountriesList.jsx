import CountriesListItems from './CountriesListItems'

export default function CountriesList({ countriesList }) {
	return (<section className="countries-list">
		<CountriesListItems countriesList={countriesList} />
	</section>)
}