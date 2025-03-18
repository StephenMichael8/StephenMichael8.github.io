
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Investors = () => {
  // Sample startup opportunities
  const startups = [
    {
      name: "AquaSense",
      sector: "CleanTech",
      stage: "Seed",
      location: "Kenya",
      raising: "$750K",
      description: "AI-powered water quality monitoring and purification systems for underserved communities."
    },
    {
      name: "Nutri Harvest",
      sector: "AgTech",
      stage: "Pre-Seed",
      location: "India",
      raising: "$500K",
      description: "Sustainable farming technology to improve crop yields while reducing resource consumption."
    },
    {
      name: "EduAccess",
      sector: "EdTech",
      stage: "Series A",
      location: "Colombia",
      raising: "$2.5M",
      description: "Digital education platform making quality learning accessible in remote regions."
    },
    {
      name: "MediConnect",
      sector: "HealthTech",
      stage: "Seed",
      location: "Nigeria",
      raising: "$1M",
      description: "Telemedicine platform connecting patients with healthcare providers in underserved areas."
    }
  ];

  // Sample market insights
  const insights = [
    {
      title: "Climate Tech Investment Trends: Q1 2024",
      type: "Market Report",
      preview: "Analysis of funding patterns, emerging technologies, and regulatory developments in climate tech.",
      date: "March 2024"
    },
    {
      title: "Impact Measurement Methodologies",
      type: "Research Brief",
      preview: "Comparing frameworks for measuring social and environmental returns alongside financial performance.",
      date: "February 2024"
    },
    {
      title: "Emerging Markets: Healthcare Innovations",
      type: "Sector Analysis",
      preview: "Opportunities for investment in healthcare solutions addressing challenges in emerging economies.",
      date: "January 2024"
    }
  ];

  return (
    <PageLayout
      title="For Investors"
      description="Curated deal flow for investors seeking scalable, impact-driven opportunities"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent/10 to-green-100/30 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Exclusive Access to Impact Opportunities</h2>
              <p className="text-gray-700 mb-6">
                Propel connects impact-focused investors with vetted, high-potential ventures addressing pressing global challenges.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Filter startups by funding stage, region, and sector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Real-time due diligence reports & startup traction insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Track & interact with founders through Propel's private investor portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">✓</span>
                  <span>Co-investment & syndication opportunities with global impact investors</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/join">Join Propel Investor Network</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&h=600" 
                alt="Investors analyzing data" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Deal Flow Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Exclusive Deal Flow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Example Projects
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Startup</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Sector</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Stage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Raising</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {startups.map((startup, index) => (
                  <tr key={index} className={index !== startups.length - 1 ? "border-b border-gray-200" : ""}>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium">{startup.name}</p>
                        <p className="text-xs text-gray-500">{startup.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{startup.sector}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{startup.stage}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{startup.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{startup.raising}</td>
                    <td className="px-6 py-4 text-sm">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full"
                        asChild
                      >
                        <Link to="/connect">View Details</Link>
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
              <Link to="/dealflow">Explore Deal Flow</Link>
            </Button>
          </div>
        </section>

        {/* Market Intelligence Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Propel Market Intelligence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We will provide insights into potential investments. For Example - 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded">
                    {insight.type}
                  </span>
                  <span className="text-xs text-gray-500">{insight.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{insight.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{insight.preview}</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-full"
                  asChild
                >
                  <Link to="/research">Read Full Report</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/research">Access Market Research</Link>
            </Button>
          </div>
        </section>

        {/* Investor Community Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Investor Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Investors get direct access to a curated network of high-impact startups, venture partners, and industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Investor Profile</h3>
              <p className="text-gray-600 mb-6">
                Create your profile to showcase your focus areas and investment thesis to founders and co-investors.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Control your visibility and contact preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Receive tailored startup recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Connect with other investors for syndication</span>
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
              <h3 className="text-xl font-semibold mb-4">Exclusive Events & Roundtables</h3>
              <p className="text-gray-600 mb-6">
                Join private investor-only discussions and due diligence sessions with leading impact ventures.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Virtual and in-person pitch events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Sector-specific investment roundtables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span className="text-gray-600">Q&A sessions with top impact VCs</span>
                </li>
              </ul>
              <Button 
                className="w-full justify-center rounded-full bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="bg-accent/5 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Surveys & Direct Collaboration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with investors to refine Propel's deal flow and insights.
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Tell us what industries & sectors you're focusing on</p>
              <p className="text-sm text-gray-600">Help us tailor our startup recommendations to your investment thesis.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Request deeper research on specific investment opportunities</p>
              <p className="text-sm text-gray-600">Let us know where you'd like more in-depth analysis and due diligence.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-1">Suggest founders, funds, & partners we should integrate into Propel</p>
              <p className="text-sm text-gray-600">Help us grow our network with high-quality connections.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/contact">Submit Investment Insights</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Investors;
