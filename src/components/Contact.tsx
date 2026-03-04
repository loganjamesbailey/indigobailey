"use client";

import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "var(--space-5xl) var(--space-3xl)",
        background: "var(--dark-surface)",
        position: "relative",
      }}
    >
      {/* Section divider */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "var(--space-3xl)",
          width: "61.8%",
          height: "1px",
          background:
            "linear-gradient(to right, var(--warm), transparent)",
        }}
      />

      {/* Section label */}
      <p
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--warm)",
          marginBottom: "var(--space-lg)",
          opacity: 0.7,
        }}
      >
        03 &mdash; Contact
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "61.8% 38.2%",
          gap: "var(--space-3xl)",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Major — headline + form */}
        <div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.236rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-xl)",
              color: "var(--light-primary)",
            }}
          >
            Get in Touch
          </h2>

          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--light-muted)",
              marginBottom: "var(--space-3xl)",
              fontWeight: 300,
              maxWidth: "80%",
            }}
          >
            For collaborations, inquiries, or just to say hello — I&apos;d love
            to hear from you.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg)",
              maxWidth: "500px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your name"
              style={{
                width: "100%",
                padding: "var(--space-md) var(--space-lg)",
                background: "var(--dark-canvas)",
                border: "1px solid var(--dark-border)",
                borderRadius: "2px 12px 2px 12px",
                color: "var(--light-primary)",
                fontSize: "var(--text-base)",
                fontFamily: "var(--font-body)",
                transition: "border-color 0.3s ease",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--warm)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--dark-border)")
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email address"
              style={{
                width: "100%",
                padding: "var(--space-md) var(--space-lg)",
                background: "var(--dark-canvas)",
                border: "1px solid var(--dark-border)",
                borderRadius: "2px 12px 2px 12px",
                color: "var(--light-primary)",
                fontSize: "var(--text-base)",
                fontFamily: "var(--font-body)",
                transition: "border-color 0.3s ease",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--warm)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--dark-border)")
              }
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              aria-label="Your message"
              style={{
                width: "100%",
                padding: "var(--space-md) var(--space-lg)",
                background: "var(--dark-canvas)",
                border: "1px solid var(--dark-border)",
                borderRadius: "2px 12px 2px 12px",
                color: "var(--light-primary)",
                fontSize: "var(--text-base)",
                fontFamily: "var(--font-body)",
                transition: "border-color 0.3s ease",
                outline: "none",
                resize: "vertical",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--warm)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--dark-border)")
              }
            />

            <div>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Minor — additional info */}
        <div
          style={{
            paddingTop: "var(--space-4xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2xl)",
          }}
        >
          <div
            style={{
              padding: "var(--space-xl)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "var(--space-sm)",
              }}
            >
              Email
            </p>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--light-muted)",
              }}
            >
              hello@indigobailey.life
            </p>
          </div>

          <div
            style={{
              padding: "var(--space-xl)",
              borderLeft: "2px solid var(--signature)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "var(--space-sm)",
              }}
            >
              Social
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-sm)",
              }}
            >
              <a
                href="#"
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--light-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                Instagram
              </a>
              <a
                href="#"
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--light-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
