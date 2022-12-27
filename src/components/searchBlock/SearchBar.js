import Navigation from "../Navigation";
import SearchForm from "./SearchForm";

export default function SearchBar(props) {
    const { categories } = props;

    return (
        <div className="search-bar">
            <Navigation categories={categories} />
            <SearchForm>
                <div className="search-bar-form-description">
                    <p className="description-text">Найдётся всё. Например, <span className="description-example">фаза луны сегодня</span></p>
                </div>
            </SearchForm>
        </div>
    )
}