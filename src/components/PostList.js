import React from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import Post from './Post';


class  PostList  extends React.Component{
  state={
      posts:[]
  }
componentDidMount(){
    this.props.fetchPosts();
}

renderList(){
    return this.posts.map((post)=>
    {
        return(
            <div class="item">
                    <img class="ui avatar image" alt="" />
                    <div class="content">
                        <a class="header">{post.title}</a>
                        <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
                    </div>
            </div>
        )
    }
    )
}

render(){
        console.log(this.props.posts.data)
        // const {posts}=this.props.posts.data;
        this.state.posts=this.props.posts;
        return (
            <div>
               {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostList);
