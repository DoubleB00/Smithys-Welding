import { Phone, Mail, Instagram, Wrench, Shield, Clock, MapPin, Check, Sparkles, Zap, Home, Building2, Star as Stairs, DoorOpen, Hammer, Target } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Hammer className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">SMITHY'S WELDING WORKS</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
              <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
              <a href="#gallery" className="hover:text-red-600 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
            </div>
            <a href="tel:07772840861" className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-md font-semibold transition-colors flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.1),transparent_50%)]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">Professional Welding & Fabrication</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welding & Fabrication Services
              <span className="text-red-600"> Across Kent</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Professional welding, structural steel, balconies, staircases, gates, railings, and on-site repairs for domestic and commercial projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-center text-lg">
                Get a Free Quote
              </a>
              <a href="https://wa.me/447772840861" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-center text-lg border border-zinc-700">
                Call / WhatsApp Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">15+</div>
                <div className="text-sm text-zinc-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-sm text-zinc-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">100%</div>
                <div className="text-sm text-zinc-400">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-red-600">About Us</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Kent's Trusted Welding & Fabrication Specialists</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Smithy's Welding Works is a reliable welding and fabrication company serving homeowners and businesses throughout Kent and surrounding areas. We specialize in high-quality metalwork, from structural steel to bespoke architectural features.
              </p>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                With years of experience and a commitment to excellence, we deliver professional results on every project, whether it's a custom gate for your home or a complex commercial fabrication job.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg">
                  <Check className="h-5 w-5 text-red-600" />
                  <span>Fully Qualified</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg">
                  <Check className="h-5 w-5 text-red-600" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg">
                  <Check className="h-5 w-5 text-red-600" />
                  <span>Professional Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Welding work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 px-8 py-6 rounded-xl shadow-2xl">
                <div className="text-3xl font-bold">Free</div>
                <div className="text-sm">Quotations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-600">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Expert Welding & Fabrication</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Comprehensive metalwork services for residential and commercial clients across Kent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Structural Steel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Building2 className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Structural Steel</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Heavy-duty structural steel fabrication and installation for commercial and residential buildings, extensions, and support structures.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Glass Balconies"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Home className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Glass Balconies</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Stunning glass balcony systems with precision-engineered steel frames for modern homes and commercial properties.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src="https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Staircases"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Stairs className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Staircases & Balustrades</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Custom-designed metal staircases and balustrade systems combining safety, style, and structural integrity.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src="https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Gates and Railings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <DoorOpen className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Gates & Railings</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Bespoke gates and railings designed to enhance security and aesthetic appeal for homes and businesses.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="On-Site Repairs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Wrench className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">On-Site Welding Repairs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Mobile welding services bringing professional repair and fabrication directly to your location.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Welding Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Zap className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">TIG / MIG / Stick Welding</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Expert welding services using TIG, MIG, and stick welding techniques for all materials and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-600">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Trusted Welding Partner</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Quotations</h3>
              <p className="text-zinc-400 leading-relaxed">
                No-obligation free quotes for all projects. We'll assess your requirements and provide competitive pricing.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile & Workshop Welding</h3>
              <p className="text-zinc-400 leading-relaxed">
                Flexible service with both on-site mobile welding and fully-equipped workshop facilities available.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Domestic & Commercial</h3>
              <p className="text-zinc-400 leading-relaxed">
                Experienced in both residential and commercial projects of all sizes, from small repairs to major installations.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Large Coverage Radius</h3>
              <p className="text-zinc-400 leading-relaxed">
                Serving all of Kent and surrounding areas with prompt, professional service wherever you need us.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable, Professional Service</h3>
              <p className="text-zinc-400 leading-relaxed">
                Fully qualified welders committed to delivering exceptional workmanship and customer service on every job.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Completion</h3>
              <p className="text-zinc-400 leading-relaxed">
                We respect your time and deadlines, ensuring projects are completed efficiently without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-600">Our Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Project Gallery</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Take a look at some of our recent welding and fabrication projects across Kent
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Glass balcony project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Metal staircase"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Gate fabrication"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Structural steel work"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Welding work"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fabrication detail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="On-site welding"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 hover:border-red-600 transition-all group">
              <img
                src="https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Metal railings"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/smithys.welding.works"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-8 py-4 rounded-lg font-semibold transition-all border border-zinc-800"
            >
              <Instagram className="h-5 w-5" />
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-600">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Outstanding quality and professionalism. The glass balcony they installed completely transformed our property. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-red-600">
                  JD
                </div>
                <div>
                  <div className="font-semibold">John Davidson</div>
                  <div className="text-sm text-zinc-400">Canterbury</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Brilliant service from start to finish. They fabricated and installed custom gates for our business premises. Excellent craftsmanship."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-red-600">
                  SM
                </div>
                <div>
                  <div className="font-semibold">Sarah Mitchell</div>
                  <div className="text-sm text-zinc-400">Maidstone</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Needed emergency welding repairs and they came out the same day. Professional, efficient, and fairly priced. Will definitely use again."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-red-600">
                  RP
                </div>
                <div>
                  <div className="font-semibold">Robert Palmer</div>
                  <div className="text-sm text-zinc-400">Ashford</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <MapPin className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Serving Kent & Surrounding Areas</h2>
              <p className="text-xl mb-8 text-red-50 max-w-2xl mx-auto">
                We're your local welding and fabrication specialists, proudly serving communities across Kent with reliable, professional metalwork services.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                <span className="bg-white/20 px-4 py-2 rounded-full">Canterbury</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Maidstone</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Ashford</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Dover</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Folkestone</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Sittingbourne</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">& Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-600">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Request Your Free Quote</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Ready to discuss your project? Get in touch for a no-obligation quotation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="tel:07772840861" className="flex items-start gap-4 group">
                    <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600 transition-colors">
                      <Phone className="h-6 w-6 text-red-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-zinc-400 group-hover:text-red-600 transition-colors">07772 840861</div>
                    </div>
                  </a>

                  <a href="https://wa.me/447772840861" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600 transition-colors">
                      <Phone className="h-6 w-6 text-red-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">WhatsApp</div>
                      <div className="text-zinc-400 group-hover:text-red-600 transition-colors">07772 840861</div>
                    </div>
                  </a>

                  <a href="https://www.instagram.com/smithys.welding.works" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600 transition-colors">
                      <Instagram className="h-6 w-6 text-red-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Instagram</div>
                      <div className="text-zinc-400 group-hover:text-red-600 transition-colors">@smithys.welding.works</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-600/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Service Area</div>
                      <div className="text-zinc-400">Kent & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h4 className="font-bold mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-zinc-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Hammer className="h-8 w-8 text-red-600" />
                <span className="ml-2 text-xl font-bold">SMITHY'S WELDING WORKS</span>
              </div>
              <p className="text-zinc-400 mb-4">
                Professional welding and fabrication services across Kent. Quality craftsmanship for every project.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/smithys.welding.works" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-red-600 p-3 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="tel:07772840861" className="bg-zinc-900 hover:bg-red-600 p-3 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-red-600 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#services" className="hover:text-red-600 transition-colors">Structural Steel</a></li>
                <li><a href="#services" className="hover:text-red-600 transition-colors">Glass Balconies</a></li>
                <li><a href="#services" className="hover:text-red-600 transition-colors">Staircases</a></li>
                <li><a href="#services" className="hover:text-red-600 transition-colors">Gates & Railings</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Smithy's Welding Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
