import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar22 from '../components/navbar22'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Defensive Left Zebra</title>
        <meta property="og:title" content="About - Defensive Left Zebra" />
      </Helmet>
      <Navbar22
        link1={
          <Fragment>
            <span className="about-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11 thq-link thq-body-small">
              Features
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12 thq-link thq-body-small">
              Training Plans
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13 thq-link thq-body-small">
              Customization
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text14 thq-link thq-body-small">
              Contact Us
            </span>
          </Fragment>
        }
      ></Navbar22>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text15 thq-body-small">
              Explore Pricing Plans
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text16 thq-body-small">Schedule a demo</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="about-text17 thq-body-large">
              Enhance your sales team performance with AI voicebots
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="about-text18 thq-heading-1">
              Revolutionize Your Sales Training with AI Voicebots
            </h1>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <h2 className="about-text19 thq-heading-2">
              Improved Conversion Rates
            </h2>
          </Fragment>
        }
        stat2={
          <Fragment>
            <h2 className="about-text20 thq-heading-2">
              90% reported improvement in sales team performance.
            </h2>
          </Fragment>
        }
        stat3={
          <Fragment>
            <h2 className="about-text21 thq-heading-2">Customizable Plans</h2>
          </Fragment>
        }
        stat4={
          <Fragment>
            <h2 className="about-text22 thq-heading-2">Schedule Demos</h2>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text23 thq-body-small">
              10-15% increase in conversion rates reported by users.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="about-text24 thq-body-large">
              AI voicebots mimic real client personas for effective training.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="about-text25 thq-heading-2">Key Stats</h2>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text26 thq-body-small">
              Users experience a significant boost in conversion rates.
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text27 thq-body-small">
              Enhanced Sales Team Performance
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text28 thq-body-small">
              Choose from different pricing plans to suit your needs.
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text29 thq-body-small">
              Book a demo to experience the AI voicebots in action.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <h2 className="about-text30 thq-heading-2">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </h2>
          </Fragment>
        }
      ></Logos1>
      <Features1
        slogan={
          <Fragment>
            <span className="about-text31 thq-body-small">
              Enhance Your Sales Team Performance
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="about-text32 thq-body-small">
              Simulated Client Personas
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <h2 className="about-text33 thq-heading-2">Key Features</h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h3 className="about-text34 thq-heading-3">AI-Powered Insights</h3>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h3 className="about-text35 thq-heading-3">
              Conversion Rate Optimization
            </h3>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h3 className="about-text36 thq-heading-3">
              Flexible Pricing Plans
            </h3>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text37 thq-body-small">
              Customizable Voicebots
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text38 thq-body-small">
              Discover the powerful features that our AI voicebots offer for
              sales training:
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text39 thq-body-small">
              Get actionable insights based on interactions with simulated
              client personas.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text40 thq-body-small">
              Improve conversion rates by practicing sales techniques with AI
              voicebots.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text41 thq-body-small">
              Choose from different pricing plans to suit your sales training
              needs.
            </span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member1={
          <Fragment>
            <span className="about-text42 thq-body-small">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text43 thq-body-small">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text44 thq-body-small">Alex Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text45 thq-body-small">Full name</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text46 thq-body-small">Full name</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text47 thq-body-small">Full name</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text48 thq-body-small">Full name</span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text49 thq-body-small">Full name</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text50 thq-body-small">
              Join Our Team Today!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="about-text51 thq-body-large">
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
        }
        content3={
          <Fragment>
            <span className="about-text54 thq-body-small">
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
        }
        heading1={
          <Fragment>
            <h2 className="about-text57 thq-heading-2">Meet Our Team</h2>
          </Fragment>
        }
        heading2={
          <Fragment>
            <h2 className="about-text58 thq-heading-2">We’re hiring!</h2>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text59 thq-body-small">
              CEO &amp; Co-Founder
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text60 thq-body-small">Head of Sales</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text61 thq-body-small">AI Specialist</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text62 thq-body-small">Job title</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text63 thq-body-small">Job title</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text64 thq-body-small">Job title</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text65 thq-body-small">Job title</span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text66 thq-body-small">Job title</span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text67 thq-body-small">Open positions</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text68 thq-body-small">
              John is a visionary leader with a passion for AI technology and
              sales training.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text69 thq-body-small">
              Jane brings extensive experience in sales management and training
              methodologies.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text70 thq-body-small">
              Alex is our AI expert, ensuring our voicebots deliver top-notch
              performance.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text71 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text72 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text73 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text74 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text75 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></Team1>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text76 thq-body-small">Product</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text77 thq-body-small">Solutions</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text78 thq-body-small">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text79 thq-body-small">About Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text80 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text81 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text82 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text83 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
