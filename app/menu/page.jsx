import Image from "next/image";
import Link from "next/link";
export default function Menu() {
  return (
    <div className="flex justify-center mb-10">
          <div className="rounded-b-2xl w-250 font-[Comfortaa] mt-10 bg-[#ffffff] text-black">
            <div className="items-center text-center mb-10">
              <h1 className="m-10 text-2xl ">Меню</h1>
              <h1 className="text-[14px] font-light">Напиток на основе эспрессо с добавлением горячей воды. <br />Пропорции могут варьироваться, но обычно используется<br /> соотношение 1:3 эспрессо к воде, в зависимости <br />от желаемой крепости напитка.</h1>
            </div>
            <div className="justify-center m-20 mb-10">
              <Link href="/menu/latte"><div className="">Латте</div></Link>
              <Link href="/menu/espresso"><div className="">Эспрессо</div></Link>
              <Link href="/menu/cappuchino"><div className="">Каппучино</div></Link>
              <Link href="/menu/americano"><div className="">Американо</div></Link>
            </div>
          </div>
        </div>
  );
}