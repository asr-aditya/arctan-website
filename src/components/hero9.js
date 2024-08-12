import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero9-text6 thq-heading-1">Default value</h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero9-text8 thq-body-large">Default value</p>
              </Fragment>
            )}
          </p>
          <div className="hero9-actions">
            <button className="hero9-button1 thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero9-text5 thq-body-small">
                      Default value
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="hero9-button2 thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero9-text7 thq-body-small">
                      Default value
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  action1: undefined,
  heading1: undefined,
  action2: undefined,
  content1: undefined,
}

Hero9.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero9
