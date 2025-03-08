import "./index.scss";
import EmailForm from "../../components/EmailForm";

function ContactPage() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>
          If you have any questions or feedback regarding Legends Rise, please
          reach out!
        </p>
        <EmailForm />
      </div>
    </div>
  );
}

export default ContactPage;
