import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Database, Shield, Cloud, Brain, Users, Monitor, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const positions = [
    {
      id: 1,
      title: "Full Stack Developer",
      icon: <Code className="h-8 w-8 text-brand-primary" />,
      experience: "2-5 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      description: "Develop end-to-end web applications using modern frameworks. Work with cross-functional teams to deliver scalable solutions. Experience with both frontend and backend technologies required."
    },
    {
      id: 2,
      title: "Data Scientist",
      icon: <Database className="h-8 w-8 text-brand-primary" />,
      experience: "3-6 years",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      description: "Analyze complex datasets to extract meaningful insights. Build predictive models and implement machine learning algorithms. Strong statistical background and programming skills essential."
    },
    {
      id: 3,
      title: "Cybersecurity Analyst",
      icon: <Shield className="h-8 w-8 text-brand-primary" />,
      experience: "2-4 years",
      skills: ["Network Security", "Penetration Testing", "SIEM", "Risk Assessment"],
      description: "Monitor and protect organizational systems from security threats. Conduct vulnerability assessments and implement security protocols. Knowledge of compliance frameworks preferred."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      icon: <Cloud className="h-8 w-8 text-brand-primary" />,
      experience: "3-5 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Design and maintain scalable infrastructure solutions. Automate deployment processes and monitor system performance. Experience with cloud platforms and containerization required."
    },
    {
      id: 5,
      title: "AI/ML Engineer",
      icon: <Brain className="h-8 w-8 text-brand-primary" />,
      experience: "2-6 years",
      skills: ["PyTorch", "Deep Learning", "NLP", "Computer Vision"],
      description: "Develop and deploy machine learning models for production use. Work on cutting-edge AI projects including natural language processing and computer vision applications."
    },
    {
      id: 6,
      title: "Technical Lead",
      icon: <Users className="h-8 w-8 text-brand-primary" />,
      experience: "5-8 years",
      skills: ["Team Leadership", "Architecture Design", "Microservices", "Agile"],
      description: "Lead technical teams and drive architectural decisions. Mentor junior developers and ensure code quality standards. Experience in system design and team management required."
    },
    {
      id: 7,
      title: "Frontend Developer",
      icon: <Monitor className="h-8 w-8 text-brand-primary" />,
      experience: "1-4 years",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      description: "Create responsive and interactive user interfaces. Collaborate with UX/UI designers to implement pixel-perfect designs. Strong knowledge of modern frontend frameworks essential."
    },
    {
      id: 8,
      title: "Mobile App Developer",
      icon: <Smartphone className="h-8 w-8 text-brand-primary" />,
      experience: "2-5 years",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      description: "Develop cross-platform mobile applications with excellent user experience. Optimize app performance and ensure compatibility across different devices and operating systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-brand-primary text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/7715ce20-5de9-4ed6-b323-b6ccc8c456af.png" 
                alt="SAAS INFO TECHNOLOGIES Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">SASINFO TECHNOLOGIES</h1>
                <p className="text-sm text-white/80">Private Limited</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <a href="/#services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="/#about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="/#contact" className="hover:text-blue-200 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Career Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IT Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading technology companies through our specialized IT recruitment network. 
              Explore exciting opportunities across various technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-brand-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      {position.icon}
                      <div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {position.experience} experience
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base leading-relaxed">
                    {position.description}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, index) => (
                        <Badge key={index} className="bg-brand-primary/10 text-brand-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-brand-primary text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Don't See Your Role?</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're constantly working with new opportunities. Get in touch with us to discuss 
            your career goals and we'll help you find the perfect IT role.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
          >
            Contact Our Recruiters
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; SASINFO TECHNOLOGIES Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
