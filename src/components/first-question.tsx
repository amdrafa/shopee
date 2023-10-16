import { useState } from "react"
import jbl from "../../public/cn-11134207-7qukw-lffk7nrkp77ce5.jfif"
import logo from "../../public/logo.png"
import { ButtonOptions } from "../components/button-options"

export interface IQuestionProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function FirstQuestion({ setSteps }: IQuestionProps) {

    const [isFirstQuestionSelected, setIsFirstQuestionSelected] = useState(false)
    const [isSecondQuestionSelected, setIsSecondQuestionSelected] = useState(false)

    return (

        <>
            <header className="flex justify-between p-4 pb-6 px-8 bg-primary-100 my-2">
                <img width={140} src={logo} alt="logo" />
                <div className="bg-primary-500 text-white rounded-full py-1.5 px-8 font-bold">
                    R$0,00
                </div>
            </header>
            <div className="p-6 flex flex-col">
                <h2 className="text text-orange-500 font-bold">Perguntas</h2>

                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={jbl} alt="mouse" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre o fone de ouvido <span className="text-orange-500 font-bold">JBL</span>:
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
                        <span className="text-gray-500 text-lg">Você investiria R$37,99 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isSecondQuestionSelected}
                                SetIsActive={setIsSecondQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setSteps(3)} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Enviar respostas
                    </button>
                </div>

            </div>
        </>
    )
}