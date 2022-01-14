import "./portfolio.scss";
import { E_Commerce, Social_App, portfolio } from "../../data.js";
import Portfoliolist from "../Portfoliolist/portfoliolist";
import { useState, useEffect } from "react";

function Portfolio() {
    const [data, setdata] = useState([]);
    const [activeli, setactiveli] = useState("Portfolio");
    const list = [
        {
            id: "Portfolio",
            title: "Portfolio",
        },
        {
            id: "Social App",
            title: "Social App",
        },
        {
            id: "E-Commerce",
            title: "E-Commerce",
        },
    ];

    useEffect(() => {

        switch (activeli) {
            case "Portfolio":
                setdata(portfolio);
                break;
            case "Social App":
                setdata(Social_App);
                break;
            case "E-Commerce":
                setdata(E_Commerce);
                break;
            default:
                setdata(portfolio);

        }

    }, [activeli]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>

            <ul className="item-container">
                {list.map((lis) => (
                    <Portfoliolist
                        id={ lis.id }
                        title={lis.title}
                        active={activeli === lis.id}
                        setselected={setactiveli}
                    />
                 ))}
            </ul>

            <div className="container">
                {data.map((d) => (
                    <div className="snaps">
                        <img src={ d.img} className="snapshot" alt="snapshots" />
                        <h3>{ d.title}</h3>
                    </div>
                    
                    ))}
                    
            </div>
        </div>
    );
}

export default Portfolio;