"use client"

import { Pie, PieChart } from "recharts"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { opinion: "safe", participants: 338, fill: "var(--color-safe)" },
    { opinion: "unsafe", participants: 925, fill: "var(--color-unsafe)" },
    { opinion: "cantsay", participants: 690, fill: "var(--color-cantsay)" },
    { opinion: "refused", participants: 43, fill: "var(--color-refused)" },
  ];
  

const chartConfig = {
  participants: {
    label: "participants",
  },
  safe: {
    label: "Safe to eat",
    color: "hsl(var(--chart-1))",
  },
  unsafe: {
    label: "Unsafe to eat",
    color: "hsl(var(--chart-2))",
  },
  cantsay: {
    label: "Don't know enough to say",
    color: "hsl(var(--chart-3))",
  },
  refused: {
    label: "Refused",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function Controversy() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Public{"'"}s opinion on GM food</CardTitle>
        <CardDescription className="text-xs text-center">Question asked: Do you think it is generally safe or unsafe to eat genetically modified
        foods, or do you not know enough about this to say?</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="participants" label nameKey="opinion" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-slate-500 leading-none">
          <span>From a survey conducted by <Link className="underline" href="https://www.pewresearch.org/science/wp-content/uploads/sites/16/2020/09/PS_2020.09.29_international-science_TOPLINE.pdf">Pew Research</Link></span>
        </div>
      </CardFooter>
    </Card>
  )
}
