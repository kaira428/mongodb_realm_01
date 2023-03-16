import React from 'react'

const Movie = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
        <h3>
            {props.title}
        </h3>
        <br />
        {props.plot && <p style={{color: 'cyan'}}>{props.plot}</p>}
        {!props.plot && <p style={{color: 'red'}}>No Plot Found</p>}
       <br />
       <br />
    </div>
  )
}

export default Movie