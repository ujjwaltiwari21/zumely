"use client"

import { useState, useEffect, useCallback } from "react"
import { 
  ArrowRight, Briefcase, Building2, MapPin, Clock, 
  Search, Filter, X, ExternalLink, Loader2, 
  DollarSign, GraduationCap, Calendar, Bookmark,
  BookmarkCheck, ChevronLeft, ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)
  const [savedJobs, setSavedJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const jobsPerPage = 10

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("savedJobs")
    if (saved) {
      setSavedJobs(JSON.parse(saved))
    }
  }, [])

  // Save to localStorage when savedJobs changes
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs))
  }, [savedJobs])

  // Fetch jobs from API
  const fetchJobs = useCallback(async () => {
    setLoading(true)
    try {
      const query = searchTerm || "software developer"
      const locationQuery = location ? `&location=${encodeURIComponent(location)}` : ""
      const jobTypeQuery = jobType ? `&job_type=${jobType}` : ""
      
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}${locationQuery}${jobTypeQuery}&page=${currentPage}&num_pages=1`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
            "x-rapidapi-host": "jsearch.p.rapidapi.com",
          },
        }
      )
      const data = await response.json()
      
      if (data.data) {
        setJobs(data.data)
        setTotalPages(Math.ceil(data.data.length / jobsPerPage))
      }
    } catch (error) {
      console.error("Error fetching jobs:", error)
      // Fallback to sample data if API fails
      setJobs([
        {
          job_id: "1",
          job_title: "Senior Software Engineer",
          employer_name: "Tech Corp",
          job_city: "Remote",
          job_country: "US",
          job_employment_type: "FULLTIME",
          job_description: "Looking for experienced software engineer...",
          job_apply_link: "https://example.com",
          job_min_salary: 120000,
          job_max_salary: 180000,
          job_salary_currency: "USD",
          employer_logo: null,
        },
        {
          job_id: "2",
          job_title: "Frontend Developer",
          employer_name: "Design Studio",
          job_city: "Bangalore",
          job_country: "IN",
          job_employment_type: "FULLTIME",
          job_description: "React, Next.js expert needed...",
          job_apply_link: "https://example.com",
          job_min_salary: 800000,
          job_max_salary: 1200000,
          job_salary_currency: "INR",
          employer_logo: null,
        },
      ])
    } finally {
      setLoading(false)
    }
  }, [searchTerm, location, jobType, currentPage])

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchJobs()
  }

  const toggleSavedJob = (job) => {
    const isSaved = savedJobs.some(j => j.job_id === job.job_id)
    if (isSaved) {
      setSavedJobs(savedJobs.filter(j => j.job_id !== job.job_id))
    } else {
      setSavedJobs([...savedJobs, job])
    }
  }

  const isSaved = (jobId) => savedJobs.some(j => j.job_id === jobId)

  const formatSalary = (min, max, currency) => {
    if (!min && !max) return "Salary not disclosed"
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      maximumFractionDigits: 0,
    })
    if (min && max) return `${formatter.format(min)} - ${formatter.format(max)}`
    if (min) return `From ${formatter.format(min)}`
    return `Up to ${formatter.format(max)}`
  }

  const getJobTypeBadge = (type) => {
    const types = {
      FULLTIME: { label: "Full-time", color: "bg-green-500/10 text-green-600" },
      PARTTIME: { label: "Part-time", color: "bg-blue-500/10 text-blue-600" },
      CONTRACT: { label: "Contract", color: "bg-orange-500/10 text-orange-600" },
      INTERN: { label: "Internship", color: "bg-purple-500/10 text-purple-600" },
      REMOTE: { label: "Remote", color: "bg-teal-500/10 text-teal-600" },
    }
    return types[type] || { label: type || "Full-time", color: "bg-gray-500/10 text-gray-600" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Briefcase size={14} />
            Live Job Portal
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Find Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream Job</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Search millions of jobs from Indeed, LinkedIn, Glassdoor, and more
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, state, or remote"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:shadow-lg transition-all"
            >
              Search Jobs
            </button>
          </div>
        </form>

        {/* Filter Toggle for Mobile */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10"
          >
            <Filter size={16} />
            Filters
            {(jobType) && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
          </button>
          <p className="text-sm text-slate-500">{jobs.length} jobs found</p>
        </div>

        {/* Filters Panel */}
        <div className={`max-w-4xl mx-auto mb-6 transition-all ${filtersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                >
                  <option value="">All Job Types</option>
                  <option value="FULLTIME">Full-time</option>
                  <option value="PARTTIME">Part-time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="INTERN">Internship</option>
                  <option value="REMOTE">Remote</option>
                </select>
                {jobType && (
                  <button
                    onClick={() => setJobType("")}
                    className="text-xs text-red-500 flex items-center gap-1"
                  >
                    <X size={12} /> Clear
                  </button>
                )}
              </div>
              <p className="text-sm text-slate-500 hidden md:block">{jobs.length} jobs found</p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        )}

        {/* Jobs Grid */}
        {!loading && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-4">
              {jobs.map((job, idx) => {
                const jobTypeInfo = getJobTypeBadge(job.job_employment_type)
                const isJobSaved = isSaved(job.job_id)
                return (
                  <div
                    key={job.job_id || idx}
                    className={`bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-5 transition-all hover:shadow-md cursor-pointer ${selectedJob?.job_id === job.job_id ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        {job.employer_logo ? (
                          <img src={job.employer_logo} alt={job.employer_name} className="w-10 h-10 rounded-lg object-cover" />
                        ) : (
                          <Building2 size={20} className="text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">{job.job_title}</h3>
                            <p className="text-sm text-slate-500">{job.employer_name}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleSavedJob(job)
                            }}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            {isJobSaved ? (
                              <BookmarkCheck size={18} className="text-blue-500 fill-blue-500" />
                            ) : (
                              <Bookmark size={18} className="text-slate-400" />
                            )}
                          </button>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-2 text-xs">
                          <span className={`px-2 py-0.5 rounded-full ${jobTypeInfo.color}`}>
                            {jobTypeInfo.label}
                          </span>
                          {(job.job_city || job.job_country) && (
                            <span className="flex items-center gap-1 text-slate-500">
                              <MapPin size={12} />
                              {[job.job_city, job.job_country].filter(Boolean).join(", ")}
                            </span>
                          )}
                          {(job.job_min_salary || job.job_max_salary) && (
                            <span className="flex items-center gap-1 text-slate-500">
                              <DollarSign size={12} />
                              {formatSalary(job.job_min_salary, job.job_max_salary, job.job_salary_currency)}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-slate-500 mt-3 line-clamp-2">
                          {job.job_description?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Job Details Sidebar */}
            <div className="lg:col-span-1">
              {selectedJob ? (
                <div className="sticky top-20 bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      {selectedJob.employer_logo ? (
                        <img src={selectedJob.employer_logo} alt={selectedJob.employer_name} className="w-10 h-10 rounded-lg object-cover" />
                      ) : (
                        <Building2 size={24} className="text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 dark:text-white">{selectedJob.job_title}</h3>
                      <p className="text-sm text-slate-500">{selectedJob.employer_name}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <MapPin size={16} className="text-slate-400" />
                      <span>{[selectedJob.job_city, selectedJob.job_country].filter(Boolean).join(", ") || "Location not specified"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Clock size={16} className="text-slate-400" />
                      <span>{getJobTypeBadge(selectedJob.job_employment_type).label}</span>
                    </div>
                    {(selectedJob.job_min_salary || selectedJob.job_max_salary) && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <DollarSign size={16} className="text-slate-400" />
                        <span>{formatSalary(selectedJob.job_min_salary, selectedJob.job_max_salary, selectedJob.job_salary_currency)}</span>
                      </div>
                    )}
                    {selectedJob.job_posted_at_datetime_utc && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <Calendar size={16} className="text-slate-400" />
                        <span>Posted: {new Date(selectedJob.job_posted_at_datetime_utc).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Description</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedJob.job_description?.replace(/<[^>]*>/g, '') || "No description available."}
                    </p>
                  </div>

                  <a
                    href={selectedJob.job_apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:shadow-lg transition-all"
                  >
                    Apply Now <ExternalLink size={16} />
                  </a>
                </div>
              ) : (
                <div className="sticky top-20 bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-8 text-center">
                  <Briefcase size={40} className="mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-500 dark:text-slate-400">Select a job to view details</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-50"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}