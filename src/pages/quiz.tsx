import { useState } from "react"
import { FirstQuestion } from "../components/first-question"
import { SecondQuestion } from "../components/second-question"
import { Register } from "./register"
import { Vsl } from "./vsl"

export function Quiz() {

    const [step, setStep] = useState(1)

    return (
        <main>

            {step == 1 && (
                <Register
                    setSteps={setStep}
                />
            )}

            {step == 2 && (
                <FirstQuestion
                    setSteps={setStep}
                />
            )}

            {step == 3 && (
                <SecondQuestion
                    setSteps={setStep}
                />
            )}

            {step == 4 && (
                <Vsl
                    setSteps={setStep}
                />
            )}
        </main>
    )
}