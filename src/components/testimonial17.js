import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text25 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text31 thq-body-small">
                  See what our clients have to say about their experience using
                  our AI voicebots for sales training.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28 thq-body-small">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text35 thq-body-small">
                        Using the AI voicebots has significantly improved our
                        sales team&apos;s performance. The personalized training
                        scenarios have been invaluable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text29 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            Sales Manager, XYZ Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text34 thq-body-small">
                        The AI voicebots have revolutionized how we train our
                        sales reps. The insights provided have led to a
                        noticeable increase in conversions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37 thq-body-small">
                            Director of Sales, DEF Corp
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text36 thq-body-small">
                        I was skeptical at first, but the AI voicebots have
                        exceeded my expectations. Our team is more confident and
                        effective on calls now.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text33 thq-body-large">
                            Sarah Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32 thq-body-small">
                            VP of Sales Operations, GHI Industries
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text27 thq-body-small">
                        The AI voicebots have become an essential part of our
                        sales training program. The ability to practice with
                        different client personas is a game-changer.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1542647528472-694d48ba60d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe, CEO of Company ABC',
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  author4Src:
    'https://images.unsplash.com/photo-1695747001843-bb860b0a712c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  review4: undefined,
  author2Alt: 'Image of Jane Smith, Sales Manager at XYZ Inc.',
  author3Alt: 'Image of Michael Johnson, Director of Sales at DEF Corp',
  author1Position: undefined,
  author4Alt: 'Image of Sarah Lee, VP of Sales Operations at GHI Industries',
  author2Src:
    'https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  author3Name: undefined,
  content1: undefined,
  author4Position: undefined,
  author4Name: undefined,
  review2: undefined,
  review1: undefined,
  review3: undefined,
  author3Position: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  author4Src: PropTypes.string,
  author1Name: PropTypes.element,
  review4: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Name: PropTypes.element,
  author3Name: PropTypes.element,
  content1: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  review2: PropTypes.element,
  review1: PropTypes.element,
  review3: PropTypes.element,
  author3Position: PropTypes.element,
}

export default Testimonial17
