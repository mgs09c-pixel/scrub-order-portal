import React, { useMemo, useState } from "react";
import {
  ShoppingCart,
  Search,
  CheckCircle,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  Lock,
} from "lucide-react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded px-4 py-2 font-semibold cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "", ...props }) {
  return (
    <div className={`border rounded bg-white ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

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
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2X", "3X"],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop",
    description:
      "Contemporary fit mock wrap scrub top with two front pockets, stretch panel, and side vents.",
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
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2X", "3X"],
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=900&auto=format&fit=crop",
    description:
      "Comfortable cargo scrub pant with durable stretch fabric and multiple utility pockets.",
    embroidery: false,
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
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=900&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
    description: "Professional front desk polo with company logo placement.",
    embroidery: true,
  },
];

function money(value) {
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}

function Header({ cartCount, setPage, loggedIn, setLoggedIn }) {
  return (
    <>
      <div style={{ background: "#005a70", color: "white", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>{loggedIn ? "Hi, Team Member" : "Preferred Partner Program"}</div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {loggedIn && <button onClick={() => setPage("home")}>Home</button>}
          {loggedIn && (
            <button onClick={() => setPage("cart")} style={{ position: "relative" }}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: -10, right: -10, background: "#7dd3fc", color: "white", borderRadius: 999, padding: "2px 8px", fontSize: 12 }}>
                  {cartCount}
                </span>
              )}
            </button>
          )}
          {loggedIn && (
            <button
              onClick={() => {
                setLoggedIn(false);
                setPage("login");
              }}
            >
              Log Out
            </button>
          )}
        </div>
      </div>

      <div style={{ padding: 24, borderBottom: "1px solid #ddd" }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: "#35533b", lineHeight: 1.1 }}>
          North Florida
          <br />
          Animal Hospital
        </div>
      </div>

      {loggedIn && (
        <div style={{ display: "flex", justifyContent: "center", gap: 32, padding: 16, borderBottom: "1px solid #ddd", fontWeight: 600 }}>
          {["Surgery Technicians", "Kennel Veterinary Technicians", "CSR"].map((cat) => (
            <button key={cat} onClick={() => setPage(cat)}>
              {cat}
            </button>
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
    else setError("Invalid login.");
  }

  return (
    <div style={{ minHeight: "80vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ background: "#2d241b", color: "white", padding: 48, display: "flex", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>
            Order approved uniforms with no payment required.
          </div>
          <p style={{ fontSize: 18, opacity: 0.85 }}>
            Choose your scrub items and submit your request for company review.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
        <form onSubmit={submit} style={{ width: "100%", maxWidth: 420 }}>
          <Lock size={40} color="#005a70" />
          <h1 style={{ fontSize: 36 }}>Sign In</h1>

          <div style={{ marginBottom: 16 }}>
            <label>Email or Username</label>
            <input
              style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 6 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Password</label>
            <input
              type="password"
              style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 6 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button className="w-full" style={{ width: "100%", background: "#005a70", color: "white", padding: 14 }}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

function Catalog({ category, setSelectedProduct }) {
  const filtered = products.filter((p) => p.category === category);

  return (
    <main style={{ padding: 32 }}>
      <h2 style={{ fontSize: 32 }}>{category}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 24 }}>
        {filtered.map((p) => (
          <Card key={p.id} className="card" onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer" }}>
            <img src={p.image} alt="" style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }} />
            <CardContent style={{ padding: 20, textAlign: "center" }}>
              <div style={{ fontWeight: 700 }}>{p.brand}</div>
              <div>{p.name}</div>
              <div>Style {p.style}</div>
              <div style={{ color: "red", fontWeight: 700 }}>{money(p.price)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

function ProductDetail({ product, addToCart, back }) {
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[2] || product.sizes[0]);
  const [qty, setQty] = useState(1);

  return (
    <main style={{ padding: 32 }}>
      <button onClick={back}>
        <ArrowLeft size={16} /> Back
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 24 }}>
        <img src={product.image} alt="" style={{ width: "100%", borderRadius: 8 }} />

        <div>
          <h1>{product.brand} - {product.name}</h1>
          <p>Style# {product.style}</p>
          <h2 style={{ color: "red" }}>{money(product.price)}</h2>

          <div>
            <h3>Color</h3>
            {product.colors.map((c) => (
              <button key={c} onClick={() => setColor(c)} style={{ marginRight: 8 }}>
                {c}
              </button>
            ))}
          </div>

          <div>
            <h3>Size</h3>
            {product.sizes.map((s) => (
              <button key={s} onClick={() => setSize(s)} style={{ marginRight: 8, marginBottom: 8 }}>
                {s}
              </button>
            ))}
          </div>

          <div>
            <h3>Quantity</h3>
            <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
            <span style={{ margin: "0 12px" }}>{qty}</span>
            <button onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
          </div>

          <Button
            style={{ width: "100%", background: "#005a70", color: "white", marginTop: 24, padding: 14 }}
            onClick={() => addToCart({ ...product, color, size, qty })}
          >
            Continue
          </Button>
        </div>
      </div>
    </main>
  );
}

function Cart({ cart, setCart, setPage }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 32 }}>
      <section>
        <h1>Cart</h1>
        {cart.map((item, idx) => (
          <div key={idx} style={{ borderBottom: "1px solid #ddd", padding: "20px 0", display: "flex", gap: 20 }}>
            <img src={item.image} alt="" style={{ width: 100, height: 100, objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{item.brand}</div>
              <div>{item.name}</div>
              <div>{item.color} / {item.size}</div>
              <div>Qty: {item.qty}</div>
            </div>
            <button onClick={() => setCart(cart.filter((_, i) => i !== idx))}>
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </section>

      <aside style={{ background: "#f3f4f6", padding: 24, borderRadius: 8 }}>
        <h2>Order Summary</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Estimated Retail Total</span>
          <span>{money(subtotal)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Payment Due Online</span>
          <span>$0.00</span>
        </div>
        <Button
          style={{ width: "100%", background: "#005a70", color: "white", marginTop: 24, padding: 14 }}
          onClick={() => setPage("checkout")}
        >
          Submit Request Details
        </Button>
      </aside>
    </main>
  );
}

function Checkout({ cart, setPage, setCart }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    employeeName: "",
    email: "",
    phone: "",
    department: "",
  });

  const orderText = useMemo(
    () =>
      cart
        .map((i) => `${i.qty}x ${i.brand} ${i.name} | ${i.color} | Size ${i.size}`)
        .join("\n"),
    [cart]
  );

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`New Scrub Order Request - ${form.employeeName}`);
    const body = encodeURIComponent(
      `Employee Name: ${form.employeeName}\nEmail: ${form.email}\nPhone: ${form.phone}\nDepartment: ${form.department}\n\nItems:\n${orderText}`
    );

    window.location.href = `mailto:${SUBMISSION_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setCart([]);
  }

  if (submitted) {
    return (
      <main style={{ padding: 48, textAlign: "center" }}>
        <CheckCircle size={64} color="green" />
        <h1>Uniform request submitted</h1>
        <p>No payment was required.</p>
        <Button onClick={() => setPage("home")}>Return Home</Button>
      </main>
    );
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Checkout</h1>
      <p>No online payment is collected.</p>

      <form onSubmit={submit} style={{ maxWidth: 600 }}>
        {["employeeName", "email", "phone", "department"].map((key) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <label>{key}</label>
            <input
              required
              style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 6 }}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}

        <Button style={{ background: "#005a70", color: "white", padding: 14 }}>
          Submit Uniform Request
        </Button>
      </form>
    </main>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("login");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentCategory =
    ["Surgery Technicians", "Kennel Veterinary Technicians", "CSR"].includes(page)
      ? page
      : "Surgery Technicians";

  function addToCart(item) {
    setCart([...cart, item]);
    setSelectedProduct(null);
    setPage("cart");
  }

  return (
    <div>
      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        setPage={setPage}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />

      {!loggedIn ? (
        <Login onLogin={() => { setLoggedIn(true); setPage("home"); }} />
      ) : selectedProduct ? (
        <ProductDetail product={selectedProduct} addToCart={addToCart} back={() => setSelectedProduct(null)} />
      ) : page === "cart" ? (
        <Cart cart={cart} setCart={setCart} setPage={setPage} />
      ) : page === "checkout" ? (
        <Checkout cart={cart} setPage={setPage} setCart={setCart} />
      ) : (
        <Catalog category={currentCategory} setSelectedProduct={setSelectedProduct} />
      )}
    </div>
  );
}
