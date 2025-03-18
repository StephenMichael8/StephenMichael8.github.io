
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const University = () => {
  // Sample core courses
  const coreCourses = [
    {
      title: "Lean Startup for Impact",
      description: "Learn how to build solutions that scale without wasting time and money.",
      duration: "6 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Problem Discovery & Blue Ocean Strategy",
      description: "How to identify systemic problems and uncover high-impact opportunities.",
      duration: "4 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Behavioral Science for Change",
      description: "Understanding what drives human decision-making and how to create lasting solutions.",
      duration: "5 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Fundraising & Grant Writing",
      description: "How to secure capital from investors, VCs, governments, and foundations.",
      duration: "8 weeks",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&h=500"
    }
  ];

  // Sample specialized tracks
  const specializedTracks = [
    "Renewable Energy & Climate Tech",
    "Global Health & Pandemic Preparedness",
    "AI Ethics & Responsible Tech Development",
    "Financial Inclusion & Economic Development",
    "Future of Education & Workforce Transformation",
    "Food Security & Sustainable Agriculture",
    "Urban Innovation & Smart Cities",
    "Gender Equity & Inclusive Policy-Making"
  ];

  return (
    <PageLayout
      title="Propel University"
      description="From learning to execution—the fastest path to making an impact"
    >
      <div className="space-y-16">
        {/* Introduction Section */}
        <section className="space-y-6">
          <div className="bg-gradient-to-r from-accent/10 to-purple-100/30 p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Just Another Online Course Platform</h2>
            <p className="text-gray-700 mb-6">
              Propel University is an end-to-end training system that moves people from learning → execution → impact careers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Execution-Based Learning</h3>
                <p className="text-sm text-gray-600">Every course ends in a real-world action or prototype.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Direct Path to Funding</h3>
                <p className="text-sm text-gray-600">Complete courses to unlock funding, investors, and partnerships.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Global Solutions Task Force</h3>
                <p className="text-sm text-gray-600">Top graduates join high-impact execution projects.</p>
              </div>
              
              <div className="bg-white bg-opacity-80 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">Expert-Led Learning</h3>
                <p className="text-sm text-gray-600">Collaborative, interactive, and mentor-guided courses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Learning Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Core Learning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential skills for founders, operators, nonprofit leaders, and researchers working to create impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{course.duration}</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{course.level}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center rounded-full"
                    asChild
                  >
                    <Link to="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/get-started">View All Courses</Link>
            </Button>
          </div>
        </section>

        {/* Specialized Tracks Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Issue-Specific Training</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dives into the world's most pressing problems, designed for those who have completed core courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializedTracks.map((track, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl p-6 text-center hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold mb-2">{track}</h3>
                <p className="text-sm text-gray-500">Specialized Track</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              className="rounded-full"
              asChild
            >
              <Link to="/learn-more">Explore All Tracks</Link>
            </Button>
          </div>
        </section>

        {/* Graduation Pathway Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Graduate to Execution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Top graduates don't just earn certificates—they get recruited to solve real-world problems.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Complete Courses</h3>
                <p className="text-sm text-gray-600">
                  Earn credibility as a leader in your issue area through practical learning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Join Task Force</h3>
                <p className="text-sm text-gray-600">
                  Get invited to join fully funded execution teams working on high-priority challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Create Real Impact</h3>
                <p className="text-sm text-gray-600">
                  Access direct funding to build and implement your own solutions to global challenges.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90"
              asChild
            >
              <Link to="/task-force">Learn About the Task Force</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default University;
