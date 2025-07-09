"use client";

import { Roadmap } from "@/components/Roadmap";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RecruitmentHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Recruitment Practices" }]} />
        
        <Roadmap active={2} done={[1]} progress={3} />
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hire inclusively, hire right
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From job ad to first day, remove bias and open doors to talent with disabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primaryBlue hover:bg-primaryBlue/90 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Toolkit
            </Button>
            <Button size="lg" variant="outline">
              Take Self-Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Recruitment Journey</CardTitle>
                <CardDescription>
                  Follow these three essential steps to build an inclusive recruitment process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="fair-selection">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <div className="font-semibold">Fair Selection</div>
                          <div className="text-sm text-gray-600">
                            3-step checklist for inclusive job ads & shortlisting
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-12 space-y-4">
                        <p className="text-gray-600">
                          Create job descriptions that attract diverse candidates and implement 
                          fair shortlisting practices that focus on skills over assumptions.
                        </p>
                        <Link href="/recruitment/fair-selection">
                          <Button variant="outline" className="w-full sm:w-auto">
                            Start Fair Selection
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="non-bias-interview">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <div className="font-semibold">Non-Bias Interview</div>
                          <div className="text-sm text-gray-600">
                            Structured questioning & red-flags to avoid
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-12 space-y-4">
                        <p className="text-gray-600">
                          Learn interview techniques that evaluate candidates fairly while 
                          avoiding discriminatory questions and unconscious bias.
                        </p>
                        <Link href="/recruitment/non-bias-interview">
                          <Button variant="outline" className="w-full sm:w-auto">
                            Learn Interview Techniques
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pre-hire-adjustments">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <div className="font-semibold">Pre-Hire Adjustments</div>
                          <div className="text-sm text-gray-600">
                            Interpreter, extra time, wheelchair access
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-12 space-y-4">
                        <p className="text-gray-600">
                          Provide reasonable adjustments during the hiring process to ensure 
                          all candidates can participate fully and showcase their abilities.
                        </p>
                        <Link href="/recruitment/pre-hire-adjustments">
                          <Button variant="outline" className="w-full sm:w-auto">
                            Set Up Adjustments
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <FileText className="h-5 w-5 text-primaryBlue" />
                  <div>
                    <div className="font-medium text-sm">Recruitment Toolkit</div>
                    <div className="text-xs text-gray-600">Complete guide (PDF)</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">Job Description Template</div>
                    <div className="text-xs text-gray-600">Inclusive JD template</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                  <FileText className="h-5 w-5 text-orange-600" />
                  <div>
                    <div className="font-medium text-sm">Sample Job Ad</div>
                    <div className="text-xs text-gray-600">Real-world example</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">External Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.tal.sg/tafep" target="_blank" rel="noopener noreferrer">
                    TAFEP Fair Hiring Guidelines
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.mycareersfuture.gov.sg" target="_blank" rel="noopener noreferrer">
                    MyCareersFuture
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}