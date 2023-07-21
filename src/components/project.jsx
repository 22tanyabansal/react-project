/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Projects() {
  return (
    <div className='main' id='Projects'>
    <h1 className="titleofprojects">Proj<span className='projectspan'>ects</span></h1>
    <div className="works">
      <ul>
        <li style={{background: "url('https://img.rawpixel.com/private/static/images/website/2022-05/rm422-076-x.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=444e119094ef45a3248aa529fb696b2b')"}}>
        <div className="content">
          <a href="https://github.com/07sumit1002/portfolio" className='button'>ON GITHUB</a>
        </div>
        <div className="info">
          <h1 className='title'>My Portfolio website</h1>
          <h6 className="sub-title">This is my 1st website!</h6>
          <div className="info-container">
          <div className="info-data">
            <div className="box">
            <i className="fa-solid fa-circle-info st"></i>
              <p>Portfolio showcasing my work and skills.</p>
            </div>
            </div>
            <p className="disclamer">This is a example that represents my skills in HTML and CSS!</p>
          </div>
        </div>
        </li>
      </ul>

      {/*  */}
      <ul>
        <li style={{background: "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg')"}}>
        <div className="content">
        <a href="https://github.com/07sumit1002/CabRental" className='button'>ON GITHUB</a>
        </div>
        <div className="info">
          <h1 className='title'>CabRental</h1>
          <h6 className="sub-title">This is my 2d website!</h6>
          <div className="info-container">
          <div className="info-data">
            <div className="box">
            <i className="fa-solid fa-circle-info st"></i>
              <p>This will help student to search for a cab partner.</p>
            </div>
            </div>
            <p className="disclamer">This is a example that represents my skills in HTML, JS and CSS!</p>
          </div>
        </div>
        </li>
      </ul>

      {/*  */}
      <ul>
        <li style={{background: "url('https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/media_block/cw_image/ba22f789a6f/f4d646947be91bb83867e/1544221260_1ktu7pi_1544221248_14faf0n_att-url-download.jpg')"}}>
        <div className="content">
        <a href="https://github.com/07sumit1002/Mango-Leaf-Disease-Detedtion-Using-Python-Machine-Learning" className='button'>ON GITHUB</a>
        </div>
        <div className="info">
          <h1 className='title'>Mango-Leaf-Disease-Detection</h1>
          <h6 className="sub-title">This is my 3rd project</h6>
          <div className="info-container">
          <div className="info-data">
            <div className="box">
            <i className="fa-solid fa-circle-info st"></i>
              <p>A Python ML project for detecting Mango Leaf Disease, using algorithms to identify leaf health conditions.</p>
            </div>
            </div>
            <p className="disclamer">This is a example that represents my skills in Python, ML, Tensorflow and Jupyter!</p>
          </div>
        </div>
        </li>
      </ul>
    </div>
    </div>
  )
}