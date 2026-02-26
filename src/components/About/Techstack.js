import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiGit
} from "react-icons/di";
import { SiMysql, SiTailwindcss, SiSupabase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++ (DSA)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase title="Supabase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git & GitHub" />
      </Col>

    </Row>
  );
}

export default Techstack;