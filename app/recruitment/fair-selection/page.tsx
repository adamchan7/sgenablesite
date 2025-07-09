"use client";

import { Roadmap } from "@/components/Roadmap";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ResourceChip } from "@/components/ResourceChip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ExternalLink, Copy } from "lucide-react";

export default function FairSelection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Recruitment Practices", href: "/recruitment" },
          { label: "Fair Selection" }
        ]} />
        
        <Roadmap active={2} done={[1]} progress={3} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fair Selection Process
              </h1>
              <p className="text-lg text-gray-600">
                Follow these three essential steps to create inclusive job descriptions and implement fair shortlisting practices.
              </p>
            </div>

            {/* Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Step-by-Step Checklist</CardTitle>
                <CardDescription>
                  Complete each step to build a bias-free selection process.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Write Inclusive Job Description</h3>
                    <p className="text-gray-600 mb-4">
                      Create job descriptions that focus on essential skills and avoid discriminatory language. 
                      Use inclusive terminology and clear requirements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <ResourceChip 
                        variant="file" 
                        text="JD Template" 
                        href="/assets/JD-template.docx"
                        downloadName="JD-template.docx"
                      />
                      <ResourceChip 
                        variant="file" 
                        text="Sample Job Ad" 
                        href="/assets/Sample-Inclusive-Job-Ad.pdf"
                        downloadName="Sample-Inclusive-Job-Ad.pdf"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Post on Inclusive Job Boards</h3>
                    <p className="text-gray-600 mb-4">
                      Expand your reach by posting on platforms that prioritize diversity and inclusion. 
                      This helps attract candidates from underrepresented communities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <ResourceChip 
                        variant="link" 
                        text="MyCareersFuture" 
                        href="https://www.mycareersfuture.gov.sg"
                      />
                      <ResourceChip 
                        variant="link" 
                        text="Inclusive Jobs" 
                        href="https://www.inclusivejobs.com.sg"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Shortlist with Skill-First Criteria</h3>
                    <p className="text-gray-600 mb-4">
                      Use structured evaluation criteria that focus on job-relevant skills and competencies. 
                      Avoid assumptions based on names, backgrounds, or other non-relevant factors.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Key Evaluation Criteria:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Technical skills and experience</li>
                        <li>• Problem-solving abilities</li>
                        <li>• Communication skills</li>
                        <li>• Cultural fit (values alignment)</li>
                        <li>• Growth potential</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                <ResourceChip 
                  variant="link" 
                  text="TAFEP Fair Hiring Guidelines" 
                  href="https://www.tal.sg/tafep"
                />
                </div>
                <div className="space-y-3">
                <ResourceChip 
                  variant="file" 
                  text="Sample Inclusive Job Ad" 
                  href="/assets/Sample-Inclusive-Job-Ad.pdf"
                />
                </div>
                <div className="space-y-3">
                <ResourceChip 
                  variant="snippet" 
                  text="Copy EO Declaration" 
                  copyText="We are an equal opportunity employer committed to building a diverse and inclusive team. All qualified applicants will receive consideration for employment without regard to race, religion, color, national origin, gender, gender identity, sexual orientation, age, marital status, veteran status, or disability status."
                />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Use gender-neutral language</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Focus on essential requirements only</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Include accessibility statement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Offer flexible work arrangements</span>
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