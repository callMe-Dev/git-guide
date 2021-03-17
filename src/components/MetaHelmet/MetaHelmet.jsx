import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * @param titleText: string
 * @param description?: string
 * @returns <head>{...}</head>
 */
export default function MetaHelmet({ titleText, description = '' }) {
  return (
    <Helmet>
      <title>Git - {titleText}</title>
      <meta name='description' content={description} />
      <meta property='og:type' content='article' />
      <meta name='robots' content='noindex' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <html lang='es' />
      <link rel='apple-touch-icon' href='%PUBLIC_URL%/favicon.png' />
      <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
      <meta name='theme-color' content='#ffffff' />
    </Helmet>
  );
}
