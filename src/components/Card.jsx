import React from 'react'
const Card = (robots) => {

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${ robots.name }?200x200`} alt="robots" />
        <div>
            <h2>{ robots.name }</h2>
            <p>{ robots.email } </p>
        </div>
    </div>
  )
}

export default Card