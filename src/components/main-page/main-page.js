/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../main-page/main-page.css";
import axios from 'axios';

class MainPage extends Component {



    render() {
        return (
            <div className="main-page-container">

            <div className="header">
                <div className="brand">
                    <h3>ArenalSoft</h3>
                </div>
                <nav class="menu">
                    <ol>
                      <li class="menu-item"><a href="#0">Hogar</a></li>
                      <li class="menu-item"><a href="#0">Acerca de</a></li>
                      <li class="menu-item">
                        <a href="#0">Crypto</a>
                        <ol class="sub-menu">
                          <li class="menu-item"><a href="#0">Bitcoin</a></li>
                          <li class="menu-item"><a href="#0">Ethereum</a></li>
                        </ol>
                      </li>
                      <li class="menu-item">
                        <a href="#0">ArenalSoft</a>
                        <ol class="sub-menu">
                          <li class="menu-item"><a href="#0">México</a></li>
                          <li class="menu-item"><a href="#0">Costa Rica</a></li>
                        </ol>
                      </li>
                      <li class="menu-item"><a href="#0">Contacto</a></li>
                    </ol>
                  </nav>
            </div>
        
            <div className="top-content">
                <div>
                    <h1 className="main-title">Hola Juanito! <br /> Checa tu actividad mensual</h1>
        
                    <div className="buttons">
                        <div>
                            <button>Cambiar el mes</button>
                        </div>
                        <div>
                            <button>Menú principal</button>
                        </div>
                    </div>
        
                </div>
            </div>
        
            <div nameClass="main-content">
                <div>
                    <h2>Mes de Septiembre</h2>
                    <label>Fecha</label>
                    <input type="text" name="date" />
                    <label>Precio</label>
                    <input type="text" name="price" />
                    <label>Currency</label>
                    <select name="coin-type">
                    </select>
                    <button type="submit">Entrar</button>
                </div>
            </div>
        
        
            <div nameClass="footer">
                <div></div>
            </div>
        
        </div>
        )
    }
}

export default MainPage