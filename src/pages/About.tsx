
import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout
      title="Our Mission"
      description="Why Propel exists and where we are going"
    >
      <div className="space-y-16">
        {/* Mission Section */}
        <section className="space-y-8">
          <div className="bg-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl font-medium mb-4">
              Propel exists to make solving the world's most critical challenges radically accessible.
            </p>
            <p className="text-gray-600">
              We believe that access to resources, funding, and expertise should never be the barrier that prevents 
              impactful solutions from being implemented. By democratizing access to these critical elements, we can 
              accelerate the development and deployment of solutions to urgent global challenges.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-gray-600 mb-8">
            A world where anyone, anywhere can identify an issue, take action immediately, get access to the right funding and resources without barriers, 
            join forces with like-minded changemakers, and move from idea to execution with full support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Identify & Take Action</h3>
              <p className="text-gray-600">
                Anyone should be able to identify a problem and immediately have pathways to begin working on solutions, 
                without bureaucracy or gatekeeping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Access to Resources</h3>
              <p className="text-gray-600">
                Critical resources, funding, and expertise should be available to all passionate changemakers, 
                not just those with existing connections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Collaborative Networks</h3>
              <p className="text-gray-600">
                The ability to connect with like-minded individuals and organizations who can accelerate and amplify solutions 
                should be available to everyone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Idea to Execution</h3>
              <p className="text-gray-600">
                The journey from idea to implementation should be supported with frameworks, mentorship, and 
                pathways that ensure effective execution.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <p className="text-gray-600 mb-8">
            These core principles guide every aspect of Propel's execution-driven model.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-accent mb-2">Radical Accessibility</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Impact should never be behind a paywall. We believe that critical knowledge, resources, and funding opportunities 
                  should be available to all, regardless of background, geography, or privilege.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-accent mb-2">Execution Over Talk</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  We prioritize action, not endless discussion. While thoughtful planning is important, we believe in rapid prototyping, 
                  testing, and implementation to create real-world impact.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-accent mb-2">Collaboration, Not Competition</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  We integrate existing solutions and partners rather than reinventing the wheel. The global challenges we face 
                  require collective action and shared resources.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-accent mb-2">Scalability & Sustainability</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  We focus on high-leverage, long-term impact. Solutions must be designed to grow, adapt, and sustain 
                  themselves beyond initial implementation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-accent mb-2">Data-Driven Decision Making</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  AI-powered insights shape our funding and execution strategies. We believe in making decisions based on 
                  evidence and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
