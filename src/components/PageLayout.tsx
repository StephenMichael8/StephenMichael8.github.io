
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const PageLayout = ({ children, title, description, className = "" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
          <div className={className}>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
