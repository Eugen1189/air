import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import { mockPosts } from '../data/mock-posts';

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
    <div style={{ padding: '100px 20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#0A2342' }}>
          {t('Blog.title')}
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#6c757d', maxWidth: '700px', margin: '0 auto' }}>
          {t('Blog.subtitle')}
        </p>
      </div>

      {/* Categories Filter */}
      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '50px'
      }}>
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '40px',
        marginBottom: '60px'
      }}>
        {filteredPosts.map((post) => (
          <ArticleCard key={post.id} article={post} />
        ))}
      </div>

      {/* Newsletter Section */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '50px 40px',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: '#0A2342' }}>
          {t('Blog.newsletter')}
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          {t('Blog.newsletterText')}
        </p>
        <div style={{
          display: 'flex',
          gap: '10px',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder={t('Blog.emailPlaceholder')}
            style={{
              flex: 1,
              padding: '15px 20px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          <button style={{
            padding: '15px 35px',
            backgroundColor: '#D9795D',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            {t('Blog.subscribe')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

