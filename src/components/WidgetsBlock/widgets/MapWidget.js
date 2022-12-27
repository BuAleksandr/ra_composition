import shortid from 'shortid';

export default function MapWidget(props) {
    const { data } = props;

    return (
        <ul className="map-list">
            {
                data.map((item) =>
                    <li className="map-list-elem" key={shortid.generate()}>
                        <p>{item.name}</p>
                    </li>)
            }
        </ul>
    )
}