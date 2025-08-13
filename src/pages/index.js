import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import AppLayout from "@/Layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <div className={styles.page}>
        <main className={styles.main}>
          <section className="section hero">
            <div className="container">
              <h1>DevdeCraft — Software Consultancy & Products</h1>
              <p className="muted" style={{ marginTop: 12 }}>
                We design, build, and ship dependable software and ready-to-use
                products for both consumers and businesses.
              </p>
              <div className="cta-row">
                <Link className="btn btn-primary" href="#contact">
                  Talk to us
                </Link>
                <Link className="btn btn-secondary" href="/products">
                  Explore products
                </Link>
              </div>
            </div>
          </section>

          {/* <section
            id="products"
            className="section"
            aria-labelledby="products-heading"
          >
            <div className="container">
              <h2 id="products-heading">Products</h2>
              <p className="muted" style={{ marginBottom: 16 }}>
                Practical tools that solve real problems. Built with attention
                to detail, performance, and usability.
              </p>
              <div className="grid">
                <div className="card">
                  <h3>InsightBoard</h3>
                  <p>
                    Lightweight business dashboards for tracking key metrics.
                    Coming soon.
                  </p>
                </div>
                <div className="card">
                  <h3>TaskFlow</h3>
                  <p>Simple workflow automation for teams. Coming soon.</p>
                </div>
                <div className="card">
                  <h3>DevDeCraft Kits</h3>
                  <p>
                    Starter kits and templates for modern web apps. Coming soon.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          <section
            id="services"
            className="section"
            aria-labelledby="services-heading"
          >
            <div className="container">
              <h2 id="services-heading">Services</h2>
              <div className="grid">
                <div className="card">
                  <h3>Custom Development</h3>
                  <p>
                    End-to-end product design and engineering for web, mobile,
                    and backend.
                  </p>
                </div>
                <div className="card">
                  <h3>AI & Data</h3>
                  <p>
                    Integrate LLMs, RAG, analytics, and data workflows that add
                    measurable value.
                  </p>
                </div>
                <div className="card">
                  <h3>Cloud & Performance</h3>
                  <p>
                    Architecture, DevOps, cost optimization, and performance
                    tuning.
                  </p>
                </div>
                <div className="card">
                  <h3>Design & Prototyping</h3>
                  <p>UI/UX, clickable prototypes, and MVPs to validate fast.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="container">
              <h2>Contact</h2>
              <p className="muted" style={{ marginBottom: 16 }}>
                Tell us about your idea or product needs. We’ll get back within
                1–2 business days.
              </p>
              <div className="cta-row">
                <a
                  className="btn btn-primary"
                  href="mailto:hello@devdecraft.com"
                >
                  hello@devdecraft.com
                </a>
                <a className="btn btn-secondary" href="#services">
                  View services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
