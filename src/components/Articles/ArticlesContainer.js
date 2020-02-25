import React from 'react';
import {connect} from "react-redux";
import {addArticle, getArticles, updateArticleText,} from "../../redux/articles-reducer";
import Articles from "./Articles";
import {compose} from "redux";

class ArticlesContainer extends React.Component {
    componentDidMount() {
        this.props.getArticles(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return (
            <Articles
                articles={this.props.articles}
            />

        )
    }
}

let mapStateToProps = (state) => {
    return {
        articles: state.articlesPage.articles
    }
};


export default compose(
    connect(mapStateToProps, {
        getArticles, addArticle, updateArticleText
    })(ArticlesContainer)
)