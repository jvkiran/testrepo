export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '48, 48, 48',
  grey: '38, 41, 45',
  lightGrey: '53, 58, 64',
  darkGrey: '23, 25, 26',
  darkBackground: '18, 18, 18',
  darkPurple: '20, 17, 39',
  purple: '123, 17, 115',
  pink: '246, 56, 138',
  softPink: '218, 89, 119',
  red: '245, 70, 89',
  orange: '255, 72, 91'
};

export const fonts = {
  size: {
    root: '16px',
    base: '1rem',
    large: '1.25rem',
    small: '.85rem',
    h1: '3.2rem',
    h2: '2.7rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1.125rem'
  },
  family: {
    base: '-apple-system, sans-serif',
    title: '"Sharp Sans", sans-serif',
    button: '"Sharp Sans", sans-serif'
  },
  lineHeight: {
    base: '1.65',
    title: '1.25'
  },
  fontWeight: {
    base: '400',
    title: '600'
  }
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const responsive = {
  xs: {
    min: 'min-width: 419px',
    max: 'max-width: 420px'
  },
  sm: {
    min: 'min-width: 649px',
    max: 'max-width: 640px'
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
    font-family: 'Sharp Sans';
    src: url('../fonts/SharpSansDispNo1-Bold.otf');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'GT Pressura Mono';
    src: url('../fonts/GT-Pressura-Mono-Bold.otf');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'GT Pressura Mono';
    src: url('../fonts/GT-Pressura-Mono-Regular.otf');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root, #router-root {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    margin: 20px;
  }

  html {
    font-size: ${fonts.size.root};
    position: relative;
  }

  body {
    background: rgb(${colors.white});
    font-family: ${fonts.family.base};
    color: rgb(${colors.grey});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${fonts.size.base};
    line-height: ${fonts.lineHeight.base};
    font-weight: ${fonts.fontWeight.base};
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
    color: inherit;
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


  h1, h2, h3, h4, h5 {
      font-family: ${fonts.family.title};
      color: inherit;
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

  div#backgroundWrapper {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    margin: 20px;
    left: 0;
  }

  div#background {
    position: relative;
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    background: rgb(${colors.darkBackground});
  }

  div#container {
    position: absolute;
    top: 10vh;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  @media screen and (${responsive.sm.max}) {
    div#container {
      display: none;
    }
  }
  @media screen and (max-height: 700px) {
    div#container {
      &:before {
        content: '';
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background: linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%);
      }
    }
  }

  .dimmed {
      opacity: .5;
  }
`;
