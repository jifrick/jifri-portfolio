import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'JIFRI — Full-Stack Developer',
  description = 'Full-Stack Development · UI/UX · Digital Products · Creative Technology. I build digital products from idea to reality.'
}) => {
  useEffect(() => {
    document.title = title.includes('JIFRI') ? title : `${title} — JIFRI`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
