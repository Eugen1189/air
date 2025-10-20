import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mockPosts } from '../data/mock-posts';
import { useTranslatedBlogPost } from '../hooks/useTranslatedContent';
import './BlogPostPage.scss';

const BlogPostPage = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>{t('Blog.title')}</h1>
        <p>Article not found.</p>
        <Link to="/blog" style={{ color: '#D9795D', fontWeight: '600' }}>
          ← {t('Common.back')} {t('Navigation.blog')}
        </Link>
      </div>
    );
  }

  // Get translated blog post content
  const translatedPost = useTranslatedBlogPost(post.id);
  
  // Use translated content if available, otherwise fallback to original
  const displayTitle = translatedPost?.title || post.title;
  const displayExcerpt = translatedPost?.excerpt || post.excerpt;
  const displayCategory = translatedPost?.category || post.category;
  const displayContent = translatedPost?.content || post.content;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = i18n.language === 'es' ? 'es-ES' : 
                   i18n.language === 'de' ? 'de-DE' : 
                   i18n.language === 'it' ? 'it-IT' : 'en-US';
    return date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const relatedPosts = mockPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      {/* Back Button */}
      <div className="back-container">
        <Link 
          to="/blog"
          className="back-link"
        >
          ← {t('Common.back')} {t('Navigation.blog')}
        </Link>
      </div>

      {/* Article Container */}
      <article className="article-container">
        {/* Post Header */}
        <header className="post-header">
          {/* Category Badge */}
          <div className="category-badge">
            {displayCategory}
          </div>

          {/* Title */}
          <h1 className="post-title">
            {displayTitle}
          </h1>

          {/* Meta Info */}
          <div className="post-meta">
            <span>📅 {formatDate(post.publishDate)}</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="post-image">
          <img
            src={post.coverImage}
            alt={displayTitle}
          />
        </div>

        {/* Excerpt */}
        <div className="post-excerpt">
          {displayExcerpt}
        </div>

        {/* Content */}
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: displayContent }}
        />
        {/* Share Section */}
        <div className="share-section">
          <h3>
            {t('Blog.likedArticle')}
          </h3>
          <div className="share-links">
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
            <a href="#">📧</a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h2>
            {t('Blog.relatedPosts')}
          </h2>
          <div className="related-grid">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="related-card"
              >
                <img
                  src={relatedPost.coverImage}
                  alt={relatedPost.title}
                />
                <div className="card-content">
                  <h4>
                    {relatedPost.title}
                  </h4>
                  <p>
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;

