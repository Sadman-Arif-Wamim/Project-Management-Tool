import { BarChartComp } from "@/components/custom/barchart";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
   return (
      <div className="flex flex-1">
         <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            <div className="text-3xl font-bold">Dashboard</div>
            <div className="flex flex-row gap-4">
               <Card className="w-80">
                  <CardHeader>
                     <CardTitle>On Going Projects</CardTitle>
                     <CardDescription>any other info</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className="text-2xl font-bold">02</p>
                  </CardContent>
               </Card>

               <Card className="w-80">
                  <CardHeader>
                     <CardTitle>Completed Projects</CardTitle>
                     <CardDescription>any other info</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className="text-2xl font-bold">02</p>
                  </CardContent>
               </Card>

               <Card className="w-80">
                  <CardHeader>
                     <CardTitle>Coming Up</CardTitle>
                     <CardDescription>any other info</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className="text-2xl font-bold">02</p>
                  </CardContent>
               </Card>
            </div>
            <BarChartComp />

            {/* Skeleton Code */}
            {/* <div className="flex gap-2">
               {[...new Array(4)].map((i) => (
                  <div
                     key={"first-array" + i}
                     className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                  ></div>
               ))}
            </div>
            <div className="flex gap-2 flex-1">
               {[...new Array(2)].map((i) => (
                  <div
                     key={"second-array" + i}
                     className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                  ></div>
               ))}
            </div> */}
            {/* Skeleton Code */}
         </div>
      </div>
   );
}
