import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text8 thq-heading-1">
                  Revolutionize Your Sales Training with AI Voicebots
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text6 thq-body-large">
                  Train your sales representatives in a simulated environment
                  using AI voicebots that mimic your clientbase personas. Gain
                  actionable insights to enhance calls and boost conversions.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text7 thq-body-small">
                    Get Started
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5 thq-body-small">
                    Learn More
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image1Alt1}
              src={props.image1Src1}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt1}
              src={props.image3Src1}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt1}
              src={props.image6Src1}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="hero17-strip3 thq-animated-group-horizontal-reverse"></div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image3Alt: 'Hero Image',
  image3Src1:
    'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHNhbGVzJTIwY2FsbHxlbnwwfHx8fDE3MjM0NTk4MjN8MA&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1630673595834-170621fa0d28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1554774853-b415df9eeb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  action2: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1642054221092-08ffe77608cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt1: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  content1: undefined,
  image1Src1:
    'https://images.unsplash.com/photo-1574803442176-70d4b465c920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1574803442176-70d4b465c920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1590989740416-1ac405330be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src1:
    'https://images.unsplash.com/photo-1699602048455-70d1d397e0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  action1: undefined,
  image10Src:
    'https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt1: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1699602048455-70d1d397e0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image1Alt1: 'AI Voicebot in Action',
  image3Src:
    'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHNhbGVzJTIwY2FsbHxlbnwwfHx8fDE3MjM0NTk4MjN8MA&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ1OTAzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Hero Image',
  image1Alt: 'AI Voicebot in Action',
  heading1: undefined,
}

Hero17.propTypes = {
  image3Alt: PropTypes.string,
  image3Src1: PropTypes.string,
  image7Src: PropTypes.string,
  image5Src: PropTypes.string,
  image10Alt: PropTypes.string,
  action2: PropTypes.element,
  image2Src: PropTypes.string,
  image3Alt1: PropTypes.string,
  image9Src: PropTypes.string,
  image5Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Src1: PropTypes.string,
  image1Src: PropTypes.string,
  image8Src: PropTypes.string,
  image6Src1: PropTypes.string,
  image11Alt: PropTypes.string,
  action1: PropTypes.element,
  image10Src: PropTypes.string,
  image6Alt1: PropTypes.string,
  image6Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Alt1: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero17
