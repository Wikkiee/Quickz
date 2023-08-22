
import axios from "axios"
import Button from "../../components/Button.js"
import { useRef, useState } from "react"

type FormProps = {
    isLoginBlock: Boolean,
    onClick: React.MouseEventHandler<HTMLHeadingElement>
}

const Form = ({ isLoginBlock, onClick }: FormProps) => {

    const currentUserEmail = useRef<HTMLInputElement>(null)
    const currentUserName = useRef<HTMLInputElement>(null)
    const currentPassword = useRef<HTMLInputElement>(null)
    const currentConfirmPassword = useRef<HTMLInputElement>(null)
    const [isShowEnabled, setShowEnabled] = useState<Boolean>(false)
    const [isConfirmPinShowEnabled, setConfirmPinShowEnabled] = useState<Boolean>(false)
    const onShowPinToggle = () => {
        setShowEnabled(!isShowEnabled)
    }

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if (isLoginBlock) {
            console.log("Login block");
            const data = {
                userEmail: currentUserEmail.current?.value.toString(),
                userPassword: currentPassword.current?.value.toString()
            }
            console.log(data);

            axios({
                method: "POST",
                url: "http://localhost:8080/login",
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    console.log(response);

                })
                .catch((e) => {
                    console.log(e);

                })
                .finally(() => {
                    console.log("Login completed");

                })
        } else {
            console.log("Register block");
            if (currentPassword.current?.value != currentConfirmPassword.current?.value) {
                console.log("Mismatched password");
            } else {
                const data = {
                    userEmail: currentUserEmail.current?.value.toString(),
                    userName: currentUserName.current?.value.toString(),
                    userPassword: currentPassword.current?.value
                }
                axios({
                    method: "POST",
                    url: "http://localhost:8080/register",
                    data: data,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((response) => {
                        console.log(response);

                    })
                    .catch((e) => {
                        console.log(e);

                    })
                    .finally(() => {
                        console.log("Registeration completed");

                    })

            }
        }
    }

    return (<div className="width-100% mr-32">
        <form onSubmit={(e: React.FormEvent) => {
            onSubmitHandler(e)

        }} className=" w-100% bg-[#F8EAE1]  flex justify-center flex-col px-9">
            <div className="flex justify-center font-bold">
                <h1 className="mt-8 mb-5 font-semibold text-[32px] text-[#767677] font-mont ">{isLoginBlock ? "Welcome Back" : "Hello there"}</h1>
            </div>

            {
                isLoginBlock ? <>
                    <input autoComplete={"off"} required={true} ref={currentUserEmail} className=" px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none w-[312px] mb-4 after:content-['hello'] after:ml-0.5 after:text-red-500" placeholder={"Username / User email"} type={"email"} name={"login"} />
                    <div className="flex justify-between">
                        <input autoComplete={"off"} required={true} ref={currentPassword} className=" w-auto px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none mb-4" placeholder={"PIN"} type={isShowEnabled ? "text" : "password"} />
                        <button type='button' onClick={onShowPinToggle} className={`h-fit px-[8px] py-[13px] rounded-md text-xs text-[#CC6D3D] ${isShowEnabled ? "bg-[#ffb494]" : "bg-[#ffdbcb]"} `}>{isShowEnabled ? "Hide" : "Show"}</button>
                    </div>
                </> : <>
                    <input autoComplete={"off"} required={true} ref={currentUserName} className=" px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none w-[312px] mb-4 after:content-['hello'] after:ml-0.5 after:text-red-500" placeholder={"Name"} type={"text"} name={"login"} />
                    <input autoComplete={"off"} required={true} ref={currentUserEmail} className=" px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none w-[312px] mb-4 after:content-['hello'] after:ml-0.5 after:text-red-500" placeholder={"Email"} type={"email"} name={"login"} />
                    <div className="flex justify-between">
                        <input autoComplete={"off"} required={true} ref={currentPassword} className=" w-auto px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none mb-4" placeholder={"Password"} type={isShowEnabled ? "text" : "password"} />
                        <button type='button' onClick={onShowPinToggle} className={`h-fit px-[8px] py-[13px] rounded-md text-xs text-[#CC6D3D] ${isShowEnabled ? "bg-[#ffb494]" : "bg-[#ffdbcb]"} `}>{isShowEnabled ? "Hide" : "Show"}</button>
                    </div>
                    <div className="flex justify-between">
                        <input autoComplete={"off"} required={true} ref={currentConfirmPassword} className=" w-auto px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none mb-4" placeholder={"Confirm Password"} type={isConfirmPinShowEnabled ? "text" : "password"} />
                        <button type='button' onClick={() => {
                            setConfirmPinShowEnabled(!isConfirmPinShowEnabled)
                        }} className={`h-fit px-[8px] py-[13px] rounded-md text-xs text-[#CC6D3D] ${isConfirmPinShowEnabled ? "bg-[#ffb494]" : "bg-[#ffdbcb]"} `}>{isConfirmPinShowEnabled ? "Hide" : "Show"}</button>
                    </div>
                </>

            }

            <div className="w-100% flex justify-center">
                <Button name={isLoginBlock ? "Login" : "Register"} />
            </div>
            <hr className="h-[2.5px] bg-[#E5B79F] mb-5" />
            <div className="flex flex-row  font-light text-[#CC6D3D] text-sm justify-center mb-5">
                {isLoginBlock ?
                    <><h3 className="cursor-pointer">Forgot password</h3>
                        <h3 className="mr-1 ml-1 cursor-default"> | </h3>
                        <h3 className="cursor-pointer" onClick={onClick}>Create an Account</h3></> : <>
                        <h3 className="cursor-pointer" onClick={onClick}>Already have an account</h3>
                    </>
                }
            </div>
        </form>

    </div >)
}

export default Form