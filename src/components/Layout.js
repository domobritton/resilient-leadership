import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
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
          href='https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento'
          rel='stylesheet'
        />
        <link
          href='//db.onlinewebfonts.com/c/25f19424a5fb75023182a80c61dffc37?family=DomLovesMary+Pro'
          rel='stylesheet'
          type='text/css'
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

        <link rel='mask-icon' href={``} color='#DFB860' />
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
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </MediaContextProvider>
    </>
  );
};

export default TemplateWrapper;
