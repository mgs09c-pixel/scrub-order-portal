import React, { useMemo, useState } from "react";
import { ShoppingCart, Search, User, CheckCircle, ArrowLeft, Plus, Minus, Trash2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const COMPANY_NAME = "North Florida Animal Hospital";
const LOGIN_USERNAME = "employee";
const LOGIN_PASSWORD = "scrubs2026";
const SUBMISSION_EMAIL = "your-email@company.com";

const products = [
  {
    id: "top-2625A",
    category: "Surgery Technicians",
    type: "Women's Tops",
    brand: "Infinity",
    name: "Ladies Mock Wrap Scrub Top",
    style: "2625A",
    price: 46.49,
    colors: ["Navy", "Teal"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2X", "3X", "4X", "5X"],
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop",
    description: "Contemporary fit mock wrap scrub top with two front pockets, stretch panel, side vents, and embroidered logo placement.",
    embroidery: true,
  },
  {
    id: "pant-CK200A",
    category: "Surgery Technicians",
    type: "Women's Pants",
    brand: "Infinity",
    name: "Fly Front Cargo Pant",
    style: "CK200A",
    price: 39.59,
    colors: ["Navy", "Teal"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2X", "3X", "4X", "5X"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=900&auto=format&fit=crop",
    description: "Comfortable cargo scrub pant with durable stretch fabric and multiple utility pockets.",
    embroidery: false,
  },
  {
    id: "jacket-WW320",
    category: "Surgery Technicians",
    type: "Men's",
    brand: "Workwear Revolution",
    name: "Men's Zip Front Jacket",
    style: "WW320",
    price: 41.14,
    colors: ["Black"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop",
    description: "Zip front work jacket for clinic staff with clean professional styling.",
    embroidery: true,
  },
  {
    id: "top-4399",
    category: "CSR",
    type: "Women's Tops",
    brand: "Landau Proflex",
    name: "Maternity Crossover V-Neck Tunic",
    style: "4399",
    price: 42.89,
    colors: ["Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=900&auto=format&fit=crop",
    description: "Maternity crossover scrub top with soft stretch fabric and room to move.",
    embroidery: true,
  },
  {
    id: "kennel-top-1",
    category: "Kennel Veterinary Technicians",
    type: "Women's Tops",
    brand: "Infinity",
    name: "V-Neck Scrub Top",
    style: "CK865A",
    price: 44.99,
    colors: ["Navy", "Ceil Blue", "Teal"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2X", "3X"],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=900&auto=format&fit=crop",
    description: "Everyday scrub top with flexible fit and clinic-ready durability.",
    embroidery: true,
  },
  {
    id: "csr-polo-1",
    category: "CSR",
    type: "CSR",
    brand: "Company Apparel",
    name: "Logo Polo Shirt",
    style: "POLO-01",
    price: 29.99,
    colors: ["Navy", "Black", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
    description: "Professional front desk polo with company logo placement.",
    embroidery: true,
  },
];

function money(value) {
  return value.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

function Header({ cartCount, setPage, loggedIn, setLoggedIn }) {
  return (
    <>
      <div className="bg-[#005a70] text-white px-6 py-2 flex items-center justify-between text-sm font-semibold">
        <div>{loggedIn ? "Hi, Team Member" : "Preferred Partner Program"}</div>
        <div className="flex gap-6 items-center">
          {loggedIn && <button onClick={() => setPage("home")}>Home</button>}
          {loggedIn && <button onClick={() => setPage("cart")} className="relative"><ShoppingCart className="w-6 h-6" />{cartCount > 0 && <span className="absolute -top-3 -right-3 bg-sky-300 text-white rounded-full px-2 text-xs">{cartCount}</span>}</button>}
          {loggedIn && <button onClick={() => { setLoggedIn(false); setPage("login"); }}>Log Out</button>}
        </div>
      </div>
      <div className="px-8 py-6 border-b bg-white">
        <div className="text-2xl font-bold text-[#35533b] leading-tight">North Florida<br />Animal Hospital</div>
      </div>
      {loggedIn && (
        <div className="flex justify-center gap-10 py-4 border-b shadow-sm bg-white text-sm font-semibold uppercase tracking-wide">
          {["Surgery Technicians", "Kennel Veterinary Technicians", "CSR"].map((cat) => (
            <button key={cat} onClick={() => setPage(cat)}>{cat}</button>
          ))}
        </div>
      )}
    </>
  );
}

function Login({ onLogin }) {
  const [username, setUsername] = useState(LOGIN_USERNAME);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function submit(e) {
    e.preventDefault();
    if (username === LOGIN_USERNAME && password === LOGIN_PASSWORD) onLogin();
    else setError("Invalid login. Please use the company-provided username and password.");
  }
  return (
    <div className="min-h-[78vh] grid md:grid-cols-2 bg-white">
      <div className="hidden md:flex bg-[#2d241b] text-white items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f3024] to-[#7b4b30] opacity-90" />
        <div className="relative max-w-md">
          <div className="text-6xl font-extrabold leading-tight">Order approved uniforms with no payment required.</div>
          <p className="mt-6 text-lg text-white/80">Choose your scrub items and submit your request for company review.</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <form onSubmit={submit} className="w-full max-w-md space-y-5">
          <Lock className="w-10 h-10 text-[#005a70]" />
          <h1 className="text-3xl font-bold">Sign In</h1>
          <div>
            <label className="block text-sm font-medium mb-2">Email or Username</label>
            <input className="w-full border p-3 rounded" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input className="w-full border p-3 rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Company password" />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button className="w-full bg-[#005a70] hover:bg-[#00485a] text-white py-6 text-lg">Sign In</Button>
          <p className="text-sm text-gray-500">Demo login: employee / scrubs2026</p>
        </form>
      </div>
    </div>
  );
}

function Catalog({ category, setSelectedProduct }) {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) => p.category === category && `${p.brand} ${p.name} ${p.style}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside>
          <h2 className="text-3xl mb-6">{category}</h2>
          <div className="flex border rounded overflow-hidden mb-8">
            <input className="p-3 flex-1" placeholder="Product keyword search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="bg-[#005a70] text-white px-4"><Search className="w-5 h-5" /></button>
          </div>
          <h3 className="font-bold mb-3">Categories</h3>
          {[...new Set(products.filter((p) => p.category === category).map((p) => p.type))].map((type) => <div key={type} className="border-b py-3 flex justify-between text-[#286c72]"><span>{type}</span><Plus className="w-4 h-4" /></div>)}
        </aside>
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">{category}</h3>
            <span className="text-sm text-gray-500">{filtered.length} items</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Card key={p.id} className="overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedProduct(p)}>
                <div className="aspect-square bg-gray-100 overflow-hidden"><img src={p.image} alt="" className="w-full h-full object-cover" /></div>
                <CardContent className="p-5 text-center space-y-2">
                  <div className="font-bold text-blue-900">{p.brand}</div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-blue-900">Style {p.style}</div>
                  <div className="text-red-600 font-bold">{money(p.price)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProductDetail({ product, addToCart, back }) {
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[2] || product.sizes[0]);
  const [qty, setQty] = useState(1);
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <button onClick={back} className="flex items-center gap-2 mb-6 text-[#005a70]"><ArrowLeft className="w-4 h-4" /> Back to products</button>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white border p-6"><img src={product.image} alt="" className="w-full aspect-square object-cover rounded" /></div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.brand} - {product.name}</h1>
          <div>Style# {product.style}</div>
          <div className="text-2xl text-red-600">Sale Price: {money(product.price)}</div>
          <div><div className="font-bold mb-2">1 Select a Color</div><div className="flex gap-3">{product.colors.map(c => <button key={c} onClick={() => setColor(c)} className={`border px-4 py-2 rounded ${color === c ? "ring-2 ring-[#005a70]" : ""}`}>{c}</button>)}</div></div>
          <div><div className="font-bold mb-2">2 Select a Size</div><div className="flex flex-wrap gap-2">{product.sizes.map(s => <button key={s} onClick={() => setSize(s)} className={`border px-4 py-2 rounded ${size === s ? "bg-[#005a70] text-white" : ""}`}>{s}</button>)}</div></div>
          <div><div className="font-bold mb-2">3 Quantity</div><div className="flex items-center gap-2"><Button variant="outline" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="w-4 h-4" /></Button><div className="border px-8 py-2 rounded">{qty}</div><Button variant="outline" onClick={() => setQty(qty + 1)}><Plus className="w-4 h-4" /></Button></div></div>
          <Button className="w-full bg-[#005a70] hover:bg-[#00485a] text-white py-7 text-lg" onClick={() => addToCart({ ...product, color, size, qty })}>Continue</Button>
        </div>
      </div>
      <div className="border mt-10 p-8 rounded bg-white"><h2 className="text-2xl mb-4">Product Description</h2><p className="text-gray-700 leading-relaxed">{product.description}</p>{product.embroidery && <p className="mt-4 text-sm text-gray-500">Company logo embroidery will be included unless otherwise noted during checkout.</p>}</div>
    </main>
  );
}

function Cart({ cart, setCart, setPage }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <main className="p-8 max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-8">
      <section>
        <h1 className="text-3xl mb-6">Cart</h1>
        {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="border-b py-6 flex gap-5">
            <img src={item.image} alt="" className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <div className="font-bold text-lg">{item.brand}</div>
              <div className="font-semibold underline">{item.name}</div>
              <div className="text-sm text-gray-600 mt-2">Style #: {item.style}</div>
              <div className="text-sm">Color: {item.color}</div>
              <div className="text-sm">Size: {item.size}</div>
              {item.embroidery && <div className="text-sm mt-2"><strong>Embroidery:</strong> Company logo included</div>}
            </div>
            <div className="text-right">
              <div>{money(item.price)}</div>
              <div>Qty: {item.qty}</div>
              <button className="text-red-600 mt-3" onClick={() => setCart(cart.filter((_, i) => i !== idx))}><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </section>
      <aside className="bg-gray-100 p-8 rounded h-fit">
        <h2 className="text-2xl mb-6">Order Summary</h2>
        <div className="flex justify-between mb-2"><span>Estimated Retail Total</span><span>{money(subtotal)}</span></div>
        <div className="flex justify-between mb-2"><span>Payment Due Online</span><span>$0.00</span></div>
        <div className="border-t mt-4 pt-4 text-xl font-bold flex justify-between"><span>Company Review</span><span>Required</span></div>
        <Button disabled={cart.length === 0} onClick={() => setPage("checkout")} className="w-full mt-6 bg-[#005a70] hover:bg-[#00485a] text-white py-6">Submit Request Details</Button>
      </aside>
    </main>
  );
}

function Checkout({ cart, setPage, setCart }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ employeeName: "", email: "", phone: "", department: "", startDate: "", manager: "", notes: "" });
  const orderText = useMemo(() => cart.map(i => `${i.qty}x ${i.brand} ${i.name} | Style ${i.style} | ${i.color} | Size ${i.size}${i.embroidery ? " | Embroidery: company logo" : ""}`).join("\n"), [cart]);
  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`New Scrub Order Request - ${form.employeeName || "New Hire"}`);
    const body = encodeURIComponent(`New scrub order request\n\nEmployee Name: ${form.employeeName}\nEmail: ${form.email}\nPhone: ${form.phone}\nDepartment/Role: ${form.department}\nStart Date: ${form.startDate}\nManager/Hiring Contact: ${form.manager}\n\nItems Requested:\n${orderText}\n\nNotes:\n${form.notes}\n\nNo payment was collected online. Please review and place this order manually.`);
    window.location.href = `mailto:${SUBMISSION_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setCart([]);
  }
  if (submitted) return <main className="p-12 max-w-3xl mx-auto text-center"><CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" /><h1 className="text-3xl font-bold mb-3">Uniform request submitted</h1><p className="text-gray-600">No payment was required. Your request has been prepared for company review.</p><Button className="mt-8 bg-[#005a70]" onClick={() => setPage("home")}>Return Home</Button></main>;
  return (
    <main className="p-8 max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-8">
      <form onSubmit={submit} className="space-y-5">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-gray-600">No online payment is collected. This form sends your scrub selections for company approval and manual ordering.</p>
        {[
          ["employeeName", "Employee Name"], ["email", "Employee Email"], ["phone", "Phone Number"], ["department", "Department / Role"], ["startDate", "Start Date"], ["manager", "Manager / Hiring Contact"]
        ].map(([key, label]) => <div key={key}><label className="block text-sm font-medium mb-2">{label}</label><input required={key !== "manager"} className="w-full border p-3 rounded" value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} /></div>)}
        <div><label className="block text-sm font-medium mb-2">Notes / Special Instructions</label><textarea className="w-full border p-3 rounded min-h-28" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></div>
        <Button className="w-full bg-[#005a70] hover:bg-[#00485a] text-white py-6">Submit Uniform Request</Button>
      </form>
      <aside className="bg-gray-100 p-6 rounded h-fit">
        <h2 className="text-2xl mb-4">Request Summary</h2>
        {cart.map((i, idx) => <div key={idx} className="border-b py-3 text-sm"><strong>{i.qty}x {i.name}</strong><br />{i.color}, Size {i.size}</div>)}
        <div className="mt-5 p-4 bg-blue-50 text-blue-900 rounded text-sm">This order will be billed/handled internally. No card or bank details are needed.</div>
      </aside>
    </main>
  );
}

export default function ScrubOrderPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("login");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const currentCategory = ["Surgery Technicians", "Kennel Veterinary Technicians", "CSR"].includes(page) ? page : "Surgery Technicians";

  function addToCart(item) {
    setCart([...cart, item]);
    setSelectedProduct(null);
    setPage("cart");
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header cartCount={cart.reduce((s, i) => s + i.qty, 0)} setPage={setPage} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {!loggedIn ? <Login onLogin={() => { setLoggedIn(true); setPage("home"); }} /> : selectedProduct ? <ProductDetail product={selectedProduct} addToCart={addToCart} back={() => setSelectedProduct(null)} /> : page === "cart" ? <Cart cart={cart} setCart={setCart} setPage={setPage} /> : page === "checkout" ? <Checkout cart={cart} setPage={setPage} setCart={setCart} /> : <Catalog category={currentCategory} setSelectedProduct={setSelectedProduct} />}
      <footer className="border-t mt-12 p-6 text-center text-sm text-gray-500">© 2026 {COMPANY_NAME} Uniform Request Portal</footer>
    </div>
  );
}
