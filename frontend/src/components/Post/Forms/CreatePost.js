import React from 'react';
import Api from '../../../service/Api';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';

class CreatePost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open:false
    }
  }

  cadastroPost = (e) => {
    e.preventDefault();
    let form = e.target;
    let dados = new FormData();
    dados.append('autor', form.autor.value);
    dados.append('imagem', form.imagem.files[0]);
    dados.append('descricao', form.descricao.value);
    console.log(form.imagem.files);
    Api({
      url: '/posts',
      method: 'post',
      data: dados,
      config: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((resposta) => {
      console.log(resposta)
      this.abrirModal();
    })
  }

  abrirModal = ()=>{
    this.setState({
      open:true
    })
  }
  fecharModal = ()=>{
    this.setState({
      open:false
    })
  }
  render() {
    return (
      <form onSubmit={this.cadastroPost} method="post" encType="multipart/form-data">
        <input type="text" name="autor" placeholder="Digite o nome do autor"/>
        <input type="file" name="imagem" placeholder="Link da imagem"/>
        <input type="text" name="descricao" placeholder="Descrição"/>
        <button type="submit">Cadastrar Post</button>
        <Dialog
          open={this.state.open}
          onClose={this.fecharModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"O Vini diz:"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Cadastro foi concluído com sucesso!!!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.fecharModal} color="primary">
            <Link to='/home'>Beleza!</Link>
            </Button>
          </DialogActions>
        </Dialog>
        <Link to='/home'>Voltar pra home!</Link>
      </form>

    )
  }
}

export default CreatePost;