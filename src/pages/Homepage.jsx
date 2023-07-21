import React, { useState, useRef } from 'react'
import './Homepage.scss'
import Carousal from '../components/Carousal/Carousal'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-scroll';


function Homepage() {
  const [value, onChange] = useState(new Date());

  const dateInputRef = useRef();

  const handleImageClick = () => {

  };

  return (
    <>
      <div className='herosection'>

        <div className="navbar">
          <div className="logo">
            <p>IGORAZA<span>CARRENTLZ</span></p>
          </div>
          <div className="options">
            <a href=""> <p>Home</p></a>
            <a href="">            <p>Rent Details</p>
            </a>
            <a href="">            <p>Why choose us</p>
            </a>
            <a href="">            <p>Register</p>
            </a>
          </div>
        </div>

        <div className="herocore">
          <h1>Drive <span>Your</span>  <br />  Dreams</h1>
          <p>"Unlock the Road to Adventure <br />Rent Your Freedom Today!</p>

          <div className="corebuttons">

            <Link
              activeClass="active"
              to="footerSection"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset to control the scrolling position
              duration={500}
            >
              <button className='contactus'> <p>
                Contact us</p>
              </button>
            </Link>

            <a href="">
              <button className="booknow">
                <p>Book Now</p>
              </button>
            </a>
          </div>
        </div>

      </div>


      <div className="datepicker">

        <div className="shedule">
          <div className="location">
            <img src="/images/location.png" alt="" />

            <select name="" id="" >
              <option value=""><span className="hide600"></span> Location</option>
              <option value="">Alappuzha</option>
              <option value="">Ernakulam</option>
              <option value="">Kozhikode</option>
              <option value="">Palakkad</option>
              <option value="">Kollam</option>
              <option value="">Kannur</option>
              <option value="">Idukki</option>
              <option value="">Kasargod</option>
              <option value="">Kottayam</option>
              <option value="">Thrissur</option>
              <option value="">Pathanamthitta</option>
              <option value="">Malappuram</option>
              <option value="">Wayanad</option>
              <option value="">Thiruvananthapuram</option>

            </select>
          </div>

          <div className="date">
            {/* <img src="/images/calendar.png" alt="" /> */}
            <p>Pickup <span className="hide600"></span></p>
            {/* <img src="/images/down.png" alt="" className='down hide600' onClick={handleImageClick}  /> */}
            <input type="date" id='pickdate' />
          </div>

          <div className="date">
            {/* <img src="/images/calendar.png" alt="" /> */}
            <p>Return <span className="hide600"></span></p>
            {/* <img src="/images/down.png" alt="" className='down hide600'  /> */}
            <input type="date" id='pickdate' />

          </div>
        </div>

        <div className="searchbutton">
          <a href="">
            <button><p>Seacrh</p></button>
          </a>
        </div>
      </div>

      <div className="brands">
        <img src="/images/benz.png" alt="" />
        <img src="/images/bmw.png" alt="" />
        <img src="/images/cheveloret.png" alt="" />
        <img src="/images/nissan.webp" alt="" />
        <img src="/images/suzuki.png" alt="" />
        <img src="/images/toyota.png" alt="" />
        <img src="/images/volvo.png" alt="" />
      </div>

      <div className="bestservices">
        <div className="titles">
          <h5>BEST SERVICES</h5>
          <h2>Most Popular Car Rental Deals</h2>
          <p>Explore below our best car services experience like never before</p>
        </div>
      </div>
      <Carousal />



      <div className="whychooseus">
        <div className="titles">
          <h5>WHY CHOOSE US</h5>
          <h2>Best Car Rental Services</h2>
          <p>We provide Best classic serivces as below</p>
        </div>
        <div className="services">
          <img src="/images/featuring1.png" alt="" />
          <div className="description">
            <div className="each">
              <p>24/7 Customer Support</p>
              <p>We keep our valued customers happy
                and provide 24/7 customer support
              </p>
            </div>
            <div className="each">
              <p>Best Price Guarantee</p>
              <p>We are committed for the best prices
                and ensure you for it
              </p>
            </div>
            <div className="each">
              <p>All locations in Tanzania</p>
              <p>We provide our services at each and every
                place all over Dar es salaam
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="nextdrive">
        <h1>Find Your Next Long <br /> Drive Now!</h1>
        <div className="datepicker">

          <div className="shedule">
            <div className="location">
              <img src="/images/location.png" alt="" />

              <select name="" id="" >
                <option value=""><span className="hide600"></span> Location</option>
                <option value="">Alappuzha</option>
                <option value="">Ernakulam</option>
                <option value="">Kozhikode</option>
                <option value="">Palakkad</option>
                <option value="">Kollam</option>
                <option value="">Kannur</option>
                <option value="">Idukki</option>
                <option value="">Kasargod</option>
                <option value="">Kottayam</option>
                <option value="">Thrissur</option>
                <option value="">Pathanamthitta</option>
                <option value="">Malappuram</option>
                <option value="">Wayanad</option>
                <option value="">Thiruvananthapuram</option>

              </select>
            </div>

            <div className="date">
              {/* <img src="/images/calendar.png" alt="" /> */}
              <p>Pickup <span className="hide600"></span></p>
              {/* <img src="/images/down.png" alt="" className='down hide600' onClick={handleImageClick}  /> */}
              <input type="date" id='pickdate' />
            </div>

            <div className="date">
              {/* <img src="/images/calendar.png" alt="" /> */}
              <p>Return <span className="hide600"></span></p>
              {/* <img src="/images/down.png" alt="" className='down hide600'  /> */}
              <input type="date" id='pickdate' />

            </div>
          </div>

          <div className="searchbutton">
            <a href="">
              <button><p>Seacrh</p></button>
            </a>
          </div>
        </div>

      </div>

      <div className="footer" id="footerSection">
        <div className="logodiv">
          <img src="/images/primary.png" alt="" />
          <p style={{ "fontWeight": "500" }}>Start with something simple and small,<br />
            then expand over time</p>
        </div>
        <div className="rest">
          <p>Company</p>
          <p>Rent Details</p>
          <p>Why Choose Us</p>
          <p>Register</p>
          <p>Terms and Conditions</p>
        </div>

        <div className="rest">
          <p>Featurs</p>
          <p>Vehicle Tracker</p>
          <p>iOS & Android Apps</p>
          <p>Business Trips</p>
          <p>Locations</p>
        </div>

        <div className="rest">
          <p>Contact Us</p>
          <p>Phone: <a href="tel:+917736886026">+917736886026</a></p>
          <p>mail: <a href="mailto:teamigoraza@gmail.com">teamigoraza@gmail.com</a></p>
        </div>
      </div>
      <div className="love">
        <p>ⒸCopyright & All Rights Reserved 2023 <a href="https://www.igoraza.com/">@IGORAZA.</a> Designed By IGORAZA
        </p>
      </div>

    </>

  )
}

export default Homepage