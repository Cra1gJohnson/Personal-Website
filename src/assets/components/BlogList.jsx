import React from 'react';

const BlogList = ({ posts, onPostSelect }) => {
    const formateDate = (datestring) => {
        return new Date(datestring).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className='blog-list'>
            <header className='blog-header'>
                <h1>Blog Posts</h1>
                <p>Thoughts on Development and Technology</p>
            </header>

            <div className='posts-grid'>
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className='post-card'
                        onClick={() => onPostSelect(post)}
                    >
                        <div className='post-meta'>
                            <span className='post-date'>{formateDate(post.date)}</span>
                            <span className='post-read-time'>{post.readTime}</span>
                        </div>

                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-description">{post.description}</p>

                        <div className="read-more">
                            Read More →
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogList;