import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from "emailjs-com";
import { toast } from 'sonner';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (data.name.trim().length < 2) {
      toast.error("Please enter a valid name.");
      return;
    }

    if (!isValidEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (data.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setData({
          name: '',
          email: '',
          message: '',
        });
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("EmailJS Error: ", error);
        setLoading(false);
        toast.error("Failed to send message. Please try again.")
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-blue-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          I'm open to collaborations, freelance opportunities, or just a friendly chat.
          Fill out the form or drop me an email!
        </p>
      </div>

      <div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {/* Name */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name='name'
              value={data.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name='email'
              value={data.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-2">
              Message
            </label>
            <textarea
              name='message'
              rows="6"
              value={data.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              required
              className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={
              loading ||
              data.name.trim().length < 2 ||
              !isValidEmail(data.email) ||
              data.message.trim().length < 10
            }
            type="submit"
            className=
            "w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transition transform duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

        </form>

        {/* Email Info */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Or email me at:{' '}
            <a
              href="mailto:anuragyad1398@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              anuragyad1398@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
