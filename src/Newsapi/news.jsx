import React, { useEffect, useState } from 'react'

const url = ' https://newsapi.org/v2/everything?q=bitcoin&apiKey=b169c8e8419649b2909939304b998059'
function News() {
  const [news, setNews] = useState([])
  const [query, setquery] = useState()
  async function fetchNews() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.articles)
    setNews(data.articles)
  }
  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <>
    <h1 className='text-4xl font-bold text-center mb-6 mt-3'>News Headline</h1>
    <div className="serach w-1/2 m-auto">
    <input type="Serach" className='border-2 border-gray-400 bg-gray-100 w-full m-2 p-2 mb-1' placeholder='Search News'  onChange={(e)=>setquery(e.target.value)}/>
    </div>
    <div className="main flex justify-center flex-wrap gap-2" >
        {
          news.filter(headline=>{
            return headline.title.toLowerCase().startsWith(query)
          }).map((headline,index)=>{
                return <div className="hero w-1/4 " >
                   <h3 className='text-2xl font-medium title-font mb-2 mt-3 text-gray-900 tracking-widest '>{headline.author}</h3>
                   <img  className="h-96 w-80 mb-4 object-cover object-center inline-block rounded-sm  border-2 border-gray-200 bg-gray-100"src={headline.urlToImage} alt="" />
                   <h2 className='text-1xl font-medium title-font mb-1 text-gray-900 tracking-widest'> {headline.title}</h2>
                   <h1 className=' text-xs title-font'>{headline.description}</h1>
                    <p className='m-1'>{headline.content}</p>
                    <a  className='text-sm font-mono text-blue-600 text-wrap'href={headline.description} target="_blank">{headline.url}</a>
            </div>
        })
    }
  
     <div/>
     </div>
     </>
  )
}
export default News