import React, { useState } from "react";
export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="cookie-banner">
      <div>
        We use cookies to improve your experience.
        <button className="btn ghost" onClick={() => setVisible(false)}>Dismiss</button>
        <button className="btn primary" onClick={() => setVisible(false)}>Accept</button>
      </div>
    </div>
  );
}
