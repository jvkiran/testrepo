export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0'
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
  html {
    font-size: 1vh;
    position: relative;
  }
  @media screen and (${responsive.sm.max}) {
    html {
      font-size: 1.2vh;
    }
  }
  @media screen and (max-height: 599px) {
    html {
      font-size: 8px;
    }
  }

  body {
    background: rgb(${colors.black});
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: rgb(${colors.white});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border-style: none;
    line-height: 1em;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  div#container {
    position: absolute;
    top: 0;
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

  * {
    box-sizing: border-box !important;
  }
`;
