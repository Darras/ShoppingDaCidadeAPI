import { USER_LOGGED_IN,USER_LOGGED_OUT,USER_CREATE } from '../actions/actionTypes'

const initialState = {
        password:'',
        name:'',
        contact:{
            address:'',
            zipcode: '',
            country: '',
            email: '',
            phone: ''
        }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return {
                    name: action.payload.user.name,
                    password: action.payload.user.password,
                    contact:{
                        address: action.payload.user.contact.email,
                        zipcode: action.payload.user.contact.zipcode,
                        country: action.payload.user.contact.country,
                        email: action.payload.user.contact.email,
                        phone: action.payload.user.contact.phone
                    }
        }
        case USER_LOGGED_OUT:
            return {
                    password:'',
                    name:'',
                    contact:{
                        address:'',
                        zipcode: '',
                        country: '',
                        email: '',
                        phone: ''
                    }
            }
        case USER_CREATE:
        debugger
            return {
                    name: action.payload.user.name,
                    password: action.payload.user.password,
                    contact:{
                        address: action.payload.user.contact.email,
                        zipcode: action.payload.user.contact.zipcode,
                        country: action.payload.user.contact.country,
                        email: action.payload.user.contact.email,
                        phone: action.payload.user.contact.phone
                    }
        }
        default:
            return state
    }
}

export default reducer;