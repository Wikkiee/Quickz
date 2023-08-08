type ButtonProps = {
    name:String,
    onClick:React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({name,onClick}:ButtonProps)=>{
    return <button className="text-sm bg-[#F4864D] text-white w-[180px] py-3 px-16 font-bold rounded-md mb-5" onClick={onClick}>{name}</button>
}




export default Button