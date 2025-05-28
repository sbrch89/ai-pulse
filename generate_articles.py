import openai
import json

openai.api_key = "YOUR_API_KEY"

categories = {
    "news": "أخبار",
    "tech": "تقنية",
    "health": "الصحة",
    "culture": "ثقافة عامة",
    "religion": "ديني",
    "ai": "ذكاء اصطناعي"
}

def generate_article(prompt):
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
        max_tokens=500
    )
    return res.choices[0].message["content"]

def generate_all_articles():
    data = {"ar": {}, "en": {}}
    for lang in ["ar", "en"]:
        for cat in categories:
            prompt = f"اكتب مقالة قصيرة (100-150 كلمة) حول {categories[cat]}" if lang == "ar" else f"Write a short article (100-150 words) about {cat}"
            data[lang][cat] = [{"title": f"{categories[cat]} {i+1}" if lang == "ar" else f"{cat.capitalize()} {i+1}", "content": generate_article(prompt)} for i in range(5)]
    with open("public/articles_data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

generate_all_articles()
