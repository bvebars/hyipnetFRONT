import articleAPI, {articleAPIAdmin} from "../API/api";


const SET_ARTICLES = 'SET_ARTICLES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ARTICLES_COUNT = 'SET_TOTAL_ARTICLES_COUNT';
const ADD_ARTICLES = 'ADD_ARTICLES';

let initialState = {
    articles: [],
    PageSize: 5,
    totalArticlesCount: 1,
    currentPage: 1
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {...state, articles: action.articles.data.data};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case ADD_ARTICLES:
            return {...state, currentPage: action.currentPage};
        default:
            return state
    }
};

export const setArticles = (articles) => ({type: SET_ARTICLES, articles});

export const addArticles = (title, description ) => ({type: SET_ARTICLES, title, description});


//thunk

export const getArticles = (currentPage, pageSize) => {
    return (dispatch) => {
        articleAPI.getArticles(currentPage, pageSize)
            .then(data => {
                dispatch(setArticles(data))
            })
    }
};

export const addArticle = (title, description) => {
    return (dispatch) => {
        articleAPIAdmin.postArticle(title, description)
            .then(data => {
                dispatch(addArticles(data))
            })
    }
};

export const updateArticleText = (title, description) => {
    return (dispatch) => {
        articleAPIAdmin.postArticle(title, description)
            .then(data => {
                dispatch(addArticles(data))
            })
    }
};


export default articlesReducer