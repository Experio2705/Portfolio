import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVercel, SiVisualstudiocode, SiSupabase, SiPowerbi } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title="Power BI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase title="Supabase" />
      </Col>
    </Row>
  );
}

export default Toolstack;
