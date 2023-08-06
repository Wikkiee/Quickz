import {Input} from "../../components/Input.jsx"
import {useRef} from 'react'

const Login = ()=>{
    const currentUserName = useRef('')
    return <div className="w-100% h-screen bg-[#FFEAE0] px-10 py-14">
            <div className="w-100% bg-[#F8F8F9] h-[80vh] rounded-md">
                <div>
                    <h3 className="text-lg font-light font-mont ">Welcome back</h3>
                    <Input placeholder={'Enter the name'} ref={currentUserName}/>
                </div>
            </div>
    </div>
}

export default Login