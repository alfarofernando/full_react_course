export default function CustomInput({ label, invalid, ...props }) {
  
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase"
  let inputClases = "w-full px-3 py-2 leading-tight border rounded shadow"
  

  if(invalid){
    labelClasses += " text-red-500"
    inputClases += " text-red-500 bg-red-100 border-red-300"
  }else{
    labelClasses += " text-stone-300"
    inputClases += " text-gray-700 bg-stone-300" 
  }

  return (
    <div>
      <label className= {labelClasses} >{label}</label>
      <input className={inputClases} {...props} />
    </div>
  );
}