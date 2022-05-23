import React, { useState, useEffect } from 'react'
import './styles/styles.scss';

// Images

import arrow from './images/icon-arrow.svg';
import { Card } from './components/Card';
import { Map } from './components/Map';

export const AppAddress = () => {
    const [ip, setIp] = useState("");
    const [res, setRes] = useState();
    const [position, setPosition] = useState([]);
    const [input, setInput] = useState();

    useEffect(() => {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_WjFdwlLYKMsyCnXOl7YwohMymQqBZ&ipAddress=${ip}`
        )
            .then((res) => res.json())
            .then((result) => {
                setRes(result);
                setIp(result.ip);
                setPosition([result.location.lat, result.location.lng]);
            });
    }, [ip]);

    function handleChange(event) {

        setInput(event.target.value);

    }

    function handleClick() {

        setIp(input);

    }

    if (ip !== "" && position.length !== 0) {
        return (
            <>
                <div className="fluid-container top" style={{ height: "30vh" }}>
                    <div className="text-center text_h">IP Address Tracker</div>
                    <div className="container text-center mt-3">
                        <input type="text" value={input} onChange={handleChange} placeholder="Search for any IP address or domain" />
                        <button onClick={handleClick}> <img src={arrow} width='11' alt="Go" /> </button>
                    </div>

                    <div className="container details">
                        <div className="row">
                            <Card header="IP ADDRESS" main={res.ip} />
                            <Card header="LOCATION" main={res.location.city + ', ' + res.location.country + '\n' + res.location.postalCode} />
                            <Card header="TIMEZONE" main={'UTC ' + res.location.timezone} />
                            <Card header="ISP" main={res.isp} />
                        </div>
                    </div>
                </div>
                <Map position={position} />
            </>
        );
    }



    return (
        <div className="divLoading" >
            <h2 className="textLoading">
                "If you see Loading for long time my quota for IPYFIY is finished."
            </h2>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                    alt="Loading"
                />
            </div>

        </div>
    );
}
