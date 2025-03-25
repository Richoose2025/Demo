import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Shield, Sparkles, Droplet, Leaf } from "lucide-react"

export const metadata = {
  title: "Health Benefits of Raw Honey | Richoose Natural Honey",
  description:
    "Discover the amazing health benefits of raw honey including antioxidant, anti-inflammatory, and antibacterial properties. Learn how natural honey can help with wound healing, cough relief, and more.",
  keywords:
    "raw honey benefits, natural honey, health benefits of honey, antibacterial honey, antioxidant honey, honey for cough, wound healing honey, Kerala honey, organic honey, pure honey",
  openGraph: {
    title: "Health Benefits of Raw Honey | Richoose Natural Honey",
    description:
      "Discover the amazing health benefits of raw honey including antioxidant, anti-inflammatory, and antibacterial properties.",
    images: [{ url: "/honey-benefits-og.jpg" }],
  },
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Richoose Natural Honey Logo" width={60} height={60} className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary">Richoose Natural Honey</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/#farms" className="text-muted-foreground hover:text-primary transition-colors">
              Our Farms
            </Link>
            <Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/blog" className="text-primary font-medium">
              Honey Benefits
            </Link>
            <Link href="/#find-us" className="text-muted-foreground hover:text-primary transition-colors">
              Find Us
            </Link>
          </nav>
          <Link
            href="/#find-us"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Shop Now
          </Link>
          <button className="md:hidden text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-muted/30">
          <div className="container">
            <Link href="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                  The Amazing Health Benefits of Raw Natural Honey
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover why raw honey has been treasured for centuries as both a delicious food and a natural remedy
                  for various health conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Raw Honey</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Health Benefits</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Natural Remedies</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Antioxidants</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>Updated: March 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/honey-benefits-hero.jpg"
                    alt="Raw natural honey with honeycomb"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-muted/30 rounded-lg p-6 mb-12">
                <h2 className="text-xl font-bold text-primary mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="#introduction" className="text-primary hover:underline">
                      Introduction to Raw Honey
                    </Link>
                  </li>
                  <li>
                    <Link href="#antioxidant" className="text-primary hover:underline">
                      Antioxidant and Anti-inflammatory Properties
                    </Link>
                  </li>
                  <li>
                    <Link href="#antibacterial" className="text-primary hover:underline">
                      Antibacterial and Antimicrobial Properties
                    </Link>
                  </li>
                  <li>
                    <Link href="#cough" className="text-primary hover:underline">
                      Cough Relief and Respiratory Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="#wound" className="text-primary hover:underline">
                      Wound Healing Properties
                    </Link>
                  </li>
                  <li>
                    <Link href="#raw-vs-regular" className="text-primary hover:underline">
                      Raw Honey vs. Regular Honey
                    </Link>
                  </li>
                  <li>
                    <Link href="#conclusion" className="text-primary hover:underline">
                      Conclusion
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Introduction */}
              <article className="prose prose-lg max-w-none">
                <section id="introduction">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Introduction to Raw Honey</h2>
                  <p>
                    Natural honey offers numerous health benefits, including acting as an antioxidant,
                    anti-inflammatory, and antibacterial agent, potentially aiding in wound healing, cough relief, and
                    even improving heart health. For centuries, honey has been used not just as a natural sweetener but
                    also as a traditional remedy for various ailments.
                  </p>
                  <p>
                    At Richoose Natural Honey, we take pride in offering 100% pure, raw honey that preserves all the
                    natural enzymes, bee pollen, and beneficial compounds that make honey a true superfood. Our honey is
                    harvested from the pristine Kottoor forests in Kerala, ensuring the highest quality and purity.
                  </p>
                  <div className="my-8 bg-primary/5 p-6 rounded-lg border border-primary/10">
                    <h3 className="text-xl font-bold text-primary mb-4">What Makes Raw Honey Special?</h3>
                    <p className="mb-0">
                      Raw honey comes straight from the beehive and is high in antioxidants and vitamins. Unlike regular
                      honey, raw honey is not pasteurized or filtered, which means it retains all its natural nutrients,
                      enzymes, and beneficial compounds. It also contains bee pollen and propolis, which have their own
                      set of health benefits.
                    </p>
                  </div>
                </section>

                {/* Antioxidant Properties */}
                <section id="antioxidant" className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      Antioxidant and Anti-inflammatory Properties
                    </h2>
                  </div>
                  <p>
                    Honey contains antioxidants like polyphenols and flavonoids, which can help protect the body from
                    damage caused by free radicals. These antioxidants may also help reduce inflammation in the body,
                    potentially benefiting those with inflammatory conditions.
                  </p>
                  <p>
                    The antioxidant content of honey varies depending on its floral source. Darker honeys, like our
                    Black Forest Honey, generally contain higher levels of antioxidants compared to lighter varieties.
                    These antioxidants help combat oxidative stress in the body, which is linked to aging and many
                    chronic diseases.
                  </p>
                  <p>Research has shown that consuming antioxidant-rich foods like raw honey may help:</p>
                  <ul>
                    <li>Reduce the risk of heart disease</li>
                    <li>Support brain health</li>
                    <li>Lower inflammation throughout the body</li>
                    <li>Fight certain types of cancer</li>
                  </ul>
                  <p>
                    The anti-inflammatory effects of honey make it particularly beneficial for conditions like
                    arthritis, inflammatory bowel disease, and even skin conditions like eczema and psoriasis.
                  </p>
                </section>

                {/* Antibacterial Properties */}
                <section id="antibacterial" className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      Antibacterial and Antimicrobial Properties
                    </h2>
                  </div>
                  <p>
                    Honey's natural antibacterial properties can help fight off infections and promote wound healing.
                    Its low moisture content, hydrogen peroxide, and acidity make it inhospitable to bacteria.
                  </p>
                  <p>The antibacterial properties of honey are attributed to several factors:</p>
                  <ul>
                    <li>
                      <strong>Hydrogen Peroxide:</strong> When honey is diluted with body fluids, an enzyme called
                      glucose oxidase produces hydrogen peroxide, which has antibacterial effects.
                    </li>
                    <li>
                      <strong>High Sugar Content:</strong> The high concentration of sugars in honey creates an
                      environment where bacteria cannot survive due to osmotic pressure.
                    </li>
                    <li>
                      <strong>Low pH:</strong> Honey's acidic nature (pH between 3.2 and 4.5) inhibits the growth of
                      many bacteria.
                    </li>
                    <li>
                      <strong>Bee-derived Components:</strong> Compounds like defensin-1, which bees add to honey, have
                      antimicrobial properties.
                    </li>
                  </ul>
                  <p>
                    These properties make honey effective against a wide range of bacteria, including
                    antibiotic-resistant strains like MRSA (Methicillin-resistant Staphylococcus aureus).
                  </p>
                  <div className="my-8">
                    <Image
                      src="/antibacterial-honey.jpg"
                      alt="Antibacterial properties of raw honey"
                      width={800}
                      height={500}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Raw honey has powerful antibacterial properties that can help fight infections
                    </p>
                  </div>
                </section>

                {/* Cough Relief */}
                <section id="cough" className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Droplet className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      Cough Relief and Respiratory Benefits
                    </h2>
                  </div>
                  <p>
                    Honey can soothe a sore throat and help relieve coughs, especially in children. Its viscosity helps
                    coat the throat and reduce irritation, making it a natural and effective cough suppressant.
                  </p>
                  <p>
                    Studies have shown that honey can be as effective as over-the-counter cough medications, without the
                    side effects. The World Health Organization (WHO) and the American Academy of Pediatrics both
                    recommend honey as a natural cough remedy for children over one year of age.
                  </p>
                  <p>
                    Our Tulsi Honey and Eucalyptus Honey varieties are particularly beneficial for respiratory health
                    due to their additional therapeutic properties:
                  </p>
                  <ul>
                    <li>
                      <strong>Tulsi (Holy Basil) Honey:</strong> Combines the immune-boosting properties of tulsi with
                      the soothing effects of honey, making it excellent for colds and respiratory infections.
                    </li>
                    <li>
                      <strong>Eucalyptus Honey:</strong> The invigorating essence of eucalyptus provides additional
                      respiratory benefits, helping to clear congestion and soothe irritated airways.
                    </li>
                  </ul>
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                    <h3 className="text-xl font-bold text-primary mb-4">How to Use Honey for Cough Relief</h3>
                    <ol className="space-y-2">
                      <li>Mix 1-2 teaspoons of raw honey with warm water or herbal tea</li>
                      <li>Add a squeeze of lemon for additional vitamin C and soothing properties</li>
                      <li>Consume before bedtime to reduce nighttime coughing</li>
                      <li>For children over 1 year, use 1/2 teaspoon as needed</li>
                    </ol>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Note:</strong> Honey should never be given to infants under 12 months due to the risk of
                      infant botulism.
                    </p>
                  </div>
                </section>

                {/* Wound Healing */}
                <section id="wound" className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Wound Healing Properties</h2>
                  </div>
                  <p>
                    Honey can be used topically to help heal wounds, burns, and ulcers. Its antimicrobial properties
                    help prevent infection and promote faster healing, while its anti-inflammatory effects reduce
                    swelling and pain.
                  </p>
                  <p>
                    The wound-healing properties of honey have been recognized for thousands of years, with ancient
                    civilizations using it to treat wounds and burns. Modern research has confirmed these benefits, and
                    medical-grade honey is now used in clinical settings for wound care.
                  </p>
                  <p>Honey promotes wound healing through several mechanisms:</p>
                  <ul>
                    <li>Creating a protective barrier that prevents infection</li>
                    <li>Maintaining a moist wound environment that promotes healing</li>
                    <li>Reducing inflammation and swelling</li>
                    <li>Stimulating tissue regeneration</li>
                    <li>Minimizing scarring</li>
                  </ul>
                  <p>
                    Our Stingless Bee Honey is particularly renowned for its exceptional wound-healing properties,
                    making it a valuable natural remedy for minor cuts, burns, and skin irritations.
                  </p>
                </section>

                {/* Raw vs Regular */}
                <section id="raw-vs-regular" className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Raw Honey vs. Regular Honey</h2>
                  </div>
                  <p>
                    Unlike raw honey, regular honey undergoes a pasteurization process. This means manufacturers heat it
                    to kill yeast cells that can affect its taste. This process also increases honey's shelf life and
                    makes it look more transparent and attractive. However, pasteurization may adversely affect the
                    number of nutrients in the honey.
                  </p>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          <th className="border border-primary-foreground/20 px-4 py-2 text-left">Characteristic</th>
                          <th className="border border-primary-foreground/20 px-4 py-2 text-left">Raw Honey</th>
                          <th className="border border-primary-foreground/20 px-4 py-2 text-left">Regular Honey</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-background">
                          <td className="border border-muted px-4 py-2 font-medium">Processing</td>
                          <td className="border border-muted px-4 py-2">Minimal processing, not heated above 95°F</td>
                          <td className="border border-muted px-4 py-2">Pasteurized and filtered</td>
                        </tr>
                        <tr className="bg-muted/20">
                          <td className="border border-muted px-4 py-2 font-medium">Appearance</td>
                          <td className="border border-muted px-4 py-2">May be cloudy or crystallize over time</td>
                          <td className="border border-muted px-4 py-2">Clear and smooth</td>
                        </tr>
                        <tr className="bg-background">
                          <td className="border border-muted px-4 py-2 font-medium">Nutritional Content</td>
                          <td className="border border-muted px-4 py-2">
                            Retains all natural enzymes, bee pollen, and propolis
                          </td>
                          <td className="border border-muted px-4 py-2">
                            May lose some beneficial enzymes and nutrients during heating
                          </td>
                        </tr>
                        <tr className="bg-muted/20">
                          <td className="border border-muted px-4 py-2 font-medium">Antioxidant Content</td>
                          <td className="border border-muted px-4 py-2">Higher levels of antioxidants</td>
                          <td className="border border-muted px-4 py-2">Lower levels of antioxidants</td>
                        </tr>
                        <tr className="bg-background">
                          <td className="border border-muted px-4 py-2 font-medium">Shelf Life</td>
                          <td className="border border-muted px-4 py-2">
                            Long shelf life due to natural preservative properties
                          </td>
                          <td className="border border-muted px-4 py-2">Extended shelf life due to pasteurization</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    At Richoose Natural Honey, we believe in preserving the natural goodness of honey. That's why we
                    offer only raw, unprocessed honey that retains all its beneficial properties. Our honey may
                    crystallize over time, which is a natural process and a sign of quality. Simply warm it gently to
                    return it to liquid form without damaging its beneficial compounds.
                  </p>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Conclusion: The Natural Power of Raw Honey
                  </h2>
                  <p>
                    Raw honey is truly one of nature's most remarkable gifts, offering a wide range of health benefits
                    from its antioxidant, anti-inflammatory, and antibacterial properties to its effectiveness in wound
                    healing and cough relief.
                  </p>
                  <p>
                    At Richoose Natural Honey, we are committed to bringing you the purest, most beneficial raw honey
                    from the pristine forests of Kerala. Our honey varieties are carefully harvested to preserve all the
                    natural goodness and therapeutic properties that make honey a superfood.
                  </p>
                  <p>
                    Whether you're looking to boost your immune system, soothe a sore throat, or simply enjoy the
                    delicious taste of pure, natural honey, Richoose has the perfect variety for you. Experience the
                    difference that truly raw, unprocessed honey can make for your health and wellbeing.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Explore Our Raw Honey Collection</h3>
                    <p className="mb-6">
                      Discover our range of premium raw honey varieties, each with its unique flavor profile and health
                      benefits. From the balanced sweetness of Multiflora Honey to the medicinal properties of Stingless
                      Bee Honey, we have something for every taste and wellness need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/#products"
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-center"
                      >
                        View Our Products
                      </Link>
                      <Link
                        href="/#find-us"
                        className="bg-background text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors text-center"
                      >
                        Where to Buy
                      </Link>
                    </div>
                  </div>
                </section>

                {/* References */}
                <section className="mt-12 border-t pt-8">
                  <h2 className="text-xl font-bold text-primary mb-4">References and Further Reading</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>World Health Organization. (2022). Honey as a treatment for coughs in children.</li>
                    <li>
                      Journal of Agricultural and Food Chemistry. (2021). Antioxidant capacity of honeys from various
                      floral sources.
                    </li>
                    <li>International Journal of Wound Care. (2020). Honey in wound healing: A systematic review.</li>
                    <li>American Academy of Pediatrics. (2019). Honey for treatment of cough in children.</li>
                    <li>
                      Journal of Medicinal Food. (2018). Antimicrobial properties of honey against common pathogens.
                    </li>
                  </ul>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-amber-200 to-amber-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">The Beekeeping Process: From Hive to Honey</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn about our sustainable beekeeping practices and how we harvest honey with minimal impact on bee
                    colonies.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Read article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-amber-400 to-amber-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Honey in Ayurveda: Ancient Wisdom for Modern Health
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Explore how honey has been used in traditional Ayurvedic medicine for thousands of years in Kerala.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Read article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-amber-600 to-amber-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Honey Recipes: Sweet and Savory Dishes</h3>
                  <p className="text-muted-foreground mb-4">
                    Delicious recipes that showcase the versatility of honey in both sweet treats and savory meals.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Read article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Experience the Benefits of Raw Honey Today
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Try our premium raw honey varieties and discover the difference that pure, unprocessed honey can make
                for your health and wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#products"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Explore Our Products
                </Link>
                <Link
                  href="/#find-us"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Where to Buy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-white.png"
                  alt="Richoose Natural Honey Logo"
                  width={50}
                  height={50}
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold">Richoose</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Premium natural raw honey from the pristine forests of Kerala.
              </p>
              <div className="flex gap-4">
                <Link href="#" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#farms"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Our Farms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Honey Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#find-us"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Where to Buy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Multiflora Raw Honey
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Black Forest Raw Honey
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Stingless Bee Raw Honey
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Tulsi Raw Honey
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Eucalyptus Raw Honey
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-primary-foreground/80">
                <p className="mb-2">Kottoor, Kuttichal</p>
                <p className="mb-2">Trivandrum, Kerala</p>
                <p className="mb-4">India</p>
                <p className="mb-2">Email: info@richoose.com</p>
                <p>Phone: +91 98765 43210</p>
              </address>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Richoose Natural Honey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

