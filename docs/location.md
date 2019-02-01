## User Location Detection

Site makes use of [Cloudflare's Geo IP header](https://support.cloudflare.com/hc/en-us/articles/200168236-What-does-Cloudflare-IP-Geolocation-do-) to detect a user's location based on their IP address.

That information is read out from the `loc` entry from this file injected by Cloudflare: [`http://oceanprotocol.com/cdn-cgi/trace`](http://oceanprotocol.com/cdn-cgi/trace). The 2-letter country code value of that read out is provided to the whole React app as a global state created with [React Context](https://reactjs.org/docs/context.html), available as `this.state.country` on the consumer side.

This allows to adapt all parts of the site based on that country value. To do that, wrap your component in a Consumer, e.g.:

```jsx
import React, { PureComponent } from 'react'
import { Consumer } from '../store/createContext'

export default class MyComponent extends PureComponent {
  render() {
    return (
      <Consumer>
        {({ country }) => (
          {country === 'US' ? <div>Hello US</div> : <div>Hello World</div>}
        )}
      </Consumer>
    )
  }
}
```
