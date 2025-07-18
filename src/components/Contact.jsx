const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-blue-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-10">
          I'm open to collaborations, freelance opportunities, or just a friendly chat.
          Fill out the form or drop me an email!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
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
