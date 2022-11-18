import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { GlobalStyles } from './styles';
import { MediaContextProvider, mediaStyles } from './Media';
import NewsletterSignup from './NewsletterSignup';
import NewsletterSignupProvider from './NewsletterSignupProvider';

const TemplateWrapper = ({
  children,
  homepage = false,
  aboutpage = false,
  contactpage = false,
}) => {
  const { title, description } = useSiteMetadata();
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GATSBY_RECAPTCHA_KEY}
      container={{
        element: 'footer-recaptcha',
        parameters: {
          badge: 'inline',
          theme: 'dark',
        },
      }}
    >
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='stylesheet' href='https://use.typekit.net/xgw3alr.css' />
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
        <NewsletterSignupProvider>
          <GlobalStyles />
          <main>
            {(homepage || aboutpage || contactpage) && <NewsletterSignup />}
            <Navbar homepage={homepage} />
            {children}
            <Footer />
          </main>
        </NewsletterSignupProvider>
      </MediaContextProvider>
    </GoogleReCaptchaProvider>
  );
};

export default TemplateWrapper;
