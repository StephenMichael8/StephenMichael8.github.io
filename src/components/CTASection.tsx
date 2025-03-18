
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 bg-accent text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Propel today and become part of a global movement solving the world's most critical challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="rounded-full text-base px-8 py-6 bg-white text-accent hover:bg-white/90"
              onClick={() => navigate("/get-started")}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full text-base px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
