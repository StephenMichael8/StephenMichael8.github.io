
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 text-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
          The World's First Open-Access Impact Execution Platform
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mx-auto max-w-4xl leading-tight md:leading-tight animate-fade-in">
          Making Impact <span className="text-accent">Radically Accessible</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 mx-auto max-w-2xl animate-fade-in" style={{ animationDelay: "150ms" }}>
          Propel connects founders, investors, nonprofits, academics, and communities to solve the world's most critical challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Button 
            className="rounded-full text-base px-8 py-6 bg-accent hover:bg-accent/90"
            onClick={() => window.location.href = "https://calendly.com/stephen-propel/30min"}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full text-base px-8 py-6"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </div>
        
        {/* User type selection */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in" style={{ animationDelay: "450ms" }}>
          <div 
            className="group bg-white shadow-sm rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate("/founders")}
          >
            <div className="mb-3 w-12 h-12 mx-auto rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Founders</h3>
            <p className="text-sm text-gray-500">Get funding & scale faster</p>
          </div>
          
          <div 
            className="group bg-white shadow-sm rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate("/investors")}
          >
            <div className="mb-3 w-12 h-12 mx-auto rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Investors</h3>
            <p className="text-sm text-gray-500">Discover impact startups</p>
          </div>
          
          <div 
            className="group bg-white shadow-sm rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate("/nonprofits")}
          >
            <div className="mb-3 w-12 h-12 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Nonprofits</h3>
            <p className="text-sm text-gray-500">Get grants & expand impact</p>
          </div>
          
          <div 
            className="group bg-white shadow-sm rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate("/academics")}
          >
            <div className="mb-3 w-12 h-12 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Academics</h3>
            <p className="text-sm text-gray-500">Research to real-world</p>
          </div>
          
          <div 
            className="group bg-white shadow-sm rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate("/community")}
          >
            <div className="mb-3 w-12 h-12 mx-auto rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Community</h3>
            <p className="text-sm text-gray-500">Join & take action</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
