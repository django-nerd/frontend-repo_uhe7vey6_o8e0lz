import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0d12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
              >
                Next‑gen healthcare, powered by intelligent technology
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-lg text-white/70 max-w-xl"
              >
                Experience precision care with real‑time insights, secure records, and seamless telemedicine — all in one platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#book"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-gray-900 font-medium hover:bg-blue-50 transition"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 rounded-md"
                >
                  Explore Services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
              >
                {[
                  ['24/7', 'Virtual care'],
                  ['99.99%', 'Data security'],
                  ['2M+', 'Patients served'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg bg-white/5 border border-white/10 p-4 text-white/80">
                    <div className="text-2xl font-semibold text-white">{k}</div>
                    <div className="text-xs mt-1">{v}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_50%)] opacity-60" />
    </section>
  )
}
