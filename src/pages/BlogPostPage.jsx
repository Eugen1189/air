import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mockPosts } from '../data/mock-posts';
import { useTranslatedBlogPost } from '../hooks/useTranslatedContent';

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
    <div style={{ padding: '100px 20px 60px' }}>
      {/* Back Button */}
      <div style={{ maxWidth: '900px', margin: '0 auto 30px' }}>
        <Link 
          to="/blog"
          style={{
            color: '#D9795D',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← {t('Common.back')} {t('Navigation.blog')}
        </Link>
      </div>

      {/* Article Container */}
      <article style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Category Badge */}
        <div style={{
          display: 'inline-block',
          backgroundColor: '#D9795D',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          {displayCategory}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '3rem',
          lineHeight: '1.2',
          marginBottom: '20px',
          color: '#0A2342'
        }}>
          {displayTitle}
        </h1>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          gap: '25px',
          fontSize: '1rem',
          color: '#6c757d',
          marginBottom: '40px',
          paddingBottom: '30px',
          borderBottom: '2px solid #e0e0e0'
        }}>
          <span>📅 {formatDate(post.publishDate)}</span>
          <span>⏱️ {post.readTime}</span>
        </div>

        {/* Cover Image */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '50px'
        }}>
          <img
            src={post.coverImage}
            alt={displayTitle}
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Excerpt */}
        <div style={{
          fontSize: '1.3rem',
          lineHeight: '1.8',
          color: '#333',
          marginBottom: '40px',
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderLeft: '4px solid #D9795D',
          borderRadius: '8px',
          fontStyle: 'italic'
        }}>
          {displayExcerpt}
        </div>

        {/* Content */}
        <div 
          className="blog-content"
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333'
          }}
          dangerouslySetInnerHTML={{ __html: displayContent }}
        />
        
        <style>{`
          .blog-content h3 {
            font-size: 1.8rem;
            color: #0A2342;
            margin: 40px 0 20px;
            font-weight: 700;
          }
          .blog-content p {
            margin-bottom: 20px;
          }
          .blog-content ul, .blog-content ol {
            margin: 20px 0;
            padding-left: 30px;
          }
          .blog-content li {
            margin-bottom: 12px;
            line-height: 1.8;
          }
          .blog-content strong {
            color: #D9795D;
            font-weight: 600;
          }
        `}</style>

        {/* Share Section */}
        <div style={{
          marginTop: '60px',
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#0A2342' }}>
            {t('Blog.likedArticle')}
          </h3>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', fontSize: '2rem' }}>
            <a href="#" style={{ color: '#D9795D' }}>📘</a>
            <a href="#" style={{ color: '#D9795D' }}>📷</a>
            <a href="#" style={{ color: '#D9795D' }}>🐦</a>
            <a href="#" style={{ color: '#D9795D' }}>📧</a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div style={{ maxWidth: '1200px', margin: '80px auto 0' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#0A2342'
          }}>
            {t('Blog.relatedPosts')}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={relatedPost.coverImage}
                  alt={relatedPost.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#0A2342' }}>
                    {relatedPost.title}
                  </h4>
                  <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
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

