import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Editor(){
    return(
        <div className={styles.container}>
            <Head>
                <title>Markdown Editor</title>
                <meta name="description" content="markdown editor" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Markdown Editor</h1>
            </main>
        </div>
    )
}