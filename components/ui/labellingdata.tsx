"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { year: "1992", crops: 5 },
  { year: "1993", crops: 0 },
  { year: "1994", crops: 9 },
  { year: "1995", crops: 95 },
  { year: "1996", crops: 84 },
  { year: "1997", crops: 57 },
  { year: "1998", crops: 57 },
  { year: "1999", crops: 32 },
  { year: "2000", crops: 38 },
  { year: "2001", crops: 65 },
  { year: "2002", crops: 46 },
  { year: "2003", crops: 83 },
  { year: "2004", crops: 75 },
  { year: "2005", crops: 52 },
  { year: "2006", crops: 74 },
  { year: "2007", crops: 71 },
  { year: "2008", crops: 137 },
  { year: "2009", crops: 83 },
  { year: "2010", crops: 159 },
  { year: "2011", crops: 213 },
  { year: "2012", crops: 192 },
  { year: "2013", crops: 254 },
  { year: "2014", crops: 168 },
  { year: "2015", crops: 270 },
  { year: "2016", crops: 203 },
  { year: "2017", crops: 197 },
  { year: "2018", crops: 229 },
  { year: "2019", crops: 227 },
  { year: "2020", crops: 114 },
  { year: "2021", crops: 158 },
  { year: "2022", crops: 177 },
  { year: "2023", crops: 202 },
  { year: "2024", crops: 180 },
];

const chartConfig = {
  crops: {
    label: "Crops",
    color: "hsl(var(--chart-1))",
  },
  year: {
    label: "Year",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Showing unique Genetically modified crops in 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" hide={true} />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="crops"
              type="natural"
              fill="var(--color-crops)"
              fillOpacity={0.4}
              stroke="var(--color-crops)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
