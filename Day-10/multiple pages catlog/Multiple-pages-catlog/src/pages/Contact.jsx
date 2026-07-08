function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Enter Your Name" />

        <input type="email" placeholder="Enter Your Email" />

        <input type="text" placeholder="Subject" />

        <textarea
          rows="5"
          placeholder="Enter Your Message"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;