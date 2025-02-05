import React, {Component} from 'react';

const TableHead = () => {
  return (
          <thead>
            <tr>
              <th>Autores</th>
              <th>Livros</th>
              <th>Preço</th>
              <th>Remover</th>
            </tr>
          </thead>
  )
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
      return (
        <tr key = {index}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td><button onClick={() => {props.removeAutor(index) }} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
      </tr>
      )
    });
      return (
        <tbody>
          {linhas}
        </tbody>
      )
  }

class Tabela extends Component {
    render () {
      const { autores, removeAutor} = this.props;
      
        return (
            <table class="centered highlight">
          <TableHead />
          <TableBody autores = { autores } removeAutor = {removeAutor} />
        </table>
        );
    }
}

export default Tabela;