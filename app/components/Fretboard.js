/* @flow */

import StringNotes from './StringNotes'
import type { Note, Notes } from './../types'

type Type = {
  baseNotes: Notes,
  highlightNote: Note,
  max: number,
  onClickNote: () => void,
}

const Fretboard = ({ baseNotes, highlightNote, max, onClickNote }: Type) => {
  return (
    <table>
      <thead>
        <tr>
          {[ ...Array(max + 1) ].map((x, i) => {
            return (
              <th key={i}>{i}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {baseNotes.slice().reverse().map((note, i) => {
          return (
            <StringNotes
              key={i}
              startNote={note}
              highlightNote={highlightNote}
              max={max}
              onClickNote={onClickNote}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default Fretboard

