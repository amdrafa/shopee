
import logo from "../../public/logo.png"
import { Helmet } from "react-helmet"
import { useState, useEffect } from 'react';


export function Vsl() {


    const [isVisible, setIsVisible] = useState(false);



    useEffect(() => {
        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
        const SECONDS_TO_DISPLAY = 5;

        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
        let attempts = 0;
        let elsDisplayed = false;
        const alreadyDisplayedKey = `alreadyElsDisplayedCreative${SECONDS_TO_DISPLAY}`
        const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

        const showHiddenElements = function () {
            elsDisplayed = true;
            setIsVisible(true);
            localStorage.setItem(alreadyDisplayedKey, true)
        }

        const startWatchVideoProgress = function () {
            if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                if (attempts >= 10) return;
                attempts += 1;
                return setTimeout(function () { startWatchVideoProgress() }, 1000);
            }

            smartplayer.instances[0].on('timeupdate', () => {
                if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
                if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
            })
        }

        if (alreadyElsDisplayed === 'true') {
            setTimeout(function () { showHiddenElements(); }, 100);
        } else {
            startWatchVideoProgress()
        }
    }, [])


    return (

        <>
            <header className="flex justify-between p-4 pb-6 px-8 bg-primary-100 my-2">
                <img width={140} src={logo} alt="logo" />
                <div className="bg-primary-500 text-white rounded-full py-1.5 px-8 font-bold">
                    R$114,26
                </div>
            </header>

            <h1 className="mt-6 px-4 text-2xl font-extrabold text-gray-800 text-center">GANHE ATÉ<span className="text-primary-500 font-extrabold"> 500 REAIS POR DIA</span> AVALIANDO PRODUTOS DA SHOPEE COM ESSE<span className="text-primary-500 font-extrabold"> NOVO APLICATIVO</span></h1>

            <div className="p-6 flex flex-col">
                <div>

                    <div className="border-[8px] rounded-lg border-primary-500 mb-6">
                        <div dangerouslySetInnerHTML={{ __html: '<div id="vid_652c7b26837d8f0008f5b123" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_652c7b26837d8f0008f5b123" src="https://images.converteai.net/4bca4dd6-bbad-4057-809c-56b055191e13/players/652c7b26837d8f0008f5b123/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_652c7b26837d8f0008f5b123" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>' }} />
                        <Helmet>
                            <script type="text/javascript" id="scr_652c7b26837d8f0008f5b123">var s=document.createElement("script");s.src="https://scripts.converteai.net/4bca4dd6-bbad-4057-809c-56b055191e13/players/652c7b26837d8f0008f5b123/player.js",s.async=!0,document.head.appendChild(s);</script>
                        </Helmet>
                    </div>

                    <div className="font-bold text-lg text-gray-700 text-center">Assista até o final para liberar seu acesso</div>

                    {isVisible && (
                        <button className="w-full mt-4 bg-green-500 px-6 py-3 font-bold text-white rounded-full text-xl">
                            QUERO COMEÇAR A LUCRAR HOJE
                        </button>
                    )}
                </div>

                <footer>
                    {/* <div className="flex justify-center space-x-4 items-center mb-6">
                        <img width={120} src={google} alt="Logo Pequena Tiger GPT" />
                        <img width={120} src={chat} alt="Logo Pequena Tiger GPT" />
                    </div> */}
                    <div className="flex flex-col items-center justify-center text-gray-800 ">
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
            </div >
        </>
    )
}