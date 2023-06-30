import { useMemo, useState } from "react"
import { useCreatePost } from "../hooks/useCreatePost"
import { Editor } from "../components/Markdown/Editor"
import Preview from "../components/Markdown/Preview"
import DOMPurify from "dompurify"
import { marked } from "marked"

export const MarkdownLayout = ()=> {

    const { createPost } = useCreatePost()
    const getStoredMarkdown = localStorage.getItem("New Post")
    const [markdownText, setMarkdownText] = useState(getStoredMarkdown? getStoredMarkdown : "# New post")
    const parsed = DOMPurify.sanitize(marked.parse(markdownText))
    const storeMarkdown = (markdownText: string)=> {
        setMarkdownText(markdownText)
        localStorage.setItem("New Post", markdownText)
      }
      const publish = ()=> {
        createPost(parsed)
        setMarkdownText("# New post")
      }

    return(
        <div className="  ">
            <div className="w-full lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-950">
                <Editor markdownText={markdownText} setMarkdownText={storeMarkdown} />
                <Preview markdownText={markdownText} />
            </div>

            <div className="flex justify-end gap-4 p-5">
                <button onClick={()=>storeMarkdown} className="w-[150px] font-semibold rounded-md relative p-2 border border-green-500 bg-green-500">Save as draft</button>
                <button onClick={()=>createPost(parsed)} className="w-[150px] font-semibold rounded-md relative p-2 border border-green-500 bg-green-500">Publish</button>
            </div>
        </div>
    )
}