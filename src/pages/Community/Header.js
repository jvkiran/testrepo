import React, { PureComponent } from 'react'
import axios from 'axios'
import SocialIcon from '../../components/SocialIcon'
import {
    StyledHeaderAddition,
    Engage,
    EngageButton,
    VividCommunity,
    CommunityNumber
} from './Header.css'
import { social, webtasks } from '../../constants'
import { actions, numberUnits } from '../../data/pages/community.json'
import { ReactComponent as Caret } from '../../assets/misc/caret.svg'

const arrSum = arr => arr.reduce((a, b) => a + b, 0)

class CommunityCounts extends PureComponent {
    // TODO: Replace hardcoded platform numbers with fetch responses
    state = {
        twitter: this.kFormatter(social.manualNumbers.twitter),
        telegram: this.kFormatter(social.manualNumbers.telegram),
        medium: '----',
        github: '---',
        bounties: '--'
    }

    axiosInstance = axios.create({
        method: 'get',
        timeout: 10000, // 10 sec.
        headers: {
            'Content-Type': 'application/json'
        }
    })

    signal = axios.CancelToken.source()

    componentDidMount() {
        this.fetchMediumNumber()
        this.fetchGitHubNumber()
        this.fetchBountiesNumber()
    }

    componentWillUnmount() {
        this.signal.cancel()
    }

    kFormatter(num) {
        return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
    }

    fetchMediumNumber = async () => {
        try {
            const response = await this.axiosInstance(
                `${webtasks.host}/medium/oceanprotocol/followers`,
                {
                    cancelToken: this.signal.token
                }
            )

            const medium = this.kFormatter(response.data.followers)
            this.setState({ medium })
        } catch (error) {
            console.log(error) // eslint-disable-line no-console
        }
    }

    fetchGitHubNumber = async () => {
        try {
            const response = await this.axiosInstance(webtasks.github, {
                cancelToken: this.signal.token
            })

            let numbers = []

            response.data.map(item => {
                if (item.stars) {
                    return numbers.push(item.stars)
                }
                return null
            })

            this.setState({ github: this.kFormatter(arrSum(numbers)) })
        } catch (error) {
            console.log(error) // eslint-disable-line no-console
        }
    }

    fetchBountiesNumber = async () => {
        try {
            const response = await this.axiosInstance(
                `${webtasks.host}/bounties`,
                {
                    cancelToken: this.signal.token
                }
            )

            const bounties = response.data.total
            this.setState({ bounties })
        } catch (error) {
            console.log(error) // eslint-disable-line no-console
        }
    }

    render() {
        return (
            <VividCommunity>
                {numberUnits.map(numberUnit => (
                    <li key={numberUnit.key}>
                        <a
                            href={
                                numberUnit.link
                                    ? numberUnit.link
                                    : social[numberUnit.key]
                            }
                            title={numberUnit.tooltip}
                        >
                            <CommunityNumber>
                                <SocialIcon
                                    icon={
                                        numberUnit.icon
                                            ? numberUnit.icon
                                            : numberUnit.key
                                    }
                                />
                                {this.state[numberUnit.key]}
                            </CommunityNumber>
                            <span>{numberUnit.title}</span>
                        </a>
                    </li>
                ))}
            </VividCommunity>
        )
    }
}

export default class Header extends PureComponent {
    render() {
        return (
            <StyledHeaderAddition>
                <Engage>
                    {actions.map(action => (
                        <li key={action.title}>
                            <EngageButton border white smooth to={action.link}>
                                <Caret />
                                {action.title}
                                <Caret />
                            </EngageButton>
                        </li>
                    ))}
                </Engage>
                <CommunityCounts />
            </StyledHeaderAddition>
        )
    }
}
