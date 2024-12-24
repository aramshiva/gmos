import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import * as motion from "motion/react-client";

export default function Insulin() {
  return (
    <>
      <Card>
        <CardContent className="pt-5">
          <blockquote className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className=""
            >
              <div className="flex items-center gap-2">
                <div className="text-3xl font-medium tracking-tight">
                  <div className="text-lg font-light">
                    Genetic Modification has helped
                  </div>
                  Create Insulin injections for diabetes.
                </div>
              </div>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base text-muted-foreground"
            >
              Saving millions of lives every year.{" "}
              <Link
                className="underline text-xs"
                href="https://www.gene.com/stories/cloning-insulin"
              >
                [source]
              </Link>
            </motion.p>
          </blockquote>
        </CardContent>
      </Card>
    </>
  );
}
