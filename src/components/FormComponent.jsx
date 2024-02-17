import React from 'react'

import './FormComponent.css'

import { useState } from 'react'

import CardFront from './CardFront';
import CardBack from './CardBack';
import ErrorComponent from './ErrorComponent';

const FormComponent = () => {
 
  const [name, setName] = useState(".");
  const [number, setNumber] = useState(0);
  const [month, setMonth] = useState(".");
  const [year, setYear] = useState(".");
  const [cvc, setCvc] = useState(".");

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  let x = 1;

  const validDigits = (text) => {
    return text.replace(/[^0-9]/g, "")
  }

  const handleNameValue = (e) => {
    setCardholderName(e.target.value)
  } 

  const handleCardNumber = (e) => {
    setCardNumber(validDigits(e.target.value).replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4"))
  }

  const handleCardMonth = (e) => {
    setCardExpMonth(e.target.value)
  }

  const handleCardYear = (e) => {
    setCardExpYear(e.target.value)
  }

  const handleCvc = (e) => {
    setCardCvc(e.target.value)
  }


  const submitInfos = (e) => {
    e.preventDefault()

    setName(cardholderName)
    setNumber(cardNumber)
    setMonth(cardExpMonth)
    setYear(cardExpYear)
    setCvc(cardCvc)


    console.log("cardholdname " + cardholderName)
    console.log(name)
  }

  return (
  <div>
    <CardFront name={cardholderName} number={cardNumber} month={cardExpMonth} year={cardExpYear}/>
    <CardBack cvc={cardCvc} />
    {name === "." || name === "" || number === "." || number === "" || month === "." || month === "" || year === "." || year === "" || cvc === "." || cvc === "" ? <form> 
      <label className='large-input-container'>
        <span>Cardholder Name</span>
        <input 
        type="text" 
        name='card-name'
        onChange={(e) => handleNameValue(e)} 
        value={cardholderName} 
        placeholder='e.g. Jane Appleseed'
        />
        <ErrorComponent inputValue={name} />
      </label>
      <label className='large-input-container'>
        <span>Card Number</span>
        <input
        type="text" 
        name='card-number'
        onChange={(e) => handleCardNumber(e)} 
        value={cardNumber} 
        placeholder='e.g. 1234 5678 9123 0000'
        maxLength={19}
        />
        <ErrorComponent inputValue={number} />
      </label>
      <label className='exp-input-container'>
        <span>Exp. Date (MM/YY)</span>
        <div className="exp-month-and-year">
          <input 
          type="text"
          className='exp-inputs' 
          name='card-month'
          onChange={(e) => handleCardMonth(e)}
          value={cardExpMonth} 
          placeholder='MM'
          maxLength={2}
          />
          <ErrorComponent inputValue={month && year} />
          <span className="error"></span>
          <input 
          className='exp-inputs'
          type="text" 
          name='card-year'
          onChange={(e) => handleCardYear(e)} 
          value={cardExpYear}
          placeholder='YY'
          maxLength={2}
          />
        </div>
      </label>
      <label className='cvc-input-container'>
        <span>cvc</span>
        <input 
        type="text" 
        name='card-cvc'
        onChange={(e) => handleCvc(e)}
        value={cardCvc} 
        placeholder='e.g. 123'
        maxLength={3}
        />
        <ErrorComponent inputValue={cvc} />
      </label>
      <input id='submit-btn' type="submit" value="Confirm" onClick={(e) => submitInfos(e)}/>
    </form> : <div className='sucess-container'>
      <img src="public/icon-complete.svg" alt="" />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button onClick={() => window.location.reload()}>Continue</button>
    </div>}
  </div>
  )
}

export default FormComponent