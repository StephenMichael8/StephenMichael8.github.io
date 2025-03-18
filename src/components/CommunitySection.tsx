
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CommunitySection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Propel Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with a global network of founders, investors, researchers, and changemakers united by a common mission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Community Card 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sustainable Communities</h3>
              <p className="text-gray-600 mb-4">
                Join self-sustaining, local innovation hubs working on grassroots solutions to global challenges.
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={() => navigate("/community")}
              >
                Explore Communities
              </Button>
            </div>
          </div>
          
          {/* Community Card 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Media Hub</h3>
              <p className="text-gray-600 mb-4">
                Educational content, interviews, and solution-focused stories to inspire change and drive action.
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={() => navigate("/media")}
              >
                Explore Media
              </Button>
            </div>
          </div>
          
          {/* Community Card 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Community Spotlight</h3>
              <p className="text-gray-600 mb-4">
                Celebrating founders, investors, and projects making a real difference around the world.
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={() => navigate("/spotlight")}
              >
                View Spotlights
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="rounded-full text-base px-8 py-6 bg-accent hover:bg-accent/90"
            onClick={() => navigate("/join")}
          >
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
