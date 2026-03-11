import Image from "next/image"
import Link from "next/link"

export default function Contacts () {
    return (
        <div className="flex justify-center">
            <div className="rounded-b-2xl w-250 p-10 mb-10 font-[Comfortaa] bg-[#ffffff] text-black">
                    <h1 className="text-3xl font-extrabold mb-5">КОНТАКТЫ</h1>    
                <div className="grid grid-cols-3 gap-6">
                    <div className=" bg-gray-200 rounded-[10px] grid gap-2 p-5">
                        <h1 className="text-[16px] font-bold">Время работы</h1>
                        <h1 className="text-[14px]">8-19 Ежедневно</h1>
                    </div>
                    <div className=" bg-gray-200 rounded-[10px] grid gap-2 p-5">
                        <h1 className="text-[16px] font-bold">Бронирование</h1>
                        <h1 className="text-[14px]">booking@coffeplace.com</h1>
                    </div>
                    <div className=" bg-gray-200 rounded-[10px] grid gap-2 p-5">
                        <h1 className="text-[16px] font-bold">Любая информация</h1>
                        <h1 className="text-[14px]">info@coffeplace.com</h1>
                    </div>
                    
                    <div className=" bg-gray-200 rounded-[10px] grid gap-2 p-5">
                        <h1 className="text-[16px] font-bold">Клиентский отдел</h1>
                        <h1 className="text-[14px]">customerdep@coffeplace.com</h1>
                    </div>
                    
                    
                    
                 </div>
                    <div className="inline-grid grid-cols-2 gap-5 pt-5">
                        <div className="grid gap-2">
                            <h1 className="text-[18px] font-bold">Как добраться</h1>
                            <Image src="/map.svg" className="rounded-[10px]" height={300} width={300} alt="Карта"/>
                        </div>
                        <div className="">
                            <h1 className="text-[18px] font-bold">Адрес кафе:</h1>
                            <h1>ул. Большая Филёвская 14с1</h1>
                        </div>
                    </div>
            </div>
        </div>
    )
}