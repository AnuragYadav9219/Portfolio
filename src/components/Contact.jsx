import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid =
    data.name.trim().length >= 2 &&
    isValidEmail(data.email) &&
    data.message.trim().length >= 5;

  const disabledMessage = !data.name.trim()
    ? "Enter your name"
    : data.name.trim().length < 2
      ? "Name must be at least 2 characters"
      : !isValidEmail(data.email)
        ? "Enter a valid email"
        : data.message.trim().length < 5
          ? "Message must be at least 5 characters"
          : "";

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error(disabledMessage || "Please fill all fields correctly.");
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
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("EmailJS Error: ", error);
        setLoading(false);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 scroll-mt-24 px-6 bg-blue-100 dark:bg-gray-900 transition-colors duration-500"
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
              name="name"
              value={data.name}
              onChange={handleInputChange}
              placeholder="Your Name"
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
              name="email"
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
              name="message"
              rows="6"
              value={data.message}
              onChange={handleInputChange}
              placeholder="Your message (min 5 characters)..."
              className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button + Tooltip */}
          <div className="relative group">
            <button
              disabled={loading || !isFormValid}
              type="submit"
              className={`w-full flex items-center justify-center gap-3
                py-3 rounded-xl font-semibold transition-all duration-300 shadow-md
                ${loading || !isFormValid
                  ? "bg-blue-400 dark:bg-blue-400 cursor-not-allowed opacity-70"
                  : "bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
                }`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Tooltip */}
            {!isFormValid && !loading && (
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-12
                whitespace-nowrap px-4 py-2 text-sm rounded-lg
                bg-gray-900 text-white opacity-0 scale-95
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-300 pointer-events-none"
              >
                {disabledMessage}
              </div>
            )}
          </div>
        </form>

        {/* Email Info */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Or email me at{" "}
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