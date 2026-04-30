import React, { useMemo, useState } from "react";
import {
  ShoppingCart,
  CheckCircle,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  Lock,
} from "lucide-react";

function Button({ children, style = {}, ...props }) {
  return (
    <button
      style={{
        borderRadius: 4,
        padding: "8px 14px",
        fontWeight: 700,
        cursor: "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

const LOGIN_USERNAME = "employee";
const LOGIN_PASSWORD = "scrubs2026";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzepzd";

const standardSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const womensBottomSizes = [
  "XXS",
  "XS- Petite",
  "XS",
  "S- Petite",
  "S",
  "M- Tall",
  "M",
  "L- Tall",
  "L-Petite",
  "L",
  "XL- Petite",
  "XL",
  "XL-Tall",
  "XXL",
  "XXXL",
];

const scrubColors = ["Navy", "Caribbean Blue"];
const teeColors = ["Mauve", "Sage", "Asphalt", "Ocean Blue"];

const products = [
  {
    id: "women-2625A",
    category: "Women",
    brand: "Infinity",
    name: "2625A Top",
    style: "2625A",
    colors: scrubColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "women-CK110A",
    category: "Women",
    brand: "Infinity",
    name: "CK110A Bottom - Jogger",
    style: "CK110A",
    colors: scrubColors,
    sizes: womensBottomSizes,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "women-CK065A",
    category: "Women",
    brand: "Infinity",
    name: "CK065A Bottom - Straight",
    style: "CK065A",
    colors: scrubColors,
    sizes: womensBottomSizes,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "women-tee",
    category: "Women",
    brand: "BELLA + CANVAS",
    name: "3001 - Jersey Tee",
    style: "3001",
    colors: teeColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "men-top-551816823",
    category: "Men",
    brand: "Infinity",
    name: "Top",
    style: "551816823",
    colors: scrubColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "men-bottom-551816953",
    category: "Men",
    brand: "Infinity",
    name: "Bottom",
    style: "551816953",
    colors: scrubColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "men-tee",
    category: "Men",
    brand: "BELLA + CANVAS",
    name: "3001 - Jersey Tee",
    style: "3001",
    colors: teeColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "doctors-top-551816823",
    category: "Doctors",
    brand: "Infinity",
    name: "Top",
    style: "551816823",
    colors: scrubColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "doctors-bottom-551816953",
    category: "Doctors",
    brand: "Infinity",
    name: "Bottom",
    style: "551816953",
    colors: scrubColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "doctors-tee",
    category: "Doctors",
    brand: "BELLA + CANVAS",
    name: "3001 - Jersey Tee",
    style: "3001",
    colors: teeColors,
    sizes: standardSizes,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
  },
];

function Header({ cartCount, setPage, loggedIn, setLoggedIn }) {
  return (
    <>
      <div style={{ background: "#005a70", color: "white", padding: "12px 24px", display: "flex", justifyContent: "space-between" }}>
        <div>{loggedIn ? "Hi, Team Member" : "Uniform Request Portal"}</div>
        <div style={{ display: "flex", gap: 20 }}>
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
          {loggedIn && <button onClick={() => { setLoggedIn(false); setPage("login"); }}>Log Out</button>}
        </div>
      </div>

      <div style={{ padding: 24, borderBottom: "1px solid #ddd" }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: "#35533b", lineHeight: 1.1 }}>
          North Florida<br />Animal Hospital
        </div>
      </div>

      {loggedIn && (
        <div style={{ display: "flex", justifyContent: "center", gap: 32, padding: 16, borderBottom: "1px solid #ddd", fontWeight: 700 }}>
          {["Women", "Men", "Doctors"].map((cat) => (
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
    else setError("Invalid login.");
  }

  return (
    <div style={{ minHeight: "80vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ background: "#2d241b", color: "white", padding: 48, display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>
          Order approved uniforms with no payment required.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
        <form onSubmit={submit} style={{ width: "100%", maxWidth: 420 }}>
          <Lock size={40} color="#005a70" />
          <h1>Sign In</h1>
          <label>Username</label>
          <input style={{ width: "100%", padding: 12, marginBottom: 16 }} value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Password</label>
          <input type="password" style={{ width: "100%", padding: 12, marginBottom: 16 }} value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button style={{ width: "100%", background: "#005a70", color: "white", padding: 14 }}>Sign In</Button>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 24 }}>
        {filtered.map((p) => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer", border: "1px solid #ddd", textAlign: "center", paddingBottom: 16 }}>
            <img src={p.image} alt="" style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }} />
            <div style={{ padding: 12 }}>
              <div style={{ fontWeight: 700 }}>{p.brand}</div>
              <div>{p.name}</div>
              <div>Style {p.style}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function OptionButton({ selected, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginRight: 8,
        marginBottom: 8,
        padding: "8px 12px",
        border: selected ? "2px solid #005a70" : "1px solid #aaa",
        background: selected ? "#005a70" : "white",
        color: selected ? "white" : "black",
        fontWeight: selected ? 700 : 400,
        borderRadius: 4,
      }}
    >
      {children}
    </button>
  );
}

function ProductDetail({ product, addToCart, back }) {
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);

  return (
    <main style={{ padding: 32 }}>
      <button onClick={back}><ArrowLeft size={16} /> Back</button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 24 }}>
        <img src={product.image} alt="" style={{ width: "100%", borderRadius: 8 }} />

        <div>
          <h1>{product.brand} - {product.name}</h1>
          <p>Style# {product.style}</p>

          <h3>Color: <span style={{ color: "#005a70" }}>{color}</span></h3>
          {product.colors.map((c) => (
            <OptionButton key={c} selected={color === c} onClick={() => setColor(c)}>
              {c}
            </OptionButton>
          ))}

          <h3>Size: <span style={{ color: "#005a70" }}>{size}</span></h3>
          {product.sizes.map((s) => (
            <OptionButton key={s} selected={size === s} onClick={() => setSize(s)}>
              {s}
            </OptionButton>
          ))}

          <h3>Quantity</h3>
          <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
          <span style={{ margin: "0 12px" }}>{qty}</span>
          <button onClick={() => setQty(qty + 1)}><Plus size={16} /></button>

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
  return (
    <main style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 32 }}>
      <section>
        <h1>Cart</h1>
        {cart.map((item, idx) => (
          <div key={idx} style={{ borderBottom: "1px solid #ddd", padding: "20px 0", display: "flex", gap: 20 }}>
            <img src={item.image} alt="" style={{ width: 100, height: 100, objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <strong>{item.brand}</strong>
              <div>{item.name}</div>
              <div>Style: {item.style}</div>
              <div>Color: {item.color}</div>
              <div>Size: {item.size}</div>
              <div>Qty: {item.qty}</div>
            </div>
            <button onClick={() => setCart(cart.filter((_, i) => i !== idx))}><Trash2 size={16} /></button>
          </div>
        ))}
      </section>

      <aside style={{ background: "#f3f4f6", padding: 24, borderRadius: 8 }}>
        <h2>Order Summary</h2>
        <div>Payment Due Online: $0.00</div>
        <Button style={{ width: "100%", background: "#005a70", color: "white", marginTop: 24, padding: 14 }} onClick={() => setPage("checkout")}>
          Submit Request Details
        </Button>
      </aside>
    </main>
  );
}

function Checkout({ cart, setPage, setCart }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ employeeName: "", email: "", phone: "", department: "" });

  const orderText = useMemo(
    () => cart.map((i) => `${i.qty}x ${i.brand} ${i.name} | Style ${i.style} | ${i.color} | Size ${i.size}`).join("\n"),
    [cart]
  );

  async function submit(e) {
    e.preventDefault();

    const payload = {
      employeeName: form.employeeName,
      email: form.email,
      phone: form.phone,
      department: form.department,
      items: orderText,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setCart([]);
    } catch (error) {
      alert("Something went wrong submitting the order. Please try again.");
    }
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
        {[
          ["employeeName", "Employee Name"],
          ["email", "Employee Email"],
          ["phone", "Phone Number"],
          ["department", "Department / Role"],
        ].map(([key, label]) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <label>{label}</label>
            <input
              required
              style={{ width: "100%", padding: 12, border: "1px solid #ccc" }}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}
        <Button style={{ background: "#005a70", color: "white", padding: 14 }}>Submit Uniform Request</Button>
      </form>
    </main>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("login");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentCategory = ["Women", "Men", "Doctors"].includes(page) ? page : "Women";

  function addToCart(item) {
    setCart([...cart, item]);
    setSelectedProduct(null);
    setPage("cart");
  }

  return (
    <div>
      <Header cartCount={cart.reduce((s, i) => s + i.qty, 0)} setPage={setPage} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

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
