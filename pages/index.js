// import Head from 'next/head'
// import Image from 'next/image'

export default function Editor(){
    return(
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