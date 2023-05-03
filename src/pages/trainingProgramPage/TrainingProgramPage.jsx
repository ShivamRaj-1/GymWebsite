import React from 'react'
import TrainerBanner from '../../component/TrainerBanner/TrainerBanner'
import Background from '../../component/Background/Background'
import TrainingProgram from '../../component/trainingProgram/TrainingProgram'
import styles from './TrainingProgramPage.module.css'


export default function TrainingProgramPage() {
  return (
    <>
      <div className={styles.transparentBackground}></div>
      <Background
        heading={"Our Training Program"}
        imgUrl={'https://images.pexels.com/photos/3112004/pexels-photo-3112004.jpeg?auto=compress&cs=tinysrgb&w=600'}
      />
      <TrainingProgram />
      <TrainerBanner
        h1={'Wake up. Work out. Look hot.'}
        h2={'Kick ass. Your fears'}
        url={'https://images.pexels.com/photos/50597/man-male-boy-a-person-50597.jpeg?auto=compress&cs=tinysrgb&w=600'}
      />

    </>
  )
}
