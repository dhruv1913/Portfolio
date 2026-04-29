import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-8 group relative bg-card p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 space-y-6 h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Passionate Web Developer & Tech Creator
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I am a software developer specializing in secure web application development. With a strong foundation in React and modern UI libraries like PrimeReact, I build robust, user-centric administrative systems. My expertise also includes application security—specifically SSO integrations, JWT authentication management, and payload encryption for secure cross-system data transfer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="#contact" className="cosmic-button w-fit">
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf" download={"Resume.pdf"}
                  className="px-6 py-2 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 transition-colors duration-300 w-fit"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Side Cards (Bento Grid) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 group relative bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500 rotate-12 group-hover:rotate-0">
                <Code className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Web Development</h4>
                <p className="text-muted-foreground text-sm">
                  Creating responsive web applications with modern frameworks.
                </p>
              </div>
            </div>

            <div className="flex-1 group relative bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500 -rotate-12 group-hover:rotate-0">
                <User className="h-24 w-24 text-blue-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="p-3 rounded-full bg-blue-500/10 w-fit mb-4">
                  <User className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-xl mb-2">UI/UX Design</h4>
                <p className="text-muted-foreground text-sm">
                  Designing intuitive interfaces and seamless experiences.
                </p>
              </div>
            </div>
            
            <div className="flex-1 group relative bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500 rotate-6 group-hover:rotate-0">
                <Briefcase className="h-24 w-24 text-purple-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="p-3 rounded-full bg-purple-500/10 w-fit mb-4">
                  <Briefcase className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Agile Project Management</h4>
                <p className="text-muted-foreground text-sm">
                  Leading projects from conception to completion efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
