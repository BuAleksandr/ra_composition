import SearchBar from "./SearchBar";

export default function SearchBlock(props) {
	const { logo, searchCategories } = props;

	return (
		<div className="search-block">
			<div className="main-logo-container">
				<img className="main-logo" src={logo} alt="logo" />
			</div>
			<SearchBar categories={searchCategories} />
		</div>
	)
}