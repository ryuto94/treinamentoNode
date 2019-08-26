import React from 'react';
import Header from '../components/Header/Header';
import CreatePost from '../components/Post/Forms/CreatePost';

class NewPost extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <CreatePost />
            </div>
        )
    }
}

export default NewPost;