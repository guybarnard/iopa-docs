import { useRouter } from 'next/router'
import { Footer } from './components/Footer'

const theme = {
  github: 'https://github.com/iopa-io/iopa-docs',
  projectLink: 'https://github.com/iopa-io/iopa',
  titleSuffix: ' | IOPA',
  search: true,
  unstable_flexsearch: false,
  unstable_staticImage: false,
  floatTOC: true,
  darkMode: true,
  font: false,
  banner: null,
  logo: <div className="logo" />,
  head: function Head({ title, meta }) {
    const router = useRouter()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/static/favicons/site.webmanifest"
          color="#5bbad5"
        />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://iopa.io${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`https://iopa.io${
            meta.ogImage ?? '/og-image.png'
          }`}
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="IOPA" />
      </>
    )
  },
  footerEditLink: null, // () => { return <a href="">Edit this page on GitHub</a> },
  footerText: () => {
    return <Footer />
  },
  nextThemes: {
    defaultTheme: 'light',
  },
}
export default theme
