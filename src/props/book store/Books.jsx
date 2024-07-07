import Book from "./Book"
import"./Books.css"
// const firstBook={
//      Image :'https://preview.colorlib.com/assets/img/logo.png',
//      Title:"Halim",
//      Price:"$14.99"

// }

// const secondBook ={
//     Image :'https://preview.colorlib.com/assets/img/logo.png',
//     Title:"Mala",
//     Price:"$20.99"

// }

// const thirdBook ={
//     Image :'https://preview.colorlib.com/assets/img/logo.png',
//     Title:"Jannat ke pattey",
//     Price:"$40.99"

// }


const myBooks =[
    {
        Image :'https://preview.colorlib.com/assets/img/logo.png',
        Title:"Jannat ke pattey",
        Price:"$40.99"
    
    },
    {
        Image :'https://preview.colorlib.com/assets/img/logo.png',
        Title:"Mala",
        Price:"$20.99"
    
    },
    {
        Image :'https://preview.colorlib.com/assets/img/logo.png',
        Title:"Mala",
        Price:"$20.99"
    
    },
    {
        Image :'https://preview.colorlib.com/assets/img/logo.png',
        Title:"Mala",
        Price:"$20.99"
    
    },
    {
        Image :'https://preview.colorlib.com/assets/img/logo.png',
        Title:"Mala",
        Price:"$20.99"
    
    },
{
     Image :'https://preview.colorlib.com/assets/img/logo.png',
     Title:"Halim",
     Price:"$14.99"

}    
]


function Books(){
    return<div>
    <h1>Books</h1>
    <div className="books">
        {
            myBooks.map(meriBooks=>{
                return<Book {...meriBooks}/>
        
            })

        }
    </div>
    </div>

    }
export default Books