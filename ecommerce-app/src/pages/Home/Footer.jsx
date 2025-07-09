import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-primary py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-3">
              Fashion Craze
            </h3>
            <p className="text-sm mb-2 text-primary/90">
              Discover your sparkle with our handpicked collection of stylish,
              affordable jewelry ✨
            </p>
            <p className="text-xs text-primary/50 mt-4">
              &copy; 2025 Fashion Craze. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-accent transition text-primary/80"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="hover:text-accent transition text-primary/80"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-accent transition text-primary/80"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-accent transition text-primary/80"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Customer Care
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/faq"
                  className="hover:text-accent transition text-primary/80"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-accent transition text-primary/80"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-accent transition text-primary/80"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-accent transition text-primary/80"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Stay in Touch
            </h4>
            <form className="flex flex-col space-y-2 text-sm">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg border border-primary/30 bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 text-primary placeholder-primary/50"
              />
              <button className="bg-accent text-buttonText py-2 px-4 rounded-lg hover:bg-accent/90 transition font-medium">
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 mt-4 text-primary/80">
              <a href="#" className="hover:text-accent transition">
                Instagram
              </a>
              <a href="#" className="hover:text-accent transition">
                Facebook
              </a>
              <a href="#" className="hover:text-accent transition">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}
