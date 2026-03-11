import Image from "next/image";
import Link from "next/link";
 
export default function Menu() {
  return (
    <div className="flex justify-center">
      <div className="rounded-b-2xl w-250 h-117 font-[Comfortaa] bg-[#ffffff] text-black">
        <div className="items-center text-center mb-10">
          <h1 className="text-2xl mt-10">Меню</h1>
          <h1 className="text-[16px] mt-10 font-light">Попробуйте классику мира кофе</h1>
        </div>
        <ul className="flex mb-20 pl-20 pr-20 justify-around ">
          <div className="bg-gray-200 hover:bg-white duration-200 p-3 rounded-[10px]"><Link href="/menu/latte"><Image src="/LatteCard.jpg" className="rounded-lg mb-2" width={150} height={150} alt="" /><li className="rounded-2xl bg-cover">Латте</li></Link></div>
          <div className="bg-gray-200 hover:bg-white duration-200 p-3 rounded-[10px]"><Link href="/menu/espresso"><Image src="/EspressoCard.jpg" className="rounded-lg mb-2" width={150} height={150} alt="" /><li className="">Эспрессо</li></Link></div>
          <div className="bg-gray-200 hover:bg-white duration-200 p-3 rounded-[10px]"><Link href="/menu/cappuchino"><Image src="/CappuchinoCard.jpg" className="rounded-lg mb-2" width={150} height={150} alt="" /><li className="">Каппучино</li></Link></div>
          <div className="bg-gray-200 hover:bg-white duration-200 p-3 rounded-[10px]"><Link href="/menu/americano"><Image src="/AmericanoCard.jpg" className="rounded-lg mb-2" width={150} height={150} alt="" /><li className="">Американо</li></Link></div>
        </ul>
      </div>
    </div>
    
  );
}