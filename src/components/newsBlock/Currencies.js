import shortid from 'shortid';

export default function Currencies(props) {
    const { currencies } = props;

    return (
        <div className="currencies">
            <ul className="currencies-list">
                {
                    currencies.map((item) =>
                        <li className="currencies-list-elem" key={shortid.generate()}>
                            <p className="currency-name">{item.name}</p>
                            <p className="currency-rate">{item.rate}</p>
                            <p className="rate-difference">{item.difference}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}