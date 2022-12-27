import shortid from 'shortid';

export default function Navigation(props) {
	const { categories } = props;

	return (
		<ul className="navigation-list">
			{
				categories.map((category) =>
					<li className="navigation-list-elem" key={shortid.generate()}>
						<a href="#">{category.name}</a>
					</li>)
			}
		</ul>
	)
}