import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="container"
      style={{ minHeight: "70vh", paddingTop: 160, paddingBottom: 120 }}
    >
      <p className="label">Erro 404</p>
      <h1 className="section-title" style={{ marginTop: 16, fontSize: "clamp(56px, 8vw, 120px)" }}>
        Fora de <span className="accent">órbita.</span>
      </h1>
      <p style={{ marginTop: 24, maxWidth: 480, color: "var(--text-muted)" }}>
        A página que você procura não existe ou mudou de endereço.
      </p>
      <p style={{ marginTop: 32 }}>
        <Link href="/" className="mono-label" style={{ color: "var(--violet)" }}>
          ← Voltar para a home
        </Link>
      </p>
    </section>
  );
}
