import shortid from 'shortid';

export default function Broadcast(props) {
	const { data } = props;
    return (
		<ul className="broadcast-list">
			{
				data.map((item) =>
					<li className="broadcast-list-elem" key={shortid.generate()}>
						<p className="program-name">{item.name}</p>
						<p className="tv-channel">{item.channel}</p>
					</li>)
			}
		</ul>
	)
}