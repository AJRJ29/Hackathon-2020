import React from 'react'
import  {Button}  from 'react-bootstrap'

export default function QuoteButton() {
  const handleClick = (e) => {
    e.preventDefault()
    console.log("💩💩💩💩💩💩")
  }

  return (
    <div>
      <Button className="btn-secondary content" onClick={handleClick}>
        Generate
      </Button>
    </div>
  )
}