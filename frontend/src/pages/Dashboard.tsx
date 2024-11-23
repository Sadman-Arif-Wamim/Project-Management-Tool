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
         </div>
      </div>
   );
}
