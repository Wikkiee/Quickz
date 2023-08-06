type propType = {
    placeholder:String,
    ref:React.MutableRefObject<String>
} 

export const Input = ({placeholder}:propType) => {
  return <input placeholder={`${placeholder}`} />;
};
