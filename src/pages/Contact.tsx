
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with the Propel team and help shape the future of impact"
    >
      <div className="space-y-16">
        {/* Contact Options Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              For general inquiries and partnership opportunities
            </p>
            <a href="mailto:hello@propel.org" className="text-accent font-medium">
              hello@propel.earth
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Speak directly with our team during business hours
            </p>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => alert("Live chat would open here")}
            >
              Start Chat
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">
              Schedule a meeting at one of our global offices
            </p>
            <Button 
              variant="outline" 
              className="rounded-full"
              asChild
            >
              <a href="/locations">View Locations</a>
            </Button>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
          
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-600 p-4 rounded-lg text-center">
              <p className="font-medium">Thank you for your message!</p>
              <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="funding">Funding Question</option>
                  <option value="support">Support Request</option>
                  <option value="suggestion">Suggestion</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit"
                  className="w-full rounded-full bg-accent hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </section>

        {/* Open Collaboration Section */}
        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Direct Collaboration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let us know who we should be partnering with and help shape the future of Propel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Suggest a Partner</h3>
              <p className="text-gray-600 mb-4">
                Know of an organization, funder, or resource that should be part of the Propel ecosystem?
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <a href="/suggest-partner">Submit a Partner</a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Submit an Opportunity</h3>
              <p className="text-gray-600 mb-4">
                Help us expand our database of grants, accelerators, and funding opportunities.
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <a href="/submit-opportunity">Add an Opportunity</a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Share Market Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Have insights on emerging impact sectors or investment trends? Share them with our network.
              </p>
              <Button 
                variant="outline" 
                className="w-full justify-center rounded-full"
                asChild
              >
                <a href="/share-insights">Submit Insights</a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">How can I join the Propel network?</h3>
              <p className="text-gray-600">
                You can sign up as a founder, investor, nonprofit, academic, or community member through our "Get Started" page, 
                which will guide you through creating your profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Is there a cost to use Propel's platform?</h3>
              <p className="text-gray-600">
                Propel's core features are freely accessible to all users. Some premium services, like advanced market intelligence 
                or exclusive events, may have associated costs that help fund our operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">How does Propel select startups for its platform?</h3>
              <p className="text-gray-600">
                Startups are evaluated based on their impact potential, innovation, team capability, and alignment with our focus areas. 
                We welcome applications from ventures at all stages.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Can I apply to multiple programs simultaneously?</h3>
              <p className="text-gray-600">
                Yes, you can apply to Propel University, the Global Solutions Task Force, and funding opportunities simultaneously. 
                Many of our programs are designed to complement each other.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Contact;
