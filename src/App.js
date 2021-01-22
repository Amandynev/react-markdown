import React, { Component } from 'react'
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {
  state = {
    text: sampleText
  }

  handleChange = (event) => {
    const text = event.target.value
    this.setState({text})
  }

// function qui va retourner un objet soit l'bjet --html
// marked = parametre et option en objet, ici cela permet de traduire le html
  renderText = (text) => {
    const __html = marked(text, {sanitize:true})
    // destructuring c'est comme faire return { __html: __html }
    return { __html }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
           <textarea
            onChange={this.handleChange}
            className='form-control'
            id=""
            rows="35"
            value={ this.state.text }/>
          </div>
          <div className='col-sm-6'>
          <h1>Résultat</h1>
          <div dangerouslySetInnerHTML={this.renderText(this.state.text)}>

          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
