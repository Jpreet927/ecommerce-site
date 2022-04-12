import React from 'react'
import "../Styles/Footer/Footer.css"

function Footer() {
  return (
    <div className="footer__container">
        <div className="footer__top">
            <div className="footer__top-left">
                <h1>ALLORA SALVE</h1>
            </div>
            <div className="footer__top-right">
                <div className="footer__top-right-column">
                    <div className="footer__top-right-column-header">
                        <h3>Shop</h3>
                    </div>
                    <div className="footer__top-right-column-subtext">
                        <p>Men</p>
                        <p>Women</p>
                        <p>Home</p>
                    </div>
                </div>
                <div className="footer__top-right-column">
                    <div className="footer__top-right-column-header">
                        <h3>Company</h3>
                    </div>
                    <div className="footer__top-right-column-subtext">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Store Locator</p>
                    </div>
                </div>
                <div className="footer__top-right-column">
                    <div className="footer__top-right-column-header">
                        <h3>Help</h3>
                    </div>
                    <div className="footer__top-right-column-subtext">
                        <p>Customer Service</p>
                        <p>Privacy Policy</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <p>© Allora Salve ltd.</p>
            <p className="footer__bottom-regular">A Fictional Fashion Store Created by Jaipreet Singh :)</p>
            <div className="footer__bottom-icons">
                <img src={require("../Assets/Icons/Twitter-Logo.png")} alt="" />
                <img src={require("../Assets/Icons/YouTube-Logo.png")} alt="" />
                <img src={require("../Assets/Icons/Instagram-Logo.png")} alt="" />
                <img src={require("../Assets/Icons/Facebook-Logo.png")} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer