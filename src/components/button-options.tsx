interface ButtonProps {
    isActive: boolean;
    SetIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export function ButtonOptions({ isActive, SetIsActive }: ButtonProps) {
    return (
        <div className="flex space-x-2">
            <button onClick={() => {
                SetIsActive(!isActive)
                return
            }} className={`w-full px-10 py-2 font-bold rounded-md ${isActive ? "bg-primary-500 text-white" : "bg-primary-100 text-orange-500"}`}>
                Sim
            </button>

            <button onClick={() => {
                SetIsActive(!isActive)
                return

            }} className={`w-full px-10 py-2 font-bold rounded-md ${!isActive ? "bg-primary-500 text-white" : "bg-primary-100 text-orange-500"}`}>
                Não
            </button>
        </div>
    )
}