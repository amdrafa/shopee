import { useState } from "react"
import logo from "../../public/logo.png"
import clock from "../../public/relogio.jfif"
import { ButtonOptions } from "../components/button-options"

export interface IQuestionProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function SecondQuestion({ setSteps }: IQuestionProps) {

    const [isFirstQuestionSelected, setIsFirstQuestionSelected] = useState(false)
    const [isSecondQuestionSelected, setIsSecondQuestionSelected] = useState(false)

    return (
        <>
            <header className="flex justify-between p-4 pb-6 px-8 bg-primary-100 my-2">
                <img width={140} src={logo} alt="logo" />
                <div className="bg-primary-500 text-white rounded-full py-1.5 px-8 font-bold">
                    R$54,20
                </div>
            </header>
            <div className="p-6 flex flex-col">
                <h2 className="text text-orange-500 font-bold">Perguntas</h2>

                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={clock} alt="clock" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre o relógio <span className="text-orange-500 font-bold">Sport Ocean</span>:
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">Você já teve interesse em adquirir esse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isFirstQuestionSelected}
                                SetIsActive={setIsFirstQuestionSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 mb-10">
                        <span className="text-gray-500 text-lg">Você investiria R$87,99 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isSecondQuestionSelected}
                                SetIsActive={setIsSecondQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setSteps(4)} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Enviar respostas
                    </button>
                </div>

            </div>
        </>
    )
}