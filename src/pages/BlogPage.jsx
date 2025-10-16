import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import { mockPosts } from '../data/mock-posts';
import './BlogPage.scss';

const BlogPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  
  // Map of category translations
  const categoryMap = {
    'Tutti': t('Blog.allCategories'),
    'Destinazioni': t('Blog.destinations'),
    'Gastronomia': t('Blog.gastronomy'),
    'Consigli': t('Blog.tips'),
    'Sostenibilità': t('Blog.sustainability'),
    'Fotografia': t('Blog.photography'),
    'Budget': t('Blog.budget')
  };
  
  const categories = ['Tutti', 'Destinazioni', 'Gastronomia', 'Consigli', 'Sostenibilità', 'Fotografia', 'Budget'];
  
  const filteredPosts = selectedCategory === 'Tutti' 
    ? mockPosts 
    : mockPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      {/* Header */}
      <div className="blog-header">
        <h1>{t('Blog.title')}</h1>
        <p>{t('Blog.subtitle')}</p>
      </div>

      {/* Categories Filter */}
      <div className="blog-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 25px',
              border: '2px solid #D9795D',
              backgroundColor: cat === selectedCategory ? '#D9795D' : 'transparent',
              color: cat === selectedCategory ? 'white' : '#D9795D',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (cat !== selectedCategory) {
                e.currentTarget.style.backgroundColor = '#ffe8e0';
              }
            }}
            onMouseLeave={(e) => {
              if (cat !== selectedCategory) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {categoryMap[cat] || cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <ArticleCard key={post.id} article={post} />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="blog-newsletter">
        <h3>{t('Blog.newsletter')}</h3>
        <p>{t('Blog.newsletterText')}</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder={t('Blog.emailPlaceholder')}
          />
          <button
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4684d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D9795D'}
          >
            {t('Blog.subscribe')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

