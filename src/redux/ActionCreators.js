import * as ActionTypes from './ActionTypes'
import { DISHES } from '../shared/dishes'

export const addComment = (dishId, rating, author, comment) => {
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId, rating, author, comment
        }
    })
}

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading(true))

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000)
}

export const dishesLoading = () => {
    return {
        type: ActionTypes.DISHES_LOADING
    }
}

export const dishesFailed = (errmess) => {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errmess
    }
}

export const addDishes = (dishes) => {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: DISHES
    }
}