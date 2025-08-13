import AppLayout from "@/Layout/AppLayout";
import Head from "next/head";
import Link from "next/link";

export default function Services() {
  return (
    <AppLayout title="Services" description="Custom development, AI & data, cloud & performance, and design & prototyping services by DevDeCraft.">


      <section className="section">
        <div className="container">
          <h1>Services</h1>
          <p className="muted" style={{ marginTop: 12, marginBottom: 24 }}>
            We partner with founders and teams to ship reliable, scalable
            products.
          </p>
          <div className="grid">
            <div className="card">
              <h3>Custom Development</h3>
              <p>
                End-to-end product design and engineering for web, mobile, and
                backend.
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

          <div className="cta-row" style={{ marginTop: 32 }}>
            <a className="btn btn-primary" href="mailto:hello@devdecraft.com">
              Start a project
            </a>
            <Link className="btn btn-secondary" href="/products">
              Explore products
            </Link>
          </div>
        </div>
      </section>
    </  AppLayout>
  );
}


