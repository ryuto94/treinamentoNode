import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../Post/Post';
import './Container.css';
import Api from '../../service/Api';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaPosts: []
        }
    }

    async componentDidMount(){
        const resposta = await Api.get('/posts');
        const json = await resposta.data;
        this.setState({
            listaPosts: json,
        })
        console.log(json);
    }
    
    render() {
        return(
            <div className="divisor">
                <Grid container justify="space-around" spacing={2}>
                    {
                        this.state.listaPosts.map((post)=>{
                            return(
                                <Grid item>
                                    <Post titulo={post.autor} imagepost={post.imagem} likes={post.like} idpost={post._id}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        );
    }
}
