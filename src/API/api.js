import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
});

export const articleAPI = {
    getArticles: () => {
        return instance.get("api/articles/");
    },

    getArticle: (articleId) => {
        return instance.get("api/articles/" + articleId);
    },
};

export const articleAPIAdmin = {
    deleteArticle: () => {
        return instance.delete("api/articles/");
    },

    postArticle: (title, description) => {
        return instance.post("api/api/articles/create-article/", {
            title,
            description,
        })
    },

    updateArticle: () => {
        return instance.put("api/articles/");
    }
};

export const authAPI = {
    authentication() {
        return instance.get(`auth/login`)
    }
};

export default articleAPI