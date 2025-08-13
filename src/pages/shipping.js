import AppLayout from "../Layout/AppLayout";

export default function Shipping() {
  return (
    <AppLayout title="Shipping Policy">
      <div className="section">
        <div className="container">
          <h1>Shipping Policy</h1>
          <div className="policy-content">
            <p className="muted">Last updated: August 13, 2025</p>

            <section>
              <h2>1. Digital Products & Services</h2>
              <p>
                DevdeCraft primarily offers digital products and software consultancy services. Most of our deliverables
                are provided electronically and do not require physical shipping.
              </p>
            </section>

            <section>
              <h2>2. Service Delivery</h2>
              <p>Our services are delivered through:</p>
              <ul>
                <li>Email delivery for digital assets and documentation</li>
                <li>Secure cloud platforms for software and code repositories</li>
                <li>Video conferencing for consultations and meetings</li>
                <li>Project management tools for ongoing collaboration</li>
              </ul>
            </section>

            <section>
              <h2>3. Delivery Timeframes</h2>
              <p>
                Delivery times vary based on the scope and complexity of each project:
              </p>
              <ul>
                <li><strong>Consultations:</strong> Scheduled within 1-3 business days</li>
                <li><strong>Small projects:</strong> 1-2 weeks</li>
                <li><strong>Medium projects:</strong> 2-6 weeks</li>
                <li><strong>Large projects:</strong> 6+ weeks (timeline provided in proposal)</li>
                <li><strong>Digital products:</strong> Immediate download after purchase</li>
              </ul>
            </section>

            <section>
              <h2>4. Physical Materials</h2>
              <p>
                In rare cases where physical materials are required (such as hardware prototypes or printed documentation),
                shipping terms will be discussed and agreed upon separately. Additional shipping costs may apply.
              </p>
            </section>

            <section>
              <h2>5. International Delivery</h2>
              <p>
                Our digital services are available worldwide. For international clients, we accommodate different time zones
                and communication preferences to ensure smooth project delivery.
              </p>
            </section>

            <section>
              <h2>6. Delivery Confirmation</h2>
              <p>
                You will receive confirmation when:
              </p>
              <ul>
                <li>Digital products are made available for download</li>
                <li>Project milestones are completed</li>
                <li>Final deliverables are provided</li>
                <li>Access credentials are shared for deployed applications</li>
              </ul>
            </section>

            <section>
              <h2>7. Failed Delivery</h2>
              <p>
                If delivery fails due to incorrect contact information or technical issues on your end,
                we will attempt to contact you using alternative methods. It is your responsibility to
                provide accurate delivery information.
              </p>
            </section>

            <section>
              <h2>8. Delays</h2>
              <p>
                While we strive to meet all delivery deadlines, delays may occur due to:
              </p>
              <ul>
                <li>Changes in project scope</li>
                <li>Delayed feedback or approvals from clients</li>
                <li>Technical complications</li>
                <li>Force majeure events</li>
              </ul>
              <p>We will communicate any potential delays as soon as they are identified.</p>
            </section>

            <section>
              <h2>9. Support After Delivery</h2>
              <p>
                We provide post-delivery support as outlined in individual service agreements.
                This may include bug fixes, minor modifications, or technical assistance.
              </p>
            </section>

            <section>
              <h2>10. Contact for Delivery Issues</h2>
              <p>
                If you experience any issues with delivery or have questions about your project status,
                please contact us immediately:
                <br />
                Email: hello@devdecraft.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
