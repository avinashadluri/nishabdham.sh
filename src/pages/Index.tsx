
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Documentation</span>
          </a>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Guide
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              API
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
          <button className="md:hidden" onClick={toggleNav}>
            {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleNav} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-6">
              <a href="#" className="text-lg font-medium" onClick={toggleNav}>
                Guide
              </a>
              <a href="#" className="text-lg font-medium" onClick={toggleNav}>
                API
              </a>
              <Button variant="default" onClick={toggleNav}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <ScrollArea className="h-[calc(100vh-7rem)] pr-6">
              <div className="space-y-4">
                <div className="font-medium">Getting Started</div>
                <nav className="space-y-2">
                  <a href="#" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Introduction
                  </a>
                  <a href="#" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Installation
                  </a>
                  <a href="#" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Configuration
                  </a>
                </nav>
              </div>
            </ScrollArea>
          </aside>

          {/* Content */}
          <div className="flex-1 animate-fade-up">
            <article className="prose prose-slate max-w-none">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                Documentation
              </div>
              <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
                Build beautiful documentation
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Create stunning documentation with a modern tech stack. Built with performance and developer experience in mind.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="font-medium">
                  View on GitHub
                </Button>
              </div>

              <h2 className="mt-12 scroll-m-20 text-2xl font-semibold tracking-tight">
                Features
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

const features = [
  {
    title: "Beautiful Documentation",
    description: "Create stunning documentation with a modern design system.",
  },
  {
    title: "Fast and Responsive",
    description: "Optimized for speed and great user experience across all devices.",
  },
  {
    title: "Developer Experience",
    description: "Built with developer experience in mind, using modern tools and practices.",
  },
  {
    title: "Customizable",
    description: "Easily customize the look and feel to match your brand.",
  },
];

export default Index;
