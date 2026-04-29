import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Layout, Palette, Code2, Server, Globe, Shield, Database, GitBranch, Terminal } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Layout },
  { name: "JavaScript", category: "frontend", icon: Code },
  { name: "React", category: "frontend", icon: Code2 },
  { name: "Tailwind CSS", category: "frontend", icon: Palette },

  // Backend
  { name: "Node.js", category: "backend", icon: Server },
  { name: "Express.js", category: "backend", icon: Globe },
  { name: "LDAP", category: "backend", icon: Shield },
  { name: "MongoDB", category: "backend", icon: Database },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: GitBranch },
  { name: "VS Code", category: "tools", icon: Terminal },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse opacity-50 duration-[3000ms]"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, from building responsive, dynamic frontends to securely architecting robust backend systems.
          </p>
        </div>

        {/* Animated Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize relative overflow-hidden group",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] scale-105"
                  : "bg-secondary/50 text-foreground hover:bg-secondary/80 hover:scale-105"
              )}
            >
              <span className="relative z-10">{category}</span>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 h-full w-full bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
            </button>
          ))}
        </div>

        {/* The Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="group relative bg-card/40 backdrop-blur-md p-6 rounded-2xl border border-secondary/50 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:border-primary/60 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] overflow-hidden"
              >
                {/* Glowing gradient background that fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 mb-4 p-4 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon className="h-8 w-8 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="relative z-10 font-bold text-foreground/90 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Animated bottom border line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-blue-500 transition-all duration-700 ease-out group-hover:w-full"></div>
                {/* Top highlight line */}
                <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-l from-primary/50 to-transparent transition-all duration-700 ease-out group-hover:w-1/2"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};