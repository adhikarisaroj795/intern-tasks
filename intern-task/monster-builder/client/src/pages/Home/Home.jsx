import React from "react";
import "./Home.css";
import StarGoogle from "../../components/star-excellent/StarGoogle";

const Home = () => {
  return (
    <>
      <section>
        <div className="hero-banner-img">
          {/* <div className="over-lay"></div> */}
          <div className="container">
            <div className="hero-banner-details">
              <h1 className="h1-heading">
                MONSTER BUILDER: TRUSTED METAL FARBICATION AND MACHINING COMPANY
              </h1>

              <p className="banner-p">
                <strong>
                  A leading stainless steel manufacturer in Singapore, Monster
                  Builder is your solution for CNC machining, 3D printing, and
                  sheet metal fabrication services. Competitive pricing. Fast
                  leadt ime. International shipping. //{" "}
                </strong>
              </p>

              <div className="btn">
                <span className="gbl-btn">Get a Quote</span>
              </div>

              <div className="tuv-img">
                <img src="images/hero-tuv.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StarGoogle />

      <section className="mt-10 who-monster-section">
        <div className="container">
          <div className="who-ismonster flex">
            <div className="monster-img">
              <img src="images/city.jpg" alt="" />
            </div>
            <div className="monst-descrip">
              <div className="monster-title">
                <h2 className="h2-heading after-line">
                  Who is monster builder
                </h2>
              </div>
              <p>
                We are a Singapore-based premier provider of sheet metal
                fabrication, CNC machining, 3D printing and rapid prototyping
                services serving <strong>clients globally.</strong>
                <br />
                <br />
                Our average steel fabrication services lead-time is{" "}
                <strong>
                  <u>8 calendar days.</u>
                </strong>
                <br />
                <br />A one-stop solution for businesses looking to bring their
                ideas to life. Our state-of-the-art equipment and skilled team
                ensure that your projects are completed to the highest
                standards. We are dedicated to providing quick turnaround times
                and competitive pricing.
                <br />
                <br />
                We take pride in providing innovative solutions to meet our
                clients’ specific needs. Our team of experts is dedicated to
                helping you achieve your goals by providing the highest level of
                expertise and quality in prototype metal fabrication, machining,
                printing and rapid prototyping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fabrication-prototyping-sec m-t-70">
        <div className="container">
          <div className="fab-prot-holder">
            <div className="fab-prot-title">
              <h2 className="h2-heading">FABRICATION AND PROTOTYPING</h2>
              <p>
                Expert prototype metal fabrication services including CNC
                machining, 3D printing, rapid prototyping, and sheet metal
                fabrication services. Our advanced equipment and skilled team
                provide precision and quality in all our projects.
              </p>
            </div>

            <div className="fab-prot-cards flex">
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot1.png" alt="" />
                </div>
                <p>
                  <a href="">CNC MACHINING</a>
                </p>
                <p className="fab-p-2">
                  Advanced CNC turning, milling, drilling and welding techniques
                </p>
              </div>
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot2.png" alt="" />
                </div>
                <p>
                  <a href="">SHEET METAL</a>
                </p>
                <p className="fab-p-2">
                  Large and small scale manufacturing utilizing advanced cutting
                  techniques
                </p>
              </div>
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot3.png" alt="" />
                </div>
                <p>
                  <a href="">3D PRINTING</a>
                </p>
                <p className="fab-p-2">
                  Efficient and budget-friendly approach for creating and
                  testing prototypes
                </p>
              </div>
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot6.png" alt="" />
                </div>
                <p>
                  <a href="">VACUUM CASTING</a>
                </p>
                <p className="fab-p-2">
                  High-detail casting method: accurate vacuum moulding of a
                  liquid substance
                </p>
              </div>
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot5.png" alt="" />
                </div>
                <p>
                  <a href="">STAMPING</a>
                </p>
                <p className="fab-p-2">
                  Pressing metal sheets to shape with dies, efficient mass
                  production method
                </p>
              </div>
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot4.png" alt="" />
                </div>
                <p>
                  <a href="">INJECTION MOLDING</a>
                </p>
                <p className="fab-p-2">
                  Forcing melted material into molds to craft precise,
                  mass-produced items
                </p>
              </div>
              <div className="fab-prot-card flex">
                <div className="fab-prot-img">
                  <img src="images/fab-prot7.png" alt="" />
                </div>
                <p>
                  <a href="">METAL CASTING</a>
                </p>
                <p className="fab-p-2">
                  Liquid metal molded to desired shape, cooled, and solidified
                  for objects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-monster">
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
                    xmlnsSvgjs="http://svgjs.com/svgjs"
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

      <section className="how-it-works">
        <div className="container">
          <div className="fab-prot-title whychoose-mon">
            <h2 className="h2-heading">HOW IT WORKS</h2>
            <p>
              As a trusted stainless steel manufacturer in Singapore with years
              of experience under our belt, we understand the importance of
              efficient and streamlined prototype development. With just a few
              easy steps, you can have your prototype up and running. Let us
              make rapid prototype development a breeze for you.
            </p>
          </div>

          <div className="three-col-choose">
            <div className="three-col-solo-why">
              <div className="solo-card-three-col-why">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512.001"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <path
                        d="M348.945 221.64v-96.894c0-2.773-1.28-5.336-3.093-7.363L237.219 3.309C235.19 1.176 232.309 0 229.429 0H57.196C25.398 0 0 25.93 0 57.73v325.684c0 31.8 25.398 57.305 57.195 57.305h135.953C218.863 483.402 265.605 512 318.852 512c80.886 0 146.941-65.734 146.941-146.727.11-70.75-50.688-129.867-116.848-143.632ZM240.102 37.458l72.882 76.723h-47.273c-14.086 0-25.61-11.63-25.61-25.715ZM57.195 419.375c-19.953 0-35.851-16.008-35.851-35.96V57.73c0-20.062 15.898-36.386 35.851-36.386h161.563v67.12c0 25.93 21.023 47.06 46.953 47.06h61.89v83.34c-3.199-.106-5.761-.427-8.535-.427-37.242 0-71.496 14.301-97.32 36.711H86.223c-5.871 0-10.672 4.801-10.672 10.668 0 5.872 4.8 10.672 10.672 10.672h115.675c-7.578 10.672-13.875 21.344-18.78 33.082H86.222c-5.871 0-10.672 4.801-10.672 10.672 0 5.867 4.8 10.672 10.672 10.672h89.957c-2.668 10.672-4.055 22.516-4.055 34.36 0 19.206 3.734 38.203 10.457 54.21H57.195Zm261.766 71.39c-69.149 0-125.387-56.238-125.387-125.386 0-69.149 56.13-125.387 125.387-125.387 69.254 0 125.383 56.238 125.383 125.387 0 69.148-56.235 125.387-125.383 125.387Zm0 0"
                        style={{
                          stroke: "none",
                          fillRule: "nonzero",
                          fillOpacity: 1,
                        }}
                        fill="#00102e"
                        data-original="#000000"
                        className=""
                      ></path>
                      <path
                        d="M86.223 223.027H194.32c5.871 0 10.672-4.804 10.672-10.672 0-5.87-4.8-10.671-10.672-10.671H86.223c-5.871 0-10.672 4.8-10.672 10.671 0 5.868 4.8 10.672 10.672 10.672ZM326.535 286.625c-2.027-2.133-4.8-3.414-7.789-3.414-2.988 0-5.762 1.281-7.789 3.414l-62.535 67.121c-4.055 4.27-3.734 11.098.535 15.047 4.27 4.055 11.203 3.734 15.258-.531l44.18-47.274v116.528c0 5.87 4.8 10.671 10.671 10.671 5.868 0 10.672-4.8 10.672-10.671V320.988l43.856 47.274c2.136 2.238 4.91 3.414 7.793 3.414 2.558 0 5.12-.961 7.254-2.883 4.27-4.055 4.59-10.777.535-15.047Zm0 0"
                        style={{
                          stroke: "none",
                          fillRule: "nonzero",
                          fillOpacity: 1,
                        }}
                        fill="#00102e"
                        data-original="#000000"
                        className=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="how-works-details">
                <p>
                  <span>Step One:</span>
                </p>
                <p>
                  WhatsApp or Email your drawings. Receive a quotation with 24
                  hours
                </p>
              </div>
            </div>
            <span className="box-icon">
              <i className="bx bx-right-arrow-alt"></i>
            </span>
            <div className="three-col-solo-why">
              <div className="solo-card-three-col-why">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 480 480"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M474.387 103.496a7.677 7.677 0 0 0-.41-2.055c-.086-.257-.153-.504-.262-.754a8.034 8.034 0 0 0-1.602-2.343l-96-96a7.872 7.872 0 0 0-2.351-1.602c-.239-.11-.48-.176-.727-.262a7.873 7.873 0 0 0-2.097-.417c-.137.027-.282-.063-.45-.063h-240c-22.078.027-39.972 17.918-40 40v58.879C35.492 123.133 0 177.57 0 237.679c0 60.11 35.492 114.548 90.488 138.801V440c.028 22.082 17.922 39.973 40 40h304c22.082-.027 39.977-17.918 40-40V104c0-.176-.086-.328-.101-.504zM447.176 96h-60.688a8 8 0 0 1-8-8V27.312zM16.168 237.68a135.82 135.82 0 0 1 136-136c4.547 0 9.059.222 13.512.656 61.86 6.113 111.644 53.496 120.808 114.977a137.334 137.334 0 0 1 1.672 20.367 134.904 134.904 0 0 1-20.87 72.382 135.395 135.395 0 0 1-42.794 42.778c-41.91 26.32-94.808 27.797-138.121 3.851-43.312-23.941-70.2-69.523-70.207-119.011zm228.914 120.175a173.013 173.013 0 0 0 3.246-2.558c3.95-3.18 7.73-6.559 11.336-10.121a150.363 150.363 0 0 0 10.121-11.328c.871-1.07 1.711-2.16 2.559-3.254.969-1.266 2.02-2.465 2.945-3.754l68.2 68.281a23.822 23.822 0 0 1 7.058 16.922 23.83 23.83 0 0 1-7.059 16.926c-9.445 9.129-24.425 9.129-33.87 0l-68.29-68.168c1.29-.938 2.496-1.977 3.754-2.946zM434.488 464h-304c-13.254 0-24-10.746-24-24v-57.273c.496.16 1.016.265 1.52.418 1.281.39 2.578.703 3.875 1.062 2.992.8 6.008 1.602 9.055 2.2 1.496.312 2.992.6 4.503.866 3.047.536 6.122.957 9.207 1.313 1.38.156 2.739.352 4.122.469 4.433.379 8.894.625 13.398.625a151 151 0 0 0 75.355-20.078l70.735 70.664a39.995 39.995 0 0 0 39.289 11.808 39.991 39.991 0 0 0 29.023-28.996 39.988 39.988 0 0 0-11.777-39.3L284.09 313.03a150.957 150.957 0 0 0 20.078-75.351c0-5.067-.242-10.094-.734-15.078a151.2 151.2 0 0 0-43.762-92.41A151.007 151.007 0 0 0 152.168 85.68c-4.504 0-8.965.25-13.398.625-1.383.12-2.754.312-4.13.472-3.077.344-6.136.782-9.183 1.313-1.52.265-3.035.555-4.543.87-3.008.626-5.992 1.36-8.953 2.177-1.328.36-2.656.68-4 1.078-.496.152-1 .258-1.496.418V40c0-13.254 10.746-24 24-24h232.023v72c0 13.254 10.746 24 24 24h72v328c0 13.254-10.742 24-24 24zm0 0"
                        fill="#00102E"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M330.488 56a8 8 0 0 0-8-8h-176a8 8 0 0 0 0 16h176a8 8 0 0 0 8-8zM418.488 192h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16zM418.488 240h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16zM426.488 296a8 8 0 0 0-8-8h-104a8 8 0 0 0 0 16h104a8 8 0 0 0 8-8zM426.488 344a8 8 0 0 0-8-8h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 8-8zM330.488 104a8 8 0 0 0-8-8h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 8-8zM426.488 152a8 8 0 0 0-8-8h-120a8 8 0 0 0 0 16h120a8 8 0 0 0 8-8zM122.488 200h56a8 8 0 0 0 0-16h-56a8 8 0 0 0 0 16zM218.488 240a8 8 0 0 0-8-8h-120a8 8 0 0 0 0 16h120a8 8 0 0 0 8-8zM178.488 280h-56a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16zm0 0"
                        fill="#00102E"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M209.113 343.2a117.32 117.32 0 0 0 46.672-45.27c.633-1.106 1.32-2.176 1.914-3.297.309-.578.551-1.176.848-1.754 1.215-2.336 2.398-4.672 3.445-7.063 1.051-2.39 1.875-4.664 2.73-7.015.247-.68.56-1.344.801-2.031 20.344-59.16-8.171-124.028-65.515-149.032-57.348-25.004-124.281-1.754-153.781 53.414a119.287 119.287 0 0 0-14.075 56.496c-.074 42.282 22.133 81.473 58.442 103.137 36.308 21.668 81.344 22.602 118.52 2.461zm-106.8-14.255A103.217 103.217 0 0 1 78.624 311.2 105.334 105.334 0 0 1 65.57 295.32a104.428 104.428 0 0 1-5.226-8.71c-24.078-45.465-11.32-101.704 30.02-132.325 41.34-30.62 98.855-26.433 135.327 9.852 32.301 32.605 39.567 82.465 17.918 122.933v.067a102.237 102.237 0 0 1-42.015 41.992 103.7 103.7 0 0 1-99.281-.152zM434.488 384a8 8 0 0 0-8 8v32a8 8 0 0 1-8 8h-32a8 8 0 0 0 0 16h32c13.258 0 24-10.746 24-24v-32a8 8 0 0 0-8-8zm0 0"
                        fill="#00102E"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>

              <div className="how-works-details">
                <p>
                  <span>Step Two:</span>
                </p>
                <p>
                  You will receive an invoice when the quotation is accepted,
                  which you may pay with a credit card or a bank transfer.
                </p>
              </div>
            </div>
            <span className="box-icon">
              <i className="bx bx-right-arrow-alt"></i>
            </span>
            <div className="three-col-solo-why">
              <div className="solo-card-three-col-why last-svg">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    width={512}
                    height={512}
                    className="last-svg"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          fill="#00102e"
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        />
                      </clipPath>
                    </defs>
                    <g
                      fill="none"
                      stroke="#00102e"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={20}
                      clipPath="url(#a)"
                      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                    >
                      <path
                        d="M152.059 10H19.132v51.538h132.927z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        d="M0 0c0-31.012-25.14-56.151-56.151-56.151-31.012 0-56.152 25.139-56.152 56.151 0 31.012 25.14 56.152 56.152 56.152C-25.14 56.152 0 31.012 0 0Z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(138.614 272.263)"
                      />
                      <path
                        d="M0 0h-132.927l27.255 167.709c9.755-8.209 22.345-13.134 36.077-13.134 14.339 0 27.42 5.373 37.345 14.222z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(152.06 61.536)"
                      />
                      <path
                        d="m0 0-134.788-158.647c-2.452 28.763-26.557 51.333-55.949 51.333-.278 0-.555 0-.832-.011L-43.796 39.339a34.101 34.101 0 0 1-.735-7.047c0-18.752 15.213-33.966 33.976-33.966C-6.866-1.674-3.326-1.087 0 0z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(273.201 435.729)"
                      />
                      <path
                        d="M0 0v-42.548h-148.274a33.733 33.733 0 0 1 4.968 17.686c0 9.819-4.169 18.668-10.832 24.862z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(439.93 492.883)"
                      />
                      <path
                        d="M0 0h-162.599l20.137 174.985h122.325z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(470.54 10)"
                      />
                      <path
                        d="M0 0h207.257"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(285.61 184.985)"
                      />
                      <path
                        d="M422.276 184.985h-66.074v65.651h66.074z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        d="M0 0v-69.537l20.807-44.145 19.786 44.145V0Z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(367.426 450.332)"
                      />
                      <path
                        d="M0 0v-34.648"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(388.232 336.65)"
                      />
                      <path
                        d="M0 0c0-18.763-15.21-33.973-33.973-33.973-18.763 0-33.973 15.21-33.973 33.973 0 18.763 15.21 33.973 33.973 33.973C-15.21 33.973 0 18.763 0 0Z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(296.619 468.027)"
                      />
                      <path
                        d="M0 0c0-11.493-9.317-20.811-20.811-20.811-11.493 0-20.81 9.318-20.81 20.811s9.317 20.811 20.81 20.811C-9.317 20.811 0 11.493 0 0Z"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(103.273 272.263)"
                      />
                      <path
                        d="M0 0v-58.095"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(83.148 216.111)"
                      />
                      <path
                        d="M0 0v0"
                        data-original="#000000"
                        style={{
                          strokeWidth: 20,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="translate(83.148 112.991)"
                      />
                    </g>
                  </svg>
                </span>
              </div>
              <div className="how-works-details">
                <p>
                  <span>Step Three:</span>
                </p>
                <p>
                  Once payment is done, we proceed with fabrication immediately.
                </p>
              </div>
            </div>
          </div>
          <div className="how-btn">
            <span className="gbl-btn">Get a Quote</span>
          </div>
        </div>
      </section>

      <section className="advance-fab-soln">
        <div className="container">
          <div className="whychoose-mon">
            <h2 className="h2-heading">ADVANCED FABRICATION SOLUTIONS</h2>
            <div className="fab-prot-title">
              <p>
                Our advanced steel fabrication services and solutions are a
                source of pride for us, as we use state-of-the-art equipment to
                manufacture precision parts and components of the highest
                quality for a range of industries, including Research and
                development, Automotive, Education, Aerospace, Medical, Robotics
                and Electronics.
              </p>
            </div>
          </div>
          <div className="advance-fab-album">
            <div className="adv-fab-col1">
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_1.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>AUTOMOBILE</p>
                </div>
              </div>
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_2.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>AEROSPACE</p>
                </div>
              </div>
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_3.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>MEDICAL</p>
                </div>
              </div>
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_4.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>SMART APPLIANCES</p>
                </div>
              </div>
            </div>
            <div className="adv-fab-col1">
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_5.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>INDUSTRIAL ROBOT</p>
                </div>
              </div>
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_6.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>SCHOOL LAB</p>
                </div>
              </div>
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_7.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>ELECTRONIC APPLIANCES</p>
                </div>
              </div>
              <div className="solo-adv-img-wrapper">
                <div className="adv-img">
                  <img
                    src="images/afs_8.jpg"
                    alt=""
                    className="grayscale-img"
                  />
                </div>
                <div className="adv-title">
                  <p>AUTOMATION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-client">
        <div className="container our-client-main">
          <h2 className="h2-heading-robo">Our client</h2>
          <div className="client-img-holder">
            <div className="client-our-img">
              <div className="client-img-1">
                <img src="images/ourclient1.png" alt="" />
              </div>
              <div className="client-img-2">
                <img src="images/ourclient2.png" alt="" />
              </div>
              <div className="client-img-3">
                <img src="images/ourclient3.png" alt="" />
              </div>
              <div className="client-img-4">
                <img src="images/ourclient4.jpg" alt="" />
              </div>
            </div>
            <div className="client-our-img">
              <div className="client-img-5">
                <img src="images/ourclient5.png" alt="" />
              </div>
              <div className="client-img-5">
                <img src="images/ourclient6.png" alt="" />
              </div>
              <div className="client-img-5">
                <img src="images/ourclient8.png" alt="" />
              </div>
              <div className="client-img-5">
                <img src="images/ourclient9.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
