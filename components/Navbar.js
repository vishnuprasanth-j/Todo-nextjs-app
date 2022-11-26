import { auth } from "../firebase"
import { useRouter } from "next/router"


const Header=(props)=> {
const {useAuth}=props
const {isLoggedIn}=useAuth()
const router=useRouter()
    return (
        <>
           
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
                <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
                {
                    isLoggedIn&&<i class="fa-sharp fa-solid fa-arrow-right-from-bracket text-3xl hover:opacity-40" onClick={ ()=>{auth.signOut(); router.push('/')}}></i>}
            </div>
        </>
    )
}
export default Header