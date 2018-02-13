import React from 'react'
import { Link, Route } from 'react-router-dom'
import { MainMenu, VanMenu } from './menus'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
    <section className="home">
        <h1>Jerry's Van Emporium</h1>
        <nav>
            <Link to="vans">Vans</Link>
            <Link to="contact">Contact Us</Link>
        </nav>
        <img src="img/jerrys-vans.jpg" alt="sweet vans"/>
    <p>"Hi, my name is Jerry. I am a cool guy with a cool jacket, and I sell cool vans."</p>
    <p>- Jerry</p>
    </section>

export const Vans = ({match}) =>
    <PageTemplate>
        <section className="vans">
            <Route component={VanMenu} />
            <Route exact path="/vans" component={Horse}/>
            <Route path="/vans/star-wars" component={StarWars}/>
            <Route path="/vans/snake-and-wolf" component={SnakeAndWolf}/>
        </section>
    </PageTemplate>

const Horse = () =>
    <section className="horse">
      <h1>Horse Van</h1>
      <img src="img/horse-van.png" alt="horse van"/>
    </section>

const StarWars = () =>
    <section className="star-wars">
      <h1>Star Wars Van</h1>
      <img src="img/star-wars.jpg" alt="star wars van"/>
    </section>

const SnakeAndWolf = () =>
    <section className="snake-and-wolf">
      <h1>Snake and Wolf Van</h1>
      <img src="img/wolf-van.jpg" alt="snake and wolf van"/>
    </section>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>Contact Us</h1>
        </section>
    </PageTemplate>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>
