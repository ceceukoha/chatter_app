import { useState } from "react"
import { Login, Register } from "../components/Authentication"
import { auth } from "../firebase-config"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { router } from "../router"

// export interface User {
//     first_name: string,
//     last_name: string,
//     email: string,
//     password: string
// }


export const AuthLayout = () => {
    const [user, setUser] = useState({})

    const handleSignOut = async()=> {
       await signOut(auth)
    }

    return (
        <div>
            <div className="flex h-[1024px]">
                <section className="relative w-2/6 px-5 h-full">
                    <div className="absolute top-[30%]">
                        <h2 className="text-3xl font-bold mb-8 text-center">CHATTER</h2>
                        <p className="text-lg">Unleash the power of Words, Connect with Like-minded Readers and Writers</p>
                    </div>
                    <button onClick={handleSignOut}>sign out</button>

                </section>
                <section className=" relative w-4/6 flex flex-col items-center">
                    <Register /> 

                </section>
            </div>
        </div>
    )
}