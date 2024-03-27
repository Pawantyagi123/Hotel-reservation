/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll"
import {HiOutlineArrowNarrowRight} from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';

export default function NotFound() {
  return (
    <>
  <section className="notFound">
    <div className="container">
      <img src="/public/notFound.svg" alt="notfound"/>
      <h1>LOOKS LIKE YOU'RE LOST</h1>
      <p>We can't seem to find you the page you're looking for</p>
      <Link to={'/'}>Back to Home<span><HiOutlineArrowNarrowRight/></span></Link>
    </div>
  </section>
    </>
  )
}
