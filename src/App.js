import React, { useState, useEffect } from "react";
import "./App.css";

const categories = {
  news: { ar: "أخبار", en: "News", color: "#007bff" },
  tech: { ar: "تقنية", en: "Technology", color: "#28a745" },
  health: { ar: "الصحة", en: "Health", color: "#dc3545" },
  culture: { ar: "ثقافة عامة", en: "Culture", color: "#6f42c1" },
  religion: { ar: "ديني", en: "Religion", color: "#ffc107" },
  ai: { ar: "ذكاء اصطناعي", en: "AI", color: "#17a2b8" },
};

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
    <div className="container" dir="ltr">
      <header className="navbar">
        <h1>{lang === "ar" ? "نبض الذكاء" : "AI Pulse"}</h1>
        <
