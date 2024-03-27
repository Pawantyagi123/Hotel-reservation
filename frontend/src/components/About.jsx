/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';
export default function About() {
  return (
    <>
    <section className='about' id='about'>
     <div className="container">
        <div className="banner">
            <div className="logo">
                <h1 className='heading'>ABOUT US</h1>
                <p>The only thing we're serious about is food.</p>
            </div>
            <p className='mid'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fuga odio impedit iusto. Unde velit commodi id quibusdam distinctio dolores animi ut cumque dolorem saepe. Voluptatum sit aspernatur soluta cum ducimus rerum ab nihil tempore autem, adipisci eos accusantium officiis distinctio repellendus assumenda perferendis corporis commodi aut tempora quia cupiditate.</p>
            <Link to={"/"}>Explore Menu {""} <span>
               <HiOutlineArrowNarrowRight/> </span></Link>
        </div>
        <div className="banner">
            <img src='/about.png' alt='about'/>
        </div>
     </div>
    </section>
    </>
  );
}
