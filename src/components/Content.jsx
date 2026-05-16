import React from 'react';
import { Briefcase, GraduationCap, Code, PenTool } from 'lucide-react';

export const Projects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="glass p-6 hover:translate-y-[-4px] transition-transform">
        <div className="flex items-center gap-3 mb-4">
          <Code className="text-indigo-400" />
          <h3 className="text-xl font-semibold">Project {i}</h3>
        </div>
        <p className="text-slate-400 mb-4">A premium web application built with React and modern technologies.</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs">React</span>
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs">Vite</span>
        </div>
      </div>
    ))}
  </div>
);

export const Career = () => (
  <div className="mt-8 space-y-6">
    {[
      { title: 'Software Engineer', company: 'Tech Corp', year: '2023 - Present' },
      { title: 'Junior Developer', company: 'Startup Hub', year: '2021 - 2023' }
    ].map((job, i) => (
      <div key={i} className="glass p-6 flex items-start gap-4">
        <div className="p-3 bg-indigo-500/10 rounded-xl">
          <Briefcase className="text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-indigo-400">{job.company}</p>
          <p className="text-slate-500 text-sm">{job.year}</p>
        </div>
      </div>
    ))}
  </div>
);

export const Academic = () => (
  <div className="mt-8 space-y-6">
    {[
      { semester: 'Semester 4', focus: 'Algorithms & Data Structures', achievements: 'Grade A+, Completed 5 major projects' },
      { semester: 'Semester 3', focus: 'Web Development & UI/UX', achievements: 'Built a full-stack portfolio' }
    ].map((edu, i) => (
      <div key={i} className="glass p-6">
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="text-indigo-400" />
          <h3 className="text-xl font-semibold">{edu.semester}</h3>
        </div>
        <p className="text-slate-300 mb-1">{edu.focus}</p>
        <p className="text-slate-500 text-sm italic">{edu.achievements}</p>
      </div>
    ))}
  </div>
);

export const Blog = () => (
  <div className="mt-8 space-y-4">
    {[
      'How to build modern web apps with Vite',
      'My journey into Software Engineering',
      'The importance of clean code'
    ].map((post, i) => (
      <div key={i} className="glass p-6 flex justify-between items-center group cursor-pointer hover:bg-slate-800/30">
        <h3 className="text-lg font-medium group-hover:text-indigo-400 transition-colors">{post}</h3>
        <PenTool className="text-slate-600 group-hover:text-indigo-400" size={18} />
      </div>
    ))}
  </div>
);
