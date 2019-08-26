import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Api from '../../service/Api'
import "./Post.css";

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0,
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      likes:this.props.likes,
      id : this.props.idpost
    })
  }

  curtir = ()=>{
    let likeAtual = this.state.likes
    const idPost = this.state.id
    likeAtual++
    this.setState({likes:likeAtual})
    let dados = {
      id: idPost,
      likes: likeAtual,
      autor: null,
      imagem: null
    }

    Api({
      url: '/posts',
      method: 'PUT',
      data: dados,
      config: {
        'Content-Type':'multipart/form-data'
      }
    })
  }
  render() {
    return (
      <Card className="card">
        {/* <div id="idPost">{this.props.idpost}</div> */}
        <CardActionArea>
          <CardMedia
            className="media"
            image={this.props.imagepost}
            title="Uhull"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.likes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.curtir} size="small" color="primary">
            Curtir
          </Button>
          <Button size="small" color="primary">
            Excluir
          </Button>
        </CardActions>
      </Card>
    );
	}
}
export default Post;