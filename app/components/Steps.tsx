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
    return(
        <div>
            <div className="cards flex flex-col lg:flex-row justify-between items-center">
                {
                    steps.map((step) => (
                        <div className="card step-card-width step-card-border 
                        text-white flex flex-col gap-4"> 
                            <h1 className="text-2xl">{step.stepNo}</h1>
                            <h1 className="text-3xl text-gradient_blue-purple">{step.stepTitle}</h1>
                            <p>{step.stepApproach}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 
export default StepCards