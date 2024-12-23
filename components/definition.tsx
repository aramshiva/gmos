import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import * as motion from "motion/react-client"

interface DefinitionProps {
    term: string
    definition: string
}

export function Definition({ term, definition }: DefinitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            exit={{ opacity: 0, y: 20 }}
            key={term}
        >
            <Card className="w-full max-w-2xl bg-background">
                <CardContent className="pt-6">
                    <blockquote className="space-y-2">
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="font-serif"
                        >
                            <div className='flex items-center gap-2'>
                                <div className='text-2xl font-medium tracking-tight'>
                                    {term}
                                </div>
                                <div className='text-sm font-light italic self-end'>
                                    (noun)
                                </div>
                            </div>
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-base italic text-muted-foreground"
                        >
                            {definition}
                        </motion.p>
                    </blockquote>
                </CardContent>
            </Card>
        </motion.div>
    )
}