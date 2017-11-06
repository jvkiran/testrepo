export const colors = {
  white: '255, 255, 255',
  black: '20, 20, 20',
  dark: '48, 48, 48',
  grey: '65, 71, 78',
  lightGrey: '139, 152, 169',
  darkGrey: '23, 25, 26',
  darkPurple: '20, 17, 39',
  purple: '123, 17, 115',
  pink: '246, 56, 138',
  softPink: '218, 89, 119',
  red: '245, 70, 89',
  orange: '255, 72, 91'
};

export const fonts = {
  size: {
    root: '15px',
    base: '1rem',
    large: '1.25rem',
    small: '.75rem',
    h1: '3.4rem',
    h2: '2.7rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1.125rem'
  },
  family: {
    base: '"Sharp Sans Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    title: '"Sharp Sans Display", Helvetica, Arial, sans-serif',
    button: '"Sharp Sans Bold", Helvetica, Arial, sans-serif',
    quote: 'Courier New, serif'
  },
  lineHeight: {
    base: '1.65',
    title: '1.25'
  },
  fontWeight: {
    base: '500',
    title: '600'
  }
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const layout = {
  pageFrame: '.75rem',
  maxWidth: {
    wide: '80rem',
    base: '60rem',
    small: '40rem',
    narrow: '25rem'
  }
};

export const responsive = {
  smHeight: {
    min: 'min-height: 599px',
    max: 'max-height: 600px'
  },
  xs: {
    min: 'min-width: 419px',
    max: 'max-width: 420px'
  },
  sm: {
    min: 'min-width: 649px',
    max: 'max-width: 650px'
  },
  md: {
    min: 'min-width: 799px',
    max: 'max-width: 800px'
  },
  lg: {
    min: 'min-width: 1023px',
    max: 'max-width: 1024px'
  }
};

export const globalStyles = `
  @font-face {
    font-family: 'Sharp Sans Display';
    src: url('../fonts/SharpSansDispNo1-Bold.woff2') format('woff2'),
         url('../fonts/SharpSansDispNo1-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Sharp Sans Medium';
    src: url('../fonts/SharpSans-Medium.woff2') format('woff2'),
         url('../fonts/SharpSans-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Sharp Sans Bold';
    src: url('../fonts/SharpSans-Bold.woff2') format('woff2'),
         url('../fonts/SharpSans-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body, #root, #router-root {
    margin: 0;
    padding: 0;
  }

  #root {
    overflow-x: hidden;
  }

  html {
    font-size: ${fonts.size.root};
  }

  body {
    background: rgb(${colors.white});
    font-family: ${fonts.family.base};
    color: rgb(${colors.dark});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${fonts.size.base};
    line-height: ${fonts.lineHeight.base};
    font-weight: ${fonts.fontWeight.base};
    position: relative;
  }

  @media screen and (${responsive.sm.min}) {
    body {
      padding: ${layout.pageFrame};
      padding-bottom: 0;
      padding-top: ${layout.pageFrame};

      &:before {
        content: '';
        display: block;
        position: fixed;
        left: 0; right: 0; top: 0;
        background: rgb(${colors.white});
        height: ${layout.pageFrame};
        z-index: 10;
      }
    }
  }

  button {
    border-style: none;
    line-height: 1;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: rgb(${colors.softPink});
    transition: ${transitions.short};
  }

  a:hover,
  a:focus {
    text-decoration: none;
    transform: translate3d(0, -0.05rem, 0);
  }

  a:active {
    text-decoration: none;
    transform: none;
    transition: none;
  }

  strong {
    font-family: "Sharp Sans Bold";
  }

  h1, h2, h3, h4, h5 {
      font-family: ${fonts.family.title};
      color: rgb(${colors.black});
      line-height: ${fonts.lineHeight.title};
      font-weight: ${fonts.fontWeight.title};
  }

  h1 {
    font-size: ${fonts.size.h1}
  }

  h2 {
    font-size: ${fonts.size.h2}
  }

  h3 {
    font-size: ${fonts.size.h3}
  }

  h4 {
    font-size: ${fonts.size.h4}
  }

  h5 {
    font-size: ${fonts.size.h5}
  }

  svg,
  img,
  figure,
  iframe {
    max-width: 100%;
    height: auto;
  }

  .ReactModal__Body--open {
      overflow: hidden !important;
  }
`;
