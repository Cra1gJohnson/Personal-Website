import React, { useState, useEffect } from 'react';
import BlogList from './BlogList.jsx';
import BlogPost from './BlogPost.jsx';
import '../../index.css';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load all posts metadata on component mount
  useEffect(() => {
    const loadPostsMetadata = async () => {
      try {
        // You'll need to maintain a list of your post files
        const postSlugs = [
          'website-creation'
        ];

        const postsData = await Promise.all(
          postSlugs.map(async (slug) => {
            try {
              const response = await fetch(`/posts/${slug}.md`);
              const markdown = await response.text();
              
              // Parse frontmatter (you'll implement this function)
              const { data } = parseFrontmatter(markdown);
              
              return {
                ...data,
                slug
              };
            } catch (error) {
              console.error(`Error loading post ${slug}:`, error);
              return null;
            }
          })
        );

        // Filter out failed loads and sort by date
        const validPosts = postsData
          .filter(post => post !== null)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(validPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error loading posts:', error);
        setLoading(false);
      }
    };

    loadPostsMetadata();
  }, []);

  // Simple frontmatter parser
  const parseFrontmatter = (markdown) => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);
    
    if (!match) {
      return { data: {}, content: markdown };
    }

    const [, frontmatterString, content] = match;
    const data = {};
    
    // Parse YAML-like frontmatter
    frontmatterString.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        data[key.trim()] = value;
      }
    });

    return { data, content };
  };

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <div className="blog-container">
        <div className="loading">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      {selectedPost ? (
        <BlogPost 
          post={selectedPost} 
          onBack={handleBackToList}
        />
      ) : (
        <BlogList 
          posts={posts} 
          onPostSelect={handlePostSelect}
        />
      )}
    </div>
    );
};

export default Blog;