import Image from "next/image";
import Link from "next/link";
export default function Americano() {
  return (
    <div className="block">
        <div className="p-20 ml-10 mr-10 mb-10 rounded-b-2xl  font-[Comfortaa] bg-[#ffffff] text-black">
            <h1 className="border-2 items-center text-2xl text-center mb-10">Американо</h1>
            <div className="flex border-2 justify-center">
              <Image src="/americano.svg" height={200} width={200} alt=""/>
              <div className="flex text-center content-center">
                <div className="">
                  <h1>200мл</h1>
                  <h1>250р</h1>
                </div>
                <div className="">
                  <h1>300мл</h1>
                  <div>320р</div>
                </div>
                <div className="">
                  <h1>500мл</h1>
                  <h1>380р</h1>
                </div>
              </div>
            </div>
            <Link href="/menu"><div>Назад в меню</div></Link>
        </div>
    </div>
  );
}