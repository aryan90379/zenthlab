export default function DataDeletionPage() {
  return (
    <main className="bg-teal-dark text-white">

      {/* HERO */}
      <section className="py-[100px] px-[6%] border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[11px] tracking-[0.14em] uppercase text-amber mb-4 block">
            Data Deletion
          </span>
          <h1 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold mb-6">
            Request deletion of your data.
          </h1>
          <p className="text-white/70 text-[15px] leading-[1.8]">
            We respect your right to control your personal data. You may request deletion of your data at any time.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-[100px] px-[6%]">
        <div className="max-w-[900px] mx-auto space-y-[40px] text-[14px] text-white/70 leading-[1.8]">

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">How to Request Data Deletion</h3>
            <p>
              To request deletion of your personal data, please send an email to:
              <br />
              <span className="text-white">support.zenthlab@gmail.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">Required Information</h3>
            <p>
              Please include your phone number and any relevant details about your interaction so we can identify your data.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">Processing Time</h3>
            <p>
              We will process your request within a reasonable timeframe, typically within 7–14 days.
            </p>
          </div>

          <div>
            <h3 className="font-syne text-[20px] text-white mb-2">Scope of Deletion</h3>
            <p>
              Upon request, we will delete your personal data from our systems unless retention is required by law.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}