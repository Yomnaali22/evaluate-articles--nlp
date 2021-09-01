import { handleSubmit } from './js/formHandler'
import { validateUrl } from './js/urlValidation'

// import sass files
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'



//exported to be a part of the client library 
export {
    handleSubmit,
    validateUrl
}