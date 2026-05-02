"use client"

import React, { useState, useEffect } from "react"
import { 
  User, Mail, Phone, MapPin, Calendar, Briefcase, 
  GraduationCap, Wrench, Link2, Bell, Shield, Globe,
  Save, Edit2, Camera, Award, FileText, Download, 
  Eye, TrendingUp, CheckCircle, X, Plus, Trash2
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  // User Data State
  const [userData, setUserData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    location: "",
    dob: "",
    
    // Professional Info
    jobTitle: "",
    company: "",
    experience: "",
    industry: "",
    
    // Education
    education: [{ degree: "", college: "", year: "", percentage: "" }],
    
    // Skills
    skills: [{ name: "", level: "Intermediate" }],
    
    // Certifications
    certifications: [{ name: "", issuer: "", year: "" }],
    
    // Social Links
    linkedin: "",
    github: "",
    twitter: "",
    portfolio: "",
    
    // Settings
    emailNotifications: true,
    pushNotifications: false,
    profileVisibility: "public",
    language: "English"
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("userProfile")
    if (savedData) {
      setUserData(JSON.parse(savedData))
    }
  }, [])

  // Save data
  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(userData))
    setIsEditing(false)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  // Add/Remove functions
  const addEducation = () => {
    setUserData({
      ...userData,
      education: [...userData.education, { degree: "", college: "", year: "", percentage: "" }]
    })
  }

  const removeEducation = (index) => {
    const newEducation = [...userData.education]
    newEducation.splice(index, 1)
    setUserData({ ...userData, education: newEducation })
  }

  const addSkill = () => {
    setUserData({
      ...userData,
      skills: [...userData.skills, { name: "", level: "Intermediate" }]
    })
  }

  const removeSkill = (index) => {
    const newSkills = [...userData.skills]
    newSkills.splice(index, 1)
    setUserData({ ...userData, skills: newSkills })
  }

  const addCertification = () => {
    setUserData({
      ...userData,
      certifications: [...userData.certifications, { name: "", issuer: "", year: "" }]
    })
  }

  const removeCertification = (index) => {
    const newCertifications = [...userData.certifications]
    newCertifications.splice(index, 1)
    setUserData({ ...userData, certifications: newCertifications })
  }

  // Tabs for mobile
  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "social", label: "Social", icon: Link2 },
    { id: "settings", label: "Settings", icon: SettingsIconPlaceholder },
  ]

  // Placeholder for Settings icon
  function SettingsIconPlaceholder(props) {
    return <Shield {...props} />
  }

  // Stats
  const stats = [
    { label: "Profile Views", value: "247", icon: Eye, change: "+12 this week" },
    { label: "Applications", value: "18", icon: FileText, change: "3 in review" },
    { label: "Resume Downloads", value: "42", icon: Download, change: "+8 this month" },
    { label: "Profile Score", value: "85%", icon: TrendingUp, change: "Good" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-slide-in">
          <CheckCircle size={18} />
          <span className="text-sm">Profile saved successfully!</span>
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">My Profile</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your personal and professional information</p>
            </div>
            
            <button
              onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
                isEditing 
                  ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25" 
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
              }`}
            >
              {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 md:mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <stat.icon size={18} className="text-blue-500" />
                <span className="text-[10px] text-slate-400">{stat.change}</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden overflow-x-auto mb-4 -mx-1 px-1">
          <div className="flex gap-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Sidebar - Profile Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5 sticky top-4">
              
              {/* Profile Picture */}
              <div className="flex flex-col items-center text-center mb-5">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <User size={40} className="text-white" />
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center shadow-lg hover:bg-slate-600 transition-colors">
                      <Camera size={14} />
                    </button>
                  )}
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                  {userData.fullName || "Your Name"}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {userData.jobTitle || "Add Job Title"} {userData.company ? `at ${userData.company}` : ""}
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                  <MapPin size={12} />
                  <span>{userData.location || "Add Location"}</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-300">{userData.email || "Email not added"}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-300">{userData.phone || "Phone not added"}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase size={16} className="text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-300">
                    {userData.experience ? `${userData.experience} years experience` : "Experience not added"}
                  </span>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600 dark:text-slate-400">Profile Completion</span>
                  <span className="text-blue-500 font-semibold">85%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Forms */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* Personal Information */}
            {(activeTab === "personal" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <User size={18} className="text-blue-500" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={userData.fullName}
                      onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Enter your full name"
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      disabled={!isEditing}
                      placeholder="your@email.com"
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      disabled={!isEditing}
                      placeholder="+91 1234567890"
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Location</label>
                    <input
                      type="text"
                      value={userData.location}
                      onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                      disabled={!isEditing}
                      placeholder="City, Country"
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Professional Information */}
            {(activeTab === "professional" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase size={18} className="text-blue-500" />
                  Professional Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Job Title</label>
                    <input
                      type="text"
                      value={userData.jobTitle}
                      onChange={(e) => setUserData({ ...userData, jobTitle: e.target.value })}
                      disabled={!isEditing}
                      placeholder="e.g., Senior Software Engineer"
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Company</label>
                    <input
                      type="text"
                      value={userData.company}
                      onChange={(e) => setUserData({ ...userData, company: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Company Name"
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Years of Experience</label>
                    <select
                      value={userData.experience}
                      onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
                      disabled={!isEditing}
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    >
                      <option value="">Select Experience</option>
                      <option value="0">Fresher (0-1 years)</option>
                      <option value="1">1-3 years</option>
                      <option value="3">3-5 years</option>
                      <option value="5">5-8 years</option>
                      <option value="8">8+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Industry</label>
                    <select
                      value={userData.industry}
                      onChange={(e) => setUserData({ ...userData, industry: e.target.value })}
                      disabled={!isEditing}
                      className={`w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                        !isEditing ? "opacity-60" : ""
                      }`}
                    >
                      <option value="">Select Industry</option>
                      <option>Software Development</option>
                      <option>IT & Services</option>
                      <option>Banking & Finance</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Education Section */}
            {(activeTab === "education" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-blue-500" />
                    Education
                  </div>
                  {isEditing && (
                    <button onClick={addEducation} className="text-xs text-blue-500 flex items-center gap-1">
                      <Plus size={12} /> Add
                    </button>
                  )}
                </h3>
                
                <div className="space-y-4">
                  {userData.education.map((edu, idx) => (
                    <div key={idx} className="relative p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      {isEditing && (
                        <button
                          onClick={() => removeEducation(idx)}
                          className="absolute top-3 right-3 text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const newEdu = [...userData.education]
                            newEdu[idx].degree = e.target.value
                            setUserData({ ...userData, education: newEdu })
                          }}
                          disabled={!isEditing}
                          placeholder="Degree (e.g., B.Tech)"
                          className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                        />
                        <input
                          type="text"
                          value={edu.college}
                          onChange={(e) => {
                            const newEdu = [...userData.education]
                            newEdu[idx].college = e.target.value
                            setUserData({ ...userData, education: newEdu })
                          }}
                          disabled={!isEditing}
                          placeholder="College/University"
                          className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                        />
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) => {
                            const newEdu = [...userData.education]
                            newEdu[idx].year = e.target.value
                            setUserData({ ...userData, education: newEdu })
                          }}
                          disabled={!isEditing}
                          placeholder="Year (e.g., 2020-2024)"
                          className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                        />
                        <input
                          type="text"
                          value={edu.percentage}
                          onChange={(e) => {
                            const newEdu = [...userData.education]
                            newEdu[idx].percentage = e.target.value
                            setUserData({ ...userData, education: newEdu })
                          }}
                          disabled={!isEditing}
                          placeholder="Percentage/CGPA"
                          className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                        />
                      </div>
                    </div>
                  ))}
                  {userData.education.length === 0 && (
                    <p className="text-center text-slate-500 py-4">No education added yet</p>
                  )}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {(activeTab === "skills" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wrench size={18} className="text-blue-500" />
                    Skills & Expertise
                  </div>
                  {isEditing && (
                    <button onClick={addSkill} className="text-xs text-blue-500 flex items-center gap-1">
                      <Plus size={12} /> Add Skill
                    </button>
                  )}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, idx) => (
                    <div key={idx} className="relative group">
                      {isEditing ? (
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1.5">
                          <input
                            type="text"
                            value={skill.name}
                            onChange={(e) => {
                              const newSkills = [...userData.skills]
                              newSkills[idx].name = e.target.value
                              setUserData({ ...userData, skills: newSkills })
                            }}
                            placeholder="Skill name"
                            className="text-sm bg-transparent outline-none w-24"
                          />
                          <select
                            value={skill.level}
                            onChange={(e) => {
                              const newSkills = [...userData.skills]
                              newSkills[idx].level = e.target.value
                              setUserData({ ...userData, skills: newSkills })
                            }}
                            className="text-xs bg-transparent outline-none"
                          >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Expert</option>
                          </select>
                          <button onClick={() => removeSkill(idx)} className="text-red-500">
                            <X size={12} />
                          </button>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm">
                          {skill.name || "New Skill"}
                          {skill.level !== "Intermediate" && (
                            <span className="text-[10px] opacity-70">({skill.level})</span>
                          )}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications Section */}
            {(activeTab === "skills" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-blue-500" />
                    Certifications
                  </div>
                  {isEditing && (
                    <button onClick={addCertification} className="text-xs text-blue-500 flex items-center gap-1">
                      <Plus size={12} /> Add
                    </button>
                  )}
                </h3>
                
                <div className="space-y-3">
                  {userData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            value={cert.name}
                            onChange={(e) => {
                              const newCerts = [...userData.certifications]
                              newCerts[idx].name = e.target.value
                              setUserData({ ...userData, certifications: newCerts })
                            }}
                            placeholder="Certification name"
                            className="flex-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                          />
                          <input
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => {
                              const newCerts = [...userData.certifications]
                              newCerts[idx].issuer = e.target.value
                              setUserData({ ...userData, certifications: newCerts })
                            }}
                            placeholder="Issuer"
                            className="w-24 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                          />
                          <input
                            type="text"
                            value={cert.year}
                            onChange={(e) => {
                              const newCerts = [...userData.certifications]
                              newCerts[idx].year = e.target.value
                              setUserData({ ...userData, certifications: newCerts })
                            }}
                            placeholder="Year"
                            className="w-16 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                          />
                          <button onClick={() => removeCertification(idx)} className="text-red-500">
                            <Trash2 size={14} />
                          </button>
                        </>
                      ) : (
                        <div className="flex-1 p-3 rounded-xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                          <p className="font-medium text-sm text-slate-900 dark:text-white">{cert.name || "Certification name"}</p>
                          <p className="text-xs text-slate-500">{cert.issuer} • {cert.year}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Social Links - WITHOUT ICONS */}
            {(activeTab === "social" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Link2 size={18} className="text-blue-500" />
                  Social Links
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">LinkedIn</label>
                    <input
                      type="url"
                      value={userData.linkedin}
                      onChange={(e) => setUserData({ ...userData, linkedin: e.target.value })}
                      disabled={!isEditing}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">GitHub</label>
                    <input
                      type="url"
                      value={userData.github}
                      onChange={(e) => setUserData({ ...userData, github: e.target.value })}
                      disabled={!isEditing}
                      placeholder="https://github.com/username"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Twitter / X</label>
                    <input
                      type="url"
                      value={userData.twitter}
                      onChange={(e) => setUserData({ ...userData, twitter: e.target.value })}
                      disabled={!isEditing}
                      placeholder="https://twitter.com/username"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Portfolio Website</label>
                    <input
                      type="url"
                      value={userData.portfolio}
                      onChange={(e) => setUserData({ ...userData, portfolio: e.target.value })}
                      disabled={!isEditing}
                      placeholder="https://yourportfolio.com"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Settings */}
            {(activeTab === "settings" || !isMobile) && (
              <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Shield size={18} className="text-blue-500" />
                  Account Settings
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-slate-900 dark:text-white">Email Notifications</p>
                      <p className="text-xs text-slate-500">Receive updates about your applications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.emailNotifications}
                        onChange={(e) => setUserData({ ...userData, emailNotifications: e.target.checked })}
                        disabled={!isEditing}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-slate-900 dark:text-white">Push Notifications</p>
                      <p className="text-xs text-slate-500">Get real-time alerts on your device</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.pushNotifications}
                        onChange={(e) => setUserData({ ...userData, pushNotifications: e.target.checked })}
                        disabled={!isEditing}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </label>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">Profile Visibility</label>
                    <select
                      value={userData.profileVisibility}
                      onChange={(e) => setUserData({ ...userData, profileVisibility: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    >
                      <option value="public">Public - Everyone can see</option>
                      <option value="recruiters">Recruiters Only</option>
                      <option value="private">Private - Only me</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">Language</label>
                    <select
                      value={userData.language}
                      onChange={(e) => setUserData({ ...userData, language: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    >
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}