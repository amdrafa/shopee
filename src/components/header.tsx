import logo from "../../public/logo.png"

export function Header() {
    return (
        <header className="flex justify-between p-4 pb-6 px-8 bg-primary-100 my-2">
            <img width={140} src={logo} alt="logo" />
            <div className="bg-primary-500 text-white rounded-full py-1.5 px-8 font-bold">
                R$0,00
            </div>
        </header>
    )
}