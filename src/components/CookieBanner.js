import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { CookieBannerUniversal, Cookies } from 'react-cookie-banner'
import ReactGA from 'react-ga'
import { StyledCookieBanner } from './CookieBanner.css'
import content from '../data/gdpr.json'
import { meta } from '../constants'

const cookies = new Cookies()

export default class CookieBanner extends PureComponent {
    state = {
        hide: false
    }

    componentDidMount() {
        // init Analytics if cookie is present
        cookies.get('accepts-cookies') === 'true' && this.initAnalytics()
    }

    initAnalytics = () => {
        ReactGA.initialize(meta.analytics, {
            debug: true,
            gaOptions: {
                anonymizeIp: true
            }
        })
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    onReject = () => {
        cookies.set('accepts-cookies', false)
        this.setState({ hide: true })
    }

    render() {
        // show nothing if cookie is present
        if (cookies.get('accepts-cookies')) {
            return null
        }

        return (
            !this.state.hide && (
                <CookieBannerUniversal
                    disableStyle
                    dismissOnScroll={false}
                    onAccept={this.initAnalytics}
                >
                    {onAccept => (
                        <StyledCookieBanner>
                            <p>
                                {content.cookies.text}
                                <Link to="/privacy/"> Read Privacy Policy</Link>
                            </p>
                            <p>
                                <button onClick={onAccept}>Accept</button>
                                <button onClick={this.onReject}>Reject</button>
                            </p>
                        </StyledCookieBanner>
                    )}
                </CookieBannerUniversal>
            )
        )
    }
}
