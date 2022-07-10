import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import site from '../site.json';

const { imgUrl, siteTitle } = site;

function HeadMeta(props) {
  const { title, description } = props;

  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={isHome ? 'website' : 'article'} />
      <meta
        property="og:title"
        content={title + (isHome ? '' : ` - ${siteTitle}`)}
      />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://cassfrances.com${pathname}`} />
      <meta
        property="og:image"
        content={`${imgUrl}/w_1200,h_630,c_fill,q_90/banner-lake.jpg`}
      />
      <meta property="og:locale" content="en_GB" />
      {!isHome && <meta property="og:site_name" content={siteTitle} />}
    </Head>
  );
}

HeadMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeadMeta;
