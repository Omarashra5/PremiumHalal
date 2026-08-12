import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Terms and Conditions | The Foodie Wagon",
  description: "General Terms and Conditions of The Foodie Wagon - Flavor Bytes GmbH",
}

export default function AGBPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              General terms and conditions of business (Terms and Conditions)
            </h1>
            <p className="text-muted-foreground">
              FlavorBytes GmbH - The Foodie Wagon
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">

            {/* Section 1 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 1 Scope</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) These General Terms and Conditions (hereinafter "GTC") apply to all contracts between
                  FlavorBytes GmbH, trading as "The Foodie Wagon" (hereinafter "Provider") and customers
                  (hereinafter "Customer") for the delivery of food and beverages.
                </p>
                <p>
                  (2) Any terms and conditions of the customer that deviate from these will not be recognized unless the provider
                  expressly agrees to their validity in writing.
                </p>
                <p>
                  (3) These terms and conditions shall also apply to future business relationships, even if they are not
                  expressly agreed upon again.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 2 Conclusion of Contract</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The customer's order of food and drinks at the food truck constitutes a
                  binding offer to conclude a purchase agreement.
                </p>
                <p>
                  (2) The contract is concluded upon acceptance of the order by the supplier. Acceptance

                  can also be implied by the preparation and delivery of the food.
                </p>
                <p>
                  (3) For telephone or email orders for events and catering, the
                  contract is concluded upon written or verbal confirmation of the order by the provider.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 3 Prices and Payment</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The prices displayed or communicated on the day of the order apply. All prices

                  are in euros (€) and include statutory VAT.
                </p>
                <p>
                  (2) Payment is generally made in cash upon collection at the food truck. Card payments are
                  accepted where indicated.
                </p>
                <p>
                  (3) For catering orders and events, different payment terms may be agreed upon.

                  As a rule, a deposit of 30% is due upon placement of the order.
                </p>
                <p>
                  (4) The provider reserves the right to change prices at any time. Contracts already concluded remain unaffected.

                  This does not affect contracts already concluded.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 4 Scope of services and product quality</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The provider undertakes to prepare all food fresh and to the best of its knowledge and belief,
                  in compliance with all food law regulations.
                </p>
                <p>
                  (2) All meat products are 100% Halal certified. Preparation is carried out in accordance with the
                  Halal guidelines.
                </p>
                <p>
                  (3) Images and descriptions of the dishes may differ from the actual product
                  non-essential points differ. Slight variations in size, color and design
                  are possible and do not represent a defect.
                </p>
                <p>
                  (4) The supplier reserves the right, in the event of the unavailability of individual ingredients, to replace them with
                  equivalent ingredients, provided that this does not impair the quality.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 5 Allergens and intolerances</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) Information about allergens and ingredients is available upon request.

                  Customers are required to inform themselves about any allergies or intolerances before placing an order.

                  This applies to customers with allergies or intolerances.
                </p>
                <p>
                  (2) The supplier accepts no liability for allergic reactions if the customer has not informed himself about the ingredients before ordering.
                </p>
                <p>
                  (3) Despite the utmost care, traces of allergens may be present in the products.

                  A 100% avoidance of cross-contamination cannot be guaranteed.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 6 Opening Hours and Location</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The food truck is regularly open every Saturday at the specified location (Am Westpark 7, 85057
                  Ingolstadt) from 11:00 to 20:00.
                </p>
                <p>
                  (2) The provider reserves the right to change opening hours due to weather conditions,
                  events, or for operational reasons. Notice will be given in a timely manner whenever possible.
                </p>
                <p>
                  (3) The provider is entitled to change its location. Changes will be announced on the
                  website and via social media.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 7 Catering and Events</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) Special arrangements apply to catering orders and private events, which are
                  made individually.
                </p>
                <p>
                  (2) Catering requests must be made at least 7 days in advance. Confirmation will be
                  subject to availability checks.
                </p>
                <p>
                  (3) No cancellation fee is charged for catering orders cancelled up to 72 hours before the event. For cancellations made later, up to 50% of the order value may be charged as a cancellation fee.
                </p>
                <p>
                  (4) The customer is obliged to provide sufficient electricity and water connections as well as a suitable parking area at the event venue.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 8 Complaints and Warranty</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) Complaints must be reported immediately, but no later than 2 hours after
                  the food has been handed over.
                </p>
                <p>
                  (2) In the case of justified complaints, the supplier will, at its own discretion, either remedy the defect

                  or refund the purchase price.
                </p>
                <p>
                  (3) Weitergehende Ansprüche, insbesondere auf Schadensersatz, sind ausgeschlossen, es sei
                  denn, dem Anbieter fällt Vorsatz oder grobe Fahrlässigkeit zur Last.
                </p>
                <p>
                  (3) Further claims, in particular for damages, are excluded unless

                  the provider is guilty of intent or gross negligence.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 9 Liability</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The provider shall be liable without limitation for damages resulting from injury to life, body
                  or health, as well as for damages resulting from an intentional or grossly negligent
                  breach of duty.
                </p>
                <p>
                  (2) For slight negligence, the provider is only liable for breaches of essential
                  contractual obligations. In this case, liability is limited to foreseeable, typical contractual
                  damages.
                </p>
                <p>
                  (3) Liability under the Product Liability Act remains unaffected.
                </p>
                <p>
                  (4) To the extent that the provider's liability is excluded or limited, this also applies
                  to the personal liability of its employees, representatives and agents.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 10 Data Protection</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The provider processes the customer's personal data for contract processing and

                  fulfillment in accordance with the provisions of the GDPR.
                </p>
                <p>
                  (2) Further information on data protection can be found in our {" "}
                  <Link href="/datenschutz" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 11 Final Provisions</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  (1) The law of the Federal Republic of Germany shall apply, excluding the UN Convention on Contracts for the International Sale of Goods.                </p>
                <p>
                  (2) If the customer is a merchant, a legal entity under public law or
                  a special fund under public law, the place of jurisdiction for all disputes arising from
                  this contract is Ingolstadt.
                </p>
                <p>
                  (3) Should individual provisions of these Terms and Conditions be or become invalid, the validity of the remaining provisions shall remain unaffected. The invalid provision shall be replaced by a valid provision that comes closest to the economic purpose of the invalid provision.
                </p>
              </div>
            </section>

            {/* Contact for Questions */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions about the terms and conditions?</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  If you have any questions about these terms and conditions, please feel free to contact us:                </p>
                <div className="mt-4 space-y-1">
                  <p>
                    <strong className="text-foreground">Telefon:</strong>{" "}
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
              </div>
            </section>

            {/* Additional Links */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Further information</h2>
              <div className="space-y-2">
                <Link
                  href="/impressum"
                  className="block text-primary hover:underline"
                >
                  → imprint
                </Link>
                <Link
                  href="/datenschutz"
                  className="block text-primary hover:underline"
                >
                  → Privacy Policy
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
