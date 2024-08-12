import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact7-text20 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact7-text18 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact7-text19 thq-heading-3">Email</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact7-text21 thq-body-large">
                    Drop us an email at contact@voicebotsales.com and we&apos;ll
                    get back to you as soon as possible.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
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
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact7-text17 thq-heading-3">Phone</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact7-text16 thq-body-large">
                    Give us a call at +1-123-456-7890 during business hours for
                    immediate assistance.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
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

Contact7.defaultProps = {
  location2Description: undefined,
  location2: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1718154621913-2569c737cc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTE4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  location1: undefined,
  heading1: undefined,
  location1Description: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1618169480981-ddb08182cfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTE4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImgAlt: 'Email Icon',
  location2ImgAlt: 'Phone Icon',
}

Contact7.propTypes = {
  location2Description: PropTypes.element,
  location2: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  content1: PropTypes.element,
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location2ImgAlt: PropTypes.string,
}

export default Contact7
