import { HeartPulse, ShieldCheck, Video, Cpu, Microscope, UserCog } from 'lucide-react'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="rounded-md p-2 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 border border-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

export default function Sections() {
  const features = [
    { icon: HeartPulse, title: 'Remote Monitoring', desc: 'Continuous vitals tracking and alerts for proactive care.' },
    { icon: ShieldCheck, title: 'HIPAA-grade Security', desc: 'End-to-end encryption and role-based access controls.' },
    { icon: Video, title: 'Telemedicine', desc: 'HD video consults with integrated e-prescriptions.' },
    { icon: Cpu, title: 'AI Diagnostics', desc: 'Assistive algorithms to support clinical decisions.' },
    { icon: Microscope, title: 'Lab Integrations', desc: 'Automated results syncing and visual reports.' },
    { icon: UserCog, title: 'Patient Portal', desc: 'Appointments, records, and messaging in one place.' },
  ]

  return (
    <section id="services" className="relative bg-[#0a0d12] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Trusted care, modern experience</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A comprehensive suite designed for hospitals, clinics, and telehealth providers.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
