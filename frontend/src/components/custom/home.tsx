export default function Home() {
   return (
      <div>
         <h1
            className={`relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter
                     before:bg-white
                     after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black
                     text-3xl m-10 text-center font-bold`}
         >
            Your all-in-one solution to plan, execute, and complete projects
            seamlessly.
         </h1>

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
