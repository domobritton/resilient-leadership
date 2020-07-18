import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { GlobalStyles } from './styles';
import { MediaContextProvider, mediaStyles } from './Media';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link
          href='https://fonts.googleapis.com/css2?family=Heebo&family=Junge&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <style>{mediaStyles}</style>
      </Helmet>
      <MediaContextProvider>
        <GlobalStyles />
        <>{children}</>
        <Footer />
      </MediaContextProvider>
    </>
  );
};

export default TemplateWrapper;
