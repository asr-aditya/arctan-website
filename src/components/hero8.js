import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero8-text6 thq-heading-1">
                    Revolutionize Your Sales Training with AI Voicebots
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero8-text5 thq-body-large">
                    Enhance your sales team performance with AI voicebots
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text8 thq-body-small">
                        Explore Pricing Plans
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero8-text7 thq-body-small">
                        Schedule a demo
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  action2: undefined,
  action1: undefined,
  image1Alt: 'AI voicebot for sales training',
}

Hero8.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero8
