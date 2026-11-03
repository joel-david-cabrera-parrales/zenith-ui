import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link, useParams } from 'react-router';
import { products } from '../mocks/products';
import type { ShopProduct } from '../interfaces/shop-products.interface';
import { ShopTopBar } from '../components/ShopTopBar';
import { ShopFooter } from '../components/ShopFooter';
import { CustomSelect } from '@/features/forms/components/CustomSelect';
import { useShopCart } from '../hooks/useShopCart';

type Review = { name: string; date: string; rating: number; text: string; likes: number };

const initialReviews: Review[] = [
  { name: 'Lucía M.', date: 'Hace 3 días', rating: 5, text: 'Se nota la calidad de los materiales y queda precioso en casa. El acabado es incluso más bonito en persona.', likes: 12 },
  { name: 'Daniel R.', date: 'Hace 1 semana', rating: 4, text: 'Muy buen diseño y llegó perfectamente embalado. Lo recomiendo si buscas algo sencillo y duradero.', likes: 7 },
  { name: 'Carmen P.', date: 'Hace 2 semanas', rating: 5, text: 'Justo lo que necesitaba. Los detalles y el color son tal como aparecen en las fotos.', likes: 4 },
];

const galleryImages = [
  { src: '', alt: 'Vista principal del producto' },
  { src: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1100&q=85', alt: 'Detalle de cerámica y textura' },
  { src: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1100&q=85', alt: 'Producto en un ambiente natural' },
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85', alt: 'Inspiración para tu hogar' },
];

const sizeOptions = [
  { value: '', label: 'Selecciona un tamaño', dotClass: 'bg-slate-300' },
  { value: 'small', label: 'Pequeño', dotClass: 'bg-emerald-600' },
  { value: 'medium', label: 'Mediano', dotClass: 'bg-emerald-600' },
  { value: 'large', label: 'Grande', dotClass: 'bg-emerald-600' },
];

const quantityOptions = [1, 2, 3, 4, 5].map(amount => ({
  value: String(amount),
  label: `${amount} ${amount === 1 ? 'unidad' : 'unidades'}`,
  dotClass: 'bg-sky-600',
}));

const Stars = ({ rating, large = false }: { rating: number; large?: boolean }) => (
  <span className={`inline-flex items-center gap-0.5 text-amber-500 ${large ? 'text-base' : 'text-[13px]'}`} aria-label={`${rating} de 5 estrellas`}>
    {Array.from({ length: 5 }, (_, index) => <span key={index} aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: large ? 19 : 15, fontVariationSettings: index < Math.round(rating) ? "'FILL' 1" : "'FILL' 0" }}>star</span>)}
  </span>
);

const Icon = ({ children, className = '' }: { children: string; className?: string }) => <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{children}</span>;

export const ProductDetailPage = () => {
  const { itemCount, addToCart } = useShopCart();
  const cartNoticeTimeout = useRef<number | null>(null);
  
  const { productCode } = useParams();
  const product = products.find(item => item.id === productCode) ?? products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [reviewName, setReviewName] = useState('');
  const [query, setQuery] = useState('');

  const images = useMemo(() => galleryImages.map((image, index) => ({ ...image, src: index === 0 ? product.image : image.src })), [product.image]);
  const related = products.filter(item => item.id !== product.id).slice(0, 5);

  const addReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!reviewText.trim() || !reviewName.trim()) return;
    setReviews(current => [{ name: reviewName.trim(), date: 'Ahora', rating: reviewRating, text: reviewText.trim(), likes: 0 }, ...current]);
    setReviewName('');
    setReviewText('');
    setReviewRating(5);
  };

  useEffect(() => () => {
    if (cartNoticeTimeout.current !== null) {
      window.clearTimeout(cartNoticeTimeout.current);
    }
  }, []);

  return (
    <>
    <ShopTopBar query={query} onQueryChange={setQuery} cartCount={itemCount} />
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 sm:pt-8 lg:px-8">
        <nav aria-label="Ruta de navegación" className="mb-5 flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
          <Link to="/examples/shop" className="transition hover:text-slate-900">Tienda</Link><Icon className="text-[16px]">chevron_right</Icon>
          <Link to="/examples/shop" className="transition hover:text-slate-900">{product.category}</Link><Icon className="text-[16px]">chevron_right</Icon>
          <span className="truncate text-slate-800">{product.name}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(330px,0.9fr)] lg:gap-12">
          <div className="grid min-w-0 gap-3 sm:grid-cols-[70px_minmax(0,1fr)] sm:gap-4">
            <div className="order-2 flex gap-2 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:max-h-[590px]">
              {images.map((image, index) => <button key={image.src} type="button" aria-label={`Ver imagen ${index + 1}: ${image.alt}`} aria-pressed={selectedImage === index} onClick={() => setSelectedImage(index)} className={`h-[68px] w-[68px] shrink-0 overflow-hidden rounded-xl border bg-white p-1 transition ${selectedImage === index ? 'border-slate-900 ring-1 ring-slate-900' : 'border-slate-200 hover:border-sky-300'}`}><img src={image.src} alt="" className="h-full w-full rounded-lg object-cover" /></button>)}
            </div>
            <div className="group relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:order-2 sm:aspect-[1.08/1] lg:aspect-[1.12/1]">
              <img src={images[selectedImage].src} alt={images[selectedImage].alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 backdrop-blur">{product.label ?? 'Selección de la tienda'}</span>
              <button type="button" onClick={() => setFavorite(value => !value)} aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'} aria-pressed={favorite} className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:scale-105 ${favorite ? 'text-rose-600' : 'text-slate-700'}`}><Icon className="text-[21px]">{favorite ? 'favorite' : 'favorite_border'}</Icon></button>
              <div className="absolute bottom-4 right-4 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur">{selectedImage + 1} / {images.length}</div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">{product.category}</div>
            <h1 className="mt-2 font-serif text-3xl leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.6rem]">{product.name}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"><Stars rating={product.rating} /><span className="font-semibold text-slate-800">{product.rating.toFixed(1)}</span><a href="#opiniones" className="text-slate-500 underline decoration-stone-300 underline-offset-4 hover:text-slate-900">{product.reviews} opiniones</a></div>
            <div className="mt-5 flex items-baseline gap-3"><span className="text-2xl font-semibold tracking-tight">{product.price.toFixed(2).replace('.', ',')} €</span>{product.oldPrice && <><span className="text-sm text-slate-400 line-through">{product.oldPrice.toFixed(2).replace('.', ',')} €</span><span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-sky-800">Oferta</span></>}</div>
            <p className="mt-5 max-w-xl text-[14px] leading-7 text-slate-600">Una pieza pensada para hacer especial lo cotidiano. Su diseño equilibrado, sus materiales cuidadosamente seleccionados y sus acabados suaves aportan calidez y personalidad a cualquier espacio.</p>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold">Color <span className="font-normal text-slate-500">— {['Arena', 'Terracota', 'Oliva'][selectedColor]}</span></span><span className="text-xs text-slate-400">3 acabados</span></div>
              <div className="mt-3 flex gap-3">{[{ name: 'Arena', color: '#d8c9b2' }, { name: 'Terracota', color: '#a9664c' }, { name: 'Oliva', color: '#78806a' }].map((tone, index) => <button key={tone.name} type="button" aria-label={tone.name} aria-pressed={selectedColor === index} onClick={() => setSelectedColor(index)} className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${selectedColor === index ? 'border-slate-900 ring-2 ring-white ring-offset-2 ring-offset-sky-800' : 'border-slate-200 hover:scale-105'}`} style={{ backgroundColor: tone.color }} />)}</div>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between"><span className="text-sm font-semibold">Tamaño</span><button type="button" className="text-xs text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-900">Guía de medidas</button></div>
              <CustomSelect options={sizeOptions} value={selectedSize} onValueChange={setSelectedSize} />
            </div>
            <div className="mt-5 grid grid-cols-[minmax(120px,0.7fr)_1.3fr] items-end gap-3">
              <CustomSelect label="Cantidad" options={quantityOptions} value={String(quantity)} onValueChange={value => setQuantity(Number(value))} />
              <button type="button" onClick={() => { addToCart(product, quantity); setCartAdded(true); if (cartNoticeTimeout.current !== null) window.clearTimeout(cartNoticeTimeout.current); cartNoticeTimeout.current = window.setTimeout(() => { setCartAdded(false); cartNoticeTimeout.current = null; }, 2500); }} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"><Icon className="text-[19px]">{cartAdded ? 'check' : 'shopping_bag'}</Icon>{cartAdded ? 'Añadido al carrito' : 'Añadir al carrito'}</button>
            </div>
            <Link to={`/examples/shop/checkout/${product.id}`} className="mt-3 flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-transparent text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white">Comprar ahora</Link>
            <div className="mt-5 space-y-3 border-t border-stone-200 pt-4 text-xs text-slate-600"><div className="flex items-center gap-2"><Icon className="text-[18px] text-sky-700">local_shipping</Icon><span><strong className="font-semibold text-slate-800">Envío gratis</strong> en pedidos superiores a 50 €</span></div><div className="flex items-center gap-2"><Icon className="text-[18px] text-sky-700">autorenew</Icon><span>Devoluciones sencillas durante 30 días</span></div><div className="flex items-center gap-2"><Icon className="text-[18px] text-sky-700">verified_user</Icon><span>Compra protegida · Pago seguro</span></div></div>
          </aside>
        </section>

        <section className="mt-16 grid gap-10 border-t border-stone-200 pt-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.75fr)] lg:gap-16">
          <div><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">Detalles</div><h2 className="mt-2 font-serif text-3xl tracking-tight">Hecho para durar</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">Cada detalle de {product.name.toLowerCase()} está pensado para acompañarte durante mucho tiempo. Una silueta atemporal y materiales honestos se unen en una pieza versátil, fácil de integrar y agradable de usar todos los días.</p>
            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">{[['Material', 'Materiales seleccionados'], ['Acabado', 'Hecho con atención al detalle'], ['Origen', 'Diseñado con cuidado'], ['Cuidados', 'Limpiar con un paño suave'], ['Referencia', product.id.toUpperCase()], ['Disponibilidad', product.inStock ? 'En stock' : 'Agotado']].map(([label, value]) => <div key={label} className="flex justify-between gap-4 border-b border-stone-200 py-3 text-sm"><span className="text-slate-500">{label}</span><span className="text-right font-medium text-slate-800">{value}</span></div>)}</div>
          </div>
          <aside className="min-w-0"><div className="flex items-end justify-between"><div><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">Completa el espacio</div><h2 className="mt-2 font-serif text-2xl tracking-tight">También te puede gustar</h2></div><div className="hidden gap-1 sm:flex"><button aria-label="Desplazar productos hacia arriba" type="button" onClick={() => document.getElementById('related-products')?.scrollBy({ top: -190, behavior: 'smooth' })} className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 transition hover:bg-sky-50"><Icon className="text-[18px]">keyboard_arrow_up</Icon></button><button aria-label="Desplazar productos hacia abajo" type="button" onClick={() => document.getElementById('related-products')?.scrollBy({ top: 190, behavior: 'smooth' })} className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 transition hover:bg-sky-50"><Icon className="text-[18px]">keyboard_arrow_down</Icon></button></div></div>
            <div id="related-products" className="mt-4 flex gap-3 overflow-x-auto pb-2 sm:max-h-[375px] sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:pr-1">{related.map((item: ShopProduct) => <Link key={item.id} to={`/examples/shop/product/${item.id}`} className="group flex w-[245px] shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-2 transition hover:border-sky-300 sm:w-full"><img src={item.image} alt={item.imageAlt} className="h-[76px] w-[76px] rounded-lg object-cover" /><div className="min-w-0 flex-1"><span className="text-[10px] uppercase tracking-[0.12em] text-slate-400">{item.category}</span><span className="mt-1 block truncate text-sm font-semibold text-slate-800 group-hover:text-sky-800">{item.name}</span><span className="mt-1 block text-sm text-slate-600">{item.price.toFixed(2).replace('.', ',')} €</span></div><Icon className="text-[18px] text-slate-400">arrow_outward</Icon></Link>)}</div>
          </aside>
        </section>

        <section id="opiniones" className="mt-16 border-t border-stone-200 pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">La comunidad</div><h2 className="mt-2 font-serif text-3xl tracking-tight">Opiniones</h2><div className="mt-5 flex items-center gap-3"><span className="text-5xl font-light tracking-tight">{product.rating.toFixed(1)}</span><div><Stars rating={product.rating} large /><div className="mt-1 text-xs text-slate-500">de 5 · {product.reviews + reviews.length} opiniones</div></div></div><p className="mt-3 text-sm leading-6 text-slate-500">Experiencias reales de personas que ya disfrutan de este producto.</p></div>
            <div className="divide-y divide-slate-200">{reviews.map((review, index) => <article key={`${review.name}-${review.date}-${index}`} className="py-5 first:pt-0"><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-800">{review.name.split(' ').map(part => part[0]).join('').slice(0, 2)}</div><div><div className="text-sm font-semibold">{review.name}</div><div className="mt-0.5 text-xs text-slate-400">Compra verificada · {review.date}</div></div></div><Stars rating={review.rating} /></div><p className="mt-3 text-sm leading-6 text-slate-600">{review.text}</p><button type="button" onClick={() => setReviews(current => current.map((item, itemIndex) => itemIndex === index ? { ...item, likes: item.likes + 1 } : item))} className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-sky-700"><Icon className="text-[16px]">thumb_up</Icon>Útil <span>· {review.likes}</span></button></article>)}</div>
          </div>
          <form onSubmit={addReview} className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><h3 className="font-serif text-2xl">Comparte tu experiencia</h3><p className="mt-1 text-sm text-slate-500">Tu opinión ayuda a otras personas a elegir.</p></div><div><div className="mb-1 text-xs font-medium text-slate-600">Tu valoración</div><div className="flex gap-1" role="radiogroup" aria-label="Tu valoración">{[1, 2, 3, 4, 5].map(value => <button key={value} type="button" role="radio" aria-checked={reviewRating === value} aria-label={`${value} estrellas`} onClick={() => setReviewRating(value)} className={`transition hover:scale-110 ${value <= reviewRating ? 'text-amber-500' : 'text-slate-300'}`}><Icon className="text-[23px]">star</Icon></button>)}</div></div></div><div className="mt-5 grid gap-3 sm:grid-cols-[220px_1fr]"><label className="sr-only" htmlFor="review-name">Tu nombre</label><input id="review-name" required value={reviewName} onChange={event => setReviewName(event.target.value)} placeholder="Tu nombre" className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100" /><label className="sr-only" htmlFor="review-text">Escribe tu opinión</label><textarea id="review-text" required value={reviewText} onChange={event => setReviewText(event.target.value)} placeholder="¿Qué te ha parecido el producto?" rows={3} className="resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 sm:col-span-2" /></div><div className="mt-3 flex justify-end"><button type="submit" className="flex h-10 items-center gap-2 rounded-xl bg-sky-700 px-4 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"><Icon className="text-[18px]">send</Icon>Publicar opinión</button></div></form>
        </section>
      </main>
      <ShopFooter />
    </div>
    
    </>
  );
};
