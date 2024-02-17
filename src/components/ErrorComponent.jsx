import './ErrorComponent.css'

const ErrorComponent = ({inputValue}) => {
    if(inputValue === "") {
        return (<p className="error">Can't be blank</p>)
    }else {
        return ("")
    }  
}

export default ErrorComponent