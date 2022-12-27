import shortid from 'shortid';

export default function Popular(props) {
	const { data } = props;

	return (
		<ul className="popular-list">
			{
				data.map((item) =>
					<li className="popular-list-elem" key={shortid.generate()}>
						<p><span className="popular-title">{item.title}</span> - {item.text}</p>
					</li>)
			}
		</ul>
	)
}