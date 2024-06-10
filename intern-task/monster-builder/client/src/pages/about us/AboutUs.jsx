import React from "react";
import "./aboutus.css";
import StarGoogle from "../../components/star-excellent/StarGoogle";
import faqs from "./Faq";
import "../Home/Home.css";
import Accordion from "../../components/Accordion/Accordion";

const AboutUs = () => {
  console.log(faqs);
  return (
    <>
      <div className="aboutus-banner">
        <div className="overlay-about-us"></div>
        <div className="container">
          <div className="about-us-heading">
            <h1 className="about-h1">ABOUT MONSTER BUILDER</h1>
          </div>
        </div>
      </div>

      <section className="commited-to-quality mtop-80px">
        <div className="container">
          <div className="commitedto-quality flex">
            <div className="commited-img">
              <img src="images/aboutusImg.jpg" alt="person" />
            </div>
            <div className="commited-img-details">
              <h3 className="sub-headng">WELCOME TO MONSTER BUILDER</h3>
              <h3 className="about-us-h3-heading">
                WE’RE COMMITTED TO QUALITY
              </h3>
              <p>
                At Monster Builder, we understand that quality is the foundation
                of any successful project. That’s why we are dedicated to
                delivering the highest level of quality in every aspect of our
                work, from the materials we use to the craftsmanship of our
                team. We take pride in our commitment to excellence and strive
                to exceed the expectations of our clients.
              </p>

              <div className="about-us-tick flex">
                <ul>
                  <li>
                    <span> High Quality Materials</span>
                  </li>
                  <li>
                    <span>High Quality Materials</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>High Quality Materials</span>
                  </li>
                  <li>
                    <span> High Quality Materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="slider">
        <StarGoogle />
      </div>
      <section className="transforming-concept">
        <div className="transforming-concept-holder">
          <p>Transforming Concepts into Reality</p>
          <p>
            WhatsApp us at <span>(+65) 87743624</span>, or e-mail us at{" "}
            <span> contact@monsterbuilder.ai</span>
          </p>
          <div className="transforming-concept-btn">
            <span className="gbl-btn">Get a Quote</span>
          </div>
        </div>
      </section>

      <section className="why-choose-monster pd-btm">
        <div className="container">
          <div className="fab-prot-title whychoose-mon">
            <h2 className="h2-heading">WHY CHOOSE MONSTER BUILDER</h2>
            <p>
              At Monster Builder, we understand the importance of time and
              efficiency in the manufacturing process. As such, we boast the
              ability to provide quick turnaround times and rapid prototyping
              services. You can trust that our team delivers top-notch products
              and services as well as innovative solutions in 3D printing, CNC
              machining, and sheet metal fabrication.
            </p>
            <p className="calender-fab">8 calendar days for fabrication</p>
          </div>

          <div className="three-col-choose">
            <div className="three-col-solo">
              <div className="solo-card-three-col">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 479 479.85"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <path
                        d="m293.773 195.352-72.097 68.097-34.602-35.597c-3.836-3.95-10.152-4.04-14.097-.204-3.95 3.84-4.04 10.153-.204 14.102l41.5 42.602a10.155 10.155 0 0 0 14.102.296l79.3-74.796a9.966 9.966 0 0 0 .4-14.102c-3.86-4.012-10.223-4.188-14.302-.398zm0 0"
                        fill="#00102e"
                        data-original="#000000"
                        className=""
                      />
                      <path
                        d="M240.273 90.55c-82.398 0-149.398 67-149.398 149.4 0 82.402 67 149.402 149.398 149.402 82.403 0 149.403-67 149.403-149.403 0-82.398-67-149.398-149.403-149.398zm0 278.802c-71.398 0-129.398-58.102-129.398-129.403s58-129.398 129.398-129.398c71.47 0 129.403 57.933 129.403 129.398s-57.934 129.403-129.403 129.403zm0 0"
                        fill="#00102e"
                        data-original="#000000"
                        className=""
                      />
                      <path
                        d="m445.875 184.95 3.3-59.302a9.977 9.977 0 0 0-5.5-9.5l-52.8-26.699-26.7-52.8a10.147 10.147 0 0 0-9.5-5.5l-59.402 3.203-49.5-32.704a9.995 9.995 0 0 0-11 0l-49.5 32.704-59.296-3.301a9.96 9.96 0 0 0-9.5 5.5l-26.704 52.8-52.796 26.7a10.133 10.133 0 0 0-5.5 9.5l3.296 59.3-32.699 49.5a9.995 9.995 0 0 0 0 11l32.602 49.598-3.301 59.301a9.97 9.97 0 0 0 5.5 9.5l52.8 26.7 26.7 52.8a10.133 10.133 0 0 0 9.5 5.5l59.3-3.3 49.5 32.698a9.737 9.737 0 0 0 11 0l49.5-32.699 59.302 3.301a9.98 9.98 0 0 0 9.5-5.5l26.699-52.8 52.8-26.7a10.143 10.143 0 0 0 5.5-9.5l-3.3-59.3 32.699-49.5a9.995 9.995 0 0 0 0-11zm-18.602 101.8a9.39 9.39 0 0 0-1.597 6.102l3.097 56.097-49.898 25.2a9.868 9.868 0 0 0-4.398 4.402l-25.204 49.898-56.097-3.097a10.924 10.924 0 0 0-6.102 1.597l-46.8 30.903-46.797-30.903a9.9 9.9 0 0 0-5.5-1.699h-.5l-56.102 3.102-25.2-49.903a9.849 9.849 0 0 0-4.402-4.398l-50-25.102 3.102-56.097c.078-2.149-.48-4.27-1.602-6.102l-30.898-46.8 30.898-46.802a9.36 9.36 0 0 0 1.602-6.097l-3.102-56.102 49.903-25.199a9.86 9.86 0 0 0 4.398-4.398l25.2-49.903 56.101 3.102c2.145.074 4.266-.48 6.102-1.602l46.796-30.898 46.801 30.898a9.376 9.376 0 0 0 6.102 1.602l56.097-3.102 25.204 49.903a9.86 9.86 0 0 0 4.398 4.398l49.898 25.2-3.097 56.1a10.952 10.952 0 0 0 1.597 6.098l30.903 46.801zm0 0"
                        fill="#00102e"
                        data-original="#000000"
                        className=""
                      />
                    </g>
                  </svg>
                </span>

                <span>QUALITY FABRICATION</span>
              </div>
            </div>
            <div className="three-col-solo">
              <div className="solo-card-three-col">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <path
                        d="M504 239.172c-.001-10.629-5.757-19.938-14.315-24.975a28.8 28.8 0 0 0 5.485-16.94c0-15.967-12.99-28.957-28.957-28.957H414a28.71 28.71 0 0 0-13.123 3.156c3.269-6.092 5.07-11.882 5.686-16.348.05-.362.075-.728.075-1.093v-34.114c0-33.492-27.251-60.74-60.747-60.74a8 8 0 0 0-8 8v4.984a204.093 204.093 0 0 0-39.882-14.965l-13.186-34.258a8 8 0 0 0-7.466-5.126h-62.309a8 8 0 0 0-7.466 5.127l-13.188 34.262a204.02 204.02 0 0 0-52.119 21.606L108.702 63.88a7.995 7.995 0 0 0-8.903 1.654l-44.061 44.059a8 8 0 0 0-1.655 8.904l14.914 33.579a204.09 204.09 0 0 0-21.606 52.114l-34.265 13.19A8 8 0 0 0 8 224.846v62.308a8 8 0 0 0 5.126 7.466l34.265 13.19a204.11 204.11 0 0 0 21.606 52.113l-14.914 33.578a7.999 7.999 0 0 0 1.654 8.903l44.059 44.061a8 8 0 0 0 8.904 1.655l33.567-14.908a204.064 204.064 0 0 0 52.129 21.609l13.186 34.257a8 8 0 0 0 7.466 5.126h62.309a8 8 0 0 0 7.466-5.126l13.189-34.266a204.087 204.087 0 0 0 52.114-21.606l33.579 14.914a8.002 8.002 0 0 0 8.904-1.654l44.059-44.059a8 8 0 0 0 1.654-8.904l-14.908-33.567a206.85 206.85 0 0 0 4.442-7.976h19.98c7.711 0 14.976-3.019 20.456-8.498 5.481-5.48 8.5-12.746 8.5-20.458a28.788 28.788 0 0 0-4.526-15.532c10.031-4.555 17.026-14.669 17.026-26.385a28.782 28.782 0 0 0-4.076-14.802c10.963-4.128 18.783-14.723 18.784-27.113zm-99.143-51.061c2.458-2.458 5.705-3.812 9.144-3.812H466.213c7.145 0 12.957 5.812 12.957 12.957s-5.812 12.957-12.958 12.957h-52.209c-7.146 0-12.958-5.812-12.958-12.957 0-3.438 1.353-6.686 3.812-9.145zM353.891 75.877c20.869 3.782 36.747 22.084 36.747 44.024v33.516c-.884 5.361-4.575 14.078-12.287 21.796a8 8 0 0 0-.941 10.175c6.446 9.411 8.623 18.176 6.655 26.794-3.764 16.484-22.129 28.578-29.851 33.013a8.001 8.001 0 0 0 7.969 13.875c4.385-2.519 9.971-6.117 15.522-10.753a29.098 29.098 0 0 0 12.824 15.831 28.813 28.813 0 0 0-5.485 16.94c.001 8.24 3.46 15.687 9.004 20.965-.17.162-.338.326-.504.492-5.481 5.481-8.5 12.747-8.499 20.458a28.684 28.684 0 0 0 4.207 15.008c-42.723 7.271-68.355 9.775-93.918-13.072l-.001-137.336c2.827-2.061 5.729-4.106 8.753-6.237 23.346-16.458 49.806-35.111 49.806-70.227V75.877zm-74.559 115.691.001 128.864h-39.832V191.568zm5.362-16h-53.193a8 8 0 0 0-8 8v144.864a8 8 0 0 0 8 8h52.693c6.405 5.798 12.826 10.27 19.379 13.648-17.2 10.56-36.782 16.084-57.37 16.084-60.745 0-110.164-49.419-110.164-110.163 0-60.745 49.419-110.165 110.164-110.165 20.556 0 40.215 5.576 57.469 16.177-2.882 2.097-15.617 11.082-18.978 13.555zm100.486 255.7-32.363-14.374a7.996 7.996 0 0 0-7.441.499 188.2 188.2 0 0 1-55.187 22.881 7.997 7.997 0 0 0-5.613 4.908l-12.712 33.022h-51.322l-12.707-33.014a7.996 7.996 0 0 0-5.614-4.908 188.225 188.225 0 0 1-55.201-22.884 8 8 0 0 0-7.441-.499l-32.352 14.368-36.29-36.292 14.374-32.362a8.002 8.002 0 0 0-.499-7.441 188.227 188.227 0 0 1-22.881-55.187 7.997 7.997 0 0 0-4.908-5.613L24 281.661v-51.322l33.021-12.711a7.999 7.999 0 0 0 4.908-5.613 188.25 188.25 0 0 1 22.881-55.188 8.002 8.002 0 0 0 .499-7.441l-14.374-32.363 36.292-36.29 32.358 14.371a7.993 7.993 0 0 0 7.442-.5 188.111 188.111 0 0 1 55.19-22.878 7.999 7.999 0 0 0 5.614-4.91l12.709-33.02h51.322l12.707 33.015a7.999 7.999 0 0 0 5.613 4.908 188.307 188.307 0 0 1 47.706 18.509v20.911c0 17.363-8.765 29.658-20.946 40.404-20.908-14.211-45.225-21.707-70.741-21.707-69.567 0-126.164 56.598-126.164 126.165 0 69.566 56.597 126.163 126.164 126.163 27.32 0 54.096-8.983 75.855-25.36 7.124 1.618 14.499 2.303 22.258 2.303 16.992 0 35.814-3.264 57.796-7.076l5.089-.88c.832.2 1.673.369 2.525.495a185.858 185.858 0 0 1-2.124 3.537 8.001 8.001 0 0 0-.5 7.442l14.368 32.352zm71.799-99.121c-2.459 2.459-5.706 3.812-9.145 3.812H414c-3.438 0-6.685-1.354-9.144-3.812-2.459-2.459-3.812-5.707-3.812-9.146 0-3.438 1.354-6.685 3.812-9.143 2.459-2.459 5.707-3.813 9.146-3.813H447.834c7.145 0 12.957 5.812 12.957 12.958.001 3.438-1.353 6.686-3.812 9.144zm3.356-38.101h-46.333c-7.145-.001-12.957-5.814-12.958-12.958.001-7.146 5.813-12.958 12.959-12.958h46.332c7.145 0 12.957 5.812 12.957 12.957s-5.813 12.958-12.957 12.959zm14.706-41.916h-69.867c-7.146 0-12.958-5.812-12.958-12.957 0-7.146 5.812-12.959 12.958-12.959h69.867c7.146 0 12.958 5.813 12.959 12.958-.001 7.145-5.813 12.958-12.959 12.958z"
                        fill="#00102e"
                        data-original="#000000"
                        className=""
                      ></path>
                    </g>
                  </svg>
                </span>

                <span>RAPID TURNAROUND</span>
              </div>
            </div>
            <div className="three-col-solo">
              <div className="solo-card-three-col">
                <span className="three-col-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 60 61"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                    className="svg-three-col"
                  >
                    <g>
                      <g transform="translate(-1)">
                        <path
                          d="M58 10V3a2 2 0 0 0-2-2H26a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3v5c0 .39-.4-.41 6.85 12a2 2 0 0 0 1.15.9V47a1 1 0 0 0 .45.83C40.71 50 40.59 50 41 50s.27 0 3.55-2.17A1 1 0 0 0 45 47V29.91a2 2 0 0 0 1.15-.9C53.39 16.6 53 17.39 53 17v-5h3a2 2 0 0 0 2-2zM43 36.46l-4 2.67v-2.59l4-2.67zm-4 5.08 4-2.67v2.59l-4 2.67zm4-10.08-4 2.67V30h4zM41 47.8l-2-1.3 4-2.63v2.59zM51 16H40a1 1 0 0 0 0 2h10.26l-5.83 10h-6.86l-5.83-10H35a1 1 0 0 0 0-2h-4v-4h20zm5-6H26V3h2v2a1 1 0 0 0 2 0V3h2v2a1 1 0 0 0 2 0V3h2v2a1 1 0 0 0 2 0V3h2v2a1 1 0 0 0 2 0V3h2v2a1 1 0 0 0 2 0V3h2v2a1 1 0 0 0 2 0V3h2v2a1 1 0 0 0 2 0V3h2z"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></path>
                        <path
                          d="M60 46h-8.5a3 3 0 0 0-2.69 1.79C47.59 50.35 40.6 53 31 53s-16.6-2.65-17.81-5.21A3 3 0 0 0 10.5 46H2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h58a1 1 0 0 0 1-1V47a1 1 0 0 0-1-1zm-1 13H3V48h7.5a1 1 0 0 1 .88.64C13.16 52.39 21.23 55 31 55s17.84-2.61 19.62-6.36a1 1 0 0 1 .88-.64H59z"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></path>
                        <path
                          d="M33.29 46.71a1.004 1.004 0 0 0 1.42-1.42l-8-8a1.004 1.004 0 1 0-1.42 1.42zM47.29 46.71a1 1 0 0 0 1.42 0l8-8a1.004 1.004 0 1 0-1.42-1.42l-8 8a1 1 0 0 0 0 1.42z"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></path>
                        <circle
                          cx="23"
                          cy="35"
                          r="1"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></circle>
                        <circle
                          cx="59"
                          cy="35"
                          r="1"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></circle>
                        <path
                          d="M34 40a1 1 0 0 0 .78-1.62l-4-5a1 1 0 1 0-1.56 1.24l4 5A1 1 0 0 0 34 40zM48 40a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0-.15-1.4 1 1 0 0 0-1.41.16l-4 5A1 1 0 0 0 48 40zM16.43 44.6a3 3 0 0 0 3.94-1.6 10.21 10.21 0 0 0-4.54-13.26 4.26 4.26 0 0 1-1.94-5.66 10.2 10.2 0 0 0-4.54-13.24 4.27 4.27 0 0 1-1.94-5.66A3 3 0 1 0 1.9 2.82a10.2 10.2 0 0 0 4.53 13.26 4.27 4.27 0 0 1 1.94 5.67A10.2 10.2 0 0 0 12.91 35a4.27 4.27 0 0 1 1.94 5.67 3 3 0 0 0 1.58 3.93zm-2.55-11.34a8.27 8.27 0 0 1-3.67-10.73 6.24 6.24 0 0 0-2.8-8.2A8.25 8.25 0 0 1 3.73 3.61a1 1 0 1 1 1.84.78 6.25 6.25 0 0 0 2.81 8.2 8.25 8.25 0 0 1 3.67 10.72 6.24 6.24 0 0 0 2.81 8.2 8.27 8.27 0 0 1 3.67 10.73 1.001 1.001 0 0 1-1.84-.79 6.23 6.23 0 0 0-2.81-8.19zM26.79 18.89a3.003 3.003 0 0 0-5.58 2.22c1 2.6.06 3.44.06 3.44a3 3 0 0 0 3.39 4.95c.21-.14 5-3.43 2.13-10.61zm-3.24 8.94a1 1 0 0 1-1.53-1.039 1 1 0 0 1 .45-.641c.37-.28 2.14-1.94.6-5.78a1 1 0 1 1 1.86-.74c2.27 5.68-1.22 8.1-1.38 8.2z"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></path>
                        <path
                          d="M7 35.67a3 3 0 0 0-5.63-1.11 3 3 0 0 0-.37 1.7c0 .24.6 6 8.28 7a3.017 3.017 0 0 0 .72-5.99c-2.75-.34-3-1.6-3-1.6zm3.67 4.69a1 1 0 0 1-1.12.88C3.46 40.5 3 36.27 3 36.08A1 1 0 0 1 3.91 35a1 1 0 0 1 1.09.94c.07.47.67 2.81 4.78 3.31a1 1 0 0 1 .87 1.11zM7 55H6a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM18 55h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2z"
                          fill="#00102e"
                          data-original="#000000"
                          className=""
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>

                <span>ADVANCED TECHNOLOGY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-robo">
        <div className="overlay-aboutus-robo"></div>
        <div className="about-us-robo-bg">
          <div className="container flex">
            <div className="about-us-robo-details">
              <h3 className="about-us-robo-h3">GETTING STARTED WITH</h3>
              <h3 className="about-us-title-h3">monster builder</h3>
              <div className="about-us-robo-p">
                <p>
                  Getting started with Monster Builder is easy. Whether you
                  prefer to WhatsApp us at <span>+65 8774 3624</span> , e-mail
                  us at
                  <span>
                    <strong> contact@monsterbuilder.ai </strong>
                  </span>
                  or use the contact form on our website, our team is ready to
                  help. With a typical lead time of just 8 calendar days, we can
                  accommodate both large and small orders.
                </p>
                <p>
                  We ship globally. To get the process moving today, simply talk
                  to one of our sales representatives to submit your CAD files.
                </p>
                <div className="about-us-tick flex mtop-25px">
                  <ul>
                    <li>
                      <span> High Quality Materials</span>
                    </li>
                    <li>
                      <span>High Quality Materials</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>High Quality Materials</span>
                    </li>
                    <li>
                      <span> High Quality Materials</span>
                    </li>
                  </ul>
                </div>
                <span className="gbl-btn mtop-25px">Get a Quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-get-quote">
        <div className="container form-faq-quote">
          <div className="faq-area">
            <h2>FAQ</h2>

            <div className="mt-20">
              <div className="accordion-sec">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    content={faq.content}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="get-a-quote-area faq-area">
            <h2>GET A QUOTE</h2>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="m51.7 295.1 31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7 15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4L325 59.4C303.4 52.1 280.2 48 256 48 141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zm106.7-214.4c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l16-32c4-7.9.7-17.5-7.2-21.5z" />
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

export default AboutUs;
