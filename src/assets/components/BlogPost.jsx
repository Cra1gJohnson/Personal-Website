import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../index.css';

const BlogPost = ({ post, onBack }) => {
    const [content, setcontent] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPostContent = async () => {
            try {
                const response = await fetch(`/posts/${post.slug}.md`);
                const markdown = await response.text();

                // Remove frontmatter from content
                const contentWithoutFrontmatter = markdown.replace(/^---[\s\S]*?---\n/, '');
                setcontent(contentWithoutFrontmatter);
                setLoading(false);
            } catch (error) {
                console.error(`Error loading post ${post.slug}:`, error);
                setcontent('Erorr loading post content.');
                setLoading(false);
            }
        };

        loadPostContent();
    }, [post.slug]);

    if (loading) {
        return <div className="loading">Loading post...</div>;
    }
    
    return (
        <div className="blog-post">
            <button className="back-button" onClick={onBack}>
            ← Back to list
            </button>

            <article className="post-content">
                <header className="post-header">
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                    </div>
                </header>

                <div className="markdown-content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;