/* @flow */

import Fretboard from './Fretboard'
import { tunings, tuningNotes } from './../notes.js'

export class App extends React.Component {
  handleClickTuning: () => void
  handleClickNote: () => void

  constructor(props: any) {
    super(props)

    this.handleClickTuning = this.handleClickTuning.bind(this)
    this.handleClickNote = this.handleClickNote.bind(this)

    const loadedState = localStorage.getItem('state')
    this.state = loadedState ? JSON.parse(loadedState) : {
      tuning: 'E',
      highlightNote: '',
    }
  }

  handleClickTuning(e: any) {
    e.preventDefault()
    const tuning = e.target.getAttribute('data-tuning')
    this.setState({ tuning })
    this.saveState()
  }

  handleClickNote(e: any) {
    e.preventDefault()
    const highlightNote = e.target.getAttribute('data-note')
    this.setState({ highlightNote })
    this.saveState()
  }

  saveState() {
    setTimeout(() => {
      localStorage.setItem('state', JSON.stringify(this.state))
    }, 500)
  }

  render() {
    return (
      <div>
        <Fretboard
          baseNotes={tuningNotes[this.state.tuning]}
          highlightNote={this.state.highlightNote}
          onClickNote={this.handleClickNote}
          max={22}
        />

        <div>
          Tuning:{' '}
          {tunings.map(name => {
            return (
              <span key={name}
                style={{
                  color: name == this.state.tuning ? 'red' : 'black',
                  padding: '0 10px 0 0',
                  cursor: 'pointer',
                }}
                data-tuning={name}
                onClick={this.handleClickTuning}
              >
                [{name}]
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App

