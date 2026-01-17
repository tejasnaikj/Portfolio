import emailjs from "emailjs-com";

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            e.target,
            "YOUR_PUBLIC_KEY"
        )
            .then(() => alert("Message sent successfully!"))
            .catch(() => alert("Failed to send message."));

        e.target.reset();
    };

    return (
        <section id="contact" className="fade-in">
            <h2>Contact Me</h2>
            <p>Bengaluru, India</p>

            <form onSubmit={sendEmail}>
                <input name="name" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
