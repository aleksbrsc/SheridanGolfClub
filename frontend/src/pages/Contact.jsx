import { toast } from 'sonner'
import styles from '@css/contact.module.css';
import contact_banner from '@assets/images/contact/contact_banner.jpg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a5fbe339-d95c-430c-a17e-d971beacd0e3");

        toast.promise(
            new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                    });
                    const data = await response.json();
                    if (data.success) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                } catch (error) {
                    reject(error);
                }
            }),
            {
                loading: 'Sending...',
                success: (data) => {
                    event.target.reset();
                    return 'Email Submitted Successfully';
                },
                error: (err) => {
                    console.log("Error", err);
                    return err.message || 'An error occurred';
                },
            }
        );
    };    

    return (
        <section className={styles.contact_section}>
            <div className={styles.contact_container}>
                <div id={styles.contact_content}>
                    <h1>Contact us</h1>
                    <p>We'll gladly answer any questions you've got about membership, events, or anything else!</p>
                    <form onSubmit={onSubmit}>
                        <div id={styles.name_fields}>
                            <div>
                                <label htmlFor="first_name">First name</label>
                                <input type="text" id="first_name" name="first_name" required placeholder="First name"/>
                            </div>
                            <div>
                                <label htmlFor="last_name">Last name</label>
                                <input type="text" id="last_name" name="last_name" placeholder="Last name"/>
                            </div>
                        </div>
                        <div id={styles.email_field}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="you@sheridancollege.ca" 
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address"/>
                        </div>
                        {/* <div id={styles.phone_field}>
                            <label htmlFor="phone">Phone number</label>
                            <input type="tel" id="phone" name="phone" required placeholder="+1 (555) 000-0000"/>
                        </div> */}
                        <div id={styles.message_field}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required placeholder="Leave us a message..."/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <img id={styles.contact_banner} src={contact_banner} alt="Golf course"/>
            </div>
        </section>
    );
};

export default Contact;