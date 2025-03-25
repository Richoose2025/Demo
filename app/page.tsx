import Image from "next/image"
import Link from "next/link"
import { BarcodeIcon as Jar, Leaf, MapPin, ShoppingBag, Heart, Shield, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Richoose Natural Honey Logo - Premium Natural Honey from Kerala"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-primary">Richoose Natural Honey</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#farms" className="text-muted-foreground hover:text-primary transition-colors">
              Our Farms
            </Link>
            <Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Honey Benefits
            </Link>
            <Link href="#find-us" className="text-muted-foreground hover:text-primary transition-colors">
              Find Us
            </Link>
          </nav>
          <Link
            href="#find-us"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
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
        <section className="relative">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Pure Natural Honey from Kerala
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              Premium, unprocessed raw honey harvested with care from the pristine forests of Trivandrum. Rich in
              antioxidants and natural healing properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Explore Our Honey
              </Link>
              <Link
                href="/blog"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
              >
                Health Benefits
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Highlight Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Antioxidant Rich</h3>
                <p className="text-muted-foreground">
                  Packed with polyphenols and flavonoids that protect your body from free radicals and reduce
                  inflammation.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Antibacterial</h3>
                <p className="text-muted-foreground">
                  Natural antibacterial properties help fight infections, promote wound healing, and soothe sore
                  throats.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">100% Raw Honey</h3>
                <p className="text-muted-foreground">
                  Unprocessed and unpasteurized to preserve all natural nutrients, enzymes, and beneficial compounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Welcome to Richoose Natural Honey</h2>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of dedicated expertise in beekeeping, Richoose Natural Honey takes pride in
                  delivering pure, unprocessed, and high-quality honey straight from nature to your table.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our passion lies in preserving the authenticity of honey while ensuring it retains its natural
                  nutrients, flavors, and health benefits. Unlike regular honey, our raw honey comes straight from the
                  beehive and is high in antioxidants and vitamins.
                </p>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Leaf className="h-5 w-5" />
                  <span className="font-medium">100% Pure & Natural Raw Honey</span>
                </div>
                <p className="text-muted-foreground">
                  We sell only raw honey that hasn't undergone pasteurization, preserving all the beneficial enzymes,
                  bee pollen, and propolis that make natural honey a superfood.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/honey-jar.jpg"
                    alt="Richoose Natural Raw Honey Jar from Kerala"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Farms Section */}
        <section id="farms" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Bee Farms – Nestled in Nature's Lap
                </h2>
                <p className="text-muted-foreground mb-4">
                  Located near the pristine Kottoor forests in Kuttichal, Trivandrum, our bee farms are surrounded by
                  diverse flora, providing an abundant and untouched source of nectar.
                </p>
                <p className="text-muted-foreground mb-6">
                  This rich biodiversity enhances the taste, texture, and therapeutic properties of our honey, making it
                  truly exceptional. We follow ethical and sustainable beekeeping practices, ensuring that every drop of
                  honey is harvested with care and precision.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Kottoor forests, Kuttichal, Trivandrum, Kerala</span>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/bee-farm.jpg"
                    alt="Richoose Bee Farm in Kottoor forests, Kerala"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Premium Raw Honey Varieties</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We offer five exquisite varieties of raw honey, each crafted by nature and perfected by our expertise.
                All our honey is 100% pure, unprocessed, and packed with natural health benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-amber-200 to-amber-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Jar className="h-20 w-20 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Multiflora Raw Honey</h3>
                  <p className="text-muted-foreground mb-4">
                    A harmonious blend of nectar from multiple flowers, offering a balanced sweetness with a mild floral
                    aroma. Rich in antioxidants and natural enzymes.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Learn more
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

              {/* Product 2 */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-amber-700 to-amber-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Jar className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Black Forest Raw Honey</h3>
                  <p className="text-muted-foreground mb-4">
                    A dark, intense honey with a robust and earthy flavor, packed with powerful antioxidants. Known for
                    its anti-inflammatory and antibacterial properties.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Learn more
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

              {/* Product 3 */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-amber-400 to-amber-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Jar className="h-20 w-20 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Stingless Bee Raw Honey</h3>
                  <p className="text-muted-foreground mb-4">
                    A rare delicacy harvested from stingless bees, known for its exceptional medicinal properties and
                    slightly tangy taste. Excellent for wound healing and respiratory health.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Learn more
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

              {/* Product 4 */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-green-600/20 to-amber-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Jar className="h-20 w-20 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Tulsi Raw Honey</h3>
                  <p className="text-muted-foreground mb-4">
                    Infused with the goodness of Tulsi (Holy Basil), this honey is a natural immunity booster with a
                    soothing effect. Perfect for relieving coughs and respiratory issues.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Learn more
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

              {/* Product 5 */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-amber-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Jar className="h-20 w-20 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Eucalyptus Raw Honey</h3>
                  <p className="text-muted-foreground mb-4">
                    A refreshing honey variety with the invigorating essence of eucalyptus, offering respiratory
                    benefits and a unique taste. Helps soothe coughs and throat irritation.
                  </p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Learn more
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

            <div className="mt-12 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Learn about the health benefits of raw honey
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
        </section>

        {/* Find Us Section */}
        <section id="find-us" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Where to Find Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our premium raw honey is available across India and can be conveniently purchased online through Amazon
                and Flipkart, ensuring that pure, unadulterated honey reaches your doorstep with ease.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link
                href="https://www.amazon.in"
                className="bg-background rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-[#FF9900] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20.5 15.5c-1.2.7-2.2 1.2-3.4 1.3-2.6.3-5.8-.4-8.7-2.1" />
                    <path d="M17.5 12.5c2-.3 4.1-1.1 5.5-2 .8-.5 1.4-1 1.5-1.5.1-1.2-1.9-2-3.5-1.5-2 .6-4.1 2-6 3.5-1.8 1.5-3.9 3.3-6.5 3.5-2 .2-3.5-.5-4.5-1.5-1.9-1.9-2-5.5-.5-7.5s4.5-2.8 6.5-2c1.8.7 3 2 3.5 3.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Buy on Amazon</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Find our complete range of premium raw honey products on Amazon. Enjoy fast delivery and secure
                  payment options.
                </p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  Shop now
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
                </span>
              </Link>

              <Link
                href="https://www.flipkart.com"
                className="bg-background rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-[#2874F0] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
                    <path d="M9 14v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                    <path d="M9 14h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Buy on Flipkart</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Explore our raw honey collection on Flipkart with exclusive offers and discounts. Experience the
                  goodness of natural honey.
                </p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  Shop now
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
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Health Benefits Teaser */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  The Natural Health Benefits of Raw Honey
                </h2>
                <p className="text-muted-foreground mb-4">
                  Natural honey offers numerous health benefits, including acting as an antioxidant, anti-inflammatory,
                  and antibacterial agent, potentially aiding in wound healing, cough relief, and even improving heart
                  health.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
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
                      className="text-primary shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium text-primary">Antioxidant and Anti-inflammatory Properties:</span>
                      <p className="text-muted-foreground">
                        Honey contains antioxidants like polyphenols and flavonoids, which can help protect the body
                        from damage caused by free radicals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="text-primary shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium text-primary">Antibacterial and Antimicrobial Properties:</span>
                      <p className="text-muted-foreground">
                        Honey's natural antibacterial properties can help fight off infections and promote wound
                        healing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="text-primary shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium text-primary">Cough Relief and Wound Healing:</span>
                      <p className="text-muted-foreground">
                        Honey can soothe a sore throat, help relieve coughs, and be used topically to help heal wounds,
                        burns, and ulcers.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link
                  href="/blog"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
                >
                  Read More About Honey Benefits
                </Link>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/honey-benefits.jpg"
                    alt="Health benefits of raw natural honey"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Join the Richoose Natural Honey Family
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                At Richoose, we believe that nature's best should be accessible to everyone. Experience the pure, golden
                goodness of our premium raw honey, relish its delightful taste, and enjoy its countless health benefits.
              </p>
              <div className="inline-block bg-background rounded-lg p-6 shadow-lg">
                <p className="text-xl font-bold text-primary mb-6">
                  Choose Richoose Natural Honey – Where Purity Meets Perfection!
                </p>
                <Link
                  href="#products"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
                >
                  Explore Our Products
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
                    href="#about"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#farms"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Our Farms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
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
                    href="#find-us"
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

