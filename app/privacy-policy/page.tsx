export default function PrivacyPage() {
  return (
    <main className="bg-teal-dark text-white">
      
      {/* HERO */}
      <section className="py-[100px] px-[6%] border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-amber mb-4 block">
            Privacy Policy
          </span>
          <h1 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.022em] mb-6">
            Your data, handled responsibly.
          </h1>
          <p className="text-white/70 text-[15px] leading-[1.8]">
            This Privacy Policy explains how we collect, use, process, and protect your information when you use our platform.
            We are committed to ensuring transparency, security, and compliance with applicable data protection regulations and
            platform policies, including those of Meta and WhatsApp.
          </p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-[100px] px-[6%] border-b border-white/10">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-syne text-[clamp(28px,3.5vw,42px)] font-extrabold mb-[40px]">
            Core principles of our data handling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white/10 rounded-[18px] overflow-hidden">

            <div className="bg-teal-dark p-[40px_28px]">
              <div className="font-syne text-[42px] font-extrabold text-amber mb-[14px]">01</div>
              <div className="font-syne text-[15px] font-bold mb-[10px]">User-initiated communication</div>
              <p className="text-[13px] text-white/60 leading-[1.7]">
                We only process and respond to messages that are initiated by users. We do not send unsolicited messages or spam.
              </p>
            </div>

            <div className="bg-teal-dark p-[40px_28px]">
              <div className="font-syne text-[42px] font-extrabold text-amber mb-[14px]">02</div>
              <div className="font-syne text-[15px] font-bold mb-[10px]">Minimal data collection</div>
              <p className="text-[13px] text-white/60 leading-[1.7]">
                We only collect the data necessary to provide our services, such as appointment details and communication records.
              </p>
            </div>

            <div className="bg-teal-dark p-[40px_28px]">
              <div className="font-syne text-[42px] font-extrabold text-amber mb-[14px]">03</div>
              <div className="font-syne text-[15px] font-bold mb-[10px]">Secure processing</div>
              <p className="text-[13px] text-white/60 leading-[1.7]">
                All data is securely stored and processed using trusted infrastructure providers with industry-standard safeguards.
              </p>
            </div>

            <div className="bg-teal-dark p-[40px_28px]">
              <div className="font-syne text-[42px] font-extrabold text-amber mb-[14px]">04</div>
              <div className="font-syne text-[15px] font-bold mb-[10px]">Transparency & control</div>
              <p className="text-[13px] text-white/60 leading-[1.7]">
                Businesses and users retain control over their data, and we provide clear visibility into how it is used.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-[100px] px-[6%]">
        <div className="max-w-[900px] mx-auto space-y-[40px] text-[14px] text-white/70 leading-[1.8]">

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">1. Information We Collect</h3>
            <p>
              We may collect information such as names, phone numbers, and conversation data when users interact with businesses
              through WhatsApp. This data is provided voluntarily by users during communication.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">2. How We Use Information</h3>
            <p>
              The collected data is used to enable communication between businesses and users, facilitate appointment booking,
              maintain conversation history, and improve service functionality. We do not use personal data for unauthorized marketing.
              We do not use personal data for profiling, selling, or unauthorized advertising.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">3. WhatsApp & Meta Integration</h3>
            <p>
              Our platform uses the WhatsApp Business API provided by Meta. Messages are processed in accordance with WhatsApp
              policies. We only send messages in response to user-initiated interactions or through approved message templates in
              compliance with WhatsApp policies.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">4. Data Sharing</h3>
            <p>
              We do not sell or rent personal data. Data may be processed by trusted service providers strictly for delivering our services.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">5. Data Processors</h3>
            <p>
              We may use third-party service providers to process data on our behalf, including hosting and authentication services.
              These may include providers such as Hostinger (for infrastructure) and Google (for authentication). These providers only
              process data as necessary to deliver our services and are obligated to protect it.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">6. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect data against unauthorized access,
              loss, or misuse.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">7. User Rights</h3>
            <p>
              Users may request access, correction, or deletion of their personal data by contacting the respective business
              or through our platform where applicable.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">8. Data Retention</h3>
            <p>
              We retain data only for as long as necessary to provide our services and comply with legal obligations.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">9. Contact</h3>
            <p>
              For any privacy-related questions, data requests, or concerns, you may contact us at: <br />
              <span className="text-white">support.zenthlab@gmail.com</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}