import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Editor.module.css'

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
                <dev className={styles.flex}>
                    <textarea
                    name="md"
                    id="md"
                    placeholder="Markdownで記述"
                    className={styles.mdform}
                    //   value={markdown}
                    //   onChange={setData}
                    ></textarea>
                    <h2>Preview</h2>
                </dev>
            </main>
        </div>
    )
}