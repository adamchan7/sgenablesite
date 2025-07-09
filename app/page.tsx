"use client";

import { pillars } from "@/lib/pillars";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, UserCheck, Briefcase, Globe, BarChart3 } from "lucide-react";
import Link from "next/link";

const iconMap = {
  1: Users,
  2: UserCheck,
  3: Building2,
  4: Briefcase,
  5: Globe,
  6: BarChart3,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Inclusive Journey
            <span className="text-primaryBlue"> Starter Kit</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            All the tools you need to earn the SG Enabling Mark and build a truly inclusive workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primaryBlue hover:bg-primaryBlue/90 text-white">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Six Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.id as keyof typeof iconMap];
            return (
              <Card key={pillar.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primaryBlue/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primaryBlue" />
                    </div>
                    <div className="text-sm font-medium text-primaryBlue">
                      Pillar {pillar.id}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {pillar.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Why it matters:</div>
                    <p className="text-sm text-gray-600 italic">{pillar.why}</p>
                  </div>
                  <Link href={pillar.route} className="block mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primaryBlue group-hover:text-white transition-colors h-10"
                    >
                      Explore Pillar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}