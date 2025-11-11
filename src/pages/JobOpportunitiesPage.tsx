import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CheckCircle2, Briefcase, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  cv: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Resume is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Resume file size must be less than 5MB"
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only PDF and Word documents are accepted"
    ),
});

type FormValues = z.infer<typeof formSchema>;

const jobPositions = [
  { value: "software-engineer", label: "Software Engineer", category: "Technology", location: "Multiple Locations" },
  { value: "senior-software-engineer", label: "Senior Software Engineer", category: "Technology", location: "Remote/Hybrid" },
  { value: "frontend-developer", label: "Frontend Developer", category: "Technology", location: "Multiple Locations" },
  { value: "backend-developer", label: "Backend Developer", category: "Technology", location: "Multiple Locations" },
  { value: "full-stack-developer", label: "Full Stack Developer", category: "Technology", location: "Remote/Hybrid" },
  { value: "devops-engineer", label: "DevOps Engineer", category: "Technology", location: "Multiple Locations" },
  { value: "data-engineer", label: "Data Engineer", category: "Technology", location: "Remote/Hybrid" },
  { value: "data-scientist", label: "Data Scientist", category: "Technology", location: "Multiple Locations" },
  { value: "cloud-architect", label: "Cloud Architect", category: "Technology", location: "Remote/Hybrid" },
  { value: "qa-engineer", label: "QA Engineer", category: "Technology", location: "Multiple Locations" },
  { value: "project-manager", label: "Project Manager", category: "Management", location: "Multiple Locations" },
  { value: "product-manager", label: "Product Manager", category: "Management", location: "Remote/Hybrid" },
  { value: "business-analyst", label: "Business Analyst", category: "Business", location: "Multiple Locations" },
  { value: "financial-analyst", label: "Financial Analyst", category: "Finance", location: "Multiple Locations" },
  { value: "accountant", label: "Accountant", category: "Finance", location: "Multiple Locations" },
  { value: "hr-specialist", label: "HR Specialist", category: "Human Resources", location: "Multiple Locations" },
  { value: "recruitment-consultant", label: "Recruitment Consultant", category: "Human Resources", location: "Multiple Locations" },
  { value: "account-manager", label: "Account Manager", category: "Sales", location: "Multiple Locations" },
  { value: "sales-executive", label: "Sales Executive", category: "Sales", location: "Multiple Locations" },
  { value: "marketing-specialist", label: "Marketing Specialist", category: "Marketing", location: "Multiple Locations" },
  { value: "digital-marketing-manager", label: "Digital Marketing Manager", category: "Marketing", location: "Remote/Hybrid" },
  { value: "operations-manager", label: "Operations Manager", category: "Operations", location: "Multiple Locations" },
  { value: "supply-chain-manager", label: "Supply Chain Manager", category: "Operations", location: "Multiple Locations" },
  { value: "manufacturing-engineer", label: "Manufacturing Engineer", category: "Engineering", location: "Multiple Locations" },
  { value: "mechanical-engineer", label: "Mechanical Engineer", category: "Engineering", location: "Multiple Locations" },
  { value: "electrical-engineer", label: "Electrical Engineer", category: "Engineering", location: "Multiple Locations" },
  { value: "quality-engineer", label: "Quality Engineer", category: "Engineering", location: "Multiple Locations" },
];

const JobOpportunitiesPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Job application submitted:", {
      ...values,
      cvFileName: values.cv[0]?.name,
    });

    // In a real application, you would upload the file to your server here
    // const formData = new FormData();
    // formData.append("name", values.name);
    // formData.append("email", values.email);
    // formData.append("phone", values.phone);
    // formData.append("position", values.position);
    // formData.append("cv", values.cv[0]);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <SEO
          title="Application Submitted | Talent Fino"
          description="Thank you for your application"
          keywords={["job application", "resume submission", "employment"]}
          path="/job-opportunities"
        />
        <Header />
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
          <Card className="max-w-md w-full mx-6">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Thank You!</h2>
                <p className="text-muted-foreground">
                  Thank you for uploading your resume. We will review it and get back to you soon with matching opportunities.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    form.reset();
                    setFileName("");
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Job Opportunities - Find Your Next Role | Talent Fino"
        description="Explore exciting job opportunities across multiple locations and industries. Upload your resume and let Talent Fino connect you with top employers."
        keywords={[
          "job opportunities",
          "employment",
          "job placement",
          "career opportunities",
          "job openings",
          "recruitment",
        ]}
        path="/job-opportunities"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Briefcase className="h-3 w-3 mr-1" />
              Open Positions Available
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Find Your Next Opportunity
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We connect talented professionals with leading companies across multiple locations and industries.
              Upload your resume and let us match you with the perfect role.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Various Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Full-time & Contract</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Positions Preview */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {jobPositions.slice(0, 6).map((job) => (
                <Card key={job.value} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{job.label}</CardTitle>
                    <CardDescription className="text-xs">
                      <div className="flex flex-col gap-1 mt-2">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.category}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm">
              And many more opportunities available! Submit your resume below to view all matching positions.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Submit Your Resume</CardTitle>
                <CardDescription>
                  Fill out the form below and upload your resume. Our team will review your profile and contact you about relevant opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Position Field */}
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position of Interest *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {jobPositions.map((position) => (
                                <SelectItem
                                  key={position.value}
                                  value={position.value}
                                >
                                  {position.label} - {position.location}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* CV Upload Field */}
                    <FormField
                      control={form.control}
                      name="cv"
                      render={({ field: { onChange, value, ...field } }) => (
                        <FormItem>
                          <FormLabel>Upload Resume *</FormLabel>
                          <FormControl>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Input
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => {
                                    onChange(e.target.files);
                                    setFileName(
                                      e.target.files?.[0]?.name || ""
                                    );
                                  }}
                                  {...field}
                                  className="cursor-pointer"
                                />
                                <Upload className="h-5 w-5 text-muted-foreground" />
                              </div>
                              {fileName && (
                                <p className="text-sm text-muted-foreground">
                                  Selected: {fileName}
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground">
                                Accepted formats: PDF, DOC, DOCX (Max 5MB)
                              </p>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* SMS Consent Disclaimer */}
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        By providing your phone number, you agree to receive text messages from Talent Fino.
                        Message and data rates may apply. Reply STOP to opt out, or reply HELP for assistance.
                        Please refer to our{" "}
                        <a
                          href="/terms-and-conditions"
                          className="text-primary hover:underline"
                        >
                          Terms
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy-policy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </a>{" "}
                        for more information.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                    >
                      Submit Resume
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobOpportunitiesPage;
