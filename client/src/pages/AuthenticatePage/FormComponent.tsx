import {Input} from "../../components/Input.js"
import Button from "../../components/Button.js"

type FormProps ={
    currentUserName:React.LegacyRef<HTMLInputElement> | undefined,
    isLoginBlock:Boolean,
    onClick:React.MouseEventHandler<HTMLHeadingElement>
}

const Form = ({currentUserName, isLoginBlock ,onClick}:FormProps)=>{
    const onSubmitHandler = (e:React.FormEvent)=>{
        e.preventDefault()
        console.log("Submited");
    }
    return (<div className="width-100% mr-32">
    <form onSubmit={(e)=>onSubmitHandler(e)} className=" w-100% bg-[#F8EAE1]  flex justify-center flex-col px-9">
        <div className="flex justify-center font-bold">
        <h1 className="mt-8 mb-5 font-semibold text-[32px] text-[#767677] font-mont ">{isLoginBlock? "Welcome Back":"Hello there"}</h1>
        </div>
        
        {
            isLoginBlock? <>
            <Input placeholder={'Username / User email'} ref={currentUserName} type={'email'}/>
            <Input placeholder={'PIN'} ref={currentUserName} type={'password'}/>
            </> : <>
            <Input placeholder={'Username / User email'} ref={currentUserName} type={'email'}/>
            <Input placeholder={'PIN'} ref={currentUserName} type={'password'}/>
            <Input placeholder={'Confirm PIN'} ref={currentUserName} type={'password'}/>
            </>

        }

        <div className="w-100% flex justify-center">
        <Button name={isLoginBlock? "Login":"Register"} />
        </div>
        <hr className="h-[2.5px] bg-[#E5B79F] mb-5"/>
        <div className="flex flex-row  font-light text-[#CC6D3D] text-sm justify-center mb-5">
                {isLoginBlock?
                <><h3 className="cursor-pointer">Forgot password</h3>
                <h3 className="mr-1 ml-1 cursor-default"> | </h3>
                <h3  className="cursor-pointer" onClick={onClick}>Create an Account</h3></>:<>
                <h3  className="cursor-pointer" onClick={onClick}>Already have an account</h3>
                </>    
            }
        </div>
    </form>

</div>)
}

export default Form