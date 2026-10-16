// src/components/sections/ArticleCatalogSection.jsx
import { useEffect, useState, useRef, useCallback } from 'react';
import Container from '../layout/Container';
import { articles, SHARE4HAPPY_INFO } from '../../data/articles';
import './ArticleCatalogSection.css';

const ALL_CATEGORIES = 'Tất cả';
const AUTO_PLAY_INTERVAL_MS = 3800; // Thời gian chạy tự động (3.8s)

function useCardsPerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setPerPage(1);       // Mobile: 1 thẻ
      else if (width < 1024) setPerPage(2); // Tablet: 2 thẻ
      else setPerPage(3);                  // Desktop: 3 thẻ
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return perPage;
}

export default function ArticleCatalogSection() {
  const categories = [ALL_CATEGORIES, ...new Set(articles.map((a) => a.category))];
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const perPage = useCardsPerPage();

  const filteredArticles =
    activeCategory === ALL_CATEGORIES
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const maxIndex = Math.max(0, filteredArticles.length - perPage);
  const numPages = maxIndex + 1;
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (targetIndex) => {
    setCurrentIndex(Math.min(targetIndex, maxIndex));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  // Tự động chạy carousel trong nền, tạm dừng khi hover chuột vào thẻ
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const shouldRun = !isHovered && filteredArticles.length > perPage;
    if (shouldRun) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, AUTO_PLAY_INTERVAL_MS);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, filteredArticles.length, perPage, handleNext]);

  return (
    <section className="s4h-section" id="tin-tuc">
      <div className="s4h-section__glow s4h-section__glow--top" aria-hidden="true"></div>
      <div className="s4h-section__glow s4h-section__glow--bottom" aria-hidden="true"></div>

      <Container>
        {/* Header giới thiệu website */}
        <div className="s4h-header">
          <div className="s4h-badge-row">
            <span className="s4h-badge">
              <span className="s4h-badge__pulse" aria-hidden="true"></span>
              KHO TRI THỨC CÔNG NGHỆ SHARE4HAPPY
            </span>
            <a
              href={SHARE4HAPPY_INFO.url}
              target="_blank"
              rel="noopener noreferrer"
              className="s4h-external-pill"
              title="Mở website trong tab mới"
            >
              <span>🌐 share4happy.com</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h2 className="s4h-header__title">
            Khám Phá Các Bài Viết Mới Nhất Từ <span className="s4h-gradient-text">Share4Happy.com</span>
          </h2>

          <p className="s4h-header__subtitle">
            {SHARE4HAPPY_INFO.description}
          </p>

          {/* Thanh thống kê nhanh */}
          <div className="s4h-stats-bar">
            {SHARE4HAPPY_INFO.stats.map((stat, idx) => (
              <div className="s4h-stat-item" key={idx}>
                <span className="s4h-stat-item__value">{stat.value}</span>
                <span className="s4h-stat-item__label">{stat.label}</span>
              </div>
            ))}
            <div className="s4h-stat-item s4h-stat-item--cta">
              <a
                href={SHARE4HAPPY_INFO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="s4h-stat-btn"
              >
                Ghé thăm Website ↗
              </a>
            </div>
          </div>

          {/* Bộ lọc danh mục */}
          <div className="s4h-chips" role="tablist" aria-label="Lọc theo chủ đề bài viết">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`s4h-chip ${activeCategory === category ? 's4h-chip--active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Khung Carousel */}
        {filteredArticles.length > 0 ? (
          <div
            className="s4h-carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {/* Viewport & Track chạy slide */}
            <div className="s4h-viewport">
              <div
                className="s4h-track"
                style={{
                  transform: `translateX(-${safeIndex * (100 / perPage)}%)`,
                }}
              >
                {filteredArticles.map((article) => (
                  <div
                    className="s4h-slide"
                    style={{ width: `${100 / perPage}%` }}
                    key={article.id}
                  >
                    <article className="s4h-card">
                      {/* Ảnh Thumbnail */}
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="s4h-card__thumb-link"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="s4h-card__thumb">
                          {article.image ? (
                            <img
                              src={article.image}
                              alt={article.title}
                              className="s4h-card__img"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.removeAttribute('style');
                              }}
                            />
                          ) : null}
                          <div
                            className={`s4h-card__thumb-fallback s4h-card__thumb-fallback--${article.tone}`}
                            style={article.image ? { display: 'none' } : {}}
                          >
                            <span className="s4h-card__fallback-icon">{article.icon}</span>
                          </div>
                          <div className="s4h-card__category-badge">
                            {article.category}
                          </div>
                          <div className="s4h-card__origin-tag">
                            Share4Happy
                          </div>
                        </div>
                      </a>

                      {/* Nội dung bài viết */}
                      <div className="s4h-card__body">
                        <div className="s4h-card__meta">
                          <span className="s4h-card__author">
                            <span className="s4h-card__author-icon">✍️</span>
                            {article.author}
                          </span>
                          <span className="s4h-card__dot" aria-hidden="true"></span>
                          <time className="s4h-card__date">{article.date}</time>
                          <span className="s4h-card__dot" aria-hidden="true"></span>
                          <span className="s4h-card__read-time">{article.readTime} phút đọc</span>
                        </div>

                        <h3 className="s4h-card__title">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="s4h-card__title-link"
                          >
                            {article.title}
                          </a>
                        </h3>

                        <p className="s4h-card__excerpt">{article.excerpt}</p>

                        <div className="s4h-card__footer">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="s4h-card__btn-read"
                          >
                            <span>Đọc trên Share4Happy</span>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Nút điều hướng trước/sau & Chấm tròn Dots */}
            {numPages > 1 && (
              <div className="s4h-controls">
                <button
                  type="button"
                  className="s4h-nav-arrow s4h-nav-arrow--prev"
                  onClick={handlePrev}
                  aria-label="Xem bài viết trước đó"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <div className="s4h-dots">
                  {Array.from({ length: numPages }).map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      type="button"
                      aria-label={`Chuyển đến trang ${dotIndex + 1}`}
                      className={`s4h-dot ${dotIndex === safeIndex ? 's4h-dot--active' : ''}`}
                      onClick={() => goToSlide(dotIndex)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="s4h-nav-arrow s4h-nav-arrow--next"
                  onClick={handleNext}
                  aria-label="Xem bài viết tiếp theo"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="s4h-empty">
            <p>Chưa có bài viết trong chủ đề này.</p>
          </div>
        )}

        {/* Banner CTA cuối section */}
        <div className="s4h-bottom-card">
          <div className="s4h-bottom-card__info">
            <h4 className="s4h-bottom-card__title">
              Muốn tìm hiểu thêm các khóa học và tài nguyên công nghệ?
            </h4>
            <p className="s4h-bottom-card__desc">
              Truy cập ngay nền tảng <strong>Share4Happy.com</strong> để trải nghiệm các chuyên đề AI, Robotics, Remote Lab và lập trình thực chiến.
            </p>
          </div>
          <div className="s4h-bottom-card__actions">
            <a
              href="https://share4happy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="s4h-btn-primary"
            >
              <span>Khám Phá Tất Cả Bài Viết</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
