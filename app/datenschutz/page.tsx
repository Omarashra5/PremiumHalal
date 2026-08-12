import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Datenschutzerklärung | The Foodie Wagon",
  description: "Datenschutzerklärung von The Foodie Wagon - Informationen zum Schutz Ihrer persönlichen Daten",
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to homepage</span>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Information on the protection of your personal data in accordance with the GDPR            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">

            {/* Introduction */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1.Data protection at a glance</h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">General information</h3>
                  <p className="text-sm">
                    The following information provides a simple overview of what happens to your personal

                    data when you visit this website. Personal data is any data that can be used
                    to personally identify you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data collection on this website</h3>
                  <p className="text-sm mb-2">
                    <strong className="text-foreground">Who is responsible for data collection on this website?</strong>
                  </p>
                  <p className="text-sm">
                    Data processing on this website is carried out by the website operator. Their contact details

                    can be found in the legal notice of this website.
                  </p>
                </div>
              </div>
            </section>

            {/* Responsible Party */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Responsible body</h2>

              <div className="space-y-2 text-muted-foreground">
                <p className="text-sm">
                  The responsible body for data processing on this website is:                </p>
                <div className="bg-secondary/30 p-4 rounded mt-2">
                  <p className="font-semibold text-foreground">FlavorBytes GmbH</p>
                  <p>Am Westpark 7</p>
                  <p>088 Ass</p>
                  <p className="mt-2">
                    Telephone:{" "}
                    <a href="tel:+201012329975" className="text-primary hover:underline">
                      +20 10 123 29975
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:omarcreat33@gmail.com" className="text-primary hover:underline">
                      omarcreat33@gmail.com
                    </a>
                  </p>
                </div>
                <p className="text-sm mt-4">
                  The responsible entity is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data collection</h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">How do we collect your data?</h3>
                  <p className="text-sm">
                   Your data is collected, firstly, because you provide it to us. This could include, for example, data that you enter into a contact form.
                  </p>
                  <p className="text-sm mt-2">
                    Other data is collected automatically or with your consent when you visit the website by
our IT systems. This is primarily technical data (e.g., internet browser,
operating system, or time of page access).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">What do we use your data for?</h3>
                  <p className="text-sm">
                  Some data is collected to ensure the website functions correctly.

Other data may be used to analyze your user behavior,

but only with your explicit consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">What rights do you have regarding your data?</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                    <li>Right to information about your stored data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to Deletion of your data</li>
                    <li>Right to Restriction of processing</li>
                    <li>Right to Data portability</li>
                    <li>Right to Objection to the processing</li>
                    <li>Right to Complaint to a supervisory authority</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Server Log Files */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Server log files</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                The website provider automatically collects and stores information in so-called

server log files, which your browser automatically transmits to us:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Browser type and browser version</li>
                  <li>Operating system used</li>
                  <li>Referrer URL</li>
                  <li>Hostname of the accessing computer</li>
                  <li>Time of server request</li>
                  <li>IP address</li>
                </ul>
                <p className="mt-4">
                This data will not be combined with other data sources.

The collection of this data is based on Article 6(1)(f) GDPR.

The website operator has a legitimate interest in the technically flawless presentation

and optimization of its website.
                </p>
              </div>
            </section>

            {/* Contact Forms */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact form</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
               If you send us inquiries via the contact form, your information from the
inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing
the inquiry and in case of follow-up questions.
                </p>
                <p className="mt-2">
               We will not share this data without your consent. The processing of this data
is based on Article 6(1)(b) GDPR, insofar as your request is related to the fulfillment
of a contract or is necessary for carrying out pre-contractual measures.
                </p>
                <p className="mt-2">
                The data you entered in the contact form will remain with us until you

request its deletion, revoke your consent to its storage, or the purpose for

data storage no longer applies.
                </p>
              </div>
            </section>

            {/* Email/Phone */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6.Inquiry via email or telephone</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                 When you contact us by email or telephone, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of handling your request.
                </p>
                <p className="mt-2">
                  We will not share this data without your consent. The processing of this data
is based on Article 6(1)(b) GDPR, insofar as your request is related to the fulfillment
of a contract or is necessary for carrying out pre-contractual measures.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                This website uses technically necessary cookies. These are small text files that are stored on
your device and saved by your browser. Cookies do not harm your
computer and do not contain viruses.
                </p>
                <p className="mt-2">
                Some cookies remain stored on your device until you delete them. They allow
us to recognize your browser on your next visit. If you do not wish this,
you can configure your browser to inform you about the setting of cookies
and only allow them in individual cases.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Data security</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
              During your visit to our website, we use the widely used SSL (Secure Socket Layer) protocol

in conjunction with the highest level of encryption supported by your browser.

This is typically 256-bit encryption.
                </p>
                <p className="mt-2">
                Please note that data transmission over the Internet (e.g., when communicating via
email) can have security vulnerabilities. Complete protection of data against access
by third parties is not possible.
                </p>
              </div>
            </section>

            {/* Retention Period */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Storage duration</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                 Unless a more specific retention period is stated within this privacy policy,

your personal data will remain with us until the purpose for data processing

no longer applies. If you assert a legitimate request for erasure or withdraw your consent to data processing, your data will be deleted, provided we have no other legally permissible grounds for storing your personal data.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Your rights</h2>

              <div className="space-y-4 text-muted-foreground text-sm">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to information</h3>
                  <p>You have the right to request confirmation as to whether your personal data is being processed.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to rectification</h3>
                  <p>You have the right to request the immediate correction of inaccurate data.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to erasure</h3>
                  <p>You have the right to request the immediate deletion of your data.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to restriction of processing</h3>
                  <p>You have the right to request the restriction of the processing of your data.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to data portability</h3>
                  <p>You have the right to receive your data in a structured format.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to object</h3>
                  <p>You have the right to object to the processing of your data.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Right to complain</h3>
                  <p>
                 You have the right to lodge a complaint with a supervisory authority.

The responsible supervisory authority is the Bavarian State Office for Data Protection Supervision.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Links */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Weitere Informationen</h2>
              <div className="space-y-2">
                <Link
                  href="/impressum"
                  className="block text-primary hover:underline"
                >
                  → imprint
                </Link>
                <Link
                  href="/agb"
                  className="block text-primary hover:underline"
                >
                  → General Terms and Conditions (GTC)
                </Link>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-sm text-muted-foreground text-center pt-8 border-t border-border">
              <p>Status: December 2026</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
