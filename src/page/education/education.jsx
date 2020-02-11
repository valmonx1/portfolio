import React, { useState } from "react";
import "./education.css";
import { ModalA, ModalB, ModalC, ModalD } from "../../prop/modal/modal";
import Card from "../../prop/card/card";

const Education = props => {
  const [modalShowA, setModalShowA] = useState(false);
  const [modalShowB, setModalShowB] = useState(false);
  const [modalShowC, setModalShowC] = useState(false);
  const [modalShowD, setModalShowD] = useState(false);
  return (
    <>
      <section id={props.id} className="education">
        <div className="html">
          <span class="tag-div"> &#60;div&#62;</span>
          <span className="tag-name">&#60;h1&#62;</span>
          <span class="tag-name2"> &#60;&#47;h1&#62;</span>
          <span class="tag-div2"> &#60;&#47;div&#62;</span>
        </div>
        <h1>Project</h1>
        <div className="container-2">
          <Card
            num="01"
            name="Hall Reservation"
            desc="Hall managemet specify in hall reservation"
            link={() => setModalShowA(true)}
          />
          <Card
            num="02"
            name="LMS"
            desc="Lawn Mowing Services similar to Grab application but focus on Lawn mower"
            link={() => setModalShowB(true)}
          />
          <Card
            num="03"
            name="HQMA"
            desc="Hospital Queue Management Application "
            link={() => setModalShowC(true)}
          />
          <Card
            num="04"
            name="CMS"
            desc="Central Management system and mobile application for TrackerHero"
            link={() => setModalShowD(true)}
          />
        </div>

        <ModalA show={modalShowA} onHide={() => setModalShowA(false)} />
        <ModalB show={modalShowB} onHide={() => setModalShowB(false)} />
        <ModalC show={modalShowC} onHide={() => setModalShowC(false)} />
        <ModalD show={modalShowD} onHide={() => setModalShowD(false)} />
      </section>
    </>
  );
};

export default Education;
