import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text26 thq-body-small">
                  10-15% increase in conversion rates reported by users.
                </span>
              </Fragment>
            )}
          </span>
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="stats2-text28 thq-heading-2">Key Stats</h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content2 ?? (
              <Fragment>
                <p className="stats2-text29 thq-body-large">
                  AI voicebots mimic real client personas for effective
                  training.
                </p>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats2-text30 thq-heading-2">
                      Improved Conversion Rates
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text25 thq-body-small">
                      Users experience a significant boost in conversion rates.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="stats2-text23 thq-heading-2">
                      90% reported improvement in sales team performance.
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text31 thq-body-small">
                      Enhanced Sales Team Performance
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats2-text24 thq-heading-2">
                      Customizable Plans
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text27 thq-body-small">
                      Choose from different pricing plans to suit your needs.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2>
                {props.stat4 ?? (
                  <Fragment>
                    <h2 className="stats2-text22 thq-heading-2">
                      Schedule Demos
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text21 thq-body-small">
                      Book a demo to experience the AI voicebots in action.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat4Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1565010430817-d2ad7679d4ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'AI Voicebots for Sales Training',
  stat4: undefined,
  stat2: undefined,
  stat3: undefined,
  stat1Description: undefined,
  content1: undefined,
  stat3Description: undefined,
  heading1: undefined,
  content2: undefined,
  stat1: undefined,
  stat2Description: undefined,
}

Stats2.propTypes = {
  stat4Description: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  stat4: PropTypes.element,
  stat2: PropTypes.element,
  stat3: PropTypes.element,
  stat1Description: PropTypes.element,
  content1: PropTypes.element,
  stat3Description: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  stat1: PropTypes.element,
  stat2Description: PropTypes.element,
}

export default Stats2
