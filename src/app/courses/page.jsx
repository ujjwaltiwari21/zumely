"use client"

import { ArrowRight, GraduationCap, BookOpen, Award, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  // Sample courses (placeholder data)
  const sampleCourses = [
    { title: "Complete Web Development Bootcamp", students: "15.2k", duration: "40 hours", level: "Beginner" },
    { title: "React - The Complete Guide", students: "12.8k", duration: "35 hours", level: "Intermediate" },
    { title: "Python for Data Science", students: "9.5k", duration: "28 hours", level: "Beginner" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <GraduationCap size={14} />
            Learning Platform
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Upskill with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Premium Courses</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Learn from industry experts and advance your career
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 text-center border border-purple-200/20">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              📚 <span className="font-semibold">Course library coming soon!</span> Get ready to learn from 100+ expert-led courses.
            </p>
          </div>
        </div>

        {/* Sample Courses */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sampleCourses.map((course, idx) => (
              <div key={idx} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <BookOpen size={18} className="text-white" />
                </div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-2">{course.title}</h4>
                <div className="space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-2"><Users size={12} /> {course.students} students</div>
                  <div className="flex items-center gap-2"><Clock size={12} /> {course.duration}</div>
                  <div className="flex items-center gap-2"><Award size={12} /> {course.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-6 md:p-8">
            <GraduationCap size={40} className="mx-auto mb-4 text-slate-400" />
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Interactive courses, quizzes, certificates, and more are coming soon!
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}