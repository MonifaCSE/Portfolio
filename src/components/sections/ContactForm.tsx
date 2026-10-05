"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@content/site";
import { CheckCircle2, AlertCircle, Mail, Send } from "lucide-react";

export interface ContactFormProps {
  className?: string;
}

interface FormFields {
  name: string;
  email: string;
  reason: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const siteData = siteConfig;
  const recipientEmail = siteData.socials.email.address?.replace("mailto:", "") || "contact@example.com";

  const [fields, setFields] = React.useState<FormFields>({
    name: "",
    email: "",
    reason: "Project enquiry",
    message: "",
    honeypot: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const messageInputRef = React.useRef<HTMLTextAreaElement>(null);
  const successHeadingRef = React.useRef<HTMLHeadingElement>(null);
  const summaryErrorRef = React.useRef<HTMLDivElement>(null);

  // Validate fields
  const validate = React.useCallback((data: FormFields): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (data.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    } else if (data.name.trim().length > 80) {
      errs.name = "Name cannot exceed 80 characters.";
    }

    if (!data.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    if (!data.message.trim()) {
      errs.message = "Please enter a message.";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    } else if (data.message.trim().length > 2000) {
      errs.message = "Message cannot exceed 2000 characters.";
    }

    return errs;
  }, []);

  // Handle live field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);

    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  // Handle blur validation
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check: if filled, simulate success silently
    if (fields.honeypot) {
      setStatus("submitting");
      setTimeout(() => {
        setStatus("success");
      }, 500);
      return;
    }

    // Touch all fields and validate
    setTouched({ name: true, email: true, reason: true, message: true });
    const validationErrors = validate(fields);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setErrorMessage(`Please resolve the ${Object.keys(validationErrors).length} error(s) below.`);
      
      // Move focus to first invalid input
      if (validationErrors.name) {
        nameInputRef.current?.focus();
      } else if (validationErrors.email) {
        emailInputRef.current?.focus();
      } else if (validationErrors.message) {
        messageInputRef.current?.focus();
      }
      return;
    }

    setStatus("submitting");

    // Generate mailto link with encoded subject & body lines
    setTimeout(() => {
      try {
        const subject = encodeURIComponent(`[Portfolio Inquiry] ${fields.reason} — ${fields.name.trim()}`);
        const bodyText = `Name: ${fields.name.trim()}
Email: ${fields.email.trim()}
Reason: ${fields.reason}

Message:
${fields.message.trim()}

---
Sent via portfolio contact form`;

        const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
        
        // Trigger default email client safely
        window.location.href = mailtoUrl;

        setStatus("success");
        setTimeout(() => {
          successHeadingRef.current?.focus();
        }, 100);
      } catch (err) {
        setStatus("error");
        setErrorMessage("Unable to open mail client automatically. Please copy the email address below.");
      }
    }, 400);
  };

  const handleReset = () => {
    setFields({
      name: "",
      email: "",
      reason: "Project enquiry",
      message: "",
      honeypot: "",
    });
    setTouched({});
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  const charCount = fields.message.length;

  return (
    <div className={className}>
      {status === "success" ? (
        <div
          tabIndex={-1}
          ref={successHeadingRef}
          className="p-8 rounded-lg border border-ink-700 bg-ink-850 space-y-5 text-center focus:outline-none"
        >
          <div className="w-12 h-12 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mx-auto text-success">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          
          <h3 className="text-2xl font-serif text-bone">
            Thank you — your email draft is ready!
          </h3>
          
          <p className="text-sm font-sans text-textSoft max-w-md mx-auto leading-relaxed">
            Your default mail application has been opened with your message details pre-filled. If your email application did not launch automatically, you can send an email directly to{" "}
            <span className="font-mono text-ember-400 font-medium">{recipientEmail}</span>.
          </p>

          <div className="pt-2">
            <Button variant="secondary" size="small" onClick={handleReset}>
              Send another message
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact Monifa Sultana"
          className="p-6 sm:p-8 rounded-lg border border-ink-700 bg-ink-850 space-y-6 shadow-xl"
        >
          {/* Form Summary Error Banner */}
          {status === "error" && errorMessage && (
            <div
              ref={summaryErrorRef}
              tabIndex={-1}
              aria-live="assertive"
              className="p-4 rounded border border-danger/40 bg-danger/10 text-danger text-xs font-mono flex items-start gap-3 focus:outline-none"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Submission Error</strong>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          {/* Honeypot Anti-Spam Hidden Input */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="honeypot">Do not fill this field if you are human</label>
            <input
              id="honeypot"
              type="text"
              name="honeypot"
              value={fields.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs font-mono uppercase tracking-wider text-bone font-medium"
            >
              Your Name <span className="text-ember-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={nameInputRef}
              id="name"
              type="text"
              name="name"
              required
              autoComplete="name"
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="e.g. Nusrat Jahan"
              className={`w-full h-12 px-4 rounded bg-ink-800 border text-bone placeholder:text-textMute text-sm focus:outline-none transition-colors ${
                errors.name && touched.name
                  ? "border-danger focus:border-danger ring-1 ring-danger"
                  : "border-ink-600 focus:border-ember-500"
              }`}
            />
            {errors.name && touched.name && (
              <p id="name-error" role="alert" className="text-xs font-mono text-danger flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-wider text-bone font-medium"
            >
              Email Address <span className="text-ember-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={emailInputRef}
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
              className={`w-full h-12 px-4 rounded bg-ink-800 border text-bone placeholder:text-textMute text-sm focus:outline-none transition-colors ${
                errors.email && touched.email
                  ? "border-danger focus:border-danger ring-1 ring-danger"
                  : "border-ink-600 focus:border-ember-500"
              }`}
            />
            {errors.email && touched.email && (
              <p id="email-error" role="alert" className="text-xs font-mono text-danger flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Inquiry Reason Select */}
          <div className="space-y-2">
            <label
              htmlFor="reason"
              className="block text-xs font-mono uppercase tracking-wider text-bone font-medium"
            >
              Inquiry Reason <span className="text-ember-500" aria-hidden="true">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              value={fields.reason}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-12 px-4 rounded bg-ink-800 border border-ink-600 text-bone text-sm focus:border-ember-500 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="Project enquiry">Project enquiry (Web Development)</option>
              <option value="Teaching or academic">Teaching or academic engagement</option>
              <option value="Something else">Something else</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-bone font-medium"
              >
                Message <span className="text-ember-500" aria-hidden="true">*</span>
              </label>
              {charCount >= 1800 && (
                <span className="text-xs font-mono text-textMute">
                  {charCount}/2000 chars
                </span>
              )}
            </div>
            <textarea
              ref={messageInputRef}
              id="message"
              name="message"
              required
              rows={5}
              maxLength={2000}
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Describe your project, academic opportunity, or inquiry..."
              className={`w-full p-4 rounded bg-ink-800 border text-bone placeholder:text-textMute text-sm focus:outline-none transition-colors resize-none ${
                errors.message && touched.message
                  ? "border-danger focus:border-danger ring-1 ring-danger"
                  : "border-ink-600 focus:border-ember-500"
              }`}
            />
            {errors.message && touched.message && (
              <p id="message-error" role="alert" className="text-xs font-mono text-danger flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
            className="w-full"
            showArrow
          >
            {status === "submitting" ? "Preparing message..." : "Send Message"}
          </Button>

          {/* Privacy Disclaimer */}
          <p className="text-xs text-textMute font-mono text-center pt-1">
            Your details are used only to reply to your message. Read our{" "}
            <Link href="/privacy" className="text-bone underline hover:text-ember-400">
              Privacy Policy
            </Link>.
          </p>
        </form>
      )}
    </div>
  );
};
