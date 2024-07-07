import React, { useEffect, useState } from 'react'

const url='https://www.superheroapi.com/api.php/fbdeed2e7bc177b17a20359c0b46f8dd/search/a'

function SuperHero() {
     const [heroes,setHeroes] = useState([])
     const [query, setquery] = useState()
  async function fetchHeroes() {
        const res =await fetch(url)   
        const data=await res.json()
        console.log(data.results)
        setHeroes(data.results)
    }
  useEffect(()=>{
      fetchHeroes()
  }, [])

  return (
    <div>
        <h1 className='text-4xl font-bold text-center mb-6 mt-3'>Super Heroes</h1>
        <div className="serach w-1/2 m-auto">
<input type="Serach" className='border-2 border-gray-400 bg-gray-100 w-full m-2 p-2 mb-1' placeholder='Search super heroes'  onChange={(e)=>setquery(e.target.value)}/>
        </div>
        <div className="main flex justify-center flex-wrap gap-2" >
            {
              heroes.filter(hero=>{
                return hero.name.toLowerCase().startsWith(query)
              }).map((hero,index)=>{
                    return <div className="hero w-1/4 " >
                       <img  className="h-80 w-80 mb-4 object-cover object-center inline-block rounded-sm  border-2 border-gray-200 bg-gray-100"src={hero.image.url} alt="" />
                       <h2 className='text-1xl font-medium title-font mb-1 text-gray-900 tracking-widest'> {hero.name}</h2>
                       <h1 className='tracking-widest text-lg title-font font-semibold text-gray-400 mb-1'>{hero.biography['full-name']}</h1>
                       <p className=' mx-auto leading-relaxed text-base'>{hero.biography['first-appearance']}</p>
                       <h3 className='mx-auto leading-relaxed text-base '>{hero.biography.alignment}</h3>
                       <p className='mx-auto leading-relaxed text-base'> {hero.appearance.gender}</p>  
                </div>
            })
        }
        </div>
     </div>
  )
}

export default SuperHero