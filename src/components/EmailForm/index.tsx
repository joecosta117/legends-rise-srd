import React, { useState } from "react";
import "./index.scss";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy email sending function
    const mailtoLink = `mailto:joecosta117@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <div className="email-form__field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="email-form__field">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="email-form__field">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="email-form__button">
        Send Email
      </button>
    </form>
  );
}

export default EmailForm;
