/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../main-page/main-page.css";


export default function MainPage() {

    const options = [

        {
            value: "jan",
            label: "10/1/2022",
            median: 19807.8,
        },
        {
            value: "feb",
            label: "10/2/2022",
            median: 19379.8,
        },
        {
            value: "mar",
            label: "10/3/2022",
            median: 19154.8,
        },
        {
            value: "apr",
            label: "10/4/2022",
            median: 19134.6,
        },
    ];

    return (
        <div className="main-page-container">

            <div className="header">

                <nav className="menu">
                    <ol>
                        <li className="menu-item"><a href="#0">Home</a></li>
                        <li className="menu-item"><a href="#0">About us</a></li>
                        <li className="menu-item">
                            <a href="#0">Crypto</a>
                        </li>
                        <li className="menu-item">
                            <a href="#0">ArenalSoft</a>

                        </li>
                        <li className="menu-item"><a href="#0">Contact</a></li>
                    </ol>
                </nav>
            </div>


            <div className="main-top-content">
                <div>
                    <h1 className="main-title">Hi Juanito! &#x1F590;   <br />Check your monthly stats &#x1F47D; </h1>

                    <div className="buttons">
                        <div>
                            <button>Go back</button>
                        </div>
                        <div>
                            <button>Average stats</button>
                        </div>
                    </div>
                </div>
            </div>


            <h2 className="month">Select the month</h2>

            <div className="main-content">

                <form>
                    <label>Date</label>
                    <select id="date-dropdown" name="date">
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <label>Currency</label>
                    <select name="coin-type">
                        <option value="btc">bitcoin</option>
                    </select>

                    <input className="submit" type="submit" value="Submit" />
                </form>

                <div className="learning-container">
                    <div>
                        <h1 className="learning-title">Learning Center</h1>
                        <h2 className="learning-subtitle">Juanito, find more resources here!</h2>
                        <nav className="learning-menu">
                            <ol>
                                <li className="learning-menu-item"><a href="https://ethereum.org/en/">Ethereum</a></li>
                                <li className="learning-menu-item"><a href="https://www.investopedia.com/terms/b/bitcoin.asp">Bitcoin</a></li>
                                <li className="learning-menu-item"><a href="https://www.investopedia.com/terms/b/blockchain.asp">Learn more</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
      </div>
    )
}







