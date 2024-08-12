import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="steps2-text10 thq-heading-2">
              Why choose our training environment?
            </h2>
            <p className="steps2-text11 thq-body-large">
              <span>
                Imagine a world where you can identify and address skill gaps in
                your sales team before they affect your performance.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Our innovative platform empowers your sales force with
                data-driven insights that enhance training and coaching.
              </span>
              <br></br>
              <br></br>
              <span>
                Utilize gamification to make training enjoyable and motivating,
                ensuring higher engagement levels among your sales
                representatives.
              </span>
              <br></br>
            </p>
            <div className="steps2-actions">
              <button className="steps2-button thq-button-animated thq-button-filled">
                <span className="steps2-text20 thq-body-small">Book Demo</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text38 thq-heading-2">
                      Sign up for a demo
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text35 thq-body-small">
                      Schedule a demo to see our AI voicebot in action and learn
                      how it can revolutionize your sales training.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text39 thq-heading-2">
                      Customize your voicebot
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text37 thq-body-small">
                      Tailor the AI voicebot to mimic the personas of your
                      clientbase, providing a realistic training environment for
                      your sales representatives.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text26 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text34 thq-heading-2">
                      Train your team
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text36 thq-body-small">
                      Engage your sales team in interactive training sessions
                      with the AI voicebot to practice real-life scenarios and
                      improve their sales skills.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text29 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text33 thq-heading-2">
                      Get actionable insights
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text40 thq-body-small">
                      Get detailed analytics and insights from the AI voicebot
                      to enhance your team&apos;s performance and increase
                      conversion rates.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text32 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step3Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step2Title: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
