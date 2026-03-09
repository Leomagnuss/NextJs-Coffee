import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
  <div className="grid justify-center">
    <div className="flex content-center items-center justify-center h-125 p-20 mb-10 rounded-b-2xl font-[Comfortaa] bg-[#ffffff] text-black">
      <Image src="/promo.jpeg" className="rounded-2xl" width={300} height={300} alt="" />
      <div className="grid ml-10 w-150 border-black">
        <h1 className="text-[22px] font-extrabold pb-2">Откройте для себя декаф: кофе без кофеина!</h1>
        <p className="text-[14px] font-normal pb-4">Ищете альтернативу классическому кофе, но не хотите отказываться от бодрящего аромата и вкуса? Попробуйте декаф — идеальный выбор для тех, кто ценит кофейные традиции, но заботится о своём здоровье.</p>
        <h2 className="text-[16px] font-bold pb-2">Почему выбирают декаф?</h2>
        <ul className="list-disc text-[12px] pb-4 pl-5">
          <li className="pb-2">Меньше кофеина. Декаф проходит специальную обработку, которая удаляет большую часть кофеина, сохраняя при этом уникальный вкус и аромат.</li>
          <li className="pb-2">Подходит для многих. Этот вид кофе подходит для людей, чувствительных к кофеину, а также для тех, кто хочет разнообразить свой утренний ритуал.</li>
          <li className="pb-2">Высокое качество. Мы тщательно отбираем зёрна и следим за каждым этапом производства, чтобы предложить вам только лучший декаф.</li>
        </ul>
        <p className="text-[16px]">Откройте для себя новые грани кофейного искусства с декафом! Насладитесь каждым глотком без беспокойства о кофеине.</p>
      </div>
    </div>
  </div>
  );
}
