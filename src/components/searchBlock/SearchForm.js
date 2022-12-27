export default function SearchForm(props) {
	return(
		<>
			<form className="form search-form">
				<input className="input search-input" id="search" name="search" />
				<button className="btn search-btn">Найти</button>
			</form>
			{props.children}
		</>
	)
}