import React, { Component } from "react";
import Spinner from "./Spinner";

export default class CryptoTable extends Component {
    constructor() {
        super();
        this.state = {
            symbols: ["BTC", "ETH", "DOGE", "LTC"],
            data: [],
            noOfElement: 0,
            loading: true,
        };
    }
    async componentDidMount() {
        let data = await fetch(
            "https://data.messari.io/api/v2/assets?with-profiles"
        );
        let parsedData = await data.json();
        this.setState({ data: parsedData.data, loading: false });
    }

    render() {
        let noOfElement = 0;
        return (
            <table
                className={`table rounded-3 mt-4 mb-0 bg-${this.props.Theme + " border border-secondary"} text-${this.props.Theme === "dark" ? "white" : "dark"}`}
                style={{ height: "220px", fontFamily: "Poppins"}}
            >
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Change</th>
                            <th scope="col">Last Trade at</th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    {// eslint-disable-next-line
                    this.state.data.map((element) => {
                        if (this.state.symbols.includes(element.symbol)) {
                            noOfElement = noOfElement + 1;
                            return (
                                <tr key={element.symbol}>
                                    <th scope="row">{noOfElement}</th>
                                    <td>{element.symbol}</td>
                                    <td>${Math.floor(element.metrics.market_data.price_usd) === 0 ? (String(element.metrics.market_data.price_usd).slice(0, 5)+"..") : (Math.floor(element.metrics.market_data.price_usd))}</td>
                                    <td
                                        style={{
                                            backgroundColor:
                                                element.metrics.market_data
                                                    .percent_change_usd_last_24_hours <
                                                0
                                                    ? "#dc3545"
                                                    : "#198754",
                                        }}
                                    >
                                        {String(
                                            element.metrics.market_data
                                                .percent_change_usd_last_24_hours
                                        ).slice(0, 6)}
                                        %
                                    </td>
                                    <td>
                                        {new Date(
                                            element.metrics.market_data.last_trade_at
                                        )
                                            .toLocaleString()
                                            .slice(0, -6)}
                                    </td>
                                </tr>
                            );
                        } else {
                            console.log();
                        }
                    })}
                </tbody>
            </table>
        );
    }
}
