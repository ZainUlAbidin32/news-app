import React, {useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize=(s)=>{
        return s && s[0].toUpperCase() + s.slice(1);
    }

    const updateNews = async() => {
        document.title=`News 32 | ${capitalize(props.category)}`;
        props.setProgress(10);
        const apiURL=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(50);
        setLoading(true);
        let resp=await fetch(apiURL);
        let respData=await resp.json();
        props.setProgress(70);
        setArticles(respData.articles);
        setTotalResults(respData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
    updateNews();
    }, []) 

    const fetchMoreData=async()=>{
        const apiURL=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let resp=await fetch(apiURL);
        let respData=await resp.json();
        setArticles(articles.concat(respData.articles));
        setTotalResults(respData.totalResults);
        setLoading(false);
    }
    
    return (
    <>
        <h1 style={{textAlign: "center",padding: "90px 0px 20px 0px",}}>News 32 - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData} 
        hasMore={articles.length!==totalResults}
        loader={loading && <Spinner/>}
        >
        <div className="container">

            <div className='row'>
                {articles.map((element)=>{
                    return <div className="col-md-4">
                    <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url} author={element.author?element.author:"Unknown"} time={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
    </>
    )
  }
News.defaultProps={
    country:"us",
    pageSize:6,
    category:"general",
}
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
}

export default News;