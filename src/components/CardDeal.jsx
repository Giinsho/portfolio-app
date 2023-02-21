import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find your solution <br className='sm:block hidden'/> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I can show u how to manage your solutions in easy app, or page.
        After several meetings you will be able to use application to boost yours
        industry. I can do great website just for your needs.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'  />
    </div>
    
  </section>
)

export default CardDeal