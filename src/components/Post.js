import React from 'react'
import marked from 'marked'

const Post = ({ article }) => {
    console.log(article.fields,'text')
    const { name, featuredimage, description } = article.fields
    const postDescription = marked(description)
    console.log(featuredimage,'abc');
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {featuredimage && <img className='Featuredimage' src={featuredimage.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post