import { useEffect, useState } from 'react';
import { intervalToDuration} from 'date-fns'


import styles from './home.module.scss';

const date = new Date("2022-4-26"); //Launch date

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());


  const [diferenceInDate, setDiferenceIndate] = useState<any>({});
  

  useEffect(() => {
    setTimeout(() => {
      setCurrentDate( new Date()); //At actual date
      setDiferenceIndate(intervalToDuration({ //Verify difference time
        start: currentDate,
         end: date
      }));
      console.log(diferenceInDate);
    }, 1000);
    
  }, [diferenceInDate])


  return (
     <main className={styles.main}>
       <section className={styles.mainContainer}>
          <div className={styles.timerDiv}>
            <h1><strong>READY TO LAUNCH IN...</strong></h1>
            <div className={styles.time}>
              <div className={styles.numberDiv}>
                <p>Dias</p>
                <h1>{diferenceInDate.days ? String(diferenceInDate.days).padStart(2, '0') : "00"}</h1>
                <span>:</span>
              </div>
              <div className={styles.numberDiv}>
                <p>horas</p>
                <h1>{diferenceInDate.hours ? String(diferenceInDate.hours).padStart(2, '0') : "00"}</h1>
                <span>:</span>
              </div>
              <div className={styles.numberDiv}>
                <p>Minutos</p>
                <h1>{diferenceInDate.minutes ? String(diferenceInDate.minutes).padStart(2, '0') : "00"}</h1>
                <span>:</span>
              </div>
              <div className={styles.numberDiv}>
                <p>Segundos</p>
                <h1>{diferenceInDate.seconds ? String(diferenceInDate.seconds).padStart(2, '0') : "00"}</h1>
              </div>
            </div>
            <p>Inscreva-se para saber mais sobre o lançamento</p>
            <button>Inscreva-se</button>
          </div>
          <div className={styles.rocketDiv}>
              <img src="/rocket.svg" alt="foguete" />
          </div>
       </section>
     </main>
  )
}
