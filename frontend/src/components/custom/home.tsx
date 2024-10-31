import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Home() {
   return (
      <div>
         <TypingAnimation
            text="Your all-in-one solution to plan, execute, and complete projects
            seamlessly."
            duration={100}
         />

         <hr className="m-10"></hr>

         <div className="m-10 text-center text-2xl font-bold">
            Streamline Your Projects
         </div>
         <div className="m-10 text-center text-md">
            Organize every detail with intuitive tools designed to make project
            management simple, efficient, and productive. Whether you’re
            coordinating with a small team or managing complex, multi-phase
            projects, our platform supports every step of your journey.
         </div>

         <hr className="m-10"></hr>

         <div className="m-10 text-center text-2xl font-bold">
            Features Tailored for Success
         </div>
         <div className="m-10 text-center text-md">
            <ul>
               <li>
                  Task Management: Easily create, assign, and prioritize tasks
                  to keep everyone on track.
               </li>
               <li>
                  Progress Tracking: Visualize milestones and timelines to
                  ensure timely project completion.
               </li>
               <li>
                  Customizable Workflows: Adapt the platform to fit your team’s
                  unique processes and project goals.
               </li>
            </ul>
         </div>
      </div>
   );
}
