import { useState } from 'react'
import { Menu, Stethoscope, X, Hospital, Phone, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Technology', href: '#technology' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">PulseCare</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm">
              <Phone className="h-4 w-4" />
              Contact
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition"
            >
              <Hospital className="h-4 w-4" /> Book Appointment
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-white/90">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#book" className="mt-2 inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium">
                <User className="h-4 w-4" /> Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
