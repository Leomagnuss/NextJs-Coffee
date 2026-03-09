import Image from "next/image";
import Link from "next/link";
export default function Latte() {
  return (
    <div className="block">
        <div className="p-20 ml-10 mr-10 mb-10 rounded-b-2xl  font-[Comfortaa] bg-[#ffffff] text-black">
            <div className="flex justify-center"><h1>Латте</h1></div>
            <Link href="/menu"><div>Назад в меню</div></Link>
        </div>
    </div>
  );
}