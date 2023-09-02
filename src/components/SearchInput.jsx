import { useRef } from 'react'

export default function SearchInput({ setSearchInputValue, countriesList }) {
	const inputRef = useRef(null)
	const handleSearchInput = () => {
		const inputValue = inputRef.current.value.toLowerCase()
		const filteredByCommonName = countriesList.filter(country => country.name.common.toLowerCase().includes(inputValue)).length
		const filteredByOfficialName = countriesList.filter(country => country.name.official.toLowerCase().includes(inputValue)).length
		
		if(!filteredByCommonName && !filteredByOfficialName) {
			setSearchInputValue(false)
		} else {
			setSearchInputValue(inputValue)
		}
		
		inputRef.current.focus()
		if(inputRef.current.value !== '') document.documentElement.scrollTop = 0
	}
	
	return (<section className="search-input">
		<input ref={inputRef} type="text" placeholder="Search by name" />
		<i onClick={handleSearchInput} className="fa-solid fa-magnifying-glass"></i>
	</section>)
}