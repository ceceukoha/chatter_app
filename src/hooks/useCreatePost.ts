import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase-config"
import { useNavigate } from "react-router-dom"

export const useCreatePost = () => {
    const navigate = useNavigate()

    const createPost = async (post: string,) => {
        const postCollectionRef = doc(collection(db, "posts"))

        await setDoc(postCollectionRef, { post, author: { name: auth.currentUser?.displayName, uid: auth.currentUser?.uid, }, date: Timestamp.fromDate(new Date()), })
        navigate("/")
    }

    return { createPost }
}