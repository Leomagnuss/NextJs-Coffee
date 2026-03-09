import Image from "next/image";
import Link from "next/link";
export default function Menu() {
  return (
    <div className="block">
        <div className="p-20 ml-10 mr-10 mb-10 rounded-b-2xl  font-[Comfortaa] bg-[#ffffff] text-black">
            <div className="flex justify-center"><h1>Меню</h1></div>
            <Link href="/menu/latte"><div>Латте</div></Link>
            <Link href="/menu/espresso"><div>Эспрессо</div></Link>
            <Link href="/menu/cappuchino"><div>Каппучино</div></Link>
            <Link href="/menu/americano"><div>Американо</div></Link>
        </div>
    </div>
  );
}