// Dati capitoli (puoi ampliare liberamente)
const capitoli = [
    { img: "images/01.png", it: "Definizioni stradali", ar: "تعريفات الطريق", link: "pag2.html" },
    { img: "images/02.png", it: "Segnali di pericolo", ar: "إشارات الخطر" },
    { img: "images/03.png", it: "Segnali di divieto", ar: "إشارات الحظر" },
    { img: "images/04.png", it: "Segnali di obbligo", ar: "إشارات الالتزام" },
    { img: "images/05.png", it: "Segnaletica orizzontale", ar: "العلامات الأرضية" },
    { img: "images/06.png", it: "Segnali temporanei", ar: "إشارات مؤقتة" },
    { img: "images/07.png", it: "Pannelli integrativi", ar: "لوحات إضافية" },
    { img: "images/08.png", it: "Veicoli e precedenze", ar: "المركبات والأولوية" },
    { img: "images/09.png", it: "Definizioni stradali", ar: "تعريفات الطريق" },
    { img: "images/10.png", it: "Segnali di pericolo", ar: "إشارات الخطر" },
    { img: "images/11.png", it: "Segnali di divieto", ar: "إشارات الحظر" },
    { img: "images/12.png", it: "Segnali di obbligo", ar: "إشارات الالتزام" },
    { img: "images/13.png", it: "Segnaletica orizzontale", ar: "العلامات الأرضية" },
    { img: "images/14.png", it: "Segnali temporanei", ar: "إشارات مؤقتة" },
    { img: "images/15.png", it: "Pannelli integrativi", ar: "لوحات إضافية" },
    { img: "images/16.png", it: "Veicoli e precedenze", ar: "المركبات والأولوية" },
];

const container = document.getElementById("capitoli");

// Render robusto (niente innerHTML += in loop; usiamo DocumentFragment)
const frag = document.createDocumentFragment();

for (const c of capitoli) {
    const li = document.createElement("li");
    li.className = "card";

    const img = document.createElement("img");
    img.className = "card-img";
    img.loading = "lazy";
    img.width = 480; img.height = 300;
    img.src = c.img;
    img.alt = `${c.it} / ${c.ar}`;

    const body = document.createElement("div");
    body.className = "card-body";

    const h3it = document.createElement("h3");
    h3it.className = "card-title";
    h3it.textContent = c.it;

    const h3ar = document.createElement("h3");
    h3ar.className = "card-title-ar";
    h3ar.setAttribute("lang", "ar");
    h3ar.setAttribute("dir", "rtl");
    h3ar.textContent = c.ar;

    body.append(h3it, h3ar);
    li.append(img, body);
    frag.append(li);
    if (c.link) {
        li.addEventListener('click', () => {

            window.location.href = c.link;



        })
        li.style.cursor = 'pointer';
    };

}
container.append(frag);





