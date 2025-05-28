function App() {
  const [lang, setLang] = useState("ar");
  const [articles, setArticles] = useState({});
  const [activeCat, setActiveCat] = useState("news");

  useEffect(() => {
    fetch(`articles_data.json`)
      .then((res) => res.json())
      .then((data) => setArticles(data[lang]));
  }, [lang]);

  return (
    <div className="container" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="navbar">
        <h1>{lang === "ar" ? "نبض الذكاء" : "AI Pulse"}</h1>
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
          {lang === "ar" ? "English" : "عربي"}
        </button>
      </header>

      <nav className="category-tabs">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            style={{
              backgroundColor:
                activeCat === cat ? categories[cat].color : "transparent",
              color: activeCat === cat ? "white" : categories[cat].color,
              borderColor: categories[cat].color,
            }}
            onClick={() => setActiveCat(cat)}
          >
            {categories[cat][lang]}
          </button>
        ))}
      </nav>

      <main>
        {(articles[activeCat] || []).map((a, i) => (
          <article
            key={i}
            className="card"
            style={{ borderLeft: `6px solid ${categories[activeCat].color}` }}
          >
            <h3>{a.title}</h3>
            <p>{a.content}</p>
          </article>
        ))}
      </main>

      <footer>
        <p>{lang === "ar" ? "© 2025 نبض الذكاء. جميع الحقوق محفوظة." : "© 2025 AI Pulse. All rights reserved."}</p>
      </footer>
    </div>
  );
}

