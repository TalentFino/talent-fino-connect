import { Helmet } from 'react-helmet-async';
import { SEOConfig } from '@/lib/seo/types';
import { generateCanonicalUrl, validateMetaDescription, validateTitle, generateAbsoluteImageUrl, validateOpenGraphImage } from '@/lib/seo/useSEO';
import { DEFAULT_SEO } from '@/lib/seo/constants';

interface SEOProps extends Partial<SEOConfig> {
  path?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  ogImage,
  canonicalUrl,
  structuredData,
  path = '',
  noIndex = false,
  noFollow = false,
}) => {
  // Use defaults if not provided
  const finalTitle = title || DEFAULT_SEO.title;
  const finalDescription = description || DEFAULT_SEO.description;
  const finalKeywords = keywords.length > 0 ? keywords : DEFAULT_SEO.keywords;
  const finalOgImage = generateAbsoluteImageUrl(ogImage || DEFAULT_SEO.ogImage);
  
  const fullCanonicalUrl = canonicalUrl || generateCanonicalUrl(path);
  const keywordsString = finalKeywords.join(', ');
  
  // Validation warnings in development
  if (process.env.NODE_ENV === 'development') {
    if (!validateTitle(finalTitle)) {
      console.warn(`SEO Warning: Title length should be 30-60 characters. Current: ${finalTitle.length}`);
    }
    if (!validateMetaDescription(finalDescription)) {
      console.warn(`SEO Warning: Meta description length should be 120-160 characters. Current: ${finalDescription.length}`);
    }
    if (!validateOpenGraphImage(finalOgImage)) {
      console.warn(`SEO Warning: Open Graph image may not be valid: ${finalOgImage}`);
    }
  }

  // Build robots meta content
  const robotsContent = [];
  if (noIndex) robotsContent.push('noindex');
  if (noFollow) robotsContent.push('nofollow');
  if (robotsContent.length === 0) robotsContent.push('index', 'follow');

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywordsString} />
      <meta name="robots" content={robotsContent.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content={`${finalTitle} - Talent Fino`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Talent Fino" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={`${finalTitle} - Talent Fino`} />
      <meta name="twitter:site" content="@talentfino" />
      <meta name="twitter:creator" content="@talentfino" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Talent Fino" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
    </Helmet>
  );
};