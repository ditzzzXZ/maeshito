export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            creator: "dittxz",
            error: "Method Not Allowed. Use GET request."
        });
    }

    const { q, lang = "en" } = req.query;

    if (!q || q.trim() === "") {
        return res.status(400).json({
            creator: "dittxz",
            error: "Parameter 'q' is required. Example: ?q=YourQuestion"
        });
    }

    const answers = {
        id: ["Ya", "Mungkin", "Enggak"],
        en: ["Yes", "Maybe", "No"]
    };

    const selectedLang = answers[lang] ? lang : "en";
    const randomAnswer = answers[selectedLang][Math.floor(Math.random() * answers[selectedLang].length)];

    return res.status(200).json({
        creator: "dittxz",
        question: q.trim(),
        language: selectedLang,
        answer: randomAnswer
    });
}
