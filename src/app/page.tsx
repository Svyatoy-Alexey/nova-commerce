"use client";

import { FormEvent, useState } from "react";

type Product = { name: string; category: string; price: string; stock: string };

const initialProducts: Product[] = [
  { name: "Nike Air Max Pulse", category: "Мужские", price: "₽ 14 990", stock: "24 шт." },
  { name: "Adidas Forum Low", category: "Унисекс", price: "₽ 11 490", stock: "18 шт." },
  { name: "New Balance 530", category: "Женские", price: "₽ 12 990", stock: "31 шт." },
  { name: "Puma Palermo", category: "Унисекс", price: "₽ 9 890", stock: "12 шт." },
];

export default function Home() {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setModalOpen] = useState(false);

  function addProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setProducts((items) => [...items, {
      name: String(form.get("name") || "Новая модель"),
      category: String(form.get("category") || "Унисекс"),
      price: `₽ ${String(form.get("price") || "0")}`,
      stock: `${String(form.get("stock") || "0")} шт.`,
    }]);
    setModalOpen(false);
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#172033]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <a className="text-lg font-bold tracking-tight" href="#">SOLE / STORE</a>
        <div className="flex items-center gap-6 text-sm text-[#64748b]"><a href="#catalog">Каталог</a><a href="#orders">Заказы</a><button className="rounded-full border border-[#dbe1eb] bg-white px-5 py-2.5 font-semibold text-[#172033]">Выйти</button></div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748b]">Панель магазина</p><h1 className="mt-2 text-4xl font-bold tracking-tight">Добрый день, Алексей</h1><p className="mt-2 text-[#64748b]">Управляйте коллекцией кроссовок и заказами в одном месте.</p></div><button onClick={() => setModalOpen(true)} className="rounded-xl bg-[#5b5ce2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-[#4647c9]">+ Добавить товар</button></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Выручка", "₽ 248 520", "+12,8%"], ["Заказы", "186", "+8,2%"], ["Товары", String(products.length + 42), "+4,6%"], ["Средний чек", "₽ 7 920", "+1,1%"]].map(([label, value, delta]) => <div className="rounded-2xl border border-[#e5e9f2] bg-white p-5 shadow-sm" key={label}><p className="text-sm text-[#64748b]">{label}</p><p className="mt-3 text-3xl font-bold">{value}</p><span className="mt-2 inline-block rounded-full bg-[#e9fbf0] px-2 py-1 text-xs font-semibold text-[#1d9b56]">{delta}</span></div>)}</div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <div className="rounded-2xl border border-[#e5e9f2] bg-white p-6 shadow-sm"><div className="flex items-start justify-between"><div><h2 className="font-semibold">Продажи за неделю</h2><p className="mt-1 text-sm text-[#64748b]">Динамика заказов SOLE STORE</p></div><span className="text-sm text-[#5b5ce2]">Последние 7 дней⌄</span></div><div className="mt-8 flex h-52 items-end gap-3">{[35,48,42,66,55,82,72,95,68,76,88,64,93,80].map((height, i) => <div className="group flex flex-1 flex-col justify-end" key={i}><div style={{ height: `${height}%` }} className={`rounded-t-lg ${i % 3 === 1 ? "bg-[#8485ed]" : "bg-[#dfe1fb]"} transition group-hover:bg-[#5b5ce2]`} /></div>)}</div><div className="mt-3 flex justify-between text-xs text-[#94a3b8]"><span>Пн</span><span>Ср</span><span>Пт</span><span>Вс</span></div></div>
          <div id="orders" className="rounded-2xl border border-[#e5e9f2] bg-white p-6 shadow-sm"><h2 className="font-semibold">Последние заказы</h2><div className="mt-5 space-y-4">{[["#1048", "Елена Морозова", "₽ 12 400", "В пути"], ["#1047", "Илья Соколов", "₽ 8 950", "Новый"], ["#1046", "Мария Ким", "₽ 5 200", "Доставлен"], ["#1045", "Олег Волков", "₽ 3 840", "Доставлен"]].map(([id, name, price, status]) => <div className="flex items-center justify-between gap-2 text-sm" key={id}><div><p className="font-medium">{id} · {name}</p><p className="mt-1 text-xs text-[#94a3b8]">{status}</p></div><span className="font-semibold">{price}</span></div>)}</div><button className="mt-6 w-full rounded-xl border border-[#e5e9f2] py-2.5 text-sm font-semibold text-[#5b5ce2]">Все заказы →</button></div>
        </div>

        <div id="catalog" className="mt-6 rounded-2xl border border-[#e5e9f2] bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="font-semibold">Каталог кроссовок</h2><p className="mt-1 text-sm text-[#64748b]">Популярные модели в продаже</p></div><button onClick={() => setModalOpen(true)} className="text-sm font-semibold text-[#5b5ce2]">Добавить модель +</button></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="border-b border-[#eef1f6] text-xs uppercase tracking-wider text-[#94a3b8]"><tr><th className="pb-3">Модель</th><th className="pb-3">Категория</th><th className="pb-3">Цена</th><th className="pb-3">Остаток</th><th className="pb-3">Статус</th></tr></thead><tbody>{products.map((product) => <tr className="border-b border-[#f1f3f7] last:border-0" key={`${product.name}-${product.price}`}><td className="py-4 font-semibold">{product.name}</td><td className="py-4 text-[#64748b]">{product.category}</td><td className="py-4 font-semibold">{product.price}</td><td className="py-4 text-[#64748b]">{product.stock}</td><td className="py-4"><span className="rounded-full bg-[#e9fbf0] px-2.5 py-1 text-xs font-semibold text-[#1d9b56]">В продаже</span></td></tr>)}</tbody></table></div></div>
      </section>

      {isModalOpen && <div className="fixed inset-0 z-20 grid place-items-center bg-[#172033]/45 px-5" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}><form onSubmit={addProduct} className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl"><div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold">Добавить кроссовки</h2><p className="mt-1 text-sm text-[#64748b]">Новая модель появится в каталоге сразу после сохранения.</p></div><button type="button" onClick={() => setModalOpen(false)} className="text-2xl text-[#94a3b8]">×</button></div><div className="mt-6 grid gap-4"><label className="text-sm font-semibold">Название<input required name="name" className="mt-2 w-full rounded-xl border border-[#dbe1eb] px-4 py-3 font-normal outline-none focus:border-[#5b5ce2]" placeholder="Например, Nike Dunk Low" /></label><div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Категория<select name="category" className="mt-2 w-full rounded-xl border border-[#dbe1eb] bg-white px-4 py-3 font-normal"><option>Мужские</option><option>Женские</option><option>Унисекс</option></select></label><label className="text-sm font-semibold">Цена<input required name="price" type="number" className="mt-2 w-full rounded-xl border border-[#dbe1eb] px-4 py-3 font-normal" placeholder="12990" /></label></div><label className="text-sm font-semibold">Количество на складе<input required name="stock" type="number" className="mt-2 w-full rounded-xl border border-[#dbe1eb] px-4 py-3 font-normal" placeholder="20" /></label></div><button className="mt-7 w-full rounded-xl bg-[#5b5ce2] py-3.5 font-semibold text-white transition hover:bg-[#4647c9]">Сохранить товар</button></form></div>}
    </main>
  );
}
