"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
      .join("&");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-[color:var(--color-border)] bg-transparent px-4 py-2 text-sm placeholder:text-[color:var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-border)]"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-[color:var(--color-border)] bg-transparent px-4 py-2 text-sm placeholder:text-[color:var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-border)]"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-[color:var(--color-border)] bg-transparent px-4 py-2 text-sm placeholder:text-[color:var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-border)] resize-none"
          placeholder="How can I help?"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all will-change-transform hover:-translate-y-0.5 active:translate-y-0 bg-foreground text-background hover:bg-black/80 dark:hover:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">Message sent!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">Failed to send. Try again.</p>
        )}
      </div>
    </form>
  );
}
