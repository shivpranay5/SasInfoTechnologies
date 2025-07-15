import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Code, Database, Shield, Zap, BrainCircuit, Link } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
     <header className="bg-brand-primary text-white shadow-lg" style={{ backgroundColor: '#32446A' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center min-w-0 space-x-2 sm:space-x-4">
              <img
                src="/lovable-uploads/7715ce20-5de9-4ed6-b323-b6ccc8c456af.png"
                alt="SAAS INFO TECHNOLOGIES Logo"
                className="h-10 w-auto flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <h1 className="text-base sm:text-xl font-bold truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
                  SASINFO TECHNOLOGIES
                </h1>
                <p className="text-xs sm:text-sm text-white/80">Private Limited</p>
              </div>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden ml-2 flex-shrink-0">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open Menu">
                {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex md:flex-row md:space-x-6">
              <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="#careers" className="hover:text-blue-200 transition-colors">Careers</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
            </nav>
          </div>
          {/* Mobile Nav Dropdown */}
          {menuOpen && (
            <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-brand-primary rounded shadow-lg p-4 z-50">
              <a href="#services" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#careers" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Careers</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </div>
      </header>


      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-brand-primary to-brand-dark text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                IT Talent Acquisition & Technology Solutions
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Connecting Top
                <span className="text-blue-300"> IT Talent</span> with Leading Companies
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We specialize in IT recruitment and technology consulting, bridging the gap between
                exceptional talent and innovative companies across the technology sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-blue-50 px-8 py-4 text-lg">
                  <Link href="/careers">
                    View IT Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg">
                  Partner With Us
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Programming and Software Development"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized IT recruitment and technology consulting services tailored to meet industry demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-primary">
              <CardHeader>
                <Code className="h-12 w-12 text-brand-primary mb-4" />
                <CardTitle>Software Development Recruitment</CardTitle>
                <CardDescription>
                  Full-stack developers, frontend specialists, backend engineers, and mobile app developers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-primary">
              <CardHeader>
                <Database className="h-12 w-12 text-brand-primary mb-4" />
                <CardTitle>Data & Analytics Roles</CardTitle>
                <CardDescription>
                  Data scientists, analysts, engineers, and database administrators
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-primary">
              <CardHeader>
                <Shield className="h-12 w-12 text-brand-primary mb-4" />
                <CardTitle>Cybersecurity Specialists</CardTitle>
                <CardDescription>
                  Security architects, penetration testers, and cybersecurity analysts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-primary">
              <CardHeader>
                <Zap className="h-12 w-12 text-brand-primary mb-4" />
                <CardTitle>DevOps & Cloud Engineers</CardTitle>
                <CardDescription>
                  Cloud architects, DevOps engineers, and infrastructure specialists
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-primary">
              <CardHeader>
                <BrainCircuit className="h-12 w-12 text-brand-primary mb-4" />
                <CardTitle>AI/ML Engineers</CardTitle>
                <CardDescription>
                  Machine learning engineers, AI researchers, and automation specialists
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-primary">
              <CardHeader>
                <Users className="h-12 w-12 text-brand-primary mb-4" />
                <CardTitle>IT Leadership</CardTitle>
                <CardDescription>
                  Technical leads, engineering managers, and technology executives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">About SAAS INFO TECHNOLOGIES</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We are a premier IT recruitment and technology consulting firm, dedicated to connecting
                exceptional talent with innovative companies. Our deep understanding of the technology
                landscape enables us to identify and place the right professionals in the right roles.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                With years of experience in the IT industry, we specialize in understanding both the
                technical requirements of our clients and the career aspirations of IT professionals,
                ensuring perfect matches that drive success.
              </p>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                Learn More About Us
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                alt="Colorful code on computer screen"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-16 bg-brand-primary rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-3"></div>
                <span>Specialized focus on IT and technology roles</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-3"></div>
                <span>Deep technical expertise and industry knowledge</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-3"></div>
                <span>Extensive network of top-tier IT professionals</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-3"></div>
                <span>Proven track record in successful placements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Innovation Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="MacBook with code on busy desk"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Driving Tech Innovation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our expertise spans across cutting-edge technologies and emerging trends in the IT industry.
                We stay ahead of the curve to ensure our clients and candidates are positioned for success
                in an ever-evolving technological landscape.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Emerging technologies like AI, ML, and blockchain</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Modern development frameworks and methodologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cloud-native and distributed systems expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </section>

            {/* Careers Section (inline, not external) */}
      <section id="careers" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Careers at SASINFO TECHNOLOGIES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore exciting IT opportunities and join our team of talented professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>React, TypeScript, Tailwind CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-brand-primary text-white w-full">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Developer</CardTitle>
                <CardDescription>Node.js, Express, MongoDB</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-brand-primary text-white w-full">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>DevOps Engineer</CardTitle>
                <CardDescription>AWS, Docker, CI/CD</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-brand-primary text-white w-full">Apply Now</Button>
              </CardContent>
            </Card>
            {/* Add more positions as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section (inline, not external) */}
  {/* Contact Section (inline, not external) */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full">
            <h2 className="text-3xl font-bold mb-6 text-brand-primary">Contact Us</h2>
            <p className="mb-6 text-gray-600">
              Reach out us at info@sasinfotechnologies.com
            </p>
            <p className="mb-6 text-gray-600">
                We'd love to hear from you! Fill out the form below and our team will get back to you soon.
            </p>
            {/* Simple contact form */}
            <form>
              <div className="mb-4">
                <label className="block mb-1 font-medium text-gray-700" htmlFor="name">Name</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium text-gray-700" htmlFor="email">Email</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2" type="email" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea className="w-full border border-gray-300 rounded px-3 py-2" id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="bg-brand-primary text-white w-full">Send Message</Button>
            </form>
            <div className="mt-8 text-gray-700 text-sm">
              <h2 className="text-lg font-semibold mb-2">Head Quarters</h2>
              <div className="font-bold mb-2">Contact Info</div>
              <div>Email: info@sasinfotechnologies.com </div>
              <div>Phone: +91 8121286830</div>
              <div>513A, 5th Floor, Prajay Princeton Towers</div>
              <div>Saroor Nagar, LB Nagar, Hyderabad</div>
            </div>
            <div className="mt-4 text-gray-700 text-sm">
              <h2 className="text-lg font-semibold mb-2">Regional Office</h2>
              <div>37P4+3H6, IT Hub</div>
              <div>DRB Area, Nalgonda</div>
              <div>Telangana, 508002, India</div>
            </div>
        
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="" className="bg-brand-primary text-white py-12 px-6" style={{ backgroundColor: '#32446A' }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/lovable-uploads/7715ce20-5de9-4ed6-b323-b6ccc8c456af.png"
                  alt="SAAS INFO TECHNOLOGIES Logo"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-lg">SASINFO TECHNOLOGIES</span>
              </div>
              <p className="text-white/80 mb-4">
                Connecting exceptional IT talent with innovative companies.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Specializations</h5>
              <ul className="space-y-2 text-white/80">
                <li>Software Development</li>
                <li>Data & Analytics</li>
                <li>Cybersecurity</li>
                <li>DevOps & Cloud</li>
                <li>AI/ML Engineering</li>
              </ul>
            </div>

            <div>
              <h6 className="font-bold text-lg mb-1">Head Quarters</h6>
              <div className="space-y-2 text-white/80">
                <p>Email: info@sasinfotechnologies.com </p>
                <p>Phone: +91 8121286830</p>
                <p>513A, 5th Floor, Prajay Princeton Towers</p>
                <p>Saroor Nagar, LB Nagar, Hyderabad</p>
              </div>
              <div className="mt-4">
                <h6 className="text-lg font-semibold mb-1">Regional Office</h6>
                <div className="space-y-2 text-white/80">
                  <p>37P4+3H6, IT Hub</p>
                  <p>DRB Area, Nalgonda</p>
                  <p>Telangana, 508002, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400/30 mt-8 pt-8 text-center text-white/60">
            <p>&copy; SASINFO TECHNOLOGIES Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;