// import Head from 'next/head'
// import Image from 'next/image'
import React, { useState } from "react";
import PostPreview from '../lib/PostPreview'

export default function Editor(){
  const [markdown, setMarkdown] = useState();

  const setData = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  return(
    <div className="post-form min-h-screen">
      <div className="h-screen flex flex-col">
        <h1 className="text-center font-mono font-bold text-4xl py-10">Markdown Editor</h1>
        <div className="editor flex-grow flex-shrink">
          <form className="h-full">
            <textarea
              name="post-title"
              id="post-title"
              placeholder="Title"
              className="px-5 block mx-auto w-4/5 rounded-lg border shadow-xl h-9 text-2xl font-mono font-bold focus:outline-none align-middle resize-none"
            />
            <div className="flex h-5/6">
              <div className="w-1/2 m-3">
                <textarea
                  name="md"
                  id="md"
                  placeholder="Write in Markdown"
                  className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none p-4"
                  value={markdown}
                  onChange={setData}
                ></textarea>
              </div>
              <div className="w-1/2 m-3">
                <div className="resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none p-4">
                  <PostPreview markdown={markdown}></PostPreview>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}