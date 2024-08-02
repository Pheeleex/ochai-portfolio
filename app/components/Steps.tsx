'use client'
import { ArrowBigDown, ArrowBigRight, ArrowBigUp } from "lucide-react";
import { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";

interface stepprops{
    stepNo: string;
    stepTitle: string;
    stepApproach: string
}

const steps: stepprops[] = [
    {stepNo: 'Step 1', 
    stepTitle: 'Planning & Strategy',
    stepApproach: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
},

{
    stepNo: 'Step 2', 
    stepTitle: 'Develpment & Progress Update',
    stepApproach: 'Once we agree on the plan, I cue my spotify playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.'
},
{
    stepNo: 'Step 3',
    stepTitle: 'Development & Launch',
    stepApproach: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
}
]
 
const StepCards = () => {
    const [visibleStep, setVisibleStep] = useState(0)
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]) as MutableRefObject<(HTMLDivElement | null)[]> 
    const handleNextStep = () => {
        if(visibleStep < steps.length -1){
            setVisibleStep(visibleStep + 1)
            stepsRef.current[visibleStep + 1]?.scrollIntoView({behavior: 'smooth'})
        }
    }
    return(
        <div>
            <div className="cards flex flex-col gap-12 lg:gap-4 lg:flex-row justify-between items-center">
                {
                    steps.map((step, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => {
                                stepsRef.current[index] = el;
                              }}
                            initial={{ x: -100, opacity: 0}}
                            animate={{ x: visibleStep >= index ? 0 : -100, opacity: visibleStep >= index ? 1 : 0}}
                            transition={{ duration: 0.5 }}
                            className={`flex-col md:flex-row ${visibleStep >= index ? 'visible' : 'invisible'} ${index > 0 ? 'mt-4 lg:mt-0' : ''}`}>
                        <div className="card step-card-width step-card-border 
                        text-white flex flex-col gap-4"> 
                            <h1 className="text-2xl">{step.stepNo}</h1>
                            <h1 className="text-3xl text-gradient_blue-purple">{step.stepTitle}</h1>
                            <p>{step.stepApproach}</p>
                        </div>
                        {
                            visibleStep === index && index < steps.length -1 && (
                                <button onClick={handleNextStep} >
                                    <ArrowBigRight className="hidden md:block animate-glow" size={50} />
                                    <ArrowBigDown className="block md:hidden my-0 mx-32 animate-glow" size={50} />
                                </button>
                            )
                        }
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
} 
export default StepCards