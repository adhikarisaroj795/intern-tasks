import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-banner">
        <div className="overlay-about-us"></div>
        <div className="container">
          <div className="about-us-heading">
            <h1 className="about-h1">CONTACT</h1>
          </div>
        </div>
      </div>
      <section className="contact-get-touch-sec">
        <div className="container flex sp-btwn">
          <div className="contact-touch-holder pd-up-down">
            <div className="get-in-touch-area ">
              <h1>GET IN TOUCH</h1>
              <p>
                Our sales team is available and ready to assist you with any{" "}
                <br />
                questions you may have. Don’t hesitate to reach out to us.
              </p>
            </div>

            <div className="contact-w-logo">
              <div className="contact-logo-solo">
                <div className="con-logo">
                  <i className="bx bxs-envelope"></i>
                </div>
                <div className="contact-log-details">
                  <p>
                    <b>Office</b>: (+65) 6969 4431 <br />
                    <b>WhatsApp </b>: (+65) 8774 3624 <br />
                    <b>Email </b>: contact@monsterbuilder.ai
                  </p>
                </div>
              </div>
              <div className="contact-logo-solo">
                <div className="con-logo">
                  <i className="bx bxs-time"></i>
                </div>
                <div className="contact-log-details">
                  <p>Mon - Fri: 8.30am - 6pm (GMT+8)</p>
                </div>
              </div>
              <div className="contact-logo-solo">
                <div className="con-logo">
                  <i className="bx bxs-envelope"></i>
                </div>
                <div className="contact-log-details-pore">
                  <p>Singapore Headquarters</p>
                  <p>
                    <b>Address</b>: 15 Little Road, #04-02 Singapore 536988
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form contact-contact-form m-t-20">
            <div className="get-a-quote-area faq-area">
              <form>
                <div className="flex row-holder">
                  <div className="first-form-row">
                    <div className="first-input">
                      <label className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
                        </svg>
                      </label>
                      <input type="text" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="first-form-row">
                    <div className="first-input">
                      <label className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z" />
                        </svg>
                      </label>
                      <input type="text" placeholder="Email " />
                    </div>
                  </div>
                </div>
                <div className="flex row-holder">
                  <div className="first-form-row">
                    <div className="first-input">
                      <label className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>
                      </label>
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="first-form-row">
                    <div className="first-input">
                      <label className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="m51.7 295.1 31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7 15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4L325 59.4C303.4 52.1 280.2 48 256 48 141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zm106.7-214.4c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l16-32c4-7.9.7-17.5-7.2-21.5z" />
                        </svg>
                      </label>
                      <input type="text" placeholder="Country" />
                    </div>
                  </div>
                </div>
                <div className="drawing-files">
                  <label>Drawings</label>
                  <input type="file" />
                </div>
                <div className="text-area first-input">
                  <label className="svg-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="If you want us to provide a quotation, please send us 2D and 3d (.step) drawings.  We need the following information: 1. Material 2. Quantity 3. Finishing if any"
                  ></textarea>

                  <span className="form-btn">Send</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="our-partner">
        <div className="container">
          <div className="our-partner-wrapper">
            <span>Our Partner</span>

            <div className="our-partner-details">
              <div className="our-partner-img">
                <img src="images/supertomato.png" alt="" />
              </div>
              <p>
                Pioneering Automation and Robotics solutions for diverse
                industries, enhancing efficiency, productivity, and innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
