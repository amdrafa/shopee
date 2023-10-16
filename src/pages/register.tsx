
import { useState } from "react"
import logo from "../../public/logo.png"
import { ButtonOptions } from "../components/button-options"

export interface IQuestionProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function Register({ setSteps }: IQuestionProps) {

    const [isQuestionSelected, setIsQuestionSelected] = useState(false)

    return (

        <>
            <header className="flex justify-between p-4 pb-6 px-8 bg-primary-100 my-2">
                <img width={140} src={logo} alt="logo" />
                <div className="bg-primary-500 text-white rounded-full py-1.5 px-8 font-bold">
                    R$0,00
                </div>
            </header>

            <h1 className="mt-6 px-6 text-2xl font-bold text-gray-800"><span className="text-primary-500 font-bold">Parabén!</span>  Você foi selecionado para participar do <span className="text-primary-500 font-bold">programa de avaliação</span> da shopee!</h1>

            <div className="p-6 flex flex-col">
                <h2 className="text-2xl text-primary-500 font-bold mb-4">Cadastro</h2>

                <div className="flex flex-col space-y-1 mb-6">
                    <span className="font-bold text-lg text-gray-800">Nome: </span>
                    <input className="bg-gray-200 rounded-lg p-2 px-4" type="text" />
                </div>

                <div className="flex flex-col space-y-1 mb-6">
                    <span className="font-bold text-gray-800 text-lg">Chave pix: </span>
                    <input className="bg-gray-200 rounded-lg p-2 px-4" type="text" />
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-2">
                        Você tem 20 minutos por dia para <span className="text-primary-500 font-bold">avaliar produtos</span>?
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">(Mínimo 10 avaliações por dia)</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isQuestionSelected}
                                SetIsActive={setIsQuestionSelected}
                            />
                        </div>
                    </div>

                    <button onClick={() => setSteps(2)} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Começar agora
                    </button>
                </div>

            </div>
        </>
    )
}