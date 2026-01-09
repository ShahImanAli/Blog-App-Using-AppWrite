import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-white border-t border-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <Logo width="90px" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  &copy; 2026 MegaBlog. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
                Company
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
                Support
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
                Legal
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
