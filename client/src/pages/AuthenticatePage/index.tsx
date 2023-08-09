
import {useRef} from 'react'
import LeftHomeImage from '../../assets/LeftHomeImage.svg'
import Form from "./FormComponent.tsx"
import {useState} from "react"

const AuthenticatePage = ()=>{
    const currentUserName = useRef<HTMLInputElement>(null)
    const [isLoginBlock,setLoginBlock] = useState<Boolean>(true)
    const onClickHandler = ()=>{
        setLoginBlock(!isLoginBlock)
    }
    return <div className="w-100% h-screen bg-[#FFEAE0] px-10 py-14">
            <div className="w-100% bg-[#F8F8F9] h-[80vh] rounded-md">
                <div>
                    <div className="width-100% flex justify-center ">
                    <h3 className="mt-6 mb-10 text-lg font-mont italic font-bold tracking-[20px] text-[#767677] ">Quickz</h3>
                    </div>
                    <div className="width-100%  flex flex-row justify-between">
                        <div className="ml-[145px]">
                            <img src={LeftHomeImage} alt="Home left image"  />
                        </div> 
                        <Form currentUserName={currentUserName} isLoginBlock={isLoginBlock} onClick={onClickHandler}/>
                    </div>
                </div>
            </div>
    </div>
}

export default AuthenticatePage