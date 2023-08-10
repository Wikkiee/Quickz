import {useState} from 'react'
type propType = {
    placeholder:String,
    ref:React.LegacyRef<HTMLInputElement> | undefined,
    type:React.HTMLInputTypeAttribute | undefined
} 

export const Input = ({placeholder,ref,type}:propType) => {
  const [isShowEnabled,setShowEnabled] = useState<Boolean>(false)
  const onClickHandler = ()=>{
      setShowEnabled(!isShowEnabled)
  }

  if(type != 'password'){

    return <input required={true} ref={ref} className=" px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none w-[312px] mb-4 after:content-['hello'] after:ml-0.5 after:text-red-500" placeholder={`${placeholder}`} type={type} />;
  }else{
      return <div className="flex justify-between">
        <input required={true} ref={ref} className=" w-auto px-[25px] py-[13px] rounded-md text-sm font-light text-[#CC6D3D] text-opacity-[1] bg-[#f8e1d7] placeholder:opacity-[1] placeholder:text-[#CC6D3D] focus:outline-none mb-4" placeholder={`${placeholder}`} type={isShowEnabled? "text":"password"} />
        <button type='button' onClick={onClickHandler} className={`h-fit px-[8px] py-[13px] rounded-md text-xs text-[#CC6D3D] ${isShowEnabled? "bg-[#ffb494]":"bg-[#ffdbcb]"} `}>{isShowEnabled? "Hide":"Show"}</button>
      </div>
  }
};
