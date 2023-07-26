import React, { useState } from "react";
import ScramblingList from "./ScramblingList";
import "./Main.css";
import { useTranslation } from "react-i18next";

type MainProps = {
  startAnimate: boolean;
};

const Main = ({ startAnimate }: MainProps) => {
  const [currentState, setCurrentState] = useState<number>(0);
  const { t, i18n } = useTranslation();

  return (
    <main className="main">
      <div className="radial_container">
        <div
          id="main-section"
          className={`${startAnimate ? "animate-slide-up" : "video-init"}`}
        >
          <div id="vid2-container">
            <img
              className="Groupimg"
              src={require("../img/Group 2@2x.png")}
              alt=""
              height="250px"
            />
          </div>
        </div>

        {/* EXPLAINATION ABOUT */}
        <section id="commitment-line" className="commitment_flex">
          {/* commitment to dirupting */}
          <div id="commitment-heading" className="commit_half">
            <h2 className="text_uppercase commitmentkero">
              {t("commitment")}
              <br /> {t("commitment01")}
              <br />
              {t("commitment02")}.
              <img src={require("../img/comma.png")} alt="" />
            </h2>
          </div>
          {/* COMMITMENT TO DISRUPTING END */}

          {/* EXPLAINATION (WITH EVERY TECHNOLOGICAL) */}
          <div className="commit_half">
            <p className="inter">
              {t("commitmentText")}
              <span>{t("commitmentText01")}</span>
            </p>
          </div>
          {/* EXPLAINATION (WITH EVERY TECHNOLOGICAL) END */}

          {/* EXPLAINATION (BEGINNING WITH DEVELOPER TOOLS) */}
          <div className="commit_full">
            <p className="inter">{t("commitmentText2")}</p>
          </div>
          {/* EXPLAINATION (BEGINNING WITH DEVELOPER TOOLS) */}
        </section>
        <div className="wingImage">
          {/* <img className="Groupimg" src={require("../img/pngwing 1.png")} alt="" height="250px"     /> */}
          <h1>THE TWIN PILLARS OF AI:</h1>
          <p>Hightened Productivity and Unique Customer Experience</p>
          <h2>We will assist you in both</h2>
        </div>
        {/* EXPLAINATION ABOUT */}

        {/* SERVICE SECTION START */}
        <section className="service" id="service">
          {/* <div className="radial_circle2"></div> */}
          <div id="services-container">
            <h2 className="helvetica text_uppercase">{t("service_head")} </h2>
            <div className="services_flex_1">
              <img
                src={require("../img/service-1.png")}
                alt=""
                height="500rem"
              />
              <img
                src={require("../img/service-2.png")}
                alt=""
                height="500rem"
              />
              <img
                src={require("../img/service-3.png")}
                alt=""
                height="500rem"
              />
            </div>
          </div>
          <div className="service_flex_2">
            <img src={require("../img/fotor_2023-6-9_3_1_39 1.png")} alt=""   height="500rem"/>
            <div className="devTools_text helvetica">
                <div className="UnorderedList">
                  <h1>AI AND AGI SERVICES</h1>
                  <h2>Ensuring Ultra Data Performance by:</h2>
                  <li>Mastering Foundation Model Building</li>
                  <li>Seamless AI Integration Services</li>
                  <li>Creating Elite AI Workers</li>
                  <li>Unsurpassed by AI Deployment</li>
                  <li>Elevating AI Quality Assurance</li>
                </div>
            </div>
          </div>
        </section>
        {/* SERVICES SECTION END */}
        <section className="project_evolv_section">
          {/* <div className="radial_circle3"></div> */}
          {/* <ScramblingList /> */}
         
          
            <div className="OrderedList">
            <h1>CI/CD SERVICES</h1>
              <h2>Ensuring Deevelopment Perfection By:</h2>
              <li>Stremlining Development Pipelines</li>
              <li>Acceleration Reease Cycle</li>
              <li>Excelling in Automated Builds</li>
              <li>Mastering Configuration Management</li>
              <li>Optimizing Software Delieveries</li>
            </div>
     
         
            <img
              src={require("../img/programmer.png")}
              alt=""
              height="500rem"
            />
        
        </section>

        <section className="project_eveolv_2">
          {/* <div className="radial_circle4"></div> */}
          <div className="project_evolv2_left">
            <img src={require("../img/Group 44.png")} alt="" height="500rem" />
          </div>
          <div className="project_evolv2_right">
            <div className="UnorderedListDown">
            <h1>MUTUAL TESTING SERVICE</h1>
              <h2>Ensuring Software Reliabilty By:</h2>
              <li>Expertly Identifying Bugs</li>
              <li>Rigorious Functionalty Check</li>
              <li>Comprehensive Usabilty Test</li>
              <li>Precision In Performance Analysis</li>
              <li>User Experience Optimized</li>
            </div>
          </div>
        </section>
        {/* contract and consulting */}
        <section id="contract-n-consult">
          <div className="contract_bg">
            <h1 className="text_uppercase">
              let us be your Edge in innovation
            </h1>
            <h2 className="helvetica">Two reasons to contact us now:</h2>
            <p className="helvetica">
              in the fast-placed world of technology, every moment matters ,
              Don`t let the future passively shape you;make the decision to take
              acttion and actively shape your future. <br />
              At minimum , you`ll gain insights from our meeting to verify if
              your current company will deliever results and the right questions
              to ask to confirm this
            </p>

            <button className="consulting_btn helvetica text_uppercase">
              {t("connect_btn")}{" "}
            </button>
          </div>
        </section>
        {/* contract and consulting end */}
        <section className="workshop_events">
          {/* <div className="radial_circle5"></div> */}
          <h3 className="helvetica text_uppercase">{t("events_head")}</h3>
          <div className="workshop_flex">
            <div className="workshop_img">
              <img
                src={require("../img/workshop.png")}
                alt=""
                height="500rem"
              />
            </div>
            <div className="workshop_details">
              <div className="upperdiv">
                <h4>EVENTS</h4>
                <h5>Artificial intelliegence</h5>
                <p>Prepare Your Business For Success</p>
                <p>Every Tuesday At 8PM CST</p>
              </div>
              <div className="lowerdiv">
                <h4>WORKSHOPS</h4>
                <p>Quarterly online workshop for subscribers</p>
              </div>
              <div className="lowerTextDiv">
                <h2>MORE TO COME SOON</h2>
              </div>
              <div>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </section>
        <section className="employment" id="employement">
          <div className="radial_circle8"></div>
          <h2 className="text_uppercase">{t("employ")}</h2>
          <div className="employment_flex">
            <div
              className="employment_card empc-0"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head1")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">
                  <span>{t("qualifications1")}</span>
                  {t("quali_desc1")}
                </p>
              </div>
              <div className="job_type">
                <span>{t("jobType1")}</span>
                {t("jobDesc1")}
              </div>
              <div className="salary">
                <span>{t("salary1")}</span>
                {t("salDesc1")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_1">
                {t("apply_btn")}
              </button>
            </div>

            <div
              className="employment_card empc-1"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head2")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">
                  <span>{t("qualifications2")}</span>
                  {t("quali_desc2")}
                </p>

                <p className="qualification_details">
                  <span>{t("madit")} </span>
                  {t("madit01")}
                </p>
                <p className="qualification_details">
                  <span>{t("preff")} </span>
                  {t("preff01")}
                </p>
              </div>
              <div className="job_type">
                <span>{t("jobType2")}</span>
                {t("jobDesc2")}
              </div>
              <div className="salary">
                <span>{t("salary2")}</span>
                {t("salDesc2")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_2">
                {t("apply_btn")}
              </button>
            </div>
            <div
              className="employment_card empc-2"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head3")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">{t("quali_desc3")}</p>
              </div>
              <div className="job_type">
                <span>{t("jobType3")}</span>
                {t("jobDesc3")}
              </div>
              <div className="salary">
                <span>{t("salary3")}</span>
                {t("salDesc3")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_3">
                {t("apply_btn")}
              </button>
            </div>

            <div
              className="employment_card empc-2"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head3")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">{t("quali_desc3")}</p>
              </div>
              <div className="job_type">
                <span>{t("jobType3")}</span>
                {t("jobDesc3")}
              </div>
              <div className="salary">
                <span>{t("salary3")}</span>
                {t("salDesc3")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_3">
                {t("apply_btn")}
              </button>
            </div>

            <div
              className="employment_card empc-2"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head3")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">{t("quali_desc3")}</p>
              </div>
              <div className="job_type">
                <span>{t("jobType3")}</span>
                {t("jobDesc3")}
              </div>
              <div className="salary">
                <span>{t("salary3")}</span>
                {t("salDesc3")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_3">
                {t("apply_btn")}
              </button>
            </div>
          </div>
          <div className="slide_arrow">
            <span>
              <i
                className="fa-solid fa-chevron-left"
                onClick={() => {
                  if (currentState < 0) setCurrentState((c) => c + 1);
                }}
              ></i>
            </span>
            <span>
              <i
                className="fa-solid fa-chevron-right"
                onClick={() => {
                  if (currentState > -2) setCurrentState((c) => c - 1);
                }}
              ></i>
            </span>
          </div>
        </section>
        {/* /// investor form */}
        <section className="investors" id="investor">
          <h2 className="text_uppercase">{t("invest")}</h2>
          <p>{t("recevie_d")}</p>
          <form className="contact_form">
            <input
              type="text"
              name="name"
              placeholder={t("name") ? t("name") : ""}
            />
            <input
              type="text"
              name="phone"
              placeholder={t("phone") ? t("phone") : ""}
            />
            <input
              type="email"
              name="email"
              placeholder={t("email") ? t("name") : ""}
            />
            <textarea
              placeholder={t("msg") ? t("msg") : ""}
              rows={6}
              name="message"
            ></textarea>
            <button className="submit_btn text_uppercase" type="button">
              {t("submit_btn")}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Main;
