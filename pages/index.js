import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interior crocodile alligator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Interior crocodile alligator
        </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/T1vlU5d5VNg?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Xodarap/interior-crocodile-alligator"   target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤ by @Benthamite
        </a>
      </footer>
    </div>
  )
}
