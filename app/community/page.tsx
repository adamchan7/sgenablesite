"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export default function CommunityPlaceholder() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-primaryBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="h-12 w-12 text-primaryBlue" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Engagement & Promotion
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Coming soon! This pillar will help you build partnerships and tell your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primaryBlue hover:bg-primaryBlue/90 text-white">
              Get Notified
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}