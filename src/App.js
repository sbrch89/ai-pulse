import React, { useState, useEffect } from "react";
import "./App.css";

const categories = {
  news: { ar: "أخبار", en: "News" },
  tech: { ar: "تقنية", en: "Technology" },
  health: { ar: "الصحة", en: "Health" },
  culture: { ar: "ثقافة عامة", en: "Culture" },
  religion: { ar: "ديني", en: "Religion" },
  ai: { ar: "ذكاء اصطناعي", en: "AI" },
};

function App() {
  const [lang, setLang] = useState("ar");
  const [articles, setArticles] = useState({});

  useEffect(() => {
    fetch(`articles_data.json`)
      .then((res) => res.json())
      .then((data) => setArticles(data[lang]));
  }, [lang]);

  return (
    <div className="container">
      <header>
        <h1>{lang === "ar" ? "نبض الذكاء" : "AI Pulse"}</h1>
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
          {lang === "ar" ? "English" : "عربي"}
        </button>
      </header>
      <div className="tabs">
        {Object.keys(categories).map((cat) => (
          <div key={cat} className="category">
            <h2>{categories[cat][lang]}</h2>
            {(articles[cat] || []).map((a, i) => (
              <div key={i} className="card">
                <h3>{a.title}</h3>
                <p>{a.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
