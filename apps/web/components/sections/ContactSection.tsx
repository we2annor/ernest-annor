"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactDetails = [
  {
    label: "Email",
    value: "contact@ernestannor.com",
    href: "mailto:contact@ernestannor.com",
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        aria-hidden='true'
      >
        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
        <polyline points='22,6 12,13 2,6' />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "ernest-annor-3b76667",
    href: "https://linkedin.com/in/ernest-annor-3b76667",
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "London, UK",
    href: null,
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        aria-hidden='true'
      >
        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' />
        <circle cx='12' cy='10' r='3' />
      </svg>
    ),
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject || formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    setFormState("loading");
    setErrors({});

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setFormState("success");
      setFormData(initialFormData);
    } catch {
      setFormState("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24'
      aria-labelledby='contact-heading'
    >
      {/* Header */}
      <div className='mb-16'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
          Contact
        </p>
        <h1
          id='contact-heading'
          className='font-syne font-bold text-text-primary'
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Let&apos;s <span className='text-accent'>Talk</span>
        </h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-16'>
        {/* Left — contact details */}
        <div className='lg:col-span-2 space-y-8'>
          <p className='text-text-muted leading-relaxed'>
            I&apos;m currently open to new opportunities. Whether you have a
            role in mind, a project to discuss, or just want to say hello —
            I&apos;d love to hear from you.
          </p>

          <div className='space-y-6'>
            {contactDetails.map(({ label, value, href, icon }) => (
              <div key={label} className='flex items-center gap-4'>
                <div className='text-accent'>{icon}</div>
                <div>
                  <p className='text-text-muted text-xs uppercase tracking-widest mb-1'>
                    {label}
                  </p>
                  {href ? (
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className='text-text-primary hover:text-accent transition-colors'
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className='text-text-primary'>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className='inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2'>
            <span className='w-2 h-2 rounded-full bg-accent animate-pulse' />
            <span className='text-accent text-sm font-medium'>
              Open to opportunities
            </span>
          </div>
        </div>

        {/* Right — form */}
        <div className='lg:col-span-3'>
          {formState === "success" ? (
            <div className='bg-accent/10 border border-accent/20 rounded-2xl p-12 text-center space-y-4'>
              <div className='text-5xl'>✉️</div>
              <h2 className='font-syne font-bold text-text-primary text-2xl'>
                Message Sent!
              </h2>
              <p className='text-text-muted'>
                Thanks for reaching out. I&apos;ll get back to you as soon as
                possible.
              </p>
              <Button
                onClick={() => setFormState("idle")}
                variant='outline'
                size='md'
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='space-y-6'
              noValidate
              aria-label='Contact form'
            >
              {/* Name and Email row */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label
                    htmlFor='name'
                    className='text-text-muted text-sm font-medium'
                  >
                    Name{" "}
                    <span className='text-accent' aria-hidden='true'>
                      *
                    </span>
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Ernest Annor'
                    autoComplete='name'
                    aria-required='true'
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`
                      w-full bg-surface border rounded-lg px-4 py-3
                      text-text-primary placeholder:text-text-muted
                      focus:outline-none focus:ring-2 focus:ring-accent/50
                      transition-colors duration-200
                      ${errors.name ? "border-pink" : "border-border focus:border-accent"}
                    `}
                  />
                  {errors.name && (
                    <p
                      id='name-error'
                      className='text-pink text-xs'
                      role='alert'
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-text-muted text-sm font-medium'
                  >
                    Email{" "}
                    <span className='text-accent' aria-hidden='true'>
                      *
                    </span>
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='you@example.com'
                    autoComplete='email'
                    aria-required='true'
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`
                      w-full bg-surface border rounded-lg px-4 py-3
                      text-text-primary placeholder:text-text-muted
                      focus:outline-none focus:ring-2 focus:ring-accent/50
                      transition-colors duration-200
                      ${errors.email ? "border-pink" : "border-border focus:border-accent"}
                    `}
                  />
                  {errors.email && (
                    <p
                      id='email-error'
                      className='text-pink text-xs'
                      role='alert'
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className='space-y-2'>
                <label
                  htmlFor='subject'
                  className='text-text-muted text-sm font-medium'
                >
                  Subject{" "}
                  <span className='text-accent' aria-hidden='true'>
                    *
                  </span>
                </label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Senior Engineer opportunity at...'
                  aria-required='true'
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  className={`
                    w-full bg-surface border rounded-lg px-4 py-3
                    text-text-primary placeholder:text-text-muted
                    focus:outline-none focus:ring-2 focus:ring-accent/50
                    transition-colors duration-200
                    ${errors.subject ? "border-pink" : "border-border focus:border-accent"}
                  `}
                />
                {errors.subject && (
                  <p
                    id='subject-error'
                    className='text-pink text-xs'
                    role='alert'
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <label
                  htmlFor='message'
                  className='text-text-muted text-sm font-medium'
                >
                  Message{" "}
                  <span className='text-accent' aria-hidden='true'>
                    *
                  </span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about the role or project...'
                  rows={6}
                  aria-required='true'
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`
                    w-full bg-surface border rounded-lg px-4 py-3
                    text-text-primary placeholder:text-text-muted
                    focus:outline-none focus:ring-2 focus:ring-accent/50
                    transition-colors duration-200 resize-none
                    ${errors.message ? "border-pink" : "border-border focus:border-accent"}
                  `}
                />
                {errors.message && (
                  <p
                    id='message-error'
                    className='text-pink text-xs'
                    role='alert'
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Error state */}
              {formState === "error" && (
                <div
                  className='bg-pink/10 border border-pink/20 rounded-lg px-4 py-3'
                  role='alert'
                >
                  <p className='text-pink text-sm'>
                    Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}

              {/* Submit */}
              <Button
                type='submit'
                variant='primary'
                size='lg'
                isLoading={formState === "loading"}
                className='w-full'
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
