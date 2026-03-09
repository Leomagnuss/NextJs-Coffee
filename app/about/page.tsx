import Image from "next/image";
export default function About() {
  return (
  <div className="block">
      <div className="p-20 ml-10 mr-10 mb-10 rounded-b-2xl  font-[Comfortaa] bg-[#ffffff] text-black">
       <div className="flex justify-center mb-5"><Image src="/MainLogo.svg" height={40} width={40} alt=""/></div>
        <div className="flex justify-center p-2 mb-10 text-center">
          <h1 className="w-175 text-2xl"><span className="font-bold">Кофейный Дворик</span> – неотъемлемая часть городской жизни уже на протяжении 20 лет. Наши гости ценят чуткий сервис. С момента открытия первого заведения и по сей день комфорт и благополучие
            гостей – наша главная забота</h1>
        </div>
        <div className="flex justify-center p-2 mb-15 text-center">
          <h1 className="w-175 text-[18px]">Здесь ощущается расслабленная атмосфера в противовес суетливому
и шумному мегаполису. Каждая кофейня – это индивидуально
разработанный проект со своим неповторимым почерком.
В сотрудничестве с известными дизайнерами и архитекторами
мы создаем актуальные вне времени интерьеры.</h1>
        </div>
        <div className="ml-50 mr-50 flex content-center justify-center items-center ">
          <Image src="/aboutblock.jpg" alt="" width={450} height={450} className="rounded-xl"/>
          <div className="grid ml-10  border-black">
            <h1 className="text-[30px] font-[caveat] font-extrabold pb-6">В РИТМЕ ГОРОДА</h1>
            <p className="text-[14px] font-bold pb-4">Мы гордимся тем, что предлагаем вам не просто напитки, а настоящий образ жизни</p>
            <p className="text-[14px] font-bold pb-4">У нас каждая чашка кофе становится частью вашего дня, даря энергию и вдохновение</p>
            <p className="text-[14px] font-bold pb-4">Наши бариста — настоящие мастера своего дела, готовые предложить вам широкий выбор напитков, от классических латте и капучино до сезонных и авторских напитков</p>
            <p className="text-[14px] font-bold pb-4">Мы верим, что качество — это ключевой аспект каждого нашего продукта, поэтому мы тщательно отбираем лучшие зерна кофе и используем только свежие и натуральные ингредиенты для наших напитков</p>
          </div>
        </div>
      </div>
    </div>
  );
}