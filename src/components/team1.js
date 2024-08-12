import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="team1-text56 thq-body-small">
                  Join Our Team Today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="team1-content10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="team1-text59 thq-heading-2">Meet Our Team</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="team1-text67 thq-body-large">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team1-content11">
          <div className="team1-content12">
            <div className="team1-row1">
              <div className="team1-container1">
                <div className="team1-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content13">
                    <div className="team1-title1">
                      <span>
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text44 thq-body-small">
                              John Doe
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text60 thq-body-small">
                              CEO &amp; Co-Founder
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text48 thq-body-small">
                            John is a visionary leader with a passion for AI
                            technology and sales training.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content14">
                    <div className="team1-title2">
                      <span>
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text46 thq-body-small">
                              Jane Smith
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text41 thq-body-small">
                              Head of Sales
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text49 thq-body-small">
                            Jane brings extensive experience in sales management
                            and training methodologies.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content15">
                    <div className="team1-title3">
                      <span>
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text40 thq-body-small">
                              Alex Johnson
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text66 thq-body-small">
                              AI Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text45 thq-body-small">
                            Alex is our AI expert, ensuring our voicebots
                            deliver top-notch performance.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content16">
                    <div className="team1-title4">
                      <span>
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text54 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text47 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text58 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-row2">
              <div className="team1-container3">
                <div className="team1-card5">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content17">
                    <div className="team1-title5">
                      <span>
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team1-text61 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team1-text55 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team1-text53 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card6">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content18">
                    <div className="team1-title6">
                      <span>
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team1-text73 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team1-text51 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team1-text62 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons6">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container4">
                <div className="team1-card7">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content19">
                    <div className="team1-title7">
                      <span>
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team1-text70 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member7Job ?? (
                          <Fragment>
                            <span className="team1-text57 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team1-text50 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons7">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card8">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image8 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content20">
                    <div className="team1-title8">
                      <span>
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team1-text72 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member8Job ?? (
                          <Fragment>
                            <span className="team1-text52 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team1-text71 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons8">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team1-content21">
            <div className="team1-content22">
              <h2>
                {props.heading2 ?? (
                  <Fragment>
                    <h2 className="team1-text43 thq-heading-2">
                      We’re hiring!
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.content3 ?? (
                  <Fragment>
                    <span className="team1-text63 thq-body-small">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team1-button thq-button-filled">
              <span>
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team1-text42 thq-body-small">
                      Open positions
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

Team1.defaultProps = {
  member6Src:
    'https://images.unsplash.com/photo-1695747002252-9ee66b5edf2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member3: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1531256456869-ce942a665e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member2Job: undefined,
  actionContent: undefined,
  member8Alt: 'Member Alt',
  heading2: undefined,
  member1: undefined,
  member3Content: undefined,
  member2: undefined,
  member4Job: undefined,
  member5Alt: 'Member Alt',
  member7Alt: 'Member Alt',
  member1Content: undefined,
  member1Alt: 'Image of John Doe, CEO & Co-Founder',
  member2Content: undefined,
  member7Content: undefined,
  member6Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1495462911434-be47104d70fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Job: undefined,
  member5Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1616436051317-c4373ce142e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Alt: 'Image of Alex Johnson, AI Specialist',
  member4: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1522091759069-9fe8e6826b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Src:
    'https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member5Job: undefined,
  content1: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1577975819014-2d6f1e721e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member7Job: undefined,
  member6Alt: 'Member Alt',
  member4Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1636041246170-9278569b9c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  member1Job: undefined,
  member2Alt: 'Image of Jane Smith, Head of Sales',
  member5: undefined,
  member6Content: undefined,
  member4Alt: 'Member Alt',
  content3: undefined,
  member3Job: undefined,
  content2: undefined,
  member7: undefined,
  member8Content: undefined,
  member8: undefined,
  member6: undefined,
}

Team1.propTypes = {
  member6Src: PropTypes.string,
  member3: PropTypes.element,
  member5Src: PropTypes.string,
  member2Job: PropTypes.element,
  actionContent: PropTypes.element,
  member8Alt: PropTypes.string,
  heading2: PropTypes.element,
  member1: PropTypes.element,
  member3Content: PropTypes.element,
  member2: PropTypes.element,
  member4Job: PropTypes.element,
  member5Alt: PropTypes.string,
  member7Alt: PropTypes.string,
  member1Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member2Content: PropTypes.element,
  member7Content: PropTypes.element,
  member6Job: PropTypes.element,
  member2Src: PropTypes.string,
  member8Job: PropTypes.element,
  member5Content: PropTypes.element,
  member3Src: PropTypes.string,
  member3Alt: PropTypes.string,
  member4: PropTypes.element,
  member1Src: PropTypes.string,
  member8Src: PropTypes.string,
  member5Job: PropTypes.element,
  content1: PropTypes.element,
  member4Src: PropTypes.string,
  member7Job: PropTypes.element,
  member6Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member7Src: PropTypes.string,
  heading1: PropTypes.element,
  member1Job: PropTypes.element,
  member2Alt: PropTypes.string,
  member5: PropTypes.element,
  member6Content: PropTypes.element,
  member4Alt: PropTypes.string,
  content3: PropTypes.element,
  member3Job: PropTypes.element,
  content2: PropTypes.element,
  member7: PropTypes.element,
  member8Content: PropTypes.element,
  member8: PropTypes.element,
  member6: PropTypes.element,
}

export default Team1
