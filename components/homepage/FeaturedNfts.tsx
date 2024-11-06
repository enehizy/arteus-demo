import React from 'react'
import { useRouter } from 'next/router'
export type FeaturedNft={
  name:string,
  description:string,
  imageUrl:string
}
type props ={
  featuredNfts:FeaturedNft[]
}
export default function FeaturedNfts({featuredNfts}:props) {
  
  
  const router=useRouter();
  
  const [currentIndex,setCurrentIndex]=React.useState(0)
  
  
 
  React.useLayoutEffect(()=>{
     const interval = setInterval(()=>{
    

       setCurrentIndex((prevIndex)=>{
  
        if(prevIndex >= (featuredNfts.length -1)){
          return 0;
        }
        
        return prevIndex + 1
       })
      
     },3000)

     return ()=> clearInterval(interval)

    
  },[])
  return (
    <>
  
   {featuredNfts.map(({name,imageUrl,description},index)=>(
      <div key={index} className={`flex flex-col md:flex-row md:space-x-6  ${!(index === currentIndex)?'hidden':'visible'} '`}>
     
      
        <div className='py-6 md:py-0  md:block  w-full h-[400px] md:order-2 md:ml-12 md:mt-2 md:pl-16 '>
          <img src={`${imageUrl}`} className='w-full h-full rounded-t-2xl object-cover '/>
        
        </div>
        <div className='px-6 md:px-0  md:order-1 md:mt-8'>
          <h1 className="text-2xl md:text-4xl font-extrabold text-brandbrown mb-5 md:w-[10ch]">{name}</h1>
          <p className='md:w-[50ch]'>{description}</p>
      <button className=' font-semibold bg-brandyellow text-black py-2 px-6 rounded mt-10' onClick={()=>{router.push(`/collection/${name.replace(/\s/g,'').toLowerCase()}`)}}>Explore Collection</button>
        </div>
  </div>  
   ))}
  <div className='invisible md:visible my-5 flex space-x-2 justify-center'>
   
    {featuredNfts.map((_,index)=>(<div key={index} className={`w-[50px] p-1 ${!(index === currentIndex)?'bg-[#6F6F6F]':'bg-[#eee]'}  `}></div>))}
  </div>
  </>
  )
}
