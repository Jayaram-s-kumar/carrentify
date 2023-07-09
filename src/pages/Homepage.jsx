import React, { useState } from 'react'
import './Homepage.scss'
import Carousal from '../components/Carousal/Carousal'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


function Homepage() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className='herosection'>

        <div className="navbar">
          <div className="logo">
            <p>Car <span>Rentify</span></p>
          </div>
          <div className="options">
            <p>Home</p>
            <p>Rent Details</p>
            <p>Why choose us</p>
            <p>Register</p>
          </div>
        </div>

        <div className="herocore">
          <h1>Rent A Car & <br /> Travel <span>Endless</span></h1>
          <p>No reservation costs.Great rates. <br />
            Find What You Need actually.</p>

          <div className="corebuttons">
            <button className='contactus'> <p>
              Contact us</p>
            </button>

            <button className="booknow">
              <p>Book Now</p>
            </button>
          </div>
        </div>

      </div>


      <div className="datepicker">

        <div className="shedule">
          <div className="location">
            <img src="/images/location.png" alt="" />

            <select name="" id="" >
              <option value=""><span className="hide600"></span> Location</option>
              <option value="">Mumbai</option>
              <option value="">Kochi</option>
              <option value="">Delhi</option>

            </select>
          </div>

          <div className="date">
            <img src="/images/calendar.png" alt="" />
            <p>Pickup <span className="hide600">Date</span></p>
            <img src="/images/down.png" alt="" className='down hide600' />
          </div>

          <div className="date">
            <img src="/images/calendar.png" alt="" />
            <p>Return <span className="hide600">Date</span></p>
            <img src="/images/down.png" alt="" className='down hide600' />
          </div>
        </div>

        <div className="searchbutton">
          <button><p>Seacrh</p></button>
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
          <img src="/images/redcar.png" alt="" />
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
              <option value="">Mumbai</option>
              <option value="">Kochi</option>
              <option value="">Delhi</option>

            </select>
          </div>

          <div className="date">
            <img src="/images/calendar.png" alt="" />
            <p>Pickup <span className="hide600">Date</span></p>
            <img src="/images/down.png" alt="" className='down hide600' />
          </div>

          <div className="date">
            <img src="/images/calendar.png" alt="" />
            <p>Return <span className="hide600">Date</span></p>
            <img src="/images/down.png" alt="" className='down hide600' />
          </div>
        </div>

        <div className="searchbutton">
          <button><p>Seacrh</p></button>
        </div>
      </div>
      </div>

      <div className="footer">
        <div className="logodiv">
          <p>Car<span>Rentify</span></p>
          <p>Rides for the daily <br /> achievers</p>
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
          <p>info@carrentify.com</p>
          <p>Dar es salaam,Tanzania</p>
        </div>
      </div>
      <div className="love">
        <p>-- Made with ❤️‍🔥 by IGORAZA</p>
      </div>

    </>

  )
}

export default Homepage