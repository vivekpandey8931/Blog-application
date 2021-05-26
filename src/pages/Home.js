import React,{useEffect} from 'react'
import Card from '../components/Card';
import {useDispatch,useSelector} from 'react-redux';
import {getArticles} from '../actions/articleAction';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state=>state.articleList)
    const { error, loading, articles } = productList;
   console.log(articles);

    useEffect(() => {
        dispatch(getArticles())  
    },[dispatch])

     const renderArticles = articles.map(article => 
    
          <Card key={article.id} title={article.title}  category={article.category} image={article.image}/>
     )
        

    return (
        <div className="ui container">
            <h1>Latest Articles</h1>
            {loading && <Spinner/>}
           
                
            {renderArticles}
              
         </div>
    )
}

export default Home
