"use client";

export default function TermsAndConditions() {
  return (
    <section className="w-full px-4 py-10 sm:py-8 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1
          className="lg:text-3xl text-2xl sm:text-4xl font-bold text-center text-[#1AB0BA] mb-4"
          style={{ fontFamily: "League Spartan, sans-serif" }}
        >
          Terms & Conditions
        </h1>

        <p className="text-center lg:text-xl  text-gray-600 max-w-2xl mx-auto mb-2 lg:mb-10">
          Please read the following terms carefully before enrolling at Darul
          Ilm Online Quran Academy.
        </p>

        <div className="space-y-6 text-balance">
          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              1. Privacy and Confidentiality
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              All personal information shared with us is kept strictly
              confidential. We do not share or sell any student or tutor data to
              third parties. All sessions and communications are protected by our
              privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              2. Attendance and Punctuality
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              Students are expected to attend classes regularly and on time.
              Repeated absences without prior notice may result in cancellation of
              enrollment. Makeup classes must be arranged in advance with your
              teacher.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              3. Payments and Refund Policy
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              All monthly payments should be made on time through approved
              payment methods. We do not offer refunds once classes have started,
              except in special cases approved by the administration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              4. Free Trial Class
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              We offer one free trial class for new students. This is a no-obligation
              session to help you understand our teaching method before enrollment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              5. Class Rescheduling
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              Rescheduling is allowed if a prior notice of at least 6 hours is given.
              Emergency reschedules are reviewed on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              6. Code of Conduct
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              All students are expected to maintain respectful communication with
              their teachers and administration. Any form of misconduct may lead to
              suspension or termination of classes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              7. Technical Issues
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              Darul Ilm is not responsible for internet issues or technical failures
              on the student’s end. We ensure stable platform performance from our
              side and recommend a reliable internet connection.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1AB0BA] mb-2">
              8. Changes to Terms
            </h2>
            <p className="text-sm lg:text-xl lg:text-justify">
              Darul Ilm reserves the right to modify these terms at any time. Students
              will be notified of any changes via email or platform notices.
            </p>
          </div>
        </div>

        <div className="lg:mt-10 mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Last updated: July 13, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
