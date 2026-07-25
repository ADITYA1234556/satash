/**
 * SEO helper utilities for healthcare organization
 */

export const generateMetaTags = ({
  title,
  description,
  keywords = [],
  image = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  url = '',
}) => {
  return {
    title: `${title} | Satash Community Care`,
    description,
    keywords: ['care', 'learning disabilities', 'supported living', ...keywords],
    image,
    url,
  };
};

export const HEALTHCARE_SEO_KEYWORDS = [
  'learning disabilities support',
  'residential care Essex',
  'supported living homes',
  'person-centred care',
  'CQC registered care',
  'community care services',
  '24/7 care support',
  'adult care homes',
];
