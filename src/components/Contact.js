import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (k) => (ev) => {
    setForm((s) => ({ ...s, [k]: ev.target.value }));
    setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    try {
      // simulate submit — replace with real API call if available
      setStatus("");
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 bg-gradient-to-b from-pink-50 to-white">
            <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
            <p className="text-gray-600 mb-4">
              Have a question or need help? Send us a message and we'll get back
              to you shortly.
            </p>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>Email:</strong> support@foodiehub.example
              </li>
              <li>
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>Hours:</strong> Mon–Fri, 9am–6pm
              </li>
            </ul>

            <div className="mt-6 text-sm text-gray-500">
              For urgent issues, please call us.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:w-1/2 p-8">
            {status === "success" && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">
                Message sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">
                Something went wrong. Try again later.
              </div>
            )}

            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm">
                <span className="block text-gray-700 mb-1">Name</span>
                <input
                  value={form.name}
                  onChange={handleChange("name")}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                />
                {errors.name && (
                  <div id="err-name" className="text-xs text-red-500 mt-1">
                    {errors.name}
                  </div>
                )}
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 mb-1">Email</span>
                <input
                  value={form.email}
                  onChange={handleChange("email")}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  type="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && (
                  <div id="err-email" className="text-xs text-red-500 mt-1">
                    {errors.email}
                  </div>
                )}
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 mb-1">
                  Subject (optional)
                </span>
                <input
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className="w-full px-3 py-2 border rounded border-gray-200"
                />
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 mb-1">Message</span>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`w-full px-3 py-2 border rounded h-28 resize-y ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                />
                {errors.message && (
                  <div id="err-message" className="text-xs text-red-500 mt-1">
                    {errors.message}
                  </div>
                )}
              </label>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setForm({ name: "", email: "", subject: "", message: "" })
                  }
                  className="text-sm text-gray-600 hover:underline"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
