import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedBlogPost } from '../hooks/useTranslatedContent';

const ArticleCard = ({ article }) => {
  const { t, i18n } = useTranslation();
  
  // Get translated blog post content
  const translatedPost = useTranslatedBlogPost(article.id);
  
  // Use translated content if available, otherwise fallback to original
  const displayTitle = translatedPost?.title || article.title;
  const displayExcerpt = translatedPost?.excerpt || article.excerpt;
  const displayCategory = translatedPost?.category || article.category;
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = i18n.language === 'es' ? 'es-ES' : 
                   i18n.language === 'de' ? 'de-DE' : 
                   i18n.language === 'it' ? 'it-IT' : 'en-US';
    return date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <article
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img
          src={article.coverImage}
          alt={displayTitle}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          backgroundColor: '#D9795D',
          color: 'white',
          padding: '6px 15px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '600'
        }}>
          {displayCategory}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{
          display: 'flex',
          gap: '15px',
          fontSize: '0.85rem',
          color: '#999',
          marginBottom: '15px'
        }}>
          <span>📅 {formatDate(article.publishDate)}</span>
          <span>⏱️ {article.readTime}</span>
        </div>

        <h3 style={{
          fontSize: '1.5rem',
          marginBottom: '15px',
          color: '#0A2342',
          lineHeight: '1.3'
        }}>
          {displayTitle}
        </h3>

        <p style={{
          color: '#6c757d',
          lineHeight: '1.6',
          marginBottom: '20px',
          flex: 1
        }}>
          {displayExcerpt}
        </p>

        <Link
          to={`/blog/${article.slug}`}
          style={{
            color: '#D9795D',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: 'auto'
          }}
        >
          {t('Blog.readMore')} →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;

