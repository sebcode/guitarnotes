/* @flow */

import { notes } from './../notes.js'
import type { Note } from './../types'

type Type = {
  startNote: Note,
  highlightNote: Note,
  max: number,
  onClickNote: () => void,
}

const StringNotes = ({ startNote, highlightNote, max, onClickNote }: Type) => {
  let stringNotes = []

  let i = notes.indexOf(startNote)
  while (stringNotes.length <= max) {
    stringNotes.push(notes[i])
    i += 1
    if (i >= notes.length) {
      i = 0
    }
  }

  return (
    <tr>
      {stringNotes.map((note, i) => {
        return (
          <td key={i}
            data-note={note}
            onClick={onClickNote}
            style={{
              color: note == highlightNote ? 'white' : 'black',
              backgroundColor: note == highlightNote ? 'black' : 'white',
              cursor: 'pointer',
            }}
            >
            {note}
          </td>
        )
      })}
    </tr>
  )
}

export default StringNotes

