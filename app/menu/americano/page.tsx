import Image from "next/image";
import Link from "next/link";
export default function Americano() {
  return (
    <div className="flex justify-center mb-10">
          <div className="rounded-b-2xl w-250 font-[Comfortaa] mt-10 bg-[#ffffff] text-black">
            <div className="items-center text-center mb-10">
              <h1 className="m-10 text-2xl ">Американо</h1>
              <h1 className="text-[14px] font-light">Напиток на основе эспрессо с добавлением горячей воды. <br />Пропорции могут варьироваться, но обычно используется<br /> соотношение 1:3 эспрессо к воде, в зависимости <br />от желаемой крепости напитка.</h1>
            </div>
            <div className="flex justify-center content-center mb-10 items-center">
              <Image src="/americano.svg" height={200} width={200} className="mr-10" alt=""/>
              <div className="mr-10">
                <h1>200мл</h1>
                <p>250р</p>
              </div>
              <div className="mr-10">
                <h1>300мл</h1>
                <p>320р</p>
              </div>
              <div className="">
                <h1>500мл</h1>
                <p>380р</p>
              </div> 
            </div>
            <div className=" ml-10 pb-10">
              <Link href="/menu"><div>Назад в меню</div></Link>
            </div>
          </div>
        </div>
  );
}