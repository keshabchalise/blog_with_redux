import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts,fetchPostsAndUsers} from '../actions';
import UserHeader from '../components/userHeader';

class PostList extends Component {
    
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderPosts(){
        return this.props.posts.map(post=>{
            return (
            <div className="item" key={post.id}>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}></UserHeader>
                </div>
            </div>
            );
        })
    }

    render() { 
        return ( 
        <div className="ui relaxed divided list" >
            {this.renderPosts()}
        </div> 
        );
    }
}

const mapStateToProps = (state)=>{
    return {posts:state.posts}
}
 
export default connect(mapStateToProps,{fetchPostsAndUsers:fetchPostsAndUsers})(PostList);