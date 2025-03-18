
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TaskForce = () => {
  // Sample potential projects
  const potentialProjects = [
    {
      title: "Resilient Food Systems Initiative",
      region: "East Africa",
      focus: "Food Security",
      description: "Deploying crop monitoring and climate-resilient farming techniques to small-scale farmers.",
      vision: "Could impact 5,000+ farmers across three countries",
      status: "Planning Phase",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Clean Water Access Platform",
      region: "Southeast Asia",
      focus: "Public Health",
      description: "Building a decentralized water quality monitoring network combined with local purification systems.",
      vision: "Potential to provide clean water access to 15+ communities",
      status: "Concept Development",
      image: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Urban Air Quality Coalition",
      region: "Global Cities",
      focus: "Environmental Health",
      description: "Creating a network of low-cost air quality sensors with public data dashboards and policy advocacy.",
      vision: "Could be implemented in 12 major cities with 300+ monitoring points",
      status: "Research Phase",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=500"
    }
  ];

  // Sample team roles
  const teamRoles = [
    {
      title: "Technical Specialists",
      description: "Engineers, data scientists, and subject matter experts who would build and deploy solutions.",
      skills: ["Software development", "Data analysis", "Domain expertise", "Systems thinking"]
    },
    {
      title: "Field Operators",
      description: "On-the-ground team members who would implement, test, and refine solutions in real-world contexts.",
      skills: ["Project management", "Community engagement", "Cultural competence", "Adaptability"]
    },
    {
      title: "Impact Strategists",
      description: "Experts in scaling, policy, and partnerships who would ensure solutions reach maximum potential.",
      skills: ["Strategic planning", "Stakeholder management", "Impact measurement", "Fundraising"]
    }
  ];

  return (
    <PageLayout
      title="Global Solutions Task Force"
      description="Our vision for an elite team that will deploy and execute real-world solutions at scale"
    >
      <div className="space-y-16">
        {/* Introduction Section */}
        <section className="space-y-6">
          <div className="bg-gradient-to-r from-accent/10 to-purple-100/30 p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Heart of Propel's Action-First Philosophy</h2>
            <p className="text-gray-700 mb-6">
              The Global Solutions Task Force represents our vision for where research, funding, and innovation will turn into real-world results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Fully Funded Execution Teams</h3>
                <p className="text-sm text-gray-600">Every task force project will be backed by investors, governments, or grants.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Scalable, Measurable Solutions</h3>
                <p className="text-sm text-gray-600">Every solution will be designed to grow beyond a pilot phase.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Cross-Sector Collaboration</h3>
                <p className="text-sm text-gray-600">Engineers, policymakers, funders, and operators will work together.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Only the Best Talent</h3>
                <p className="text-sm text-gray-600">Top Propel University graduates, experts, and industry leaders will be selected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">How the Task Force Will Work</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-accent/10 p-6 rounded-xl mb-4">
                  <h3 className="text-xl font-semibold mb-3">Step 1: Identifying the Biggest Bottlenecks</h3>
                  <p className="text-gray-600">
                    Where is there a solvable, high-impact problem that needs immediate action?
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Climate resilience in developing nations?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Regulations for ethical data use?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Food security solutions that scale?</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-accent/10 p-6 rounded-xl mb-4">
                  <h3 className="text-xl font-semibold mb-3">Step 2: Building the Execution Plan</h3>
                  <p className="text-gray-600">
                    Each Task Force project will have a structured plan that includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Stakeholder engagement (governments, private sector, NGOs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Capital allocation (grants, investments, corporate backing)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Technology integration (renewable energy, sustainable systems)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-accent/10 p-6 rounded-xl mb-4">
                  <h3 className="text-xl font-semibold mb-3">Step 3: Deploying the Solution</h3>
                  <p className="text-gray-600">
                    Task Force teams will be deployed globally, working alongside local communities and decision-makers.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Build cross-functional teams with local and global expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Implement solutions with continuous feedback loops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Create pathways for sustainability and local ownership</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Potential Projects Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Potential Projects</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            These initiatives represent the types of projects that the Global Solutions Task Force aims to tackle in the future. As Propel grows, we'll be developing these concepts into fully-realized programs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {potentialProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">{project.focus}</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{project.region}</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">{project.status}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <p className="text-accent text-sm font-medium mb-4">{project.vision}</p>
                  <Button 
                    className="w-full justify-center rounded-full bg-accent hover:bg-accent/90"
                    asChild
                  >
                    <Link to="/contact">
                      Express Interest
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              className="rounded-full"
              asChild
            >
              <Link to="/contact">Suggest a Project</Link>
            </Button>
          </div>
        </section>

        {/* Join the Task Force Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Future Task Force Roles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <h4 className="font-medium mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-accent/10 p-8 rounded-xl mt-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-3">Interested in Joining the Future Task Force?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                While the Task Force is still in development, we're already looking for exceptional individuals with diverse backgrounds and skills who share our vision. 
                Be among the first to know when we launch.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="rounded-full bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/contact">Express Interest</Link>
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full"
                asChild
              >
                <Link to="/university">Learn About Propel University</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default TaskForce;
