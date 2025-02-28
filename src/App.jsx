import React from 'react'
import styles from './style';
import {
  Navbar, Hero, Features, Billing, CardDeal, Testimonials, Clients, CTA, FeedbackCard, Foot, Stats, AboutMe
} from './components'
const App = () =>
(
  <div className='bg-primary w-full overflow-hidden'>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutMe/>
      </div>
    </div>

    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Features/>
        <CardDeal/>
        <Testimonials/>
        <Foot/>
      </div>
    </div>
  </div>
);


export default App
