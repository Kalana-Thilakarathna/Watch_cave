export const Message = ({label,placeholder})=>{
  return(
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <textarea className="w-full h-40 mt-2 p-6 bg-main border border-border rounded" placeholder={placeholder}/>
    </div>
  );
};

export const Select = ({label,options,onChange})=>{
  return(
    <>
        <label className="text-border font-semibold">{label}</label>
        <select className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded" onChange={onChange}>
          {options.map((o,i)=>(
            <option key={i} value={o.value}>
              {o.title}
            </option>
          ))}
        </select>
    
    </>
  );
};

export const Input = ({label,placeholder,type,bg})=>{
  return(
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <input required
      type={type}
      placeholder={placeholder}
      className={`w-full text-sm mt-2 p-4 border border-border rounded text-white ${
        bg?'bg-main':"bg-dry"
      }`}
      ></input>

    </div>
  )
}