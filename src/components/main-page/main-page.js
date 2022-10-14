/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useEffect, useState } from "react";
import "../main-page/main-page.css";

export default function MainPage(){

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

        const initialText = 'Submit';
        const [buttonText, setButtonText] = useState(initialText);

        const medianValue =
        options.map((option) => (
            <p value={option.label}>{option.median}</p>
            ))

        function handleClick() {
            setButtonText('Your median for that month was: ' + {medianValue});
        }

        return (
            <div className="main-page-container">

                <div className="header">
                    <div className="brand">
                        <h3>ArenalSoft</h3>
                    </div>
                    <nav class="menu">
                        <ol>
                            <li class="menu-item"><a href="#0">Home</a></li>
                            <li class="menu-item"><a href="#0">About us</a></li>
                            <li class="menu-item">
                                <a href="#0">Crypto</a>
                            </li>
                            <li class="menu-item">
                                <a href="#0">ArenalSoft</a>

                            </li>
                            <li class="menu-item"><a href="#0">Contact</a></li>
                        </ol>
                    </nav>
                </div>

                <div className="main-top-content">
                    <div>
                        <h1 className="main-title">Hi Juanito! <br />Check your monthly stats</h1>

                        <div className="buttons">
                            <div>
                                <button>Change month</button>
                            </div>
                            <div>
                                <button>Average stats</button>
                            </div>
                        </div>

                    </div>
                </div>

                <h2 className="month">Select the month</h2>

                <div className="main-content">
                    <div className="">
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

                        <button onClick={handleClick} className="submit" type="submit">{buttonText}</button>




                    </div>
                    <div className="learning-container">
                        <div>

                            <h1 className="learning-title">Learning Center</h1>
                            <h2 className="learning-subtitle">Juanito, find more resources here!</h2>

                            <nav className="learning-menu">
                                <ol>
                                    <li class="learning-menu-item"><a href="https://ethereum.org/en/">Ethereum</a></li>
                                    <li class="learning-menu-item"><a href="https://www.investopedia.com/terms/b/bitcoin.asp">Bitcoin</a></li>
                                    <li class="learning-menu-item"><a href="https://www.investopedia.com/terms/b/blockchain.asp">Learn more</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div nameClass="footer">
                    <div></div>
                </div>

            </div>
        )
    }







