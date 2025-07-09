"use client";

import { useState } from "react";
import { Roadmap } from "@/components/Roadmap";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ResourceChip } from "@/components/ResourceChip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar, Clock, Accessibility, ExternalLink, CheckCircle } from "lucide-react";

export default function PreHireAdjustments() {
  const [selectedAdjustments, setSelectedAdjustments] = useState<string[]>([]);
  const [showGrants, setShowGrants] = useState(false);

  const handleAdjustmentChange = (value: string[]) => {
    setSelectedAdjustments(value);
    setShowGrants(value.length > 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Recruitment Practices", href: "/recruitment" },
          { label: "Pre-Hire Adjustments" }
        ]} />
        
        <Roadmap active={2} done={[1]} progress={3} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pre-Hire Adjustments
              </h1>
              <p className="text-lg text-gray-600">
                Provide reasonable adjustments during the hiring process to ensure all candidates can participate fully and showcase their abilities.
              </p>
            </div>

            {/* Adjustment Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What adjustments might you need?</CardTitle>
                <CardDescription>
                  Select all that apply to see relevant resources and funding options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroup 
                  type="multiple" 
                  value={selectedAdjustments}
                  onValueChange={handleAdjustmentChange}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <ToggleGroupItem 
                    value="interpreter" 
                    className="h-auto p-4 flex flex-col items-center space-y-2 data-[state=on]:bg-primaryBlue data-[state=on]:text-white"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primaryBlue" />
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Sign Language Interpreter</div>
                      <div className="text-sm opacity-70">For deaf/hard of hearing candidates</div>
                    </div>
                  </ToggleGroupItem>

                  <ToggleGroupItem 
                    value="extra-time" 
                    className="h-auto p-4 flex flex-col items-center space-y-2 data-[state=on]:bg-primaryBlue data-[state=on]:text-white"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Extra Time</div>
                      <div className="text-sm opacity-70">Extended time for assessments</div>
                    </div>
                  </ToggleGroupItem>

                  <ToggleGroupItem 
                    value="wheelchair" 
                    className="h-auto p-4 flex flex-col items-center space-y-2 data-[state=on]:bg-primaryBlue data-[state=on]:text-white"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Accessibility className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Wheelchair Access</div>
                      <div className="text-sm opacity-70">Accessible venue arrangements</div>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>

                {showGrants && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Funding Support Available</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">AT Fund covers up to 80% of assistive technology costs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Open Door Grant provides workplace modification funding</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <ResourceChip 
                        variant="link" 
                        text="Apply for AT Fund" 
                        href="https://www.sgenable.sg/at-fund"
                      />
                      <ResourceChip 
                        variant="link" 
                        text="Apply for Open Door Grant" 
                        href="https://www.sgenable.sg/open-door-grant"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Common Adjustments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Common Pre-Hire Adjustments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Interview Adjustments</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primaryBlue rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Extended interview time</div>
                          <div className="text-sm text-gray-600">Additional time for candidates who need it</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primaryBlue rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Written questions</div>
                          <div className="text-sm text-gray-600">Provide questions in advance or writing</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primaryBlue rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Alternative formats</div>
                          <div className="text-sm text-gray-600">Large print, braille, or audio materials</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Venue Adjustments</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primaryBlue rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Accessible location</div>
                          <div className="text-sm text-gray-600">Wheelchair accessible venue</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primaryBlue rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Parking arrangements</div>
                          <div className="text-sm text-gray-600">Reserved accessible parking</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primaryBlue rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Quiet environment</div>
                          <div className="text-sm text-gray-600">Minimize distractions and noise</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-primaryBlue text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ready to discuss adjustments?</h3>
                <p className="mb-4 opacity-90">
                  Book a consultation with our team to plan the right adjustments for your candidates.
                </p>
                <Button className="bg-white text-primaryBlue hover:bg-gray-100">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                <ResourceChip 
                  variant="file" 
                  text="Adjustment Request Form" 
                  href="/assets/adjustment-request-form.pdf"
                />
                </div>
                <div className="space-y-3">
                <ResourceChip 
                  variant="file" 
                  text="Vendor Directory" 
                  href="/assets/vendor-directory.pdf"
                />
                </div>
                <div className="space-y-3">
                <ResourceChip 
                  variant="link" 
                  text="Accessibility Checklist" 
                  href="/assets/accessibility-checklist.pdf"
                />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Implementation Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Ask about adjustments in job applications</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Plan adjustments well in advance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Keep costs reasonable and justified</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Document the adjustment process</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}