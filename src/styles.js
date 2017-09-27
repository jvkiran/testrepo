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
  html, body, #root, #router-root {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Raleway');

  html {
    font-size: 15px;
    position: relative;
  }

  body {
    background: rgb(${colors.grey});
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
    color: rgb(${colors.white});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
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
      color: inherit;
      font-weight: 400;
  }

  div#backgroundWrapper {
    position: absolute;
    top: 0;
  }

  div#background {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(${colors.darkBackground});
    z-index: -2;
  }

  div#container {
    position: absolute;
    top: 10vh;
    bottom: 0;
    z-index: -1;
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
