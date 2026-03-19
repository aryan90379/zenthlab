export default function TermsPage() {
  return (
    <main className="bg-teal-dark text-white">

      {/* HERO */}
      <section className="py-[100px] px-[6%] border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[11px] tracking-[0.14em] uppercase text-amber mb-4 block">
            Terms of Service
          </span>
          <h1 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold mb-6">
            Terms that keep things clear.
          </h1>
          <p className="text-white/70 text-[15px] leading-[1.8]">
            These Terms govern your use of our platform. By accessing or using our services,
            you agree to these terms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-[100px] px-[6%]">
        <div className="max-w-[900px] mx-auto space-y-[40px] text-[14px] text-white/70 leading-[1.8]">

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">1. Use of Services</h3>
            <p>
              Our platform enables businesses to communicate with users via WhatsApp and manage customer interactions.
              You agree to use the service only for lawful purposes and in compliance with applicable policies.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">2. User Responsibilities</h3>
            <p>
              Businesses using our platform are responsible for ensuring they have proper consent from users before
              initiating communication and must comply with WhatsApp and Meta policies.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">3. WhatsApp Integration</h3>
            <p>
              Our service integrates with the WhatsApp Business API. Users must comply with all applicable WhatsApp
              policies, including restrictions on spam and unauthorized messaging.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">4. Data Usage</h3>
            <p>
              We process data in accordance with our Privacy Policy. By using our service, you agree to the collection
              and use of information as described therein.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">5. Service Availability</h3>
            <p>
              We strive to ensure high availability but do not guarantee uninterrupted service. We may modify or
              discontinue features at any time.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">6. Limitation of Liability</h3>
            <p>
              We are not liable for indirect or consequential damages arising from the use of our platform.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">7. Termination</h3>
            <p>
              We may suspend or terminate access if users violate these terms or applicable policies.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">8. Contact</h3>
            <p>
              For any questions regarding these Terms, contact us at:
              <br />
              <span className="text-white">support.zenthlab@gmail.com</span>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}