export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  darkPurple: '20, 17, 39',
  fadedPurple: '42, 38, 59',
  lightPurple: '53, 49, 69',
  red: '245, 70, 89',
  pink: '232, 33, 119',
  orange: '255, 72, 91'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const responsive = {
  sm: {
    min: 'min-width: 649px',
    max: 'max-width: 640px'
  }
};

export const globalStyles = `
  html, body, #root, #router-root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
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
    background: rgb(${colors.darkPurple});
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

    &:hover,
    &:focus {
        text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5 {
      color: inherit;
      font-weight: 400;
  }

  div#container {
    position: absolute;
    top: 10vh;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
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
