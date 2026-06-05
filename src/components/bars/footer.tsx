import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { Link as ReactScroll } from "react-scroll"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Institute Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Paradise Computer Institute</h3>
            <p className="mb-4">
              Empowering students with cutting-edge technology skills since 2005. Join us to shape your future in the
              digital world.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <ReactScroll to={"facilities"} spy={true} smooth={true} offset={-150} duration={500} className="hover:text-teal-400 transition-colors cursor-pointer ">
                  Facilities
                </ReactScroll>
              </li>
              <li>
                <Link to="/sign-in" className="hover:text-teal-400 transition-colors">
                  Certificate
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  Tally ERP
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  MS Office Suite
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>Mandi Naseed Khan Shia College Campus, Jaunpur-1</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>+91 9889255485</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>pcisajid.110@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p>&copy; {currentYear} Paradise Computer Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
