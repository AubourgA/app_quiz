

export default function ListAnswer( {datas, activeIndex, onSelect : handleActive}) {

  return (
   <ul className="pt-10">
     {datas.map( (item, index) => (
        <li key={index} 
         
            className={`py-5 px-4 border rounded-xl my-5 cursor-pointer
            hover:border-pink-600 ${activeIndex ===  index && 'bg-pink-400'}`}
            onClick={ handleActive(index)}>{item}</li>
     ))}
   </ul>
  )
}
