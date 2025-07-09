"use client";

import { Roadmap } from "@/components/Roadmap";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ResourceChip } from "@/components/ResourceChip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export default function NonBiasInterview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Recruitment Practices", href: "/recruitment" },
          { label: "Non-Bias Interview" }
        ]} />
        
        <Roadmap active={2} done={[1]} progress={3} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Non-Bias Interview Techniques
              </h1>
              <p className="text-lg text-gray-600">
                Learn how to conduct fair, structured interviews that evaluate candidates based on job-relevant skills and competencies.
              </p>
            </div>

            {/* Video Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Structured Interview Training</CardTitle>
                <CardDescription>
                  Watch this 90-second guide to conducting bias-free interviews.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-600">Structured Interview Training Video</p>
                      <p className="text-sm text-gray-500">Duration: 90 seconds</p>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            {/* Tips Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Use standardized questions:</strong> Prepare the same core questions for all candidates to ensure fair comparison and reduce bias.
                  </AlertDescription>
                </Alert>

                <Alert className="border-blue-200 bg-blue-50">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Diversify your interview panel:</strong> Include multiple perspectives by having a diverse group of interviewers from different backgrounds and departments.
                  </AlertDescription>
                </Alert>

                <Alert className="border-purple-200 bg-purple-50">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-800">
                    <strong>Focus on competencies:</strong> Ask behavioral questions that reveal how candidates have handled situations relevant to the role.
                  </AlertDescription>
                </Alert>

                <Alert className="border-orange-200 bg-orange-50">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-800">
                    <strong>Take structured notes:</strong> Use a consistent evaluation framework to document responses objectively.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Red Flags Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Red Flags to Avoid</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Don't ask medical questions:</strong> Avoid questions about health conditions, disabilities, medical history, or the need for accommodations until after a job offer is made.
                  </AlertDescription>
                </Alert>

                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-lg">Other Questions to Avoid:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Personal Life</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Marital status</li>
                        <li>• Family planning</li>
                        <li>• Age or date of birth</li>
                        <li>• Religion or beliefs</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Background</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• National origin</li>
                        <li>• Accent or language</li>
                        <li>• Physical appearance</li>
                        <li>• Financial status</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-primaryBlue text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ready to implement these practices?</h3>
                <p className="mb-4 opacity-90">
                  Get our comprehensive interview guide with sample questions and evaluation frameworks.
                </p>
                <Button className="bg-white text-primaryBlue hover:bg-gray-100">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Copy Interview Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Interview Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                <ResourceChip 
                  variant="file" 
                  text="Interview Question Bank" 
                  href="/assets/interview-questions.pdf"
                />
                </div>
                <div className="space-y-3">
                <ResourceChip 
                  variant="file" 
                  text="Evaluation Scorecard" 
                  href="/assets/evaluation-scorecard.xlsx"
                />
                </div>
                <div className="space-y-3">
                <ResourceChip 
                  variant="link" 
                  text="Behavioral Interview Guide" 
                  href="https://www.notion.so/interview-guide"
                />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sample Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Problem-Solving</h4>
                    <p className="text-gray-600 italic">
                      "Tell me about a time when you had to solve a complex problem with limited resources."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Teamwork</h4>
                    <p className="text-gray-600 italic">
                      "Describe a situation where you had to work with a difficult team member."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Adaptability</h4>
                    <p className="text-gray-600 italic">
                      "Give an example of when you had to adapt to a significant change at work."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}