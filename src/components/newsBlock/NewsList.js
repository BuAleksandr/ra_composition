import shortid from 'shortid';

export default function NewsList(props) {
	const { news } = props;

	return (
		<ul className="news-list">
			{
				news.map((item) =>
					<li className="news-list-elem" key={shortid.generate()}>
						<img className="news-icon" src={item.img} alt="icon"/>
						<p className="news-title"><a href={item.link}>{item.title}</a></p>
					</li>)
			}
		</ul>
	)
}