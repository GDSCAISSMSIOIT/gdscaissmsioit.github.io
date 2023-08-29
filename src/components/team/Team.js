import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Team_Svg from "../../images/team/Team.gif";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";

import Web from "./web";
import Cloud from "./cloud";
import ML from "./ml";
import Android from "./android";
import Management from "./management";
import Design from "./design";

import TeamCard from "./TeamCard";

import { Helmet } from "react-helmet";

const Team = () => {
  const { id } = useParams();

  useEffect(() => {
    const imgFluids = document.getElementsByClassName("img-fluid");
    Array.from(imgFluids).forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.classList.remove("out");
        img.classList.add("over");
      });

      img.addEventListener("mouseout", () => {
        img.classList.remove("over");
        img.classList.add("out");
      });
    });

    if (id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  const WebTeam = Web.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const CloudTeam = Cloud.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));
  const DesignTeam = Design.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const MLTeam = ML.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const AndroidTeam = Android.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const ManagementTeam = Management.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const [teams, setTeams] = useState(
    window.screen.width < 800
      ? {
          web: <Slider {...settings}>{WebTeam}</Slider>,
          cloud: <Slider {...settings}>{CloudTeam}</Slider>,
          design: <Slider {...settings}>{DesignTeam}</Slider>,
          ml: <Slider {...settings}>{MLTeam}</Slider>,
          android: <Slider {...settings}>{AndroidTeam}</Slider>,
          management: <Slider {...settings}>{ManagementTeam}</Slider>,
        }
      : {
          web: WebTeam,
          cloud: CloudTeam,
          design: DesignTeam,
          ml: MLTeam,
          android: AndroidTeam,
          management: ManagementTeam,
        }
  );

  const responsive = (media) => {
    if (media.matches) {
      setTeams({
        web: <Slider {...settings}>{WebTeam}</Slider>,
        cloud: <Slider {...settings}>{CloudTeam}</Slider>,
        design: <Slider {...settings}>{DesignTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
      });
    } else {
      setTeams({
        web: WebTeam,
        cloud: CloudTeam,
        design: DesignTeam,
        ml: MLTeam,
        android: AndroidTeam,
        management: ManagementTeam,
      });
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team - GDSC</title>
        <meta name="title" content="Team - GDSC" />
        <meta
          name="description"
          content="Have a look at the great minds of GDSC AISSMS IOIT. None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful."
        />
        <meta
          name="keywords"
          content="gdsc team, gdsc aissms team, gdsc aissms ioit team, dsc, dsc aissms team, dsc aissms ioit team, gdsc ioit team, dsc ioit team, ioit dsc team, aissms dsc team, aissms ioit dsc team, aissms ioit gdsc team, gdsc-aissms-ioit team, gdsc-ioit team, dsc-aissms-ioit team, dsc-ioit team"
        />
      </Helmet>
      <div className="container-fluid team-heading">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 vector-img"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              className="cursor-pointer Team_Image"
              src={Team_Svg}
              alt="Team_Image"
            />
          </div>
          <div
            className="col-lg 6 col-sm-12 team-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="font-weight-bold">Meet The Core Team</h1>
            <p className="font-weight-light core_team_text">
              Connect with the great minds who have been working rigorously to
              create a positive impact on the community! "It is literally true
              that you can succeed best and quickest by helping others to
              succeed." – Napolean Hill
            </p>
          </div>
        </div>
      </div>

      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="container team-members teams">
        <Fade up>
          <div id="gdsc_lead" className="row">
            <div className="col-lg-6 col-sm-6">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Lead</h3>
              </Fade>

              <div>
                <span
                  className="Tooltip gdsc_lead_tooltip"
                  data-tooltip="Hi! I'm Prarthana. I love to sleep but coding is my coffee ;) I enjoy problem solving and competitive coding. I'm currently learning Node.js and I'm loving it. Can't wait to meet you guys in a GDSC offline event!"
                >
                  <img
                    src="https://i.ibb.co/cCyVvHd/sid.png"
                    className="img-fluid lead-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Siddhant Sangale</h5>

              <span></span>
              <div className="social-ico">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 teams">
              <Fade up>
                <h3 className="font-weight-bold">Faculty Advisor</h3>
              </Fade>
              <img
                src="https://i.ibb.co/16LcLWP/Wagh-Sir.png"
                className="img-fluid lead-img"
                alt="Faculty_Advisor"
              />
              <h5 className="mt-4">Dr. K. S. Wagh Sir</h5>
              <span></span>
              <div className="social-ico">
                <a target="_blank" rel="noreferrer" href="#0">
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="#0">
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="#0">
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <div id="web_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Web Team</h3>
          </Fade>
          {teams.web}
        </div>

        <div id="cloud_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Cloud Team</h3>
          </Fade>
          {teams.cloud}
        </div>

        <div id="design_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Design Team</h3>
          </Fade>
          {teams.design}
        </div>

        <div id="ml_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Machine Learning Team</h3>
          </Fade>
          {teams.ml}
        </div>

        <div id="android_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Android Team</h3>
          </Fade>
          {teams.android}
        </div>

        <div id="management_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Management Team</h3>
          </Fade>
          {teams.management}
        </div>
      </div>
    </>
  );
};

export default Team;