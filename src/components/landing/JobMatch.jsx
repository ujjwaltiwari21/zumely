import { Briefcase, Building2, MapPin, ArrowUpRight } from "lucide-react"

const jobs = [
  { 
    role: "Frontend Developer", 
    company: "Google", 
    location: "Bangalore", 
    match: "98%",
  },
  { 
    role: "Software Engineer", 
    company: "Microsoft", 
    location: "Hyderabad", 
    match: "95%",
  },
  { 
    role: "Full Stack Developer", 
    company: "Zomato", 
    location: "Gurugram", 
    match: "92%",
  },
  // Adding more items to demonstrate the 3x3 grid on desktop
  { 
    role: "UI/UX Designer", 
    company: "Adobe", 
    location: "Noida", 
    match: "90%",
  },
  { 
    role: "Backend Engineer", 
    company: "Amazon", 
    location: "Bangalore", 
    match: "88%",
  },
  { 
    role: "DevOps Specialist", 
    company: "Netflix", 
    location: "Remote", 
    match: "85%",
  },
]

export function JobMatch() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white dark:bg-[#020617] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/5 border border-blue-600/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">AI Placement Engine</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-slate-800 dark:text-white tracking-tighter leading-tight">
              Instant Career <br />
              <span className="font-semibold text-blue-600">Opportunity Matching.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl">
              Our AI engine matches your profile with top-tier job descriptions with 99% accuracy.
            </p>
          </div>
        </div>

        {/* Responsive Grid System */}
        {/* Mobile: 1 Column | Tablet/Small Desktop: 2 Columns | Large Desktop: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {jobs.map((job, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col p-8 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Top: Icon & Match Score */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:bg-blue-600 transition-colors duration-500">
                  <Building2 size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">AI Match</span>
                  <span className="text-2xl font-light text-emerald-500">{job.match}</span>
                </div>
              </div>

              {/* Card Body: Job Role & Company */}
              <div className="flex-1 space-y-2 mb-8">
                <h3 className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white tracking-tight">
                  {job.role}
                </h3>
                <p className="text-base font-light text-slate-500 dark:text-slate-400">{job.company}</p>
              </div>

              {/* Card Footer: Location/Type & Action */}
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-col gap-1 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={12} /> Full-time</span>
                </div>
                
                <button className="flex items-center gap-2 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
                  <span className="text-xs font-semibold px-1 hidden sm:block">View Detail</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}