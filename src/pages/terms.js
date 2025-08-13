import AppLayout from "../Layout/AppLayout";

export default function Terms() {
  return (
    <AppLayout title="Terms & Conditions">
        <div className="section">
          <div className="container">
            <h1>Terms & Conditions</h1>
            <div className="policy-content">
              <p className="muted">Last updated: August 13, 2025</p>
              
              <section>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using DevdeCraft's services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2>2. Services Description</h2>
                <p>
                  DevdeCraft provides software consultancy services, custom software development, and ready-to-use digital products. 
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>
              </section>

              <section>
                <h2>3. User Responsibilities</h2>
                <p>Users are responsible for:</p>
                <ul>
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>Using our services in compliance with applicable laws</li>
                  <li>Not engaging in any activity that could harm our systems or other users</li>
                </ul>
              </section>

              <section>
                <h2>4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of DevdeCraft services are owned by DevdeCraft and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2>5. Payment Terms</h2>
                <p>
                  Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated. 
                  Late payments may result in service suspension.
                </p>
              </section>

              <section>
                <h2>6. Limitation of Liability</h2>
                <p>
                  DevdeCraft shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2>7. Termination</h2>
                <p>
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, 
                  including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2>8. Governing Law</h2>
                <p>
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which DevdeCraft operates, 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2>9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new 
                  Terms & Conditions on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2>10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
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
