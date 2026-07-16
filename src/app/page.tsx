const features = [
  ["01", "Быстрый старт", "Next.js, TypeScript и Tailwind уже настроены и готовы к разработке."],
  ["02", "Адаптивный дизайн", "Страница аккуратно выглядит на телефоне, планшете и компьютере."],
  ["03", "Готово к GitHub", "Добавляйте функции, фиксируйте изменения и публикуйте проект."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#172033]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <a className="text-lg font-bold tracking-tight" href="#">NOVA / COMMERCE</a>
        <a className="rounded-full border border-[#17231c]/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-[#17231c] hover:text-white" href="#start">
          Начать
        </a>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8">
        <div className="mb-10 flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748b]">Панель управления</p><h1 className="mt-2 text-4xl font-bold tracking-tight">Добрый день, Анна</h1><p className="mt-2 text-[#64748b]">Вот что происходит в вашем магазине сегодня.</p></div><button className="rounded-xl bg-[#5b5ce2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200">+ Добавить товар</button></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[['Выручка','₽ 248 520','+12,8%'],['Заказы','186','+8,2%'],['Клиенты','1 248','+4,6%'],['Конверсия','3,42%','+1,1%']].map(([label,value,delta]) => <div className="rounded-2xl border border-[#e5e9f2] bg-white p-5 shadow-sm" key={label}><p className="text-sm text-[#64748b]">{label}</p><p className="mt-3 text-3xl font-bold">{value}</p><span className="mt-2 inline-block rounded-full bg-[#e9fbf0] px-2 py-1 text-xs font-semibold text-[#1d9b56]">{delta}</span></div>)}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
          <div className="rounded-2xl border border-[#e5e9f2] bg-white p-6 shadow-sm"><div className="flex justify-between"><div><h2 className="font-semibold">Продажи за неделю</h2><p className="mt-1 text-sm text-[#64748b]">Сравнение с прошлой неделей</p></div><span className="text-sm text-[#5b5ce2]">Последние 7 дней⌄</span></div><div className="mt-8 flex h-52 items-end gap-3">{[35,48,42,66,55,82,72,95,68,76,88,64,93,80].map((height,i)=><div className="group flex flex-1 flex-col justify-end" key={i}><div style={{height:`${height}%`}} className={`rounded-t-lg ${i%3===1?'bg-[#8485ed]':'bg-[#dfe1fb]'} transition group-hover:bg-[#5b5ce2]`}></div></div>)}</div><div className="mt-3 flex justify-between text-xs text-[#94a3b8]"><span>Пн</span><span>Ср</span><span>Пт</span><span>Вс</span></div></div>
          <div className="rounded-2xl border border-[#e5e9f2] bg-white p-6 shadow-sm"><h2 className="font-semibold">Последние заказы</h2><div className="mt-5 space-y-4">{[['#1048','Елена Морозова','₽ 12 400','В пути'],['#1047','Илья Соколов','₽ 8 950','Новый'],['#1046','Мария Ким','₽ 5 200','Доставлен'],['#1045','Олег Волков','₽ 3 840','Доставлен']].map(([id,name,price,status])=><div className="flex items-center justify-between gap-2 text-sm" key={id}><div><p className="font-medium">{id} · {name}</p><p className="mt-1 text-xs text-[#94a3b8]">{status}</p></div><span className="font-semibold">{price}</span></div>)}</div><button className="mt-6 w-full rounded-xl border border-[#e5e9f2] py-2.5 text-sm font-semibold text-[#5b5ce2]">Все заказы →</button></div>
        </div>
      </section>
      <section className="bg-[#172033] px-6 py-14 text-white lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#aeb0ff]">Портфолио-кейс</p><h2 className="mt-3 text-3xl font-bold">CRM, которая помогает расти</h2><p className="mt-3 max-w-xl text-white/60">Каталог, клиенты, заказы и аналитика — в одном элегантном интерфейсе.</p></div></section>
      {/*
        <div className="relative z-10">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-[#d64b2a]">Ваш первый веб-проект</p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[7.25rem]">
            Идея.<br />Код. <span className="text-[#d64b2a]">Запуск.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#17231c]/68 sm:text-xl">
            Чистая современная основа, которую можно превратить в портфолио, лендинг, магазин или полноценное приложение.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-full bg-[#17231c] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d64b2a]" href="#start">Посмотреть возможности →</a>
            <a className="rounded-full px-7 py-4 font-semibold underline decoration-[#d64b2a] decoration-2 underline-offset-8" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Документация</a>
          </div>
        </div>
        <div className="relative hidden min-h-96 lg:block" aria-hidden="true">
          <div className="absolute right-4 top-4 h-72 w-72 rounded-full bg-[#d64b2a]" />
          <div className="absolute right-32 top-40 h-64 w-64 rotate-12 rounded-[3rem] border-[3px] border-[#17231c] bg-[#b7c99a]" />
          <div className="absolute bottom-0 right-0 grid h-40 w-40 place-items-center rounded-full border-[3px] border-[#17231c] bg-[#f4f1e8] text-5xl">↗</div>
        </div>
      </section> */}

      <section id="start" className="bg-[#17231c] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Всё нужное внутри</h2>
            <p className="max-w-sm text-white/55">Редактируйте этот проект вместе с Codex — просто описывайте следующий шаг обычными словами.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-3">
            {features.map(([number, title, text]) => (
              <article className="bg-[#17231c] p-8 transition hover:bg-white/5" key={number}>
                <span className="text-sm font-bold text-[#ef795c]">{number}</span>
                <h3 className="mt-14 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
