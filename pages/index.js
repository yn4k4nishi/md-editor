// import Head from 'next/head'
// import Image from 'next/image'

export default function Editor(){
    return(
      <div className="post-form min-h-screen">
        <div className="h-screen flex flex-col">
          <h1 className="text-center font-mono font-bold text-4xl py-10">Markdown Editor</h1>
          <div className="editor flex-grow flex-shrink">
            <form className="h-full">
              <textarea
              type="text"
              id="post-title"
              placeholder="Title"
              className="px-5 block mx-auto w-4/5 rounded-lg border-0 h-14 text-2xl font-mono font-bold focus:outline-none mb-0 resize-none"
              />
              <div className="flex h-5/6">
                <div className="w-1/2 mx-3">
                  <textarea
                    name="md"
                    id="md"
                    placeholder="Write in Markdown"
                    className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2"
                    ></textarea>
                </div>
                <div className="w-1/2 mx-3">
                  <div className="resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2">
                    Preview
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}