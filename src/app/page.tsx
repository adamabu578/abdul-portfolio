import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Layout, Monitor, Smartphone, Download, Sparkles, Diamond, Image as ImageIcon, Video, BookOpen, Eye, Box, PenTool, Mail, Code, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
            <Sparkles className="w-4 h-4 text-[#39FF14]" />
            <span className="text-sm font-semibold text-gray-700">Hello There!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            <span className="text-[#39FF14]">I'm Abdul Dev,</span><br />
            Senior Software<br /> Engineer based in NIG.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
            I'm an experienced Senior Software Engineer with 5+ years in the field, collaborating with various companies and startups to build robust and scalable systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button className="w-full sm:w-auto bg-[#39FF14] text-black hover:bg-[#32e011] rounded-full px-8 py-6 text-base font-semibold shadow-[0_8px_20px_-6px_rgba(57,255,20,0.5)] transition-all">
              View My Work
            </Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold border-gray-200 text-gray-700 hover:bg-gray-50 transition-all gap-2">
              Download CV <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end items-center w-full max-w-[500px] lg:max-w-none">
          {/* Background circles */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#39FF14] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#39FF14]/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10 w-full flex justify-center">
            <Image
              src="/abdul_portrait.png"
              alt="Abdul Dev"
              width={500}
              height={600}
              className="object-contain h-[400px] md:h-[550px] w-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating Badges */}
          <div className="absolute top-10 right-4 md:right-10 bg-black text-white px-5 py-3 rounded-full text-sm font-bold shadow-2xl rotate-12 z-20 flex items-center justify-center border-2 border-[#39FF14] w-[100px] h-[100px]">
            <div className="text-center leading-tight text-xs uppercase tracking-widest">Hire<br />Me</div>
          </div>
          <div className="absolute bottom-16 -left-4 md:left-10 bg-[#39FF14] text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-xl -rotate-6 z-20">
            Backend Dev
          </div>
          <div className="absolute top-1/2 -right-4 md:right-0 bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl z-20">
            Frontend Dev
          </div>
        </div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className="w-full bg-[#39FF14] py-4 border-y-2 border-black overflow-hidden relative">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0 text-black font-extrabold text-2xl md:text-4xl tracking-wider uppercase">
              <span className="flex items-center gap-4 md:gap-8 px-4 md:px-8">Backend Architecture <span>*</span></span>
              <span className="flex items-center gap-4 md:gap-8 px-4 md:px-8">Frontend Development <span>*</span></span>
              <span className="flex items-center gap-4 md:gap-8 px-4 md:px-8">System Design <span>*</span></span>
              <span className="flex items-center gap-4 md:gap-8 px-4 md:px-8">Cloud Deployment <span>*</span></span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[150px] md:text-[200px] font-black text-gray-50 uppercase tracking-tighter -z-10 select-none pointer-events-none whitespace-nowrap">
          SERVICES
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm">
                <Sparkles className="w-4 h-4 text-[#39FF14]" />
                <span className="text-sm font-semibold text-gray-700">My Specialization</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                <span className="text-[#39FF14]">Services</span> I Provide
              </h2>
            </div>
            <Button className="bg-[#39FF14] text-black hover:bg-[#32e011] rounded-full px-6 py-5 font-semibold transition-all shadow-md hover:shadow-lg">
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Backend Architecture", icon: Box, desc: "Designing robust, scalable backend systems and APIs using Node.js, Python, or Go. Ensuring high performance and security." },
              { title: "Frontend Development", icon: Layout, desc: "Building beautiful, responsive, and dynamic user interfaces using React, Next.js, and modern CSS frameworks like Tailwind." },
              { title: "Cloud & DevOps", icon: Monitor, desc: "Deploying and managing scalable infrastructure on AWS/GCP, setting up CI/CD pipelines, and ensuring system reliability." }
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300 rounded-3xl overflow-hidden group">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#39FF14] transition-colors relative">
                    <div className="absolute -left-2 top-2 w-2 h-8 bg-[#39FF14] rounded-r-md group-hover:bg-black transition-colors" />
                    <service.icon className="w-7 h-7 text-gray-800 group-hover:text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-500 text-base mt-3 leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <a href="#" className="inline-flex items-center font-bold text-gray-900 hover:text-[#39FF14] transition-colors gap-2 text-sm uppercase tracking-wide">
                    Learn more <ArrowRight className="w-4 h-4 text-[#39FF14]" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[150px] md:text-[200px] font-black text-gray-50 uppercase tracking-tighter -z-10 select-none pointer-events-none whitespace-nowrap">
          ABOUT ME
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative flex justify-center w-full max-w-[500px]">
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-[#39FF14] rounded-full overflow-hidden flex items-end justify-center pt-10">
              <Image
                src="/abdul_portrait.png"
                alt="Abdul Dev"
                width={400}
                height={500}
                className="object-cover h-[90%] w-auto scale-110 translate-y-4"
              />
            </div>

            {/* Decorative Badges */}
            <div className="absolute top-1/4 -left-4 bg-black text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl rotate-[-10deg]">
              Backend Dev
            </div>
            <div className="absolute top-1/2 -right-4 bg-black text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl rotate-[5deg]">
              System Design
            </div>
            <div className="absolute bottom-10 left-10 bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-gray-200 rotate-[-5deg]">
              Frontend
            </div>
            <div className="absolute bottom-4 right-12 bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-gray-200 rotate-[10deg]">
              Architecture
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm">
              <Sparkles className="w-4 h-4 text-[#39FF14]" />
              <span className="text-sm font-semibold text-gray-700">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Who is <span className="text-[#39FF14]">Abdul Dev?</span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              I am a passionate and dedicated Senior Software Engineer with a strong foundation in computer science. I specialize in building scalable, efficient, and robust web applications. With over 8 years of experience, I have successfully delivered high-quality software solutions for various industries, constantly pushing the boundaries of what is possible on the web.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              <div>
                <div className="text-3xl md:text-4xl font-black text-[#39FF14]">600+</div>
                <div className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-[#39FF14]">50+</div>
                <div className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">Industry Covered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-[#39FF14]">5+</div>
                <div className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">Years of Experience</div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-[#39FF14] text-black hover:bg-[#32e011] rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-all">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-black text-gray-50 uppercase tracking-tighter -z-10 select-none pointer-events-none whitespace-nowrap">
          MY WORK
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm">
                <Sparkles className="w-4 h-4 text-[#39FF14]" />
                <span className="text-sm font-semibold text-gray-700">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Selected <span className="text-[#39FF14]">Projects</span>
              </h2>
            </div>
            <Button variant="outline" className="rounded-full px-6 py-5 font-semibold transition-all border-gray-200 text-gray-900 hover:bg-gray-50">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "FinTech Dashboard",
                category: "Frontend Development",
                description: "A comprehensive financial dashboard with real-time analytics, secure transactions, and interactive data visualization.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                image: "bg-gray-900"
              },
              {
                title: "E-Commerce API",
                category: "Backend Architecture",
                description: "Scalable microservices architecture for a high-traffic e-commerce platform handling thousands of requests per second.",
                tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
                image: "bg-gray-800"
              },
              {
                title: "AI Content Platform",
                category: "Full Stack Development",
                description: "SaaS application that leverages AI models to generate marketing copy, blog posts, and social media content.",
                tags: ["React", "Python", "OpenAI API"],
                image: "bg-gray-800"
              },
              {
                title: "Cloud Resource Manager",
                category: "DevOps & Infrastructure",
                description: "Internal tool for automated provisioning, monitoring, and scaling of cloud resources across multiple providers.",
                tags: ["Go", "Kubernetes", "AWS", "Terraform"],
                image: "bg-gray-900"
              }
            ].map((project, i) => (
              <Card key={i} className="border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300 rounded-3xl overflow-hidden group">
                <div className={`h-64 w-full ${project.image} relative overflow-hidden flex items-center justify-center p-6`}>
                  {/* Decorative background for placeholder */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                  <div className="relative z-10 w-full h-full border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:border-[#39FF14] transition-colors">
                     <ImageIcon className="w-12 h-12 text-gray-500 group-hover:text-[#39FF14] transition-colors" />
                  </div>
                  
                  {/* Overlay buttons on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                     <Button className="bg-[#39FF14] text-black hover:bg-[#32e011] rounded-full">
                       <Eye className="w-4 h-4 mr-2" /> Live Demo
                     </Button>
                     <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 rounded-full">
                       <Code className="w-4 h-4 mr-2" /> Source
                     </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="text-sm font-bold text-[#39FF14] uppercase tracking-wider mb-2">{project.category}</div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">{project.title}</CardTitle>
                  <CardDescription className="text-gray-500 text-base leading-relaxed mb-6">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOOLS SECTION --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative mb-20 text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[150px] font-black text-gray-50 uppercase tracking-tighter -z-10 select-none pointer-events-none whitespace-nowrap w-full text-center overflow-hidden">
          MY FAVORITE TOOLS
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-6 mx-auto">
          <Sparkles className="w-4 h-4 text-[#39FF14]" />
          <span className="text-sm font-semibold text-gray-700">My Favorite Tools</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 mx-auto max-w-2xl">
          Exploring the <span className="text-[#39FF14]">Tools</span><br /> Behind My Engineering
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {[
            { name: "Node.js", percent: 95, icon: Box },
            { name: "React / Next.js", percent: 92, icon: Layout },
            { name: "PostgreSQL", percent: 88, icon: Diamond },
            { name: "AWS / Cloud", percent: 85, icon: Monitor },
            { name: "Docker", percent: 90, icon: Box },
            { name: "TypeScript", percent: 95, icon: PenTool },
          ].map((tool, i) => (
            <Card key={i} className="border-none shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-all bg-white rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gray-50 rounded-xl">
                      <tool.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">{tool.name}</span>
                  </div>
                  <Badge className="bg-[#39FF14] text-black hover:bg-[#32e011] font-bold text-xs rounded-full px-2">
                    {tool.percent}%
                  </Badge>
                </div>
                <Progress value={tool.percent} className="h-2 bg-gray-100 [&>div]:bg-[#39FF14]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="w-full bg-black text-white py-24 px-6 relative overflow-hidden border-t-2 border-[#39FF14]">
        {/* Background effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#39FF14]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-16">
          <div className="space-y-8 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50">
              <Sparkles className="w-4 h-4 text-[#39FF14]" />
              <span className="text-sm font-semibold text-gray-300">Available for Work</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
              Let's Build Something<br />
              <span className="text-[#39FF14]">Amazing.</span>
            </h2>

            <p className="text-gray-400 max-w-lg text-lg leading-relaxed mx-auto md:mx-0">
              Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <Button className="bg-[#39FF14] text-black hover:bg-[#32e011] rounded-full px-8 py-6 text-base font-bold shadow-[0_4px_20px_-5px_rgba(57,255,20,0.4)] transition-all">
              Say Hello <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-10 flex-1 w-full">
            <div className="flex gap-4">
              {[
                {
                  href: "#",
                  label: "GitHub",
                  icon: (props: any) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                    </svg>
                  )
                },
                {
                  href: "#",
                  label: "Twitter",
                  icon: (props: any) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )
                },
                {
                  href: "#",
                  label: "LinkedIn",
                  icon: (props: any) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )
                },
                {
                  href: "#",
                  label: "Email",
                  icon: Mail
                }
              ].map((social, i) => (
                <a key={i} href={social.href} aria-label={social.label} className="w-14 h-14 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-[#39FF14] hover:text-black hover:border-[#39FF14] hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>

            <div className="text-gray-500 font-medium text-sm text-center md:text-right space-y-1">
              <p>© {new Date().getFullYear()} Abdul Dev. All rights reserved.</p>
              <p>Designed with passion and precision.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-[12vw] font-black text-gray-900/40 select-none pointer-events-none translate-y-1/4 leading-none tracking-tighter">
          ABDUL.DEV
        </div>
      </footer>
    </main>
  );
}
