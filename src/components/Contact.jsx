export default function Contact(props) {

    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">We'd love to hear from you!</p>
            <div className="contact">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="contact-input" required />
                    <input type="email" placeholder="Your Email" className="contact-input" required />
                    <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
                    <div className="contact-options">
                        <button type="submit" className="contact-button">Send Message</button>
                        <button type="button" className="close-button" onClick={props.close}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}