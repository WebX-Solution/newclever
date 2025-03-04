import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
