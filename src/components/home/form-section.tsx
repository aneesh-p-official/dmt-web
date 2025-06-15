"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dialog";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChevronRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FormSection() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
    console.log("Form data:", formData);
  };

  return (
    <section className="py-12 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-8">
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-[40%_auto] items-start gap-8 pt-7 pb-14">
              <Link
                href="/program-overview"
                download={true}
                className="group flex gap-5"
              >
                <p className="text-lg font-medium text-right group-hover:translate-x-2 transition duration-300">
                  Get Brochure{" "}
                  <span className="block w-[132px] h-1 rounded bg-[#0C2D46]" />
                </p>
                <Image
                  src="/brochure.svg"
                  alt="brochure"
                  width={45}
                  height={45}
                />
              </Link>
              <Link href="/" className="group gap-5 relative hidden md:flex">
                <p className="text-lg font-medium text-right group-hover:translate-x-2 transition duration-300">
                  Apply Now{" "}
                  <span className="block w-[132px] h-1 rounded bg-[#0C2D46]" />
                </p>
                <Image
                  src="/flow.svg"
                  alt="brochure"
                  width={500}
                  height={92}
                  className="relative w-[500px] top-1 -left-2 transition duration-300 opacity-0 group-hover:opacity-100"
                />
              </Link>
            </div>
            <div>
              <h2 className="text-2xl md:text-[40px] font-medium mb-6">
                Programme <span className="text-accent">Overview</span>
              </h2>
              <p className="mb-6 font-light">
                The Higher National Diploma International (HND) in Computing
                with a specialization in Software Engineering is a comprehensive
                program designed to equip students with the knowledge, skills,
                and practical experience needed to excel in the dynamic field of
                software development. This program focuses on preparing students
                for careers in designing, building, and maintaining software
                applications that meet modern technological and business
                demands.
              </p>
              <p className="mb-6 font-light">
                The Higher National Diploma International in Computing with a
                specialization in Software Engineering offers a comprehensive
                education in the ever-evolving field of software development.
                Through a blend of theoretical knowledge and hands-on
                experience, students are prepared to contribute effectively to
                the creation of innovative and practical software solutions,
                meeting the demands of modern technology-driven industries. This
                program serves as a gateway for those seeking to build a
                successful career in software engineering
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto md:ml-auto md:p-4 flex flex-col md:items-end relative md:right-[-75px]">
            <div className="w-full md:pl-5">
              <h2 className="text-2xl md:text-[40px] font-medium">
                <span className="text-accent">Talk</span> to Our
              </h2>
              <h5 className="text-xl md:text-[28px] font-light mb-6">
                Admission Team
              </h5>
            </div>

            <div className="relative min-w-[300px] p-10 overflow-hidden md:overflow-visible">
              <div className="absolute w-full h-full top-0 left-0 bg-[#E7EBED] rounded-4xl md:rounded-bl-[75px] md:-skew-x-3" />
              <form onSubmit={handleSubmit} className="space-y-8 relative z-1">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your First & Last Names"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="p-0 !text-base rounded-none border-0 border-b-1 border-[#D0D4D6] shadow-none focus:ring-0 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg font-medium mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="p-0 !text-base rounded-none border-0 border-b-1 border-[#D0D4D6] shadow-none focus:ring-0 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <Label htmlFor="course" className="text-lg font-medium mb-2">
                    Interested Course
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, course: value })
                    }
                  >
                    <SelectTrigger
                      id="course"
                      className="w-full p-0 text-base rounded-none border-0 border-b-1 border-[#D0D4D6] shadow-none focus:ring-0 focus:border-accent focus:outline-none"
                    >
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="data">Data Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-lg font-medium mb-2">Phone</Label>
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputStyle={{
                      width: "100%",
                      height: "38px",
                      border: "none",
                      borderBottom: "1px solid #D0D4D6",
                      borderRadius: "0",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  className="group !px-6 !py-1 rounded-s-2xl rounded-e-none relative bg-transparent hover:bg-transparent flex items-center gap-2 cursor-pointer transition-colors duration-300"
                >
                  Schedule a Call
                  <ChevronRight className="w-4 h-4 stroke-[2] text-black group-hover:text-white group-hover:translate-x-2 transition duration-300" />
                  <span className="absolute top-0 left-0 w-[350px] md:w-[250px] h-full bg-accent group-hover:bg-[#879DA5] rounded-s-2xl -z-1 transition duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="items-center !max-w-[586px] !rounded-3xl">
          <DialogHeader className="items-center md:space-y-8 md:pt-12 space-y-4">
            <Image
              src="/header-logo.svg"
              alt="BouncyHouse"
              width={234}
              height={71}
              quality={100}
              loading="eager"
              priority
              className="max-w-[165px] md:max-w-none"
            />
            <DialogTitle className="font-light text-3xl md:text-5xl text-accent text-center">
              Thank you{" "}
              <span className="block text-black text-xl md:text-3xl">
                for your interest!
              </span>
            </DialogTitle>
            <DialogDescription className="md:text-lg text-center text-black">
              Your inquiry has been successfully submitted. Our Academic Advisor
              shall get in touch with you within the next 48 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-center md:mt-8 mt-4">
            <p className="md:text-lg">
              Please don&apos;t hesitate to contact us directly at:
            </p>
            <div className="flex gap-3 flex-col md:flex-row">
              <Button
                asChild
                className="flex-1 !px-6 py-2 rounded-none h-[45px] bg-accent flex items-center gap-2 cursor-pointer hover:!bg-accent/90 transition-colors duration-300"
              >
                <Link
                  href="tel:+971 45804285"
                  className="flex items-center gap-2 !text-white !text-lg rounded-sm"
                >
                  <Phone className="w-4 h-4 stroke-[2]" />
                  +971 45804285
                </Link>
              </Button>
              <Button
                asChild
                className="flex-1 !px-6 py-2 rounded-none h-[45px] bg-[#0C2D46] flex items-center gap-2 cursor-pointer hover:!bg-[#0C2D46]/70 transition-colors duration-300"
              >
                <Link
                  href="mailto:+hello@demont.ac.ae"
                  className="flex items-center gap-2 !text-white !text-lg rounded-sm"
                >
                  <Mail className="w-4 h-4 stroke-[2]" />
                  hello@demont.ac.ae
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 md:mt-16 mt-8 mb-5">
              <Link href="#">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={38}
                  height={38}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={38}
                  height={38}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={38}
                  height={38}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={38}
                  height={38}
                />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
