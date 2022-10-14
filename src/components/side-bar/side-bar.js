import React, {Component} from "react";
import "./side-bar.css"
import Sales from "../../assets/img/sales.svg";
import Price from "../../assets/img/price.svg";
import Purchase from "../../assets/img/purchase.svg";
import FearGreed from "../../assets/img/fearGreed.svg";
import UserIcon from "../../assets/img/userIcon.png";
import ChangeRate from "../../assets/img/changeRate.gif";




class SideBar extends Component{
    render(){
        return (
            
<div className="main-container">

<div className="top-container">
    <img src={UserIcon} alt="" className="user-icon" />
    <h2 className="title">Juanito</h2>
</div>

<div className="stats-container">
    <div className="sales">
        <img className="sales-img" alt="" src={Sales} />
        <h2 className="numbers">648</h2>
        <p>Ventas</p>
    </div>

    <div className="purchase">  
        <img className="purchase-img" alt="" src={Purchase} />
        <h2 className="numbers">68</h2>
        <p>Compras</p>
    </div>

    <div className="price">
        <img className="price-img" alt="" src={Price} />
        <h2 className="numbers">56</h2>
        <p>Precio actual</p>
    </div>

    <div className="fear-greed">
        <img className="feargreed-img" alt="" src={FearGreed} />
        <h2 className="numbers">89</h2>
        <p>Fear and Greed</p>
    </div>
</div>

<div className="change-rate-container">
    <h3>Estos son tus estadisticas de la semana</h3>
    <img className="change-rate-img" alt="" src={ChangeRate} />
</div>
</div>
   );
 }
}

export default SideBar