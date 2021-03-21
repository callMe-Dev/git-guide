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
      <html lang='es' />
      <meta property='og:type' content='article' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
    </Helmet>
  );
}
