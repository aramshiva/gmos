"use client";
import { Definition } from "@/components/definition";
import NaturalSelection from "@/components/naturalselection";
import EnviormentalImpact from "@/components/enviromentalimpact";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import Markdown from "react-markdown";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Labelling from "@/components/labelling";
import { PublicOpinion } from "@/components/publicopinion";
import Allergies from "@/components/allergies";
import DNA from "@/components/dna";
import Insulin from "@/components/insulin";
import { Controversy } from "@/components/controversy";
import Safety from "@/components/safety";

const inter = Inter({ subsets: ["latin"] });

const slides = [
  {
    title: "GMOs Explained",
    description: `Welcome! This is an interactive website on genetically modified organisms. In this website you'll:
* Learn What GMOs Are.
* Learn the benefits of GMOs.
* Learn the controversies around GMOs.
* Play around with some interactive datasets.
* And more!

**Press the Start button to begin!**`,
    component: (
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Text that says 'GMOs Explained' and under it a copyright for Aram Shiva 2024"
      />
    ),
  },
  {
    title: "Introduction",
    description: `* Humans have been modifying plants and animals for thousands of years! They have been doing this through **natural selection and selective breeding**
    * Natural Selction is when animals or plants choose other organisms that are better and over time, creating a better species
    * Selective Breeding is where humans choose two organisms with desirable traits and breed them together.
      * We have been doing selective breeding since 8000 BCE`,
    component: <NaturalSelection />,
  },
  {
    title: "Definition",
    description: `* Let's first start by defining what a GMO is. 
* In simple terms, an GMO is a organism with it's genes modified in some sort of way
  * Examples of these genes being modified are making crops more resistant to pests or diseases or making them grow faster
* But how is genetic modification done?
* And what are the benefits of GMOs?
* Let's find out!`,
    component: (
      <Definition
        term="genetic modification"
        definition="the use of genetic engineering to change how a plant or living creature develops by changing the information in its genes"
      />
    ),
  },
  {
    title: "Process of GM",
    description: `There are a couple ways to GM an organism.
* One way is cross breeding.
  * This is done by choosing two organisms with desirable traits and breeding them together
  * An example is in 2000 BCE, where farmers crossbred weed to make kale and other greens!
* Another more popular method when referring to GMOs is genetic engineering.
  * This allows scientists to copy DNA from one organism and put it into another.`,
    component: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_T0Pzh88lHw?autoplay=1&controls=0&disablekb=1&fs=0&color=white&modestbranding=1"
        allow="autoplay; encrypted-media"
      />
    ),
  },
  {
    title: "Benefits of GMOs",
    description: `GMOs are actually really helpful!
- They can help prevent diseases or risk of drought
- They can help grow more and bigger crops
- They can help crops become more resistant to pests
- They can help crops grow faster
- They can help crops grow in harsher conditions
- They can help crops become more nutritious
- They can help crops become more flavorful

**So why have you been told as a kid that they are bad?**`,
    component: <Insulin />,
  },
  {
    title: "Controversy",
    description: `There is ALOT of controversy around GMOs.
Some controversies include:
* Are they safe to eat?
* What is the environmental impact?
* Does it affect other plants
* Can it cause allergies?
* Should they be labeled?

***So let's look into each one of these controversies and see if they are an geninue concern***`,
    component: <Controversy />,
  },
  {
    title: "Safety for Consumption",
    description: `The one you may of heard of are that GMOs are unsafe to eat.
* This is actually not true! It's under scientific consensus and the FDA that GMOs are safe to eat.
* The FDA has been regulating GMOs since 1992 and has approved over 100 GM products.
* The World Health Organization has also stated that GM foods are no more risky than conventional foods.

What? So why are they bad?`,
    component: <Safety />,
  },
  {
    title: "Environmental Impact",
    description: `* Thousands of Genetically Modified Products are traded internationally each year
* This means millions of pesticides are used to protect these crops
* This has a huge impact on the environment
* But how?`,
    component: <EnviormentalImpact />,
  },
  {
    title: "Gene Flow",
    description: `Gene Flow is when a GMO plant's genes get unintentionally transferred to another plant!
* This can happen through pollination, seeds or even roots.
* This can cause genetic modification to contaminate other plants

**How do we solve this?**
* We can seperate crop fields far apart from each other to prevent two crops from transferring genes.`,
    component: <DNA />,
  },
  {
    title: "Allerigies",
    description: `Another big concern is that GMOs can cause allergies.
* This is actually **false**! According to the FDA, GMO foods are no more likely to cause allergies than non-GMOs.
* GMOs are tested for allergens before they can be sold!
* So, actually GMOs don't cause allergies!`,
    component: <Allergies />,
  },
  {
    title: "Labeling",
    description: `One of the biggest controversies around GMOs are if they should be labeled or not.
* Some people think that they should know if they are eating a GM product.
* And with GM products on a rise (check the chart on the left!), it's becoming more and more hard to know if your food is gentically modified.
* Thankfully as of 2022, we have the [The National Bioengineered Food Disclosure Standard](https://www.ams.usda.gov/rules-regulations/be) which regulates the labeling of GM products.
* This means every GM product must be labeled as such.
* But is this enough?`,
    component: <Labelling />,
  },
  {
    title: "Public Opinion",
    description: `Public's opinion on GMOs are mixed.
* A survey conducted by Pew Research Center in 2016 (see left) found that 27% of americans buy Non-GMO products
* This means that people **really** care about what they are eating!
* So labeling is a big deal for them. They want to know if they are eating a GM product or not.`,
    component: <PublicOpinion />,
  },
  {
    title: "Conclusion",
    description: `Thanks for reading this interactive lesson on GMOs!
You can see the sources used [here](/references)
`,
    component: <></>,
  },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <div className={`md:hidden flex items-center justify-center h-screen text-center ${inter.className}`}>
        GMOs Explained! is not optimized for mobile. Please view on a desktop.
      </div>
      <div className={`hidden md:block p-20 ${inter.className}`}>
        <div className="flex gap-4">
          <div className="prose flex-1 rounded-xl p-5 h-24 md:h-48 lg:h-[35rem] flex flex-col justify-center relative">
            <Progress
              value={(currentSlide / (slides.length - 1)) * 100}
              className="w-24 h-1"
            />
            <h1 className="font-bold text-xl pt-5">
              {slides[currentSlide].title}
            </h1>
            <div className="pb-5">
              <Markdown>{slides[currentSlide].description}</Markdown>
            </div>
            {currentSlide !== slides.length - 1 && (
              <Button onClick={nextSlide} className="w-20">
                {currentSlide === 0 ? "Start" : "Next"}
              </Button>
            )}
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-5 flex justify-center items-center">
            {slides[currentSlide].component}
          </div>
        </div>
      </div>
    </>
  );
}
