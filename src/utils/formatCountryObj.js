export default function formatCountryObj(data) {
	const infos = {
		heading: {
			name: data.name.common,
			subName: data.name.official,
			map: data.maps.googleMaps,
			flag: data.flags.png,
			flagAlt: data.flags.alt,
			coatOfArms: data.coatOfArms.png && data.coatOfArms.png,
			coatOfArmsAlt: data.coatOfArms.png && 'Coat of Arms'
		},
		table: {
		'Official Name': data.name.official,
		'Population': data.population.toLocaleString(),
		'Area': `${data.area.toLocaleString()}km²`,
		'Capital': data.capital && data.capital[0],
		'Region': data.region,
		'Subregion': data.subregion && data.subregion,
		'Official Languages': data.languages && Object.values(data.languages).join(', '),
		'Timezone': data.timezones.join(', '),
		'Currency': data.currencies && `${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol})`,
		'Calling code': data.idd.root && `${data.idd.root}${data.idd.suffixes.join('')}`,
		'Internet top-level domain': data.tld && data.tld.join(' ')
		}
	}
	
	return infos
}