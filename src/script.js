// Global variables
const countriesList = document.getElementById('countries-list')
const noResultPage = document.getElementById('no-result-page')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')

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
	
	textWrapper.append(heading, subHeading)
	container.append(img, textWrapper)
	countriesList.append(container)
}