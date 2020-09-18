import * as ActionTypes from './ActionTypes'
import { baseURL } from '../shared/baseURL'

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

    return (
        fetch(baseURL + 'dishes')
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => console.log(error))
    )
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
        payload: dishes
    }
}

export const fetchComments = () => dispatch => {
    return (
        fetch(baseURL + 'comments')
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => console.log(error))
    )
}

export const commentsFailed = (errmess) => {
    return {
        type: ActionTypes.COMMENTS_FAILED,
        payload: errmess
    }
}

export const addComments = (comments) => {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    }
}

export const fetchPromos = () => dispatch => {
    dispatch(promosLoading(true))
    return (
        fetch(baseURL + 'promotions')
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => console.log(error))
    )
}

export const promosLoading = () => {
    return {
        type: ActionTypes.PROMOS_LOADING
    }
}

export const promosFailed = (errmess) => {
    return {
        type: ActionTypes.PROMOS_FAILED,
        payload: errmess
    }
}

export const addPromos = promos => {
    return {
        type: ActionTypes.ADD_PROMOS,
        payload: promos
    }
}