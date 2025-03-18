
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("university");
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Propel Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive platform connecting funding, execution, research, and learning to make impact accessible to everyone.
          </p>
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-5xl">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="university" className="px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-white">
                University
              </TabsTrigger>
              <TabsTrigger value="taskforce" className="px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-white">
                Task Force
              </TabsTrigger>
              <TabsTrigger value="research" className="px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-white">
                Research Hub
              </TabsTrigger>
              <TabsTrigger value="funding" className="px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-white">
                Funding
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="university" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                  Propel University
                </span>
                <h3 className="text-2xl font-bold mb-4">From Learning to Execution</h3>
                <p className="text-gray-600 mb-6">
                  Our execution-based learning system moves people from knowledge to real-world action. Complete courses that end with concrete prototypes and solutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Specialized tracks for climate, health, AI ethics, and more</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Direct pathway to the Global Solutions Task Force</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Learn from global experts and industry leaders</span>
                  </li>
                </ul>
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  onClick={() => navigate("/university")}
                >
                  Explore Courses
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl transform rotate-3 opacity-60"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-md">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Core Learning</h4>
                    </div>
                    <p className="text-sm text-gray-600">Master lean startup, funding, partnerships, and impact measurement</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Issue-Specific Training</h4>
                    </div>
                    <p className="text-sm text-gray-600">Specialized tracks in climate tech, health, AI ethics, and more</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Graduate to Execution</h4>
                    </div>
                    <p className="text-sm text-gray-600">Top graduates join the Global Solutions Task Force</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="taskforce" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-rose-100 text-rose-600 text-sm font-medium">
                  Global Solutions Task Force
                </span>
                <h3 className="text-2xl font-bold mb-4">The Elite Execution Team</h3>
                <p className="text-gray-600 mb-6">
                  Our fully funded execution teams deploy real-world solutions to the world's most critical challenges, turning ideas into action at scale.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Fully funded implementation teams</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cross-sector collaboration with experts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Scalable, measurable solutions</span>
                  </li>
                </ul>
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  onClick={() => navigate("/task-force")}
                >
                  Explore Task Force
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-orange-100 rounded-2xl transform rotate-3 opacity-60"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-md">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Identifying Bottlenecks</h4>
                    </div>
                    <p className="text-sm text-gray-600">Finding solvable, high-impact problems that need immediate action</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Building Execution Plans</h4>
                    </div>
                    <p className="text-sm text-gray-600">Structured plans with stakeholders, capital, and technology</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Deploying Solutions</h4>
                    </div>
                    <p className="text-sm text-gray-600">Teams working alongside local communities and decision-makers</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="research" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
                  Research Hub
                </span>
                <h3 className="text-2xl font-bold mb-4">Actionable Knowledge & Insights</h3>
                <p className="text-gray-600 mb-6">
                  The world's largest open-access knowledge base for impact, with AI-powered market insights and a collaborative research community.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Interactive, Wikipedia-style knowledge base</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>AI-powered market insights and trends</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Real-time issue tracking and policy analysis</span>
                  </li>
                </ul>
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  onClick={() => navigate("/research")}
                >
                  Explore Research
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-blue-100 rounded-2xl transform rotate-3 opacity-60"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-md">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Market Insights & Reports</h4>
                    </div>
                    <p className="text-sm text-gray-600">Live data tracking, investor intelligence, and emerging trends</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Knowledge Base</h4>
                    </div>
                    <p className="text-sm text-gray-600">Collaborative research database for global challenges and solutions</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Issue Tracking</h4>
                    </div>
                    <p className="text-sm text-gray-600">Real-time policy impact analysis and regulatory changes</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="funding" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                  Funding & Investment
                </span>
                <h3 className="text-2xl font-bold mb-4">Direct Funding for Impact</h3>
                <p className="text-gray-600 mb-6">
                  Our integrated funding platform connects startups, nonprofits, and researchers with direct investors, grants, and crowdfunding opportunities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Live crowdfunding for startups, nonprofits & research</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Comprehensive global funding directory</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Corporate & government partnership portal</span>
                  </li>
                </ul>
                <Button 
                  className="rounded-full bg-accent hover:bg-accent/90"
                  onClick={() => navigate("/funding")}
                >
                  Explore Funding
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-yellow-100 rounded-2xl transform rotate-3 opacity-60"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-md">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Crowdfunding</h4>
                    </div>
                    <p className="text-sm text-gray-600">Public crowdfunding for early-stage ventures and nonprofits</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Funding Directory</h4>
                    </div>
                    <p className="text-sm text-gray-600">Complete list of global funding opportunities and accelerators</p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Corporate Partnerships</h4>
                    </div>
                    <p className="text-sm text-gray-600">Direct introductions to corporate venture teams and government initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
