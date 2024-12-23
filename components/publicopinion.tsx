"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
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
    { surveyanswer: "several", visitors: 27, fill: "var(--color-several)" },
    { surveyanswer: "once", visitors: 17, fill: "var(--color-once)" },
    { surveyanswer: "never", visitors: 28, fill: "var(--color-never)" },
    { surveyanswer: "notsure", visitors: 27, fill: "var(--color-notsure)" },
    { surveyanswer: "none", visitors: 1, fill: "var(--color-none)" },
]

const chartConfig = {
  visitors: {
    label: "Percentage",
  },
  several: {
    label: "Several times",
    color: "hsl(var(--chart-1))",
  },
  once: {
    label: "About once",
    color: "hsl(var(--chart-2))",
  },
  never: {
    label: "Never",
    color: "hsl(var(--chart-3))",
  },
  notsure: {
    label: "Not Sure",
    color: "hsl(var(--chart-4))",
  },
  none: {
    label: "No Answer",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PublicOpinion() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Household GMO-Free Product Purchase Frequency</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="surveyanswer"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
