type ButtonProps = {
    name: String,
}

const Button = ({ name }: ButtonProps) => {
    return <button className="text-sm bg-[#F4864D] text-white w-[180px] py-3 px-16 font-bold rounded-md mb-5" type="submit">{name}</button>
}




export default Button