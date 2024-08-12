import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div
      id={props.contact10Id}
      className="contact10-container1 thq-section-padding"
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text21 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text19 thq-body-large">
                    Have a question or want to learn more about our AI voicebots
                    for sales training? Reach out to us using the form below or
                    contact us directly via phone or email.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text16 thq-heading-3">
                    contact@arctan.ai
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text17 thq-body-large">Email</p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3"></div>
          </div>
          <div className="contact10-container4">
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text18 thq-heading-3">
                    +91-90459-00495
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                    Phone Support
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location1Description: undefined,
  location2: undefined,
  content1: undefined,
  location2Description: undefined,
  heading1: undefined,
  contact10Id: '',
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  heading1: PropTypes.element,
  contact10Id: PropTypes.string,
}

export default Contact10
