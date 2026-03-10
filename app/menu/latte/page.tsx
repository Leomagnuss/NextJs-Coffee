import Image from "next/image";
import Link from "next/link";
export default function Latte() {
  return (
    <div className="flex justify-center mb-10">
          <div className="rounded-b-2xl w-250 font-[Comfortaa] bg-[#ffffff] text-black">
            <div className="items-center text-center mb-10">
              <h1 className="m-10 text-2xl ">Латте</h1>
              <h1 className="text-[14px] font-light">Кофейный напиток на основе эспрессо и вспененного молока. <br />Представляет собой трёхслойную смесь из молочной пены, <br />молока и кофе эспрессо. </h1>
            </div>
            <div className="flex justify-center content-center mb-10 items-center">
              <Image src="/latte.svg" height={200} width={200} className="mr-10" alt=""/>
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
              <Link href="/menu"><button className="hover:ring-1 duration-200 h-10 w-50 rounded-[14px] text-black">Назад в меню</button></Link>
            </div>
          </div>
        </div>
  );
}