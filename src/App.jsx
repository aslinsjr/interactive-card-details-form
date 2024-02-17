
import BackgroundComponent from './components/BackgroundComponent';
import FormComponent from './components/FormComponent';


import './App.css'


function App() {
  let cardInfo = 1;
  return (
  <div className='main-container'>
    <BackgroundComponent />


    {cardInfo === "" ? <FormComponent /> : <SuccessComponent/>}
    
    
  </div>
  ) 
}

export default App
