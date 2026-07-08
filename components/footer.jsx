import { Mail, Phone} from "lucide-react";
export default function Footer() {
    return(
        <>
          {/* Footer */}
        <footer className="select-none mt-16">
          <div className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-8 text-center md:text-left">
            {/* Contact Section */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-xl md:text-2xl font-bold mb-5">📞 Contact Us</h2>

              <p className="text-gray-700 leading-7">
                Have any questions or suggestions? We'd love to hear from you.
              </p>

              <div className="mt-5 space-y-3">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-700" />
                  <a
                    href="mailto:aliuoscs@gmail.com"
                    className="text-blue-700 hover:text-blue-300 transition"
                  >
                    aliuoscs@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-500" />
                  <a
                    href="https://wa.me/923171832631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-300 transition"
                  >
                    +92 317 1832631
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-xl md:text-2xl font-bold mb-5">🌐 Follow Us</h2>

              <p className="text-gray-700 mb-6">
                Stay connected for the latest study notes and educational
                updates.
              </p>

              <div className="flex items-center gap-5">
                <a
                  href="https://www.facebook.com/who.ali10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:scale-110 transition duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  <img src="/facebook.png" alt="Facebook" className="w-7 h-7" />
                </a>

                <a
                  href="https://www.instagram.com/who.ali10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:scale-110 transition duration-300 shadow-lg hover:shadow-pink-500/50"
                >
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    className="w-7 h-7"
                  />
                </a>

                <a
                  href="https://wa.me/923171832631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:scale-110 transition duration-300 shadow-lg hover:shadow-green-500/50"
                >
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
                </a>

                <a
                  href="https://www.threads.net/@who.ali10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:scale-110 transition duration-300 shadow-lg hover:shadow-gray-500/50"
                >
                  <img src="/threads.png" alt="Threads" className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-black">Ali Academy</span>.
                All Rights Reserved.
              </p>

              <p className="text-sm text-gray-600 mt-2 md:mt-0">
                Made with ❤️ for Students
              </p>
            </div>
          </div>
        </footer>
        </>
    )
}