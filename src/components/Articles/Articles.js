import React from "react";

const Articles = (props) => {
    return (
        <div>
            <h1>Новости</h1>
            {props.articles.map(article =>
                <div>
                    <div style={{marginTop: 20}}>
                        {article.title}
                    </div>
                    <div>
                        {article.description}
                    </div>
                </div>

            )}
        </div>
    )
};


export default Articles


