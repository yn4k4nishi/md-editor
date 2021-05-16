import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Editor.module.css'

export default function Editor(){
    return(
        // <div className={styles.container}>
        //     <Head>
        //         <title>Markdown Editor</title>
        //         <meta name="description" content="markdown editor" />
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>
        //     <main className={styles.main}>
        //         <h1 className={styles.title}>Markdown Editor</h1>
        //         <form>
        //             <textarea
        //                 className={styles.md_title}
        //                 placeholder="Title"
        //                 rows="1"
        //             ></textarea>
        //             <div className={styles.flex}>
        //                 <textarea
        //                 name="md"
        //                 id="md"
        //                 placeholder="Markdownで記述"
        //                 className={styles.mdform}
        //                 //   value={markdown}
        //                 //   onChange={setData}
        //                 ></textarea>
        //                 <h2>Preview</h2>
        //             </div>
        //         </form>
        //     </main>
        // </div>
        <div className="post-form min-h-screen">
            <div className="h-screen flex flex-col">
                <h1 className="text-center font-bold text-4xl py-10">投稿を作成</h1>
                <div className="editor flex-grow flex-shrink">
                    <form className="h-full">
                        <input
                        type="text"
                        id="post-title"
                        placeholder="Title"
                        className="px-5 block mx-auto w-4/5 rounded-lg border-0 h-14 text-2xl font-bold focus:outline-none mb-8 shadow-lg"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}