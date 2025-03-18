
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Academics = () => {
  // Sample research opportunities
  const researchOpportunities = [
    {
      title: "Climate Adaptation Technology Transfer",
      type: "Research Grant",
      focus: "Climate Tech, Resilience",
      amount: "$50K - $200K",
      deadline: "July 30, 2024"
    },
    {
      title: "AI Ethics & Global Governance",
      type: "Collaborative Research",
      focus: "Technology Policy, Ethics",
      amount: "Up to $150K",
      deadline: "August 15, 2024"
    },
    {
      title: "Health Equity & Access Innovation",
      type: "Implementation Research",
      focus: "Healthcare, Inclusion",
      amount: "$75K - $250K",
      deadline: "September 1, 2024"
    },
    {
      title: "Sustainable Urban Development",
      type: "Field Research",
      focus: "Urban Planning, Sustainability",
      amount: "$100K - $300K",
      deadline: "October 15, 2024"
    }
  ];

  // Sample resources
  const resources = [
    {
      title: "Research Commercialization Workshop",
      type: "Course",
      description: "Learn how to translate academic research into viable commercial applications.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=🔬"
    },
    {
      title: "Policy Impact Accelerator",
      type: "Program",
      description: "A structured program to help researchers influence policy and regulatory frameworks.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=📊"
    },
    {
      title: "Academic-Industry Partnership Guide",
      type: "Resource",
      description: "Best practices for developing meaningful collaborations with private sector partners.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=🤝"
    },
    {
      title: "Impact Research Communication",
      type: "Workshop",
      description: "Tools and techniques for communicating complex research to non-academic audiences.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=📢"
    }
  ];

  return (
    <PageLayout
      title="For Academics & Researchers"
      description="Turn research into real-world solutions with funding and implementation support"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent/10 to-blue-100/30 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Bridge Research & Real-World Impact</h2>
              <p className="text-gray-700 mb-6">
                Propel connects academics and researchers with the funding, partners, and implementation pathways needed to turn knowledge into action.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Access research grants and implementation funding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Connect with startups, nonprofits, and governments seeking research-backed solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Translate research into commercial applications and policy frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Join a global network of researchers focused on systemic impact</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/join">Join Academic Network</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&h=600" 
                alt="Researchers collaborating" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Research Funding Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research Funding & Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover grants and funding focused on implementation and applied research with measurable impact.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Opportunity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Focus</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Deadline</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {researchOpportunities.map((opportunity, index) => (
                  <tr key={index} className={index !== researchOpportunities.length - 1 ? "border-b border-gray-200" : ""}>
                    <td className="px-6 py-4 text-sm font-medium">{opportunity.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{opportunity.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{opportunity.focus}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{opportunity.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{opportunity.deadline}</td>
                    <td className="px-6 py-4 text-sm">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full"
                        asChild
                      >
                        <Link to="/funding">Apply</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-6">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/funding">Find More Funding</Link>
            </Button>
          </div>
        </section>

        {/* Knowledge Hub Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research Knowledge Hub</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contribute to and benefit from our collaborative research platform and knowledge base.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Contribute Your Research</h3>
              <p className="text-gray-600 mb-6">
                Share your findings, methodologies, and insights with our global community of change-makers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Upload publications, working papers, and datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Collaborate with researchers across disciplines and regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Get recognition and build your impact profile</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/research">Upload Research</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Find Implementation Partners</h3>
              <p className="text-gray-600 mb-6">
                Connect with organizations ready to apply your research in real-world settings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Discover startups building on academic research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Connect with nonprofits seeking evidence-based approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Explore government partnerships for policy implementation</span>
                </li>
              </ul>
              <Button 
                className="w-full justify-center rounded-full bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/partners">Find Partners</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Academic Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools and training to help you translate research into actionable impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img src={resource.icon} alt="" className="w-10 h-10 mr-3" />
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-xs text-accent">{resource.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-full text-sm"
                  asChild
                >
                  <Link to="/resources">Access Resource</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/resources">Explore All Resources</Link>
            </Button>
          </div>
        </section>

        {/* Task Force Section */}
        <section className="bg-accent/5 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Join the Global Solutions Task Force</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Apply your expertise to high-priority global challenges through our elite implementation teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Research Advisory Role</h3>
              <p className="text-gray-600 mb-4">
                Guide task force teams with evidence-based approaches and methodologies.
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/task-force">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Field Implementation Scientist</h3>
              <p className="text-gray-600 mb-4">
                Work directly on the ground to test, refine, and implement evidence-based solutions.
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/task-force">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Impact Evaluation Lead</h3>
              <p className="text-gray-600 mb-4">
                Design and conduct rigorous evaluations of task force projects and interventions.
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/task-force">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/task-force">Apply to the Task Force</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Academics;
