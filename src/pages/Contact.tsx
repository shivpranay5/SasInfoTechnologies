import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or email service
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-brand-primary text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/7715ce20-5de9-4ed6-b323-b6ccc8c456af.png" 
                alt="SAAS INFO TECHNOLOGIES Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">SASINFO TECHNOLOGIES</h1>
                <p className="text-sm text-white/80">Private Limited</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <a href="/#services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="/#about" className="hover:text-blue-200 transition-colors">About</a>
              <Link to="/careers" className="hover:text-blue-200 transition-colors">Careers</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full">
            <h1 className="text-3xl font-bold mb-6 text-brand-primary">Contact Us</h1>
            <p className="mb-6 text-gray-600">
              We'd love to hear from you! Fill out the form below and our team will get back to you soon.
            </p>
            {submitted ? (
              <div className="text-green-600 font-semibold text-center py-8">
                Thank you for contacting us! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white py-2 rounded hover:bg-brand-primary/90 font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            )}
            <div className="mt-8 text-gray-700 text-sm">
              <div className="font-bold mb-2">Contact Info</div>
              <h2 className="text-lg font-semibold mb-2">Headquarters</h2>
              <div>Phone: +91 8121286830</div>
              <div>513A, 5th Floor, Prajay Princeton Towers</div>
              <div>Saroor Nagar, LB Nagar, Hyderabad</div>
            </div>
            <div className="mt-4 text-gray-700 text-sm">
              <h2 className="text-lg font-semibold mb-2">Regional Office</h2>
              <div>37P4+3H6, IT Hub</div>
              <div>DRB Area, Nalgonda</div>
              <div>Telangana, 508002, India</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; SASINFO TECHNOLOGIES Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;