import * as ActionTypes from './ActionTypes'
import { baseURL } from '../shared/baseURL'

// export const addComment = (dishId, rating, author, comment) => {
//     return ({
//         type: ActionTypes.ADD_COMMENT,
//         payload: {
//             dishId, rating, author, comment
//         }
//     })
// }

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading(true))

    return (
        fetch(baseURL + 'dishes')
            .then(response => {
                if (response.ok) {
                    return response
                }
                else {
                    var error = new Error(`Error ${response.status} : ${response.statusText}`)
                    throw error
                }
            },
                error => {
                    var errmess = new Error(error.message)
                    throw errmess
                })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))
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
            .then(response => {
                if (response.ok) {
                    return response
                }
                else {
                    var error = new Error(`Error ${response.status} : ${response.statusText}`)
                    throw error
                }
            },
                error => {
                    var errmess = new Error(error.message)
                    throw errmess
                })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)))
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
            .then(response => {
                if (response.ok) {
                    return response
                }
                else {
                    var error = new Error(`Error ${response.status} : ${response.statusText}`)
                    throw error
                }
            },
                error => {
                    var errmess = new Error(error.message)
                    throw errmess
                })
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => dispatch(promosFailed(error.message)))
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

export const addComment = comment => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = { dishId, rating, author, comment }
    newComment.date = new Date().toISOString()
    return (
        fetch(baseURL + "comments", {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    throw error;
                })
            .then(response => response.json())
            .then(response => dispatch(addComment(response)))
            .catch(error => {
                console.log('post comments', error.message)
                alert('Your comment could not be posted\nError: ' + error.message)
            })
    )
}

export const fetchLeaders = () => dispatch => {
    dispatch(leadersLoading(true))

    return (
        fetch(baseURL + 'leaders')
            .then(response => {
                if (response.ok) {
                    return response
                }
                else {
                    var error = new Error(`Error ${response.status} : ${response.statusText}`)
                    throw error
                }
            },
                error => {
                    var errmess = new Error(error.message)
                    throw errmess
                })
            .then(response => response.json())
            .then(leaders => dispatch(addLeaders(leaders)))
            .catch(error => dispatch(leadersFailed(error.message)))
    )
}


export const leadersLoading = () => {
    return {
        type: ActionTypes.LEADERS_LOADING
    }
}
export const leadersFailed = errmess => {
    return {
        type: ActionTypes.LEADERS_FAILED,
        payload: errmess
    }
}
export const addLeaders = promos => {
    return {
        type: ActionTypes.ADD_LEADERS,
        payload: promos
    }
}


export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => dispatch => {
    const newFeedback = { firstname, lastname, telnum, email, agree, contactType, message }
    newFeedback.date = new Date().toISOString()
    return (
        fetch(baseURL + "feedback", {
            method: "POST",
            body: JSON.stringify(newFeedback),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    throw error;
                })
            .then(response => response.json())
            .then(response => dispatch(addFeedback(response)))
            .catch(error => alert('Your feedback could not be posted\nError: ' + error.message))
    )
}
export const addFeedback = feedback => {
    return {
        type: ActionTypes.ADD_FEEDBACK,
        payload: feedback
    }
}