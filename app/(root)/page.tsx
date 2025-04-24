import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React  from "react";
import { dummyInterviews } from "@/constants";
import Interviewcard from "@/components/Interviewcard";

const Page = () => {
  return (
     <>
        <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
              <h2>Practice Smarter, Interview Better — With AI & Personalized Feedback</h2>
              <p className="text-lg">
                Tackle Real Interview Questions & Get Instant, Actionable Feedback
              </p>

              <Button asChild className="btn-primary max-sm:w-full">
                <Link href="/interview"> Begin Your Interview </Link>

              </Button>
          </div>
            <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />


        </section>
        <section className="flex flex-col gap-6 mt-8">
          <h2> Your Interviews</h2>

          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
                <Interviewcard key= {interview.id} {...interview}/>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2> Take an Interview </h2>
          <div className="interviews-section" > 
          {dummyInterviews.map((interview) => (
                <Interviewcard key= {interview.id} {...interview}/>
            ))}
            {/* <p> You haven&apos;t taken any interviews yet </p> */}
          </div>

        </section>
     
    </>
  )
}

export default Page