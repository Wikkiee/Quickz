type propType = {
    placeholder:String,
    ref:React.LegacyRef<HTMLInputElement> | undefined,
    type:React.HTMLInputTypeAttribute | undefined
} 

export const Input = ({placeholder,ref,type}:propType) => {
  return <input required={true} ref={ref} className=" px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none w-[312px] mb-4" placeholder={`${placeholder}`} type={type} />;
};
