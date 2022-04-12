import React from 'react'
import "../Styles/AboutPage/AboutPage.css"

function AboutPage() {
  return (
    <div className="about__container">
      <div className="about__main">
        <div className="about__heading">
          <h1>ABOUT US</h1>
          <div className="about__heading-description">
            <h3>Our Background</h3>
            <p>Minim sint minim quis minim amet consequat ad. Duis laborum velit aliquip anim esse aliquip dolor laborum voluptate exercitation consectetur ipsum. Cupidatat laboris reprehenderit proident reprehenderit do est occaecat minim sit ipsum duis duis magna. Incididunt aute est cupidatat pariatur ipsum ex excepteur laboris dolor qui commodo. Dolore aliquip et aliqua minim elit sint officia id adipisicing do labore excepteur et aliquip. Adipisicing sit fugiat tempor et.</p>
            <p>Aliqua magna nisi ipsum voluptate officia adipisicing ullamco magna cupidatat nostrud dolor. Labore non sit laborum nostrud enim in adipisicing sint incididunt ex amet non. Commodo nostrud ex deserunt id consequat ea duis esse magna sit proident id nisi proident.</p>
            <h3>Our Committment</h3>
            <p>Irure non fugiat ad qui nisi. Ullamco culpa dolor Lorem amet sunt minim culpa aliqua. Excepteur commodo commodo magna ad minim nisi commodo cupidatat irure. Ea quis sunt sit irure aliqua minim aute veniam aute quis nostrud. Veniam culpa ullamco esse esse. Officia cupidatat mollit excepteur magna nostrud ipsum qui laborum magna non. In ad amet magna esse magna elit veniam amet aliqua amet pariatur.</p>
            <img src={require('../Assets/Icons/Signature.png')} alt="" />
          </div>
        </div>
        <div className="about__hero-image">
          <img src={require('../Assets/Images/About-Hero.jpg')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage