import React from 'react'
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'

// Persistent data array (typically fetched from the server)
const resData = [
  { id: 0, text: 'terrible', votes: 9 },
  { id: 1, text: 'incredible', votes: 15 },
  { id: 2, text: 'tarnished', votes: 3 }
]
// Object keys may vary on the poll type (see the 'Theme options' table below)
const customTheme = {
  textColor: '#C7C5D3',
  mainColor: '#433C64',
  backgroundColor: '#8B8D91',
  alignment: 'center'
}

function vote(item: Result, results: Result[]) {
  // Here you probably want to manage
  // and return the modified data to the server.
}

export const Leafpolll = () => {
  return (
    <LeafPoll
    type="multiple"
    question="Do you like Angular?"
    results={resData}
    theme={customTheme}
    onVote={vote}
  />
  )
}