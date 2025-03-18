
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Nonprofits = () => {
  // Sample funding opportunities
  const fundingOpportunities = [
    {
      name: "Resilient Communities Grant",
      type: "Foundation Grant",
      focus: "Community Development, Disaster Resilience",
      amount: "$50K - $250K",
      deadline: "June 15, 2024"
    },
    {
      name: "Climate Action Fund",
      type: "Government Grant",
      focus: "Environmental Conservation, Renewable Energy",
      amount: "Up to $500K",
      deadline: "August 1, 2024"
    },
    {
      name: "Digital Inclusion Initiative",
      type: "Corporate Sponsorship",
      focus: "Technology Access, Digital Literacy",
      amount: "$25K - $100K",
      deadline: "Rolling Applications"
    },
    {
      name: "Global Health Innovation Prize",
      type: "Competition",
      focus: "Healthcare Access, Medical Technology",
      amount: "$150K in prizes",
      deadline: "May 30, 2024"
    }
  ];

  // Sample resources
  const resources = [
    {
      title: "Grant Writing Masterclass",
      type: "Course",
      description: "Learn how to write compelling grant proposals from experienced fundraisers.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=📝"
    },
    {
      title: "Impact Measurement Toolkit",
      type: "Template",
      description: "Standardized frameworks for measuring and reporting your organization's impact.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=📊"
    },
    {
      title: "Nonprofit Scaling Program",
      type: "Mentorship",
      description: "One-on-one guidance from experienced nonprofit leaders on scaling your operations.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=🚀"
    },
    {
      title: "Corporate Partnership Matching",
      type: "Service",
      description: "Get connected with corporations looking for nonprofit partners in your focus area.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=🤝"
    }
  ];

  return (
    <PageLayout
      title="For Nonprofits"
      description="Funding, partnerships, and resources to scale your mission and impact"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent/10 to-green-100/30 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Accelerate Your Nonprofit's Impact</h2>
              <p className="text-gray-700 mb-6">
                Propel connects nonprofits with funding, resources, and partnerships to help you scale your mission and create sustainable impact.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Discover grants and funding opportunities tailored to your mission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Connect with corporate partners and impact investors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Access resources for scaling your operations and measuring impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Collaborate with other nonprofits and social enterprises</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/join">Join Propel Nonprofit Network</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&h=600" 
                alt="Nonprofit team collaborating" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Funding Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Grant & Funding Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover grants, competitions, and funding opportunities aligned with your nonprofit's mission.
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
                {fundingOpportunities.map((opportunity, index) => (
                  <tr key={index} className={index !== fundingOpportunities.length - 1 ? "border-b border-gray-200" : ""}>
                    <td className="px-6 py-4 text-sm font-medium">{opportunity.name}</td>
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

        {/* Partnership Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Strategic Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with corporations, foundations, and impact investors looking to support your cause.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Corporate Partners</h3>
              <p className="text-gray-600 mb-6">
                Build meaningful partnerships with companies that share your values and mission.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Access corporate grant programs and sponsorships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Develop cause marketing campaigns and co-branded initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Engage with corporate volunteers and skills-based support</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/partners">Find Corporate Partners</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Impact Investor Network</h3>
              <p className="text-gray-600 mb-6">
                Connect with investors focused on funding mission-driven organizations with sustainable models.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Explore program-related investments and impact bonds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Access venture philanthropy for scaling innovative programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Develop earned income strategies with investor backing</span>
                </li>
              </ul>
              <Button 
                className="w-full justify-center rounded-full bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/investors">Connect with Impact Investors</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Nonprofit Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools, training, and support to help your organization operate efficiently and scale effectively.
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

        {/* Collaboration Section */}
        <section className="bg-accent/5 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Community & Collaboration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a vibrant network of nonprofits and social enterprises working toward similar goals.
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Nonprofit Peer Learning Circles</p>
              <p className="text-sm text-gray-600">Join monthly virtual sessions with other nonprofits in your field to share best practices.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Cross-Sector Collaboration Forum</p>
              <p className="text-sm text-gray-600">Find partners from different sectors to develop integrated solutions to complex problems.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Collective Impact Initiatives</p>
              <p className="text-sm text-gray-600">Join or launch collaborative projects with shared metrics and coordinated activities.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/community">Join the Nonprofit Community</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Nonprofits;
