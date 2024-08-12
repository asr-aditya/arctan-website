import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container1">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero1-text2 thq-heading-1">Default value</h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero1-text1 thq-body-large">Default value</p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="hero1-actions">
              <button className="thq-button-filled hero1-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero1-text4 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero1-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero1-text3 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="hero1-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero1-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  content1: undefined,
  heading1: undefined,
  action2: undefined,
  image1Alt: 'AI Voicebot in Action',
  image1Src:
    'https://images.unsplash.com/photo-1574803442176-70d4b465c920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
}

Hero1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
}

export default Hero1
