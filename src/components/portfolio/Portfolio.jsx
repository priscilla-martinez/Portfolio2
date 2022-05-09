import React from 'react'
import './Portfolio.css'
import PawBNB from '../../assets/PawBnB.png'
import JobTrackr from '../../assets/JobTrackr.png'
import FF from '../../assets/ForeverFriends.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2 className='portfolio_title'>Portfolio</h2>

        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <div >
              <img src={PawBNB} alt='PawBnB' className='portfolio_item_image'/>
            </div>
            <h3>PawBnB</h3>
            <a href="https://github.com/priscilla-martinez/PawBnB" className='btn' target='_blank'>GitHub</a>
            <a href="google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>

          <article className='portfolio_item'>
            <div>
              <img src={JobTrackr} alt='JobTrackr' className='portfolio_item_image'/>
            </div>
            <h3>JobTrackr</h3>
            <a href="https://git.generalassemb.ly/theWestCoders/Project3" className='btn' target='_blank'>GitHub Backend</a>
            <a href="https://pages.git.generalassemb.ly/theWestCoders/JobTrackr/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>

          <article className='portfolio_item'>
            <div >
              <img src={FF} alt='Forever Friends' className='portfolio_item_image'/>
            </div>
            <h3>Forever Friends</h3>
            <a href="https://github.com/priscilla-martinez/AnimalAdoption/tree/main/foreverfriend" className='btn' target='_blank'>GitHub</a>
            <a href="https://priscilla-martinez.github.io/AnimalAdoption/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
        </div>
    </section>
  )
}

export default Portfolio