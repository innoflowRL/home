import { useCallback, useEffect, useMemo, useState } from 'react';

function CompletedGallery({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = useMemo(
    () => items.filter((item) => typeof item !== 'string'),
    [items]
  );

  const selectedImageIndex = selectedImage
    ? galleryImages.findIndex((item) => item.title === selectedImage.title)
    : -1;

  const navigateGallery = useCallback((direction) => {
    setSelectedImage((current) => {
      if (!current || galleryImages.length === 0) return current;

      const currentIndex = galleryImages.findIndex((item) => item.title === current.title);
      const safeIndex = currentIndex >= 0 ? currentIndex : 0;
      const nextIndex = (safeIndex + direction + galleryImages.length) % galleryImages.length;

      return galleryImages[nextIndex];
    });
  }, [galleryImages]);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
      if (event.key === 'ArrowLeft') navigateGallery(-1);
      if (event.key === 'ArrowRight') navigateGallery(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigateGallery, selectedImage]);

  return (
    <section className="completed-gallery" aria-label="Completed project gallery">
      <h2 className="completed-gallery-title">Gallery</h2>
      <div className="completed-gallery-grid">
        {items.map((item) => (
          <div
            key={typeof item === 'string' ? item : item.title}
            className="completed-gallery-placeholder text-small"
          >
            {typeof item === 'string' ? (
              item
            ) : (
              <button
                type="button"
                className="completed-gallery-image-button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Open ${item.title} gallery image`}
              >
                <img
                  className="completed-gallery-image"
                  src={item.image}
                  alt={item.title}
                />
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="completed-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="completed-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="completed-gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery image"
            >
              ×
            </button>
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="completed-gallery-lightbox-nav completed-gallery-lightbox-nav-prev"
                  onClick={() => navigateGallery(-1)}
                  aria-label="Show previous gallery image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="completed-gallery-lightbox-nav completed-gallery-lightbox-nav-next"
                  onClick={() => navigateGallery(1)}
                  aria-label="Show next gallery image"
                >
                  ›
                </button>
              </>
            )}
            <img
              className="completed-gallery-lightbox-image"
              src={selectedImage.image}
              alt={selectedImage.title}
            />
            <div className="completed-gallery-lightbox-title text-small">
              <span>{selectedImage.title}</span>
              {selectedImageIndex >= 0 && (
                <span className="completed-gallery-lightbox-count">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CompletedGallery;
