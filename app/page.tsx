'use client';

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamic import of Three.js component to avoid SSR issues
const SchoolAnimation = dynamic(() => import('@/app/components/SchoolAnimation'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[40vh] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-lg animate-pulse" />
  )
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/gains-logo.png"
              alt="Gains Education Group"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#schools" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Our Schools
            </Link>
            <Link href="#seo" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              SEO Strategy
            </Link>
            <Link href="#digital" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Digital Strategy
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Contact
            </Link>
          </div>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* 3D Animation Container */}
            <div className="mb-16 w-full h-[45vh] relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 dark:ring-gray-800">
              <SchoolAnimation />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm mb-10">
              <span className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                2025 Strategy Proposal
              </span>
              <span className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                IDRISSI & TINTA Schools
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-10 tracking-tight text-gray-900 dark:text-white [text-wrap:balance] leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Digital Growth
                <br />
                Strategy 2025
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 mb-20 max-w-3xl mx-auto [text-wrap:balance] leading-relaxed">
              A comprehensive SEO and digital strategy proposal for Gains Education Group, designed to increase student admissions and enhance online visibility.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">52%</div>
                <p className="text-gray-600 dark:text-gray-300">YoY increase in private school searches in Malaysia (2024-25)</p>
                <Link 
                  href="https://trends.google.com/trends/explore?date=today%205-y&geo=MY&q=international%20school,private%20school" 
                  target="_blank"
                  className="mt-2 text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  View Google Trends Data <span className="text-[10px]">↗</span>
                </Link>
              </div>
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">93%</div>
                <p className="text-gray-600 dark:text-gray-300">Of parents prioritize digital research for international school selection</p>
                <Link 
                  href="/isc-market-intelligence-2024.pdf" 
                  target="_blank"
                  className="mt-2 text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  Download ISC Report <span className="text-[10px]">↓</span>
                </Link>
              </div>
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2.8x</div>
                <p className="text-gray-600 dark:text-gray-300">Average increase in qualified leads after SEO optimization</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#seo"
                className="px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 text-lg font-medium"
              >
                View SEO Strategy
              </Link>
              <Link
                href="#contact"
                className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all hover:scale-105 text-lg font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Overview */}
      <section id="schools" className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">GAINS Educational Institutions</h2>
          
          {/* School Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* IDRISSI Card */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Est. 2015
                </div>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  IDRISSI International School
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Positioning</h3>
                  <p className="text-gray-600 dark:text-gray-300">Eco-Islamic, Cambridge syllabus, international school with Islamic values</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Digital Focus 2025</h3>
                  <p className="text-gray-600 dark:text-gray-300">Unified parent experience from preschool to secondary, personalized learning pathways</p>
                </div>
              </div>
            </div>

            {/* TINTA Card */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Est. 2019
                </div>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Sekolah TINTA
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Positioning</h3>
                  <p className="text-gray-600 dark:text-gray-300">STEM-focused private school (Bahasa + English), future-proof, innovative pedagogy</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Digital Focus 2025</h3>
                  <p className="text-gray-600 dark:text-gray-300">Integrated STEM learning platform, real-time parent engagement tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Transition */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Proposed Digital Strategy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Based on your request for an SEO strategy to increase admissions, I've developed a comprehensive plan that focuses on enhancing online visibility and converting prospective parents into enrolled students.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Current Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300">Limited online visibility and digital presence in key educational search terms</p>
              </div>
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Proposed Solution</h3>
                <p className="text-gray-600 dark:text-gray-300">Data-driven SEO strategy targeting high-intent parent searches</p>
              </div>
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Expected Outcome</h3>
                <p className="text-gray-600 dark:text-gray-300">Increased qualified leads and improved conversion rates for admissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDRISSI SEO Strategy Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            IDRISSI Growth Strategy: Q2-Q3 2025
          </h2>

          {/* Market Analysis Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Competitor Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Search Volume by School</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">•</span>
                      "sri kdu" (1.4K/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">•</span>
                      "help international school" (1.2K/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      "idrissi international school" (750/mo)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Comparison Keywords</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">↗</span>
                      "international school vs national school" (450/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">↗</span>
                      "best international school in selangor" (400/mo)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Location-Based Opportunity</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">High-Value Areas</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      "international school setia alam" (320/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      "international school shah alam" (280/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      "international school klang" (250/mo)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Plan Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">SEO Strategy</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Content Focus</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• School Comparison Guide</li>
                    <li>• Area-Specific Landing Pages</li>
                    <li>• Fee Structure Comparison</li>
                    <li>• Academic Results Showcase</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">SEM Campaign</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Priority Keywords</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• "international school fees malaysia"</li>
                    <li>• "cambridge curriculum school"</li>
                    <li>• "islamic international school"</li>
                    <li>• Location-based terms</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Ad Strategy</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Competitor comparison ads</li>
                    <li>• Location-specific campaigns</li>
                    <li>• USP highlight campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Content Calendar</h3>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Q2 2025 Focus</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• School comparison articles</li>
                    <li>• Fee structure breakdowns</li>
                    <li>• Student testimonials</li>
                    <li>• Virtual tour content</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Q3 2025 Focus</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Academic achievement reports</li>
                    <li>• Parent success stories</li>
                    <li>• Facility showcase series</li>
                    <li>• Community impact stories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TINTA SEO Strategy - Updated */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            TINTA SEO Growth Strategy: Q2-Q3 2025
          </h2>

          {/* Competitive Analysis */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Current Performance</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Branded Search</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 dark:text-green-400">↗</span>
                      "sekolah tinta" (900/mo, #2)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500 dark:text-yellow-400">→</span>
                      "stem school malaysia" (450/mo, #8)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Gap Analysis</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 dark:text-red-400">•</span>
                      Limited STEM education visibility
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 dark:text-red-400">•</span>
                      Missing from innovation keywords
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 dark:text-red-400">•</span>
                      Low project-based learning rankings
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Market Opportunity</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">High-Value Keywords</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      "stem education malaysia" (800/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      "project based learning school" (350/mo)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      "innovative school selangor" (250/mo)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Competitor Insights</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      Strong STEM program showcase
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      Innovation lab highlights
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      Student project portfolios
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Q2: Content Development</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Priority Pages</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Advanced STEM Curriculum</li>
                    <li>• Innovation Lab Showcase</li>
                    <li>• Project Portfolio Gallery</li>
                    <li>• Student Success Stories</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Content Types</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• STEM Project Showcases</li>
                    <li>• Innovation Workshops</li>
                    <li>• Competition Achievements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Q2-Q3: Technical SEO</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Site Structure</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Program-specific sections</li>
                    <li>• Location landing pages</li>
                    <li>• Academic level hubs</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technical Tasks</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Mobile optimization</li>
                    <li>• Schema markup</li>
                    <li>• Internal linking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Q3: Local SEO</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Local Optimization</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• GMB optimization</li>
                    <li>• Local citations</li>
                    <li>• Area-specific content</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Target Areas</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Selangor region</li>
                    <li>• Nearby townships</li>
                    <li>• Educational hubs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* KPIs & Targets */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Traffic Goals</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Organic Growth</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">Q2:</span>
                      Increase traffic by 50% (baseline: 257)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">Q3:</span>
                      Double Q2 traffic
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Keyword Targets</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">→</span>
                      Top 5 for "international school selangor"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">→</span>
                      Top 3 for STEM education terms
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Conversion Strategy</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Lead Generation</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">1.</span>
                      STEM workshop registration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">2.</span>
                      Virtual campus tour
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">3.</span>
                      Project showcase events
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Target Metrics</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      Visit-to-Lead: {'>='} 2.5%
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      Lead-to-Tour: {'>='} 35%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Bridge Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium text-sm mb-6">
              Beyond SEO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Transforming GAINS into a Digital-First Education Group
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              While SEO is crucial for visibility, true digital transformation requires a holistic approach. Here's how we can revolutionize every aspect of your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Current State</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Fragmented student data</li>
                <li>• Manual marketing processes</li>
                <li>• Limited parent engagement</li>
                <li>• Siloed school operations</li>
              </ul>
            </div>

            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Transformation Goals</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Unified student journey</li>
                <li>• Automated marketing flows</li>
                <li>• Real-time parent insights</li>
                <li>• Integrated operations</li>
              </ul>
            </div>

            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Expected Impact</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 40% operational efficiency</li>
                <li>• 65% faster lead response</li>
                <li>• 85% parent satisfaction</li>
                <li>• 50% cost optimization</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mb-8">
              <span className="text-sm">Proposed Technology Stack</span>
              <span className="w-px h-4 bg-blue-200 dark:bg-blue-700"></span>
              <span className="text-sm font-medium">CDP + ERP + AI</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Let's explore how an integrated technology ecosystem can transform GAINS Education into a data-driven, future-ready institution.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Strategy Overview */}
      <section id="digital" className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Omnichannel Marketing & Business Strategy 2025</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* CDP Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Customer Data Platform</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Unified parent/student profiles</li>
                <li>• Journey stage tracking</li>
                <li>• Behavioral scoring</li>
                <li>• Multi-touchpoint integration</li>
              </ul>
            </div>

            {/* ERP Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">ERP System</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Centralized operations</li>
                <li>• Multi-school management</li>
                <li>• Financial integration</li>
                <li>• Resource optimization</li>
              </ul>
            </div>

            {/* Marketing Automation Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Marketing Automation</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Personalized campaigns</li>
                <li>• Lead nurturing flows</li>
                <li>• Event automation</li>
                <li>• ROI tracking</li>
              </ul>
            </div>
          </div>

          {/* AI Agents Card - Centered */}
          <div className="mt-8 flex justify-center">
            <div className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md w-full">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform text-center">🤖</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white text-center">AI Agents</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Content Generation & Optimization</li>
                <li>• Teacher-AI Collaborative Workflows</li>
                <li>• Multi-channel Campaign Management</li>
                <li>• Performance Analytics & Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Lifecycle Journey - Enhanced UI */}
      <section id="journey" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent dark:to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium text-sm mb-4">
              Student Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Complete Educational Lifecycle
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From early childhood at Genius Aulad to international education and beyond, creating lifelong connections with our institutions
            </p>
          </div>

          <div className="relative space-y-24 md:space-y-0 md:grid md:grid-cols-[240px_1fr] md:gap-8">
            {/* Stage 1: Genius Aulad */}
            <div className="relative">
              <div className="sticky top-24 md:pt-8">
                <div className="flex items-center gap-4 md:justify-end md:pr-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full opacity-75 blur-sm animate-pulse"></div>
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center border-2 border-white dark:border-gray-950 shadow-lg">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1 md:text-right">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Genius Aulad</h3>
                    <p className="text-gray-500 dark:text-gray-400">Ages 2–6</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:pt-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">🌱</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Early Years Foundation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Islamic-based Early Childhood Education</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🌍</span>
                        Montessori + Islamic Values
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🎯</span>
                        Holistic Development
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">📚</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Core Curriculum</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive Learning Journey</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🧠</span>
                        Cognitive Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🤝</span>
                        Social Skills Building
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💫</span>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 dark:text-white">Development Focus</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Building strong foundations in Islamic values, cognitive development, and social skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2: Primary Education */}
            <div className="relative">
              <div className="sticky top-24 md:pt-8">
                <div className="flex items-center gap-4 md:justify-end md:pr-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full opacity-75 blur-sm animate-pulse"></div>
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center border-2 border-white dark:border-gray-950 shadow-lg">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1 md:text-right">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Primary Education</h3>
                    <p className="text-gray-500 dark:text-gray-400">Ages 7–12</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:pt-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">🎓</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">IDRISSI Primary</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cambridge + Islamic Values</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">📚</span>
                        International Curriculum
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🌱</span>
                        Character Development
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">🔬</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">TINTA Primary</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">STEM + Project-Based Learning</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🚀</span>
                        Hands-on STEM Projects
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">💡</span>
                        Innovation Focus
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 dark:text-white">Digital Integration</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Blending traditional learning with modern technology and interactive digital tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3: Secondary Education */}
            <div className="relative">
              <div className="sticky top-24 md:pt-8">
                <div className="flex items-center gap-4 md:justify-end md:pr-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full opacity-75 blur-sm animate-pulse"></div>
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center border-2 border-white dark:border-gray-950 shadow-lg">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1 md:text-right">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Secondary Education</h3>
                    <p className="text-gray-500 dark:text-gray-400">Ages 13–17</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:pt-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute -left-3 top-12 hidden md:block">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent dark:from-blue-400"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">🎓</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">IDRISSI Secondary</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">IGCSE + Islamic Values</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🌍</span>
                        International Curriculum
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🌱</span>
                        Character Development
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">🔬</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">TINTA Secondary</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">SPM + STEM Excellence</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🚀</span>
                        Advanced STEM Programs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">💡</span>
                        Innovation Focus
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        🎯
                      </span>
                      Academic Excellence
                    </h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl group-hover:scale-[1.02] transition-all">
                        <h6 className="font-medium text-gray-900 dark:text-white mb-2">Key Programs</h6>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">📚</span>
                            University Preparation
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🎯</span>
                            Career Guidance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        💫
                      </span>
                      Student Development
                    </h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl group-hover:scale-[1.02] transition-all">
                        <h6 className="font-medium text-gray-900 dark:text-white mb-2">Enrichment</h6>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🌟</span>
                            Leadership Programs
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🤝</span>
                            Community Projects
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 dark:text-white">Future Ready</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Preparing students for higher education and future careers with comprehensive support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4: Alumni Network */}
            <div className="relative">
              <div className="sticky top-24 md:pt-8">
                <div className="flex items-center gap-4 md:justify-end md:pr-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full opacity-75 blur-sm animate-pulse"></div>
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center border-2 border-white dark:border-gray-950 shadow-lg">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                  </div>
                  <div className="flex-1 md:text-right">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Alumni Network</h3>
                    <p className="text-gray-500 dark:text-gray-400">Lifelong Connection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:pt-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute -left-3 top-12 hidden md:block">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent dark:from-blue-400"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        🤝
                      </span>
                      Alumni Engagement
                    </h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl group-hover:scale-[1.02] transition-all">
                        <h6 className="font-medium text-gray-900 dark:text-white mb-2">Network Benefits</h6>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🎓</span>
                            Mentorship Programs
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">💼</span>
                            Career Opportunities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        🌟
                      </span>
                      Community Impact
                    </h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl group-hover:scale-[1.02] transition-all">
                        <h6 className="font-medium text-gray-900 dark:text-white mb-2">Giving Back</h6>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">🤝</span>
                            Alumni Initiatives
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">💫</span>
                            Success Stories
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💫</span>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 dark:text-white">Lifelong Community</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Building a strong network of successful alumni who continue to contribute to the GAINS community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Integration */}
      <section id="systems" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Systems Integration</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* CDP Features */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">CDP Features</h3>
              <ul className="space-y-6">
                {[
                  "Unified Parent Profile with Complete Timeline",
                  "Advanced Segmentation Engine",
                  "Multi-touchpoint Data Integration",
                  "Automated Journey Mapping"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4 group/item">
                    <span className="text-blue-500 dark:text-blue-400 text-xl">✓</span>
                    <span className="text-gray-600 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ERP Features */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">ERP Features</h3>
              <ul className="space-y-6">
                {[
                  "Centralized Multi-school Management",
                  "Integrated Finance & HR Systems",
                  "Mobile-first Parent & Teacher Portals",
                  "Real-time Analytics Dashboard"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4 group/item">
                    <span className="text-blue-500 dark:text-blue-400 text-xl">✓</span>
                    <span className="text-gray-600 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Implementation Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                timeline: "1-3 months",
                features: "CDP MVP + Lead tracking + ERP admissions"
              },
              {
                phase: "Phase 2",
                timeline: "4-6 months",
                features: "Student management, fees, parent app"
              },
              {
                phase: "Phase 3",
                timeline: "7-12 months",
                features: "Marketing automation + alumni CDP + analytics dashboards"
              }
            ].map((phase) => (
              <div key={phase.phase} className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{phase.phase}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{phase.timeline}</p>
                <p className="text-gray-600 dark:text-gray-300">{phase.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Transform Your Marketing Strategy?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Hi, I'm Amir Ariff – a strategic marketer with deep expertise in digital technology and growth marketing. I'm ready to help GAINS Education Group achieve its transformation goals for 2025.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              With proven experience in customer journey optimization, marketing automation, and comprehensive digital strategy, I can help elevate your schools to new heights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:ariffseh@gmail.com"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 font-semibold text-lg"
            >
              Let's Discuss Your Vision
            </Link>
            <Link
              href="/amirariff-resume.pdf"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all hover:scale-105 font-semibold text-lg"
            >
              View My Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Remove Schedule Demo */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/gains-logo.png"
                alt="Gains Education Group"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Transforming education through innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Schools</h4>
              <ul className="space-y-2">
                <li><Link href="#schools" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">IDRISSI</Link></li>
                <li><Link href="#schools" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">TINTA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link href="#digital" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">CDP Platform</Link></li>
                <li><Link href="#digital" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ERP System</Link></li>
                <li><Link href="#digital" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Marketing Automation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Get Started</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-600 dark:text-gray-300">
            <p>© 2025 Gains Education Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
