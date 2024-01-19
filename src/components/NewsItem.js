import React from 'react';
import image from '../noimage.jpeg'

const NewsItem =(props)=> {
    let {title,desc,imageUrl,url,author,time,source}= props;
    return (
        <div className="card my-3 mx-3" style={{width: "20rem",position:"relative"}}>
            <small className="text-bg-danger" style={{position:"absolute",top:"0px",left:"0px",padding:"0.25rem", borderRadius:"10px",fontWeight:"bolder"}}>{source}</small>
            <img src={!imageUrl?image:imageUrl} style={{width: "20rem",height:"150px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,90)}...</h5>
                <p className="card-text">{desc.slice(0,80)}....</p>
                <p className="card-text"><small className="text-body-secondary">By {author} On {time}</small></p>
                <a href={url} target='_blank' rel="noreferrer"  className="btn btn-primary">Read More</a>
            </div>
        </div>  
    )
}
export default NewsItem;