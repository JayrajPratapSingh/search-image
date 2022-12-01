import React, {useState} from 'react'
import axios from "axios"
const ImageSearch = () => {
const [image, setImage] = useState("");
const [result, setResult] = useState([]);
const [bookmark, setBookmark] = useState([]);
const [bookmarkImage, setBookmarkImage] = useState([])

const changeImage = () =>{
axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=ptQIaVA6LmghKkkJVS7YeY_9LG4p1LRt6Ku9bqtC7ik`).then((response)=>{
    console.log(response.data);
    setResult(response.data.results);
}).catch((err)=>{
    console.log(err);
})
}

const boockmarkimage = () =>{
    setBookmark(...bookmark, result.download)
    console.log(bookmark);
}


const bookmarkhandler = (e)=>{
    e.preventDefault();
    setBookmarkImage(...bookmark)
}

    return (
        <div className='container'>
           <div action="" className="form-container">
            <div className="header">
                <h1>React Photo Search</h1>
            <button className="bookmark"onClick={bookmarkhandler}>bookmark</button>
            </div>
            <br />
            <input type="text" placeholder='search image...' value={image} onChange={(e)=>{setImage(e.target.value)}}/>
            <button type="submit" onClick={changeImage}> search </button>
           </div>

           <div className="images">
            <ul className='ul-image'>
                {
                    result.map((currVal)=>{
                        return(
                            <li className='li-images' key={currVal.id}>
                            <img src={currVal.links.download} alt="img" onClick={boockmarkimage}/>
                        </li>
                        )
                    })
                }
            </ul>

            <div className="boockmarkcontainer">
                {
                    bookmarkImage.map((val)=>{
                        return(
                            <>
                            <div className="bookmark-images">
                                <img src={val} alt="" />
                            </div>
                            </>
                        )
                    })
                }
            </div>
           </div>
           
        </div>
    )
}

export default ImageSearch
