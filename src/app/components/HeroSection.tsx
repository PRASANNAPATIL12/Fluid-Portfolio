import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary">
        Prasanna Patil
      </h1>
      <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
        Full Stack Developer & AI Enthusiast | Crafting Digital Experiences with Code and Creativity
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button 
          size="lg" 
          className="transition-all duration-300 ease-in-out"
          asChild
        >
          <a href="#resume">View My Work <ArrowDown className="ml-2 h-5 w-5" /></a>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="transition-all duration-300 ease-in-out"
          asChild
        >
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
