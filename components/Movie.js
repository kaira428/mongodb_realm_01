import React from 'react'

const Movie = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
        <h3>
            {props.title}
        </h3>
        <br />
        <p>{props.plot}</p>
    </div>
  )
}

export default Movie