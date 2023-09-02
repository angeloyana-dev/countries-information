import InfoTable from './InfoTable'

export default function CountryInfo({ infos, setToggleCountryInfo }) {
	const headingInfos = infos.heading
	const handleToggleCountryInfo = () => {
		setToggleCountryInfo(false)
		document.title = 'Countries Info'
	}
	
	return (<section className="country-info">
		<div className="wrapper">
			<div className="img-holder">
				<img src={headingInfos.flag} alt={headingInfos.flagAlt} />
				{headingInfos.coatOfArms && <img src={headingInfos.coatOfArms} alt={headingInfos.coatOfArmsAlt} />}
			</div>
			<div className="heading">
				<h3>{headingInfos.name}</h3>
				<h4>{headingInfos.subName}</h4>
			</div>
			<InfoTable tableInfos={infos.table} />
			<div className="btn-holder">
				<a href={headingInfos.map} className="fa-solid fa-location"></a>
				<button onClick={handleToggleCountryInfo}>Back</button>
			</div>
		</div>
	</section>)
}