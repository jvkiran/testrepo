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
  
  * {
    box-sizing: border-box;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  html {
    font-size: 16px;
    position: relative;
  }

  body {
    background: rgb(${colors.black});
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
    color: rgb(${colors.white});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    line-height: 1.5;
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
`;
