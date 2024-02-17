import React from 'react'

import './CardFront.css'

const CardFront = ({name, number, month, year}) => {
  const formatNumber = (number) => {
    return number.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1  $2  $3  $4")
  }
  
    
  return (
    <div className="card-front">
      <div className="circles">
        <div className="big-circle"></div>
        <div className="small-circle"></div>
      </div>
      <p id='card-number'>{!number ? "0000 0000 0000 0000" : formatNumber(number)}</p>
      <div className="name-and-exp">
        <p id='cardholder-name'>{!name ? "Jane Appleseed" : name}</p>
        <div className="exp">
          <p>{!month? "00" : month}</p>
          <p>/</p>
          <p>{!year ? "00" : year}</p>
        </div>
      </div>
    </div>
  )
}

export default CardFront