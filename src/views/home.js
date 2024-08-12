import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Hero9 from '../components/hero9'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AI powered sales training</title>
        <meta
          name="description"
          content="Provide your sales team with a risk-free environment to hone their skills without the fear of real-world repercussions."
        />
        <meta property="og:title" content="AI powered sales training" />
        <meta
          property="og:description"
          content="Provide your sales team with a risk-free environment to hone their skills without the fear of real-world repercussions."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6ce25b80-87a1-4c46-a83a-844afc4e465f/7a10780f-b87e-4b0b-8679-2bb9df0f1885?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">
              Default value
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">Product</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">
              Contact Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text14 thq-link thq-body-small">
              Default value
            </span>
          </Fragment>
        }
        link3Url="#Features24"
        link4Url="#Contact10"
        rootClassName="navbar2-root-class-name"
      ></Navbar2>
      <Hero9
        action1={
          <Fragment>
            <span className="home-text15 thq-body-small">Book Demo</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text16 thq-body-small">Know More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text17 thq-body-large">
              Provide your sales team with a risk-free environment to hone their
              skills without the fear of real-world repercussions.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text18 thq-heading-1">
              <span className="home-text19">
                AI-Driven Sales Team Training and Upskilling
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
          </Fragment>
        }
      ></Hero9>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <h2 className="home-text21 thq-heading-2">
              AI Voicebot Simulation
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text22 thq-heading-2">Persona Mimicking</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text23 thq-heading-2">Personalised Insights</h2>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzQ3NDEzOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text24 thq-body-small">
              Practice pitches in lifelike scenarios that mirror actual customer
              interactions
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text25 thq-body-small">
              Multiple client persona and sales situations to choose from,
              ensuring depth in learning
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text26 thq-body-small">
              Immediate evaluation, feedback and analytics to facilitate
              continuous improvement
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text27">Get started today</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text28 thq-body-large">
              Companies that invest in effective sales training see an average
              win rate increase of 11 percentage points compared to those with
              less effective training.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text29 thq-heading-2">
              Ready to revolutionize your sales training?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text30 thq-heading-2">AI Voicebot Training</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text31 thq-heading-2">Actionable Insights</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text32 thq-heading-2">
              Personalized Training Environment
            </h2>
          </Fragment>
        }
        rootClassName="features25-root-class-name"
        feature1ImgSrc="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjaGFydHN8ZW58MHx8fHwxNzIzNDYwMjEwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text33 thq-body-small">
              Train your sales representatives with AI voicebots that mimic the
              personas of your clientbase for realistic simulations.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text34 thq-body-small">
              Receive actionable insights from the AI voicebots to improve sales
              calls and increase conversion rates.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text35 thq-body-small">
              Create a personalized and stimulated training environment for your
              sales team with AI voicebots.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <h2 className="home-text36 thq-heading-2">Sign up for a demo</h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text37 thq-heading-2">
              Customize your voicebot
            </h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text38 thq-heading-2">Train your team</h2>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text39 thq-heading-2">
              Get actionable insights
            </h2>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text40 thq-body-small">
              Schedule a demo to see our AI voicebot in action and learn how it
              can revolutionize your sales training.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Tailor the AI voicebot to mimic the personas of your clientbase,
              providing a realistic training environment for your sales
              representatives.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Engage your sales team in interactive training sessions with the
              AI voicebot to practice real-life scenarios and improve their
              sales skills.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text43 thq-body-small">
              Get detailed analytics and insights from the AI voicebot to
              enhance your team&apos;s performance and increase conversion
              rates.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Using the AI voicebots has significantly improved our sales
              team&apos;s performance. The personalized training scenarios have
              been invaluable.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text45 thq-body-small">
              The AI voicebots have revolutionized how we train our sales reps.
              The insights provided have led to a noticeable increase in
              conversions.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text46 thq-body-small">
              I was skeptical at first, but the AI voicebots have exceeded my
              expectations. Our team is more confident and effective on calls
              now.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text47 thq-body-small">
              The AI voicebots have become an essential part of our sales
              training program. The ability to practice with different client
              personas is a game-changer.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text48 thq-body-small">
              See what our clients have to say about their experience using our
              AI voicebots for sales training.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text49 thq-heading-2">Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text50 thq-body-large">John Doe</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text51 thq-body-large">Jane Smith</strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text52 thq-body-large">
              Michael Johnson
            </strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text53 thq-body-large">Sarah Lee</strong>
          </Fragment>
        }
        rootClassName="testimonial17-root-class-name"
        author1Position={
          <Fragment>
            <span className="home-text54 thq-body-small">
              CEO, B2B SAAS Company in Europe
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text55 thq-body-small">
              Sales Manager, AI SAAS Company in US.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text56 thq-body-small">
              Director of Sales, DEF Corp
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text57 thq-body-small">
              VP of Sales Operations, GHI Industries
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <p className="home-text58 thq-body-large">
              Have a question or want to learn more about our AI voicebots for
              sales training? Reach out to us using the email below or contact
              us directly via phone.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text59 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="home-text60 thq-heading-3">contact@arctan.ai</h3>
          </Fragment>
        }
        location2={
          <Fragment>
            <h3 className="home-text61 thq-heading-3">+91-90459-00495</h3>
          </Fragment>
        }
        contact10Id="Contact10"
        location1Description={
          <Fragment>
            <p className="home-text62 thq-body-large">Email</p>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <p className="home-text63 thq-body-large">Phone Support</p>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text64 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text65 thq-body-small">Product</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text66 thq-body-small">Contact Us</span>
          </Fragment>
        }
        logoSrc="/j%20(1)2-1500h.png"
      ></Footer4>
    </div>
  )
}

export default Home
