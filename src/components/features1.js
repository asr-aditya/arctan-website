import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span>
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text18 thq-body-small">
                    Enhance Your Sales Team Performance
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features1-text21 thq-heading-2">
                    Key Features
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text16 thq-body-small">
                  Discover the powerful features that our AI voicebots offer for
                  sales training:
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features1-text14 thq-heading-3">
                        AI-Powered Insights
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text15 thq-body-small">
                        Get actionable insights based on interactions with
                        simulated client personas.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features1-text13 thq-heading-3">
                        Conversion Rate Optimization
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text23 thq-body-small">
                        Improve conversion rates by practicing sales techniques
                        with AI voicebots.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features1-text20 thq-heading-3">
                        Flexible Pricing Plans
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text17 thq-body-small">
                        Choose from different pricing plans to suit your sales
                        training needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text19 thq-body-small">
                    Simulated Client Personas
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span>
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text22 thq-body-small">
                    Customizable Voicebots
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2Title: undefined,
  feature3ImageAlt: 'Flexible Pricing Plans Image',
  feature1Title: undefined,
  feature1Description: undefined,
  sectionDescription: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1689775884478-9ed19b79d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  slogan: undefined,
  mainAction: undefined,
  feature3Title: undefined,
  sectionTitle: undefined,
  secondaryAction: undefined,
  feature2ImageAlt: 'Conversion Rate Optimization Image',
  feature2Description: undefined,
  feature1ImageAlt: 'AI-Powered Insights Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  slogan: PropTypes.element,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features1
