import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import extractMarkdownFromUrl from './extractMarkdownFromUrl'
import compileMarkdown from './compileMarkdown'

class App extends React.Component {
  state = {
    text: undefined,
    error: undefined
  }

  componentDidMount() {
    extractMarkdownFromUrl()
      .then(compileMarkdown)
      .then(compiled => this.setState(state => ({ ...state, text: compiled.tree })))
      .catch(e => {
        console.error(e)
        this.setState({ error: 'Ooops!' })
      })
  }

  render() {
    if (this.state.error !== undefined) {
      return <div>{this.state.error}</div>
    } else if (this.state.text !== undefined) {
      return this.state.text
    } else {
      return <div>Loading...</div>
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
