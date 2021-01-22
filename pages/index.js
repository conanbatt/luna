import Head from 'next/head'
import styles from '../styles/Home.module.css'

const VERTICAL_DISPLAYS = [{
  image: '/luna/basket.jpeg',
  title: 'Basketball Career',
  description: 'I am in the 0.3% height percentile for my age but I can only afford to play with basketballs I find lying round the playgrounds.',
  address: '3J7nSF5mqiBQBWRZXFmscHDBaAs7bBztrV'
}]

export default function Home() {
  return (
    <>
      <div className={styles.nav}>
        <a className={styles.brand}> Luna </a>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Luna's Website!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Luna Vigon
          </h1>
          <p className={styles.description}>
            Animal connoisseur, no-lingual. My dad says I'm the cutest.
          </p>
          <div className={styles.reel}>
            <div>
            {VERTICAL_DISPLAYS.map(disp => <VerticalDisplay {...disp} />)}
            </div>
          </div>
          {/*<img src="/luna/basket.jpeg" width="100%" className={styles.backgroundImage}/>*/}
        </main>
        <footer className={styles.footer}>
          Home of the Cutest Baby IN THE UNIVERSE
        </footer>
      </div>
    </>
  )
}


const Row = ({ image, children }) => (
  <div className={styles.row}>
    <div className={styles.rowImageContainer}>
      <img src={image} className={styles.objectFitCover}/>
    </div>
    <div className={styles.rowContent}>
      {children}
    </div>
  </div>
)

const VerticalDisplay = ({ image, title, description, address }) => (
  <div className={styles.vertical}>
    <img src={image} className={styles.objectFitCover}/>
    <h2>
      {title}
    </h2>
    <p className={styles.verticalDesc}>
      {description}
    </p>
    <div className={styles.code}>
    {address}
  </div>
  </div>
)