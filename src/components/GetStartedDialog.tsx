import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const industries = [
  "Manufacturing",
  "Automotive",
  "Life Sciences & Healthcare",
  "Aerospace & Defense",
  "Construction & Civil Engineering",
  "Environmental & Architecture",
  "Financial Services",
  "Other",
];

const serviceOptions = [
  "Direct Hire",
  "Executive Search",
  "Contract Staffing",
  "Headhunting",
  "Resume Sourcing",
];

const FormSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid work email is required"),
  phone: z.string().optional(),
  industry: z.string().min(1, "Select an industry"),
  engagement: z.string().min(1, "Select an engagement type"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  roles: z.string().optional(),
  headcount: z.coerce.number().int().positive().optional(),
  locations: z.string().optional(),
  budget: z.string().optional(),
  startDate: z.date().optional(),
  notes: z.string().optional(),
  agree: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms to proceed",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

interface GetStartedDialogProps {
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
}

const GetStartedDialog: React.FC<GetStartedDialogProps> = ({
  triggerVariant = "hero",
  triggerSize = "sm",
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      industry: "",
      engagement: "",
      services: [],
      roles: "",
      headcount: undefined,
      locations: "",
      budget: "",
      startDate: undefined,
      notes: "",
      agree: false,
    },
  });

  function onSubmit(values: FormValues) {
    // For now, just toast and log. We can wire Supabase later upon request.
    // eslint-disable-next-line no-console
    console.log("Get Started submission:", values);
    toast({
      title: "Thanks! We'll be in touch shortly.",
      description: `${values.contactName} from ${values.companyName} — our team will reach out at ${values.email}.`,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size={triggerSize}>Get Started</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Start a Staffing Partnership</DialogTitle>
          <DialogDescription>
            Tell us about your hiring needs. We’ll reach out within one business day.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Talent Fino Pvt Ltd" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact person</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="name@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 555 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {industries.map((ind) => (
                          <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="engagement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engagement type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select engagement" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="headcount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approx. headcount</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} placeholder="e.g., 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="locations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hiring locations</FormLabel>
                    <FormControl>
                      <Input placeholder="Cities / countries" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className="md:col-span-1">
                    <FormLabel>Budget / salary range (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., $80k–$100k per role" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Target start date (optional)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      When do you want hires to start?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <section className="space-y-3">
              <Label className="text-sm font-medium">Services needed</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceOptions.map((opt) => (
                  <FormField
                    key={opt}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      const checked = field.value?.includes(opt);
                      return (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border border-border p-3">
                          <FormControl>
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(val) => {
                                const isChecked = Boolean(val);
                                if (isChecked) {
                                  field.onChange([...(field.value || []), opt]);
                                } else {
                                  field.onChange((field.value || []).filter((v) => v !== opt));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{opt}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </section>

            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roles / job titles (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List representative roles, responsibilities, or skill sets" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Anything else we should know?" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to be contacted and to the preliminary staffing terms.
                    </FormLabel>
                    <FormDescription>
                      We’ll email you a summary and next steps.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
