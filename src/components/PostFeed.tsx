import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost";
import { DocumentData, QuerySnapshot, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { Article } from "./Article";

export interface PostFeedProps {
  author: {
    name: string;
    uid: string;
  };
  post: string;
  date?: string;
}

export const PostFeed = () => {
  const [article, setArticle] = useState<PostFeedProps[]>([])

  useEffect(() => {
      const postCollectionRef = collection(db, "posts");
      onSnapshot(postCollectionRef, (snapshot: QuerySnapshot<DocumentData>)=> {
        setArticle(
            snapshot.docs.map((doc)=> {
              const data = doc.data()
              return {
                 author: {
                  name: data.authorName, // Replace with the actual field name for the author's name
                  uid: data.authorUid, // Replace with the actual field name for the author's UID
                },
                post: data.post,
                date: data.date,
              }
            }))
            console.log(article)
        })
        
    },[]);

  return (
    <section>
      <div className="w-3/4 md:w-4/5 z-10 mx-auto border-2 border-black relative p-4">
        <Link
          to="/edit-new-post"
          className="w-[150px] font-semibold rounded-md relative md:left-[70%] left-[80%] p-2 border border-green-500 bg-green-500"
        >
          New article
        </Link>
        <div className="w-2/3 ml-[10%]">
          <ul className="mt-8 flex justify-between text-lg font-semibold">
            <li>Personalized</li>
            <li>Featured</li>
            <li>Following</li>
          </ul>
        </div>
        <section className="p-4 border w-[90%] mx-auto mt-5">
           {article && article.map((post: PostFeedProps, i) => {
            return (
              <Article key={i} post={post.post} author={post.author} />
            );
          })}
          
        </section>
      </div>
    </section>
  );
};
