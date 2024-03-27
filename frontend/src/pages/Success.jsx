import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';

export default function Success() {
  const [countdown, setCountdown ] = useState(10);
  const navigate = useNavigate();
  useEffect(()=>{
    const timeoutId = setInterval(() =>{
      setCountdown(preCount =>{
        if(preCount === 1){
          clearInterval(timeoutId)
          navigate("/")
        }
        return preCount - 1;
      });
    }, 1000);
return () => clearInterval(timeoutId);
  },[navigate])
  return (
    <><section className="notFound">
      <div className="container">
        <img src="/public/sandwich.png" alt="success"/>
        <h1>Redirecting to home in {countdown} seconds...</h1>
        <Link to="/">Back to Home <HiOutlineArrowNarrowRight/></Link>
      </div>
    </section>
   
    </>
  )
}
