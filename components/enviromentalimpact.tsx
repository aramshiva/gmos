import { Card, CardContent } from "./ui/card";
import { Slider } from "@/components/ui/slider"
import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function EnvironmentalImpact() {
    const [trade, setTrade] = useState(0)
    const [year, setYear] = useState(2021)

    const fetchTradeData = async (selectedYear: number) => {
        try {
            const response = await fetch(`/api/trade?year=${selectedYear}`);
            const data = await response.json();
            setTrade(Array.isArray(data) ? data.length : 0);
        } catch (error) {
            console.error('Error fetching trade data:', error);
        }
    }

    useEffect(() => {
        fetchTradeData(year);
    }, [year]);

    const handleSliderChange = (value: number[]) => {
        setYear(value[0])
    }

    return (
        <>
            <div>
                <Card>
                    <CardContent className="p-5">
                        <CountUp className="font-bold text-4xl" end={trade} duration={2} separator="," />
                        <p className="pb-5">GMO crops traded internationally in {year}</p>
                        <Slider 
                            defaultValue={[year]} 
                            min={2016} 
                            max={2021} 
                            step={1} 
                            onValueChange={handleSliderChange}
                        />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
