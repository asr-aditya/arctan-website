import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar21 from '../components/navbar21'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Defensive Left Zebra</title>
        <meta property="og:title" content="Contact - Defensive Left Zebra" />
      </Helmet>
      <Navbar21
        link1={
          <Fragment>
            <span className="contact-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11 thq-link thq-body-small">
              Features
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12 thq-link thq-body-small">
              Pricing
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13 thq-link thq-body-small">
              About Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text14 thq-link thq-body-small">
              Contact
            </span>
          </Fragment>
        }
      ></Navbar21>
      <ContactForm3
        action={
          <Fragment>
            <span className="contact-text15 thq-body-small">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text16 thq-body-small">
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
        content2={
          <Fragment>
            <span className="contact-text19 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="contact-text20 thq-heading-2">Contact us</h2>
          </Fragment>
        }
      ></ContactForm3>
      <Contact14
        link1={
          <Fragment>
            <span className="contact-text21 thq-body-small">
              Start new chat
            </span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="contact-text22 thq-body-small">
              info@voicebotsales.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text23 thq-body-small">
              +1-123-456-7890
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text24 thq-body-small">
              123 AI Voicebot Street, Tech City, USA
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="contact-text25 thq-body-large">
              Have questions or want to learn more about our AI voicebots for
              sales training? Reach out to us!
            </p>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="contact-text26 thq-body-large">
              Interested in seeing our AI voicebots in action? Schedule a demo
              with us today.
            </p>
          </Fragment>
        }
        content3={
          <Fragment>
            <p className="contact-text27 thq-body-large">
              Looking to customize the voicebots to fit your specific needs?
              Contact us for more information.
            </p>
          </Fragment>
        }
        content4={
          <Fragment>
            <p className="contact-text28 thq-body-large">
              Read what our clients have to say about the effectiveness of our
              AI voicebots in improving sales team performance.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h3 className="contact-text29 thq-heading-3">Contact Us</h3>
          </Fragment>
        }
        heading2={
          <Fragment>
            <h3 className="contact-text30 thq-heading-3">Schedule a Demo</h3>
          </Fragment>
        }
        heading3={
          <Fragment>
            <h3 className="contact-text31 thq-heading-3">
              Customization Options
            </h3>
          </Fragment>
        }
        heading4={
          <Fragment>
            <h3 className="contact-text32 thq-heading-3">Testimonials</h3>
          </Fragment>
        }
      ></Contact14>
      <Contact7
        content1={
          <Fragment>
            <p className="contact-text33 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="contact-text34 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="contact-text35 thq-heading-3">Email</h3>
          </Fragment>
        }
        location2={
          <Fragment>
            <h3 className="contact-text36 thq-heading-3">Phone</h3>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <p className="contact-text37 thq-body-large">
              Drop us an email at contact@voicebotsales.com and we&apos;ll get
              back to you as soon as possible.
            </p>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <p className="contact-text38 thq-body-large">
              Give us a call at +1-123-456-7890 during business hours for
              immediate assistance.
            </p>
          </Fragment>
        }
      ></Contact7>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text39 thq-body-small">Product</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text40 thq-body-small">Solutions</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text41 thq-body-small">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text42 thq-body-small">About Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text43 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text44 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text45 thq-body-small">
              Cookies Policy
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text46 thq-body-small">
              Privacy Policy
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
