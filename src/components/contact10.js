import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
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
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text16 thq-heading-3">
                    123 Main Street, City, Country
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text17 thq-body-large">
                    Headquarters
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text18 thq-heading-3">
                    +1-123-456-7890
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
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1641790017163-4c0de7df1841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Phone Icon',
  location1Description: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2: undefined,
  content1: undefined,
  location2Description: undefined,
  location1ImageAlt: 'Headquarters Image',
  heading1: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Contact10
