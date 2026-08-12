import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Impressum | The Foodie Wagon",
  description: "Rechtliche Informationen und Kontaktdaten von The Foodie Wagon - FlavorBytes GmbH",
}

export default function ImpressumPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">imprint</h1>
            <p className="text-muted-foreground">
              Information according to § 5 TMG (Egyptian Telemedia Act)
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">

            {/* Company Information */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Company information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Company name:</strong> OmarGmbH</p>
                <p><strong className="text-foreground">Business name:</strong> The Foodie Wagon</p>
                <p><strong className="text-foreground">Legal form:</strong> Limited liability company (GmbH)</p>
              </div>
            </section>

            {/* Address */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Address</h2>
              <div className="space-y-1 text-muted-foreground">
                <p>FlavorBytes GmbH</p>
                <p>Am Westpark 7</p>
                <p>088 Ass</p>
                <p>Egypt</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Telephone:</strong>{" "}
                  <a href="tel:+201012329975" className="text-primary hover:underline">
                    +20 10 123 29975
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">E-Mail:</strong>{" "}
                  <a href="mailto:omarcreat33@gmail.com" className="text-primary hover:underline">
                    omarcreat33@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Representative */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Authorized representative</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Managing Director:</strong> Omar</p>
                <p><strong className="text-foreground">Contact Person:</strong> Omar</p>
              </div>
            </section>

            {/* Registration */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Register entry</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Registry Court:</strong> Ingolstadt District Court</p>
                <p><strong className="text-foreground">Commercial Register Number:</strong> HRB [Will be added later]</p>
              </div>
            </section>

            {/* Tax Information */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">VAT identification number</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">VAT ID No..:</strong> DE [Will be added later]
                </p>
                <p className="text-sm">
                  VAT identification number in accordance with § 27a of the German VAT Act
                </p>
              </div>
            </section>

            {/* Food Business Registration */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Food law approval</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Competent authority:</strong> Ingolstadt Public Health Department</p>
                <p><strong className="text-foreground">Certification:</strong> 100% Halal certified</p>
                <p className="text-sm">
                  Registered in accordance with Regulation (EC) No 852/2004 on the hygiene of foodstuffs        
                </p>
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Liability for content</h3>
                  <p className="text-sm">
               The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy,
completeness, or timeliness of the content.

As a service provider, we are responsible for our own content on these pages in accordance with Section 7 Paragraph 1 of the German Telemedia Act (TMG).

General law applies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Liability for links</h3>
                  <p className="text-sm">
                  Our website contains links to external websites of third parties, over whose content we
have no influence. Therefore, we cannot
assume any liability for this external content. The respective
provider or operator of the linked pages is always responsible for their content.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">copyright</h3>
                  <p className="text-sm">
              The content and works created by the site operators on these pages

are subject to German copyright law. Reproduction, processing,

distribution, and any form of exploitation beyond the limits of copyright law

require the written consent of the respective author or creator.
                  </p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dispute resolution</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
The European Commission provides a platform for online dispute resolution (ODR):                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                We are neither willing nor obligated to participate in dispute resolution proceedings before a
consumer arbitration board.
                </p>
              </div>
            </section>

            {/* Additional Links */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Further information</h2>
              <div className="space-y-2">
                <Link
                  href="/datenschutz"
                  className="block text-primary hover:underline"
                >
                  → Privacy Policy
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
