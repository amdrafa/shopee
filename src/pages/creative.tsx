import { useState } from "react"
import jbl from "../../public/cn-11134207-7qukw-lffk7nrkp77ce5.jfif"
import relogio from "../../public/relogio2.jfif"
import maquinaCabelo from "../../public/maquina-cabelo.jfif"
import perfume from "../../public/perfume.jfif"
import massageador from "../../public/massageador.jfif"
import copo from "../../public/copo.jfif"
import logo from "../../public/logo.png"
import { ButtonOptions } from "../components/button-options"
import Modal from 'react-modal'
import Loading from "../components/loading"


// export interface IQuestionProps {
//     setSteps: React.Dispatch<React.SetStateAction<number>>
// }

export function Creative() {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '40px',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#ffffff',
            border: 'none',
            padding: '2rem',
            zIndex: 1000
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        },
    };

    const [balance, setBalance] = useState("R$0,00")

    const [modalIsOpen, setIsOpen] = useState(false)

    const [stepModal, setStepModal] = useState(1)

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const [isFirstQuestionSelected, setIsFirstQuestionSelected] = useState(false)
    const [isSecondQuestionSelected, setIsSecondQuestionSelected] = useState(false)
    const [isThirdQuestionSelected, setIsThirdQuestionSelected] = useState(false)
    const [isFourthQuestionSelected, setIsFourthQuestionSelected] = useState(false)
    const [isFiveQuestionSelected, setIsFiveQuestionSelected] = useState(false)
    const [isSixthQuestionSelected, setIsSixthQuestionSelected] = useState(false)
    const [isSevenQuestionSelected, setIsSevenQuestionSelected] = useState(false)
    const [isEightQuestionSelected, setIsEightQuestionSelected] = useState(false)
    const [isNineQuestionSelected, setIsNineQuestionSelected] = useState(false)
    const [isTenthQuestionSelected, setIsTenthQuestionSelected] = useState(false)
    const [isElevenQuestionSelected, setIsElevenQuestionSelected] = useState(false)
    const [isTwelveQuestionSelected, setIsTwelveQuestionSelected] = useState(false)

    const [isPixButtonLoading, setIsPixButtonLoading] = useState(false)


    return (

        <>
            <div className="fixed top-0 left-0 right-0 z-10 bg-primary-100 p-4">
                <header className="flex justify-between">
                    <img width={140} src={logo} alt="logo" />
                    <div className="bg-primary-500 text-white rounded-full py-1.5 px-8 font-bold">
                        {balance}
                    </div>
                </header>
            </div>
            <div className="p-6 flex flex-col mt-16">
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


                    <button onClick={() => setBalance("R$16,39")} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Responder pesquisa
                    </button>
                </div>






                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={maquinaCabelo} alt="mouse" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre a máquina de barbear <span className="text-orange-500 font-bold">Blade</span>:
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">Você já teve interesse em adquirir esse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isThirdQuestionSelected}
                                SetIsActive={setIsThirdQuestionSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 mb-10">
                        <span className="text-gray-500 text-lg">Você investiria R$19,99 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isFourthQuestionSelected}
                                SetIsActive={setIsFourthQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setBalance("R$31,22")} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Responder pesquisa
                    </button>
                </div>








                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={relogio} alt="relogio" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre o novo smart watch <span className="text-orange-500 font-bold">ASAZQ D20 </span>:
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">Você já teve interesse em adquirir esse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isFiveQuestionSelected}
                                SetIsActive={setIsFiveQuestionSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 mb-10">
                        <span className="text-gray-500 text-lg">Você investiria R$229,89 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isSixthQuestionSelected}
                                SetIsActive={setIsSixthQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setBalance("R$42,52")} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Responder pesquisa
                    </button>
                </div>





                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={perfume} alt="mouse" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre o perfume <span className="text-orange-500 font-bold">212 VIP</span>:
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">Você já teve interesse em adquirir esse perfume?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isSevenQuestionSelected}
                                SetIsActive={setIsSevenQuestionSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 mb-10">
                        <span className="text-gray-500 text-lg">Você investiria R$112,23 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isEightQuestionSelected}
                                SetIsActive={setIsEightQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setBalance("R$55,99")} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Responder pesquisa
                    </button>
                </div>







                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={massageador} alt="mouse" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre o massageador elétrico <span className="text-orange-500 font-bold">Junks</span>:
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">Você já teve interesse em adquirir esse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isNineQuestionSelected}
                                SetIsActive={setIsNineQuestionSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 mb-10">
                        <span className="text-gray-500 text-lg">Você investiria R$69,99 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isTenthQuestionSelected}
                                SetIsActive={setIsTenthQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setBalance("R$61,39")} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Responder pesquisa
                    </button>
                </div>




                <div className="my-4">
                    <div className="p-0.5 rounded-xl bg-orange-300">
                        <img src={copo} alt="mouse" />
                    </div>
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-xl mb-4">
                        Sobre o copo térmico <span className="text-orange-500 font-bold">Stanley</span>:
                    </p>

                    <div className="flex flex-col space-y-4 mb-8">
                        <span className="text-gray-500 text-lg">Você já teve interesse em adquirir esse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isElevenQuestionSelected}
                                SetIsActive={setIsElevenQuestionSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 mb-10">
                        <span className="text-gray-500 text-lg">Você investiria R$79,37 nesse produto?</span>

                        <div className="">
                            <ButtonOptions
                                isActive={isTwelveQuestionSelected}
                                SetIsActive={setIsTwelveQuestionSelected}
                            />
                        </div>
                    </div>


                    <button onClick={() => setBalance("R$84,23")} className="w-full bg-green-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Responder pesquisa
                    </button>

                    <span className="my-10">----------------------------------------------</span>



                    <button onClick={() => setBalance("R$84,23")} className="w-full bg-yellow-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Continuar avaliando
                    </button>

                    <span className="w-full flex justify-center my-4">ou</span>

                    <button onClick={openModal} className="w-full bg-orange-500 p-2 py-3 font-bold text-white rounded-full text-xl">
                        Sacar dinheiro
                    </button>

                </div>


                <footer>
                    {/* <div className="flex justify-center space-x-4 items-center mb-6">
                        <img width={120} src={google} alt="Logo Pequena Tiger GPT" />
                        <img width={120} src={chat} alt="Logo Pequena Tiger GPT" />
                    </div> */}
                    <div className="flex flex-col items-center justify-center text-gray-800 mb-8">
                        <div className="text-xl font-bold text-white">
                            Copyright 2023 - (TigerGPT)
                        </div>
                        <div className="mb-2">
                            Todos os direitos reservados.
                        </div>
                        <div>
                            Termos de uso
                        </div>
                        <div>
                            Privacidade
                        </div>
                    </div>
                </footer>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >

                <div className="flex justify-center mb-8">
                    <img width={200} src={logo} alt="logo" />
                </div>

                {
                    isPixButtonLoading ? (
                        <Loading />
                    ) : (
                        stepModal == 1 ? (
                            <>
                                <h2 className="text-gray-900 text-3xl font-bold mb-4 text-center">Parabéns! Você ganhou <span className="text-primary-500">R$84,23</span></h2>

                                <div className="text-center text-gray-600 text-xl mb-6">
                                    Confirme sua <span className="text-green-600 font-bold">chave PIX</span> para sacar seu dinheiro.
                                </div>

                                <div className="flex flex-col space-y-2 mb-10">
                                    <span className="">
                                        Chave PIX:
                                    </span>
                                    <input className="w-full bg-gray-300 p-2 px-4 rounded-lg" type="text" />
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                                        onClick={() => {
                                            setIsPixButtonLoading(true)
                                            setTimeout(() => {
                                                setIsPixButtonLoading(false)
                                                setStepModal(2)
                                            }, 4000);
                                        }}
                                    >
                                        Resgatar dinheiro
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-gray-900 text-2xl font-bold mb-4 text-center">Pagamento de <span className="text-primary-500">R$84,23</span> concluido!</h2>

                                <div className="text-center text-gray-600 text-xl mb-6">
                                    O pagamento deve cair na sua <span className="text-green-600 font-bold">conta bancária</span> dentro de alguns minutos.
                                </div>

                                <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                                    onClick={() => {

                                    }}
                                >
                                    Voltar ao início
                                </button>
                            </>
                        )
                    )
                }



            </Modal>
        </>
    )
}