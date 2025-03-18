
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Founders = () => {
  // Sample funding opportunities
  const fundingOpportunities = [
    {
      name: "Impact Venture Fund",
      type: "Equity Investment",
      focus: "Climate Tech, Health Tech, EdTech",
      amount: "$250K - $2M",
      deadline: "Rolling Applications"
    },
    {
      name: "Clean Energy Innovation Grant",
      type: "Non-dilutive Grant",
      focus: "Renewable Energy, Energy Storage",
      amount: "Up to $500K",
      deadline: "March 15, 2024"
    },
    {
      name: "Social Impact Accelerator",
      type: "Equity + Grant",
      focus: "Financial Inclusion, Health Access",
      amount: "$150K + $50K grant",
      deadline: "Applications open quarterly"
    },
    {
      name: "AI for Good Prize",
      type: "Prize Competition",
      focus: "AI Applications for SDGs",
      amount: "$100K - $1M",
      deadline: "May 1, 2024"
    }
  ];

  // Sample resources
  const resources = [
    {
      title: "Fundraising Masterclass",
      type: "Course",
      description: "Learn how to craft the perfect pitch and connect with impact investors.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=📝"
    },
    {
      title: "Impact Measurement Toolkit",
      type: "Template",
      description: "Track, measure, and report on your social and environmental impact.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=📊"
    },
    {
      title: "Founder-Investor Matching",
      type: "Service",
      description: "Get personally introduced to relevant investors based on your startup profile.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=🤝"
    },
    {
      title: "Pilot Project Partnerships",
      type: "Opportunity",
      description: "Connect with corporations and governments for paid pilot programs.",
      icon: "https://placehold.co/60x60/e2e8f0/64748b?text=🚀"
    }
  ];

  return (
    <PageLayout
      title="For Founders"
      description="The fastest way to get funding, mentorship, and execution support for mission-driven startups"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent/10 to-purple-100/30 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Propel for Founders?</h2>
              <p className="text-gray-700 mb-6">
                More than an accelerator—Propel provides direct funding, partnerships, and execution support for impact-driven founders.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Find direct, non-dilutive funding & investor-backed deal flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Get discovered by impact-focused VCs & grant-makers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Join government & corporate-backed innovation programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Connect with partners in sustainable energy, health, AI, and more</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/join">Join Propel Founders Network</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=600" 
                alt="Founders collaborating" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Funding Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Funding & Grants Database</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Live, AI-powered funding recommendations for startups across industries. Browse global grants, 
              VC opportunities, and impact investment funds.
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
              <Link to="/funding">Find Funding Now</Link>
            </Button>
          </div>
        </section>

        {/* Networking Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Social Networking & Investor Matchmaking</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A full-featured networking platform designed for founders to connect directly with investors and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Founder Profile</h3>
              <p className="text-gray-600 mb-6">
                Create your professional profile to showcase your startup, team, fundraising goals, and traction.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Highlighted on the Propel platform for investor discovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Customized visibility settings for stealth or public startups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Direct messaging with potential investors and partners</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/join">Create Your Profile</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Introductions</h3>
              <p className="text-gray-600 mb-6">
                Get matched with relevant investors, mentors, and strategic partners based on your startup's focus.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Smart algorithm finds the right connections for your stage and industry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Virtual and in-person pitch events with matched investors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Warm introductions through the Propel network</span>
                </li>
              </ul>
              <Button 
                className="w-full justify-center rounded-full bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/connect">Connect with Investors</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Dedicated Startup Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Startup success is built on resources—Propel connects you to the best support systems available.
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
              <Link to="/resources">Access All Resources</Link>
            </Button>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="bg-accent/5 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Surveys & Direct Collaboration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We actively collect insights from founders to refine and expand our offerings.
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Tell us which grants & funds we should add to our system</p>
              <p className="text-sm text-gray-600">Help us expand our funding database with opportunities you know about.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Share your biggest challenges & get matched with tailored solutions</p>
              <p className="text-sm text-gray-600">Let us know what's holding your startup back, and we'll find resources to help.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Suggest key ecosystem players we should integrate into Propel</p>
              <p className="text-sm text-gray-600">Help us build the most comprehensive network of partners and resources.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/contact">Submit Insights & Collaborate</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Founders;
