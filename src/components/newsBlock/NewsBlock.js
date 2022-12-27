import Navigation from "../Navigation";
import DateWidget from "./DateWidget";
import NewsList from "./NewsList";
import Currencies from "./Currencies";

export default function NewsBlock(props) {
	const { newsCategories, news, currencies } = props;

	return (
		<section className="news-block">
			<div className="news-block-header">
				<Navigation categories={newsCategories} />
				<DateWidget />
			</div>
			<div className="news-block-content">
				<NewsList news={news} />
				<Currencies currencies={currencies} />
			</div>
		</section>
	)
}