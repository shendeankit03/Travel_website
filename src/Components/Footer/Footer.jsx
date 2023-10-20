import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import { FiSend } from 'react-icons/fi'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video className="video" src={video2} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small className='small'>KEEP IN TOUCH</small>
            <h2 className='h2'>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" className='input' type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <h1><SiYourtraveldottv className="icon" /> <span className='travel'>Travel.</span></h1>
              </a>
            </div>

            <div  data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia voluptatem pariatur dignissimos id eaque aliquid ducimus? Quo expedita beatae laudantium nobis assumenda est, omnis veritatis earum eligendi a ut!
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon b"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon d"/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group one */}
            <div data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            {/* <small className='small'>BEST TRAVEL WEBSITE THEME</small> */}
            <small className='small'>Mumbai, India</small>
            <small className='small'>Copyright &copy; 2023 Travel.com- All rights reserved</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
