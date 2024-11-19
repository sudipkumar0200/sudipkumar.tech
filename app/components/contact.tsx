"use client";

import emailjs from "@emailjs/browser";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sudiptech0200@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ""
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        // Clear URL parameters without refreshing
        // window.history.replaceState({}, "", window.location.pathname);
        // Reset the form element
        (e.target as HTMLFormElement).reset();
        setIsSubmitting(false);
      }
    } catch (e) {
      toast.error("Failed to send message. Please try again.");
      console.log(e);
    }
  };

  return (
    <div id="contact" className="py-20 flex items-center justify-center">
      <div className="container px-4 lg:px-14">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text animate-pulse-slow">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {
                icon: MailIcon,
                title: "Email",
                content: "sudipkumar0200@gmail.com",
              },
              { icon: PhoneIcon, title: "Phone", content: "+91 9305487360" },
              {
                icon: MapPinIcon,
                title: "Location",
                content: "Lucknow, India",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
                className="animate-slide-left card-hover"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-6 w-6 text-primary animate-pulse-slow" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            style={{
              animationDelay: "300ms",
              opacity: 0,
            }}
            className="animate-slide-right card-hover"
          >
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    name="name"
                    required
                    className="bg-background animate-fade-in"
                    style={{ animationDelay: "400ms" }}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-background animate-fade-in"
                    style={{ animationDelay: "500ms" }}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  required
                  className="bg-background animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                  onChange={handleChange}
                />
                <Textarea
                  placeholder="Your message"
                  name="message"
                  className="min-h-[150px] bg-background animate-fade-in"
                  style={{ animationDelay: "700ms" }}
                  required
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  className="w-full card-hover "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
