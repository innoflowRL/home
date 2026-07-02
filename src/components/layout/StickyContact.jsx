import React from "react";
import { Link } from "react-router-dom";

export default function StickyContact() {
  return (
    <div className="sticky-contact">
      <div>
        Need a CFD study or test rig? <strong>Contact us</strong>
        <Link className="btn primary" to="/contact">Get in touch</Link>
      </div>
    </div>
  );
}
