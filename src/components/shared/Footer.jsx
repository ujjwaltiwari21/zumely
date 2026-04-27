import { Mail, MapPin, ArrowUpRight, ShieldCheck, Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const SocialLinks = [
    { name: 'Instagram', hoverColor: 'group-hover:text-[#E4405F]', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z' },
    { name: 'X', hoverColor: 'group-hover:text-white', path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z' },
    { name: 'LinkedIn', hoverColor: 'group-hover:text-[#0077B5]', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'GitHub', hoverColor: 'group-hover:text-white', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
    { name: 'Facebook', hoverColor: 'group-hover:text-[#1877F2]', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }
  ]

  return (
    <footer className="relative bg-[#020617] text-slate-400 py-24 overflow-hidden border-t border-white/5 font-sans">
      
      {/* Dynamic Glass Circles */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 border border-white/20">
                <Zap size={22} className="text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">Zumely<span className="text-blue-500">.</span>ai</span>
            </div>
            
            <p className="text-[14px] leading-relaxed font-light text-slate-400 max-w-sm">
              The world's most advanced <strong>AI career ecosystem</strong>. Optimizing professional identities for the 2026 market using <strong>neural ATS analysis</strong>.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {SocialLinks.map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  aria-label={social.name}
                  className="group w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 shadow-lg"
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className={`text-slate-500 transition-colors duration-300 ${social.hoverColor}`}
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">Services</h4>
            <ul className="space-y-4 text-[14px] font-light">
              <li><a href="#" className="hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Neural Resume Builder</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all hover:translate-x-1 inline-block">ATS Deep-Scan Audit</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Career Trajectory</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">Company</h4>
            <ul className="space-y-4 text-[14px] font-light">
              <li><a href="#" className="hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Success Reports</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Privacy Protocol</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">Support</h4>
            <div className="p-6 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2rem] space-y-5">
              <address className="not-italic space-y-4 text-[13px] font-light">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-blue-500 shrink-0" />
                  <span className="text-slate-300">Badarpur, New-Delhi<br />India, 110044</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-blue-500 shrink-0" />
                  <a href="mailto:hello@zumely.ai" className="text-slate-300 hover:text-white transition-colors">hello@zumely.ai</a>
                </div>
              </address>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-widest">ISO Secure</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-medium tracking-[0.15em] uppercase">
          <p className="opacity-40">© {currentYear} Zumely AI. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-500">Nodes Active</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              English (Global) <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}