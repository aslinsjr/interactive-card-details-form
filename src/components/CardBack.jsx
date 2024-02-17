import React from 'react'

import './CardBack.css'

const CardBack = ({cvc}) => {
  return (
    <div className="card-back">
      <p id='cvc-number'>{!cvc ? "000" : cvc}</p>
    </div>
  )
}

export default CardBack