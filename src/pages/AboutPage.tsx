import React from "react";

type respX = {
    "id": any,
    "name": any,
    "symbol": any,
    "rank": any,
    "price_usd": any,
    "price_btc": any,
    "24h_volume_usd": any,
    "market_cap_usd": any,
    "available_supply": any,
    "total_supply": any,
    "max_supply": any,
    "percent_change_1h": any,
    "percent_change_24h": any,
    "percent_change_7d": any,
    "last_updated": any,
}

interface PropsI { }
interface StateI {
    data: respX[];
}

export class AboutPage extends React.Component<PropsI, StateI> {

    state: StateI = { data: [] }

    async componentDidMount() {
        const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
        const json = await response.json();
        this.setState({ data: json });
    }

    render() {
        return (
            <div className="About">
                {this.state.data.map(el => (
                    <li key={el.id}>
                        {el.name}: {el.price_usd}
                    </li>
                ))}
            </div>
        );
    }
}
