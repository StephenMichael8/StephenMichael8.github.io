
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Research = () => {
  // Sample research topics
  const researchTopics = [
    {
      title: "Climate Resilience & Adaptation Strategies",
      category: "Climate",
      collaborators: 32,
      contributions: 156,
      lastUpdate: "3 days ago"
    },
    {
      title: "Ethics in Humanitarian Decision-Making",
      category: "Technology",
      collaborators: 24,
      contributions: 89,
      lastUpdate: "1 week ago"
    },
    {
      title: "Financial Inclusion Models for Rural Communities",
      category: "Economics",
      collaborators: 18,
      contributions: 67,
      lastUpdate: "2 weeks ago"
    },
    {
      title: "Sustainable Urban Transportation Networks",
      category: "Urban Planning",
      collaborators: 27,
      contributions: 104,
      lastUpdate: "5 days ago"
    }
  ];

  // Sample insights
  const insights = [
    {
      title: "Renewable Energy Investment Trends 2024",
      type: "Market Analysis",
      preview: "Our data-driven analysis shows significant growth in distributed solar investments across emerging markets.",
      date: "April 2024"
    },
    {
      title: "Health Tech Due Diligence Report",
      type: "Investor Intelligence",
      preview: "Key metrics, growth patterns, and risk assessments for the digital health sector.",
      date: "March 2024"
    },
    {
      title: "Impact Measurement Frameworks",
      type: "Methodology",
      preview: "Comparing top approaches for quantifying and reporting social and environmental impact.",
      date: "February 2024"
    }
  ];

  return (
    <PageLayout
      title="Research & Data Hub"
      description="Actionable data, open knowledge, and insights for global change"
    >
      <div className="space-y-16">
        {/* Introduction Section */}
        <section className="space-y-6">
          <div className="bg-gradient-to-r from-accent/10 to-purple-100/30 p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Knowledge That Drives Action</h2>
            <p className="text-gray-700 mb-6">
              The Propel Research & Data Hub is an interactive, data-powered platform designed to inform, educate, and drive real-world change.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Open Access</h3>
                <p className="text-sm text-gray-600">No paywalls, no outdated PDFs—live, evolving insights available to everyone.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Smart Personalization</h3>
                <p className="text-sm text-gray-600">Each user gets tailored research based on their focus areas and interests.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Collaborative Knowledge Base</h3>
                <p className="text-sm text-gray-600">Users can contribute and refine information in a Wikipedia-style approach.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Funding Integration</h3>
                <p className="text-sm text-gray-600">Every insight links directly to relevant funding and partnership opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Open Knowledge Base</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A fully collaborative research database for global challenges and solutions—constantly evolving and growing.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Research Topic</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Collaborators</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Contributions</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Last Update</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {researchTopics.map((topic, index) => (
                  <tr key={index} className={index !== researchTopics.length - 1 ? "border-b border-gray-200" : ""}>
                    <td className="px-6 py-4 text-sm font-medium">{topic.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{topic.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{topic.collaborators}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{topic.contributions}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{topic.lastUpdate}</td>
                    <td className="px-6 py-4 text-sm">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full"
                        asChild
                      >
                        <Link to="/research">View Research</Link>
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
              <Link to="/research">Browse All Research</Link>
            </Button>
          </div>
        </section>

        {/* Market Intelligence Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Market Insights & Intelligence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Data-powered insights on impact investment trends, emerging sectors, and market opportunities.
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
              <Link to="/research">Access All Market Research</Link>
            </Button>
          </div>
        </section>

        {/* Policy Impact Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Policy Impact Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed on global regulatory changes and governance trends affecting impact sectors.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">ESG & Impact Regulation</h3>
                <p className="text-gray-600 mb-4">
                  Tracking environmental, social, and governance policy changes across global markets.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-full"
                  asChild
                >
                  <Link to="/research">View ESG Policy Tracker</Link>
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Technology Ethics & Governance</h3>
                <p className="text-gray-600 mb-4">
                  Monitoring ethics frameworks, data protection laws, and emerging tech regulations.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-full"
                  asChild
                >
                  <Link to="/research">View Tech Policy Tracker</Link>
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Climate & Energy Policy</h3>
                <p className="text-gray-600 mb-4">
                  Updates on climate agreements, carbon markets, and renewable energy incentives.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-full"
                  asChild
                >
                  <Link to="/research">View Climate Policy Tracker</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Research Collaboration Section */}
        <section className="bg-accent/5 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Collaborate with Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our network of researchers, experts, and practitioners to develop actionable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Contribute Your Expertise</h3>
              <p className="text-gray-600 mb-4">
                Share your knowledge, research, and insights with our global community of changemakers.
              </p>
              <Button 
                className="w-full justify-center rounded-full bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/contact">Become a Contributor</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Request Custom Research</h3>
              <p className="text-gray-600 mb-4">
                Need specific insights for your impact venture or investment strategy? Let us know.
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <Link to="/contact">Request Research</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Research;
