import React from 'react'
import marked from 'marked'

const Post = ({ article }) => {
    console.log(article.fields,'text')
    const { name, Featuredimage, description } = article.fields
    const postDescription = marked(description)
    console.log(Featuredimage,'abc');
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {Featuredimage && <img className='Featuredimage' src={Featuredimage.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post