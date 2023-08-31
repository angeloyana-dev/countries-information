// Global variables
const title = document.querySelector('title')
const countriesList = document.getElementById('countries-list')
const noResultPage = document.getElementById('no-result-page')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const countryInfos = document.getElementById('country-infos')

// Get all countries data
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(countries => {
	countries = countries.sort((a, b) => {
		return a.name.common.localeCompare(b.name.common)
	})
	countries.forEach((country) => {
		createListItem(country)
	})
})
.catch(e => console.error(e))

// Search function
searchBtn.addEventListener('click', () => {
	closeCountryInfos()
	const countriesListItems = document.querySelectorAll('#countries-list > div')
	let isExists = 0
	
	countriesListItems.forEach((item) => {
		if(searchInput.value === '') {
			item.style.display = ''
			isExists++
		} else if(item.textContent.toLowerCase().includes(searchInput.value.trim())) {
			item.style.display = ''
			isExists++
		} else {
			item.style.display = 'none'
		}
	})
	
	if(isExists) {
		noResultPage.style.display = 'none'
		countriesList.style.display = 'block'
	} else {
		noResultPage.style.display = 'block'
		countriesList.style.display = 'none'
	}
	
	searchInput.focus()
	scrollTop(countriesList)
})

// UI Generators
function createListItem(data) {
	const container = document.createElement('div')
	const img = document.createElement('img')
	const textWrapper = document.createElement('div')
	const heading = document.createElement('h3')
	const subHeading = document.createElement('p')
	
	img.src = data.flags.png
	img.alt = data.flags.alt
	heading.innerText = data.name.common
	subHeading.innerText = data.name.official
	container.addEventListener('click', () => {
		openCountryInfos(data)
	})
	
	textWrapper.append(heading, subHeading)
	container.append(img, textWrapper)
	countriesList.append(container)
}

// Dynamic Functions
function openCountryInfos(data) {
	const images = document.getElementById('images').querySelectorAll('img'),
				commonName = document.getElementById('common-name'),
				nativeName = document.getElementById('native-name'),
				officialName = document.getElementById('official-name'),
				population = document.getElementById('population'),
				area = document.getElementById('area'),
				capital = document.getElementById('capital')
				region = document.getElementById('region'),
				subregion = document.getElementById('subregion'),
				officialLanguage = document.getElementById('official-languages'),
				timezone = document.getElementById('timezone'),
				currency = document.getElementById('currency'),
				callingCode = document.getElementById('calling-code'),
				countryDomain = document.getElementById('country-domain'),
				maps = document.getElementById('maps')
	
	images[0].src = data.flags.png
	images[0].alt = data.flags.alt
	if(data.coatOfArms.png) images[1].src = data.coatOfArms.png
	maps.href = data.maps.googleMaps
	commonName.innerText = data.name.common
	nativeName.innerText = data.name.official
	officialName.innerText = data.name.official
	population.innerText = data.population.toLocaleString()
	area.innerText = `${data.area.toLocaleString()}km²`
	capital.innerText = data.capital ? data.capital[0] : 'N/A'
	region.innerText = data.region
	subregion.innerText = data.subregion || 'N/A'
	officialLanguage.innerText = data.languages ? Object.values(data.languages).join(', ') : 'N/A'
	timezone.innerText = data.timezones[0]
	currency.innerText = data.currencies ? `${Object.values(data.currencies)[0].name} ${Object.values(data.currencies)[0].symbol}` : 'N/A'
	callingCode.innerText = data.idd.root ? data.idd.root + data.idd.suffixes.join('') : 'N/A'
	countryDomain.innerText = data.tld ? data.tld.join(' ') : 'N/A'
	
	countriesList.style.display = 'none'
	countryInfos.style.display = 'flex'
	scrollTop(countryInfos)
	title.innerText = `Countries | ${data.name.common}`
}

function closeCountryInfos() {
	countriesList.style.display = 'block'
	countryInfos.style.display = 'none'
	title.innerText = 'Countries'
}

function scrollTop(container) {
	const element = document.querySelector('html')
	element.scrollTop = 0
	container.scrollTop = 0
}