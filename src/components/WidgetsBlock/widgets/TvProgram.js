import shortid from 'shortid';

export default function TvProgram(props) {
	const { data } = props;

	return (
		<ul className="program-list">
			{
				data.map((item) =>
					<li className="program-list-elem" key={shortid.generate()}>
						<p className="program-time">{item.time}</p>
						<p className="program-name">{item.name}</p>
						<p className="tv-channel">{item.channel}</p>
					</li>)
			}
		</ul>
	)
}