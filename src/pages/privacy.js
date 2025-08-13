import AppLayout from "../Layout/AppLayout";
import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <AppLayout title="Privacy Policy">
        <div className="section">
          <div className="container">
            <h1>Privacy Policy</h1>
            <div className="policy-content">
              <p className="muted">Last updated: August 13, 2025</p>
              
              <section>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as:</p>
                <ul>
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment and billing information</li>
                  <li>Communications with our team</li>
                </ul>
              </section>

              <section>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate about products, services, and events</li>
                </ul>
              </section>

              <section>
                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy. We may share information with:
                </p>
                <ul>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2>5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2>7. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to improve your experience on our website. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2>8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                  or content of these external sites.
                </p>
              </section>

              <section>
                <h2>9. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect personal information 
                  from children under 13.
                </p>
              </section>

              <section>
                <h2>10. Changes to Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting 
                  the new policy on this page with an updated date.
                </p>
              </section>

              <section>
                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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
