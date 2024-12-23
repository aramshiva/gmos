import { Card, CardContent } from "./ui/card";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Chart } from "./ui/labellingdata";

export default function Labelling() {
  const [trade, setTrade] = useState(0);
  const [year, setYear] = useState(2024);

  const fetchTradeData = async (selectedYear: number) => {
    try {
      const response = await fetch(`/api/approvals?year=${selectedYear}`);
      const data = await response.json();
      setTrade(Array.isArray(data) ? data.length : 0);
    } catch (error) {
      console.error("Error fetching trade data:", error);
    }
  };

  useEffect(() => {
    fetchTradeData(year);
  }, [year]);

  const handleSliderChange = (value: number[]) => {
    setYear(value[0]);
  };

  return (
    <>
      <div>
        <Card>
          <CardContent className="p-5">
            <CountUp
              className="font-bold text-4xl"
              end={trade}
              duration={3}
              separator=","
            />
            <p className="pb-5">Unique Genetically modified crops in {year}</p>
            <Slider
              defaultValue={[year]}
              min={1994}
              max={2024}
              step={1}
              onValueChange={handleSliderChange}
            />
          </CardContent>
        </Card>
        <div className="pb-5" />
        <Chart />
      </div>
    </>
  );
}
