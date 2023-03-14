type SEOProps = {
  title: string;
  description: string;
  ogImage?: {
    title?: string;
    subtitle?: string;
  };
  ogType?: "website" | "article";
};

export function SEO({ title, description, ogType = "website" }: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content="https://trilm95.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@min_tri95" />
      <meta name="twitter:creator" content="@min_tri95" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="32x32"
        href="/favicons/favicon-32x32.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="16x16"
        href="/favicons/favicon-16x16.svg"
      />
    </>
  );
}
