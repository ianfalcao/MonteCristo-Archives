
"use strict";

const characters = {
    "edmond": {
        "name": "Edmond Dantès / Conde de Monte Cristo",
        "category": "protagonista",
        "description": "Conduz a busca por reparação.",
        "identity": "Marinheiro; depois, Conde de Monte Cristo.",
        "role": "Conduz a busca por reparação.",
        "relation": "É o próprio Edmond, antes e depois da prisão.",
        "traits": "Inteligência, perseverança e desejo de controle.",
        "book-fate": "Parte com Haydée após reconhecer limites para sua vingança.",
        "film-fate": "Parte sozinho e deixa uma carta para Mercédès."
    },
    "mercedes": {
        "name": "Mercédès",
        "category": "familia",
        "description": "Liga o presente do conde ao amor perdido.",
        "identity": "Noiva de Edmond; depois, esposa de Fernand.",
        "role": "Liga o presente do conde ao amor perdido.",
        "relation": "Antiga noiva; reconhece o homem por trás da nova identidade.",
        "traits": "Sensibilidade, coragem e cuidado com Albert.",
        "book-fate": "Abandona Fernand e retorna a Marselha.",
        "film-fate": "Deixa Fernand e recebe a carta de despedida de Edmond."
    },
    "fernand": {
        "name": "Fernand Mondego",
        "category": "alvos",
        "description": "Participa da traição e enfrenta a exposição de seu passado.",
        "identity": "Torna-se conde de Morcerf.",
        "role": "Participa da traição e enfrenta a exposição de seu passado.",
        "relation": "Rival amoroso e um dos responsáveis pela prisão.",
        "traits": "Ciúme, ambição e preocupação com a honra pública.",
        "book-fate": "Suicida-se após a ruína de sua reputação e a partida da família.",
        "film-fate": "É vencido em duelo e poupado por Edmond."
    },
    "danglars": {
        "name": "Danglars",
        "category": "alvos",
        "description": "Converte inveja e ambição em uma denúncia.",
        "identity": "Funcionário do Pharaon; depois, banqueiro e barão.",
        "role": "Converte inveja e ambição em uma denúncia.",
        "relation": "Conspirador contra Edmond.",
        "traits": "Ganância e oportunismo.",
        "book-fate": "Perde quase toda a fortuna, mas recebe o perdão de Edmond.",
        "film-fate": "Perde sua fortuna e o controle de seus bens."
    },
    "villefort": {
        "name": "Gérard de Villefort",
        "category": "alvos",
        "description": "Usa sua autoridade para encobrir segredos.",
        "identity": "Magistrado ligado à monarquia.",
        "role": "Usa sua autoridade para encobrir segredos.",
        "relation": "Responsável pelo encarceramento injusto de Edmond.",
        "traits": "Ambição, cálculo e defesa da própria posição.",
        "book-fate": "Perde a razão após as revelações e a tragédia familiar.",
        "film-fate": "É morto por André, seu filho."
    },
    "faria": {
        "name": "Abbé Faria",
        "category": "aliados",
        "description": "Educador e portador do segredo do tesouro.",
        "identity": "Abade e companheiro de prisão.",
        "role": "Educador e portador do segredo do tesouro.",
        "relation": "Mentor e amigo de Edmond.",
        "traits": "Erudição, generosidade e capacidade de observação.",
        "book-fate": "Morre na prisão após uma crise de sua doença.",
        "film-fate": "Morre após um desabamento no túnel de fuga."
    },
    "haydee": {
        "name": "Haydée",
        "category": "aliados",
        "description": "Testemunha do passado de Fernand.",
        "identity": "Filha de Ali Pasha de Janina.",
        "role": "Testemunha do passado de Fernand.",
        "relation": "Protegida de Edmond; no romance, torna-se seu amor.",
        "traits": "Memória, firmeza e afeto.",
        "book-fate": "Parte com Edmond.",
        "film-fate": "Escolhe uma vida com Albert."
    },
    "albert": {
        "name": "Albert de Morcerf",
        "category": "familia",
        "description": "Enfrenta o conflito entre lealdade familiar e verdade.",
        "identity": "Filho de Mercédès e Fernand.",
        "role": "Enfrenta o conflito entre lealdade familiar e verdade.",
        "relation": "Aproxima-se do conde sem conhecer sua identidade.",
        "traits": "Orgulho, impulsividade e capacidade de rever escolhas.",
        "book-fate": "Renuncia ao nome do pai e ingressa no exército.",
        "film-fate": "Sobrevive ao duelo com Edmond e parte com Haydée."
    },
    "caderousse": {
        "name": "Caderousse",
        "category": "outros",
        "description": "Conhece a conspiração, mas não impede a injustiça.",
        "identity": "Vizinho de Edmond no romance.",
        "role": "Conhece a conspiração, mas não impede a injustiça.",
        "relation": "Antigo conhecido; mistura culpa e interesse.",
        "traits": "Fraqueza moral e cobiça.",
        "book-fate": "É mortalmente ferido por Benedetto após uma tentativa de roubo.",
        "film-fate": "Ajuda a capturar a frota de Danglars, colaborando com a reparação."
    },
    "morrel": {
        "name": "Monsieur Morrel",
        "category": "aliados",
        "description": "Representa a lealdade em meio à traição.",
        "identity": "Armador e proprietário do Pharaon.",
        "role": "Representa a lealdade em meio à traição.",
        "relation": "Patrão e defensor de Edmond.",
        "traits": "Honestidade, gratidão e senso de responsabilidade.",
        "book-fate": "É salvo da falência por Edmond; sua morte ocorre mais tarde.",
        "film-fate": "É arruinado por Danglars; o conde retribui sua lealdade por meio de seu neto."
    },
    "maximilien": {
        "name": "Maximilien Morrel",
        "category": "aliados",
        "description": "Seu amor por Valentine sustenta um caminho de esperança.",
        "identity": "Oficial e filho de Monsieur Morrel no romance.",
        "role": "Seu amor por Valentine sustenta um caminho de esperança.",
        "relation": "Amigo e protegido do conde.",
        "traits": "Lealdade, bravura e devoção.",
        "book-fate": "Reencontra Valentine e pode construir uma vida com ela.",
        "film-fate": "Aparece como neto de Morrel; seu romance com Valentine não é desenvolvido."
    },
    "valentine": {
        "name": "Valentine de Villefort",
        "category": "familia",
        "description": "É ameaçada pelos conflitos de herança da família.",
        "identity": "Filha de Gérard de Villefort e Renée de Saint-Méran.",
        "role": "É ameaçada pelos conflitos de herança da família.",
        "relation": "Protegida por Edmond por seu vínculo com Maximilien.",
        "traits": "Bondade e fidelidade aos afetos.",
        "book-fate": "É salva do envenenamento e se reúne com Maximilien.",
        "film-fate": "Seu arco não é incluído nesta adaptação."
    },
    "heloise": {
        "name": "Héloïse de Villefort",
        "category": "familia",
        "description": "Procura favorecer o filho por meio de envenenamentos.",
        "identity": "Segunda esposa de Villefort e mãe de Édouard.",
        "role": "Procura favorecer o filho por meio de envenenamentos.",
        "relation": "Suas ações cruzam o plano do conde contra Villefort.",
        "traits": "Ambição familiar e dissimulação.",
        "book-fate": "Envenena a si mesma e ao filho Édouard.",
        "film-fate": "A trama de envenenamentos não é adaptada."
    },
    "benedetto": {
        "name": "Benedetto / Andrea Cavalcanti",
        "category": "outros",
        "description": "Expõe um segredo de filiação e uma tentativa de infanticídio.",
        "identity": "Filho de Villefort e da futura Madame Danglars; falso nobre.",
        "role": "Expõe um segredo de filiação e uma tentativa de infanticídio.",
        "relation": "Instrumento do plano de Edmond no romance.",
        "traits": "No livro, oportunismo e violência.",
        "book-fate": "É julgado e revela publicamente sua origem.",
        "film-fate": "Recriado como André: mata Villefort e morre durante a fuga."
    }
};

const comparisons = {
    "edmond": {
        "name": "Edmond",
        "category": "personagens",
        "book": "Sua reinvenção inclui várias identidades; ao final, parte com Haydée.",
        "movie": "O encerramento o mostra partindo sozinho, após escrever a Mercédès."
    },
    "mercedes": {
        "name": "Mercédès",
        "category": "personagens",
        "book": "Deixa Fernand e volta a Marselha; não retoma a vida amorosa com Edmond.",
        "movie": "Pede a Edmond que poupe Albert e recebe sua carta de despedida."
    },
    "fernand": {
        "name": "Fernand",
        "category": "personagens",
        "book": "A exposição de sua traição em Janina leva à desonra e ao suicídio.",
        "movie": "Enfrenta Edmond em duelo e é deixado vivo."
    },
    "danglars": {
        "name": "Danglars",
        "category": "personagens",
        "book": "Começa como funcionário do Pharaon e torna-se banqueiro. Perde sua fortuna; Edmond o perdoa.",
        "movie": "Começa como capitão e torna-se um rico comerciante. Sua frota e seus bens são atingidos pelo plano."
    },
    "villefort": {
        "name": "Villefort",
        "category": "personagens",
        "book": "Protege o pai bonapartista. A revelação sobre Benedetto e as mortes em sua casa o levam à loucura.",
        "movie": "O segredo político envolve sua irmã Angèle. André, seu filho, o mata."
    },
    "haydee": {
        "name": "Haydée",
        "category": "personagens",
        "book": "Denuncia Fernand e termina ao lado de Edmond, por quem se apaixona.",
        "movie": "Apaixona-se por Albert e parte com ele."
    },
    "albert": {
        "name": "Albert",
        "category": "personagens",
        "book": "Rompe com o legado do pai e ingressa no exército. Não forma um casal com Haydée.",
        "movie": "Sua relação com Haydée ocupa o centro do desfecho amoroso."
    },
    "andrea": {
        "name": "Andrea / Benedetto",
        "category": "personagens",
        "book": "Benedetto assume uma falsa identidade aristocrática e revela ser filho de Villefort durante seu julgamento.",
        "movie": "André é um aliado do conde; mata o pai e morre na fuga."
    },
    "caderousse": {
        "name": "Caderousse",
        "category": "personagens",
        "book": "Vizinho de Edmond, envolve-se em crimes e é morto por Benedetto.",
        "movie": "É marinheiro e ajuda na captura da frota de Danglars."
    },
    "morrel": {
        "name": "Morrel",
        "category": "personagens",
        "book": "Monsieur Morrel é salvo da falência. Seu filho Maximilien ama Valentine.",
        "movie": "O armador perde seu negócio. Maximilien aparece como seu neto, sem o romance com Valentine."
    },
    "valentine": {
        "name": "Valentine",
        "category": "personagens",
        "book": "Sobrevive ao envenenamento graças ao conde e se reúne com Maximilien.",
        "movie": "A trama de Valentine e dos envenenamentos não é incluída."
    },
    "final": {
        "name": "Final da história",
        "category": "final",
        "book": "A esperança está ligada ao reencontro de Valentine e Maximilien e à partida de Edmond com Haydée.",
        "movie": "Haydée e Albert seguem juntos; Edmond deixa uma carta a Mercédès e parte."
    },
    "prisao": {
        "name": "Prisão e fuga",
        "category": "acontecimentos",
        "book": "Faria morre após uma crise de sua doença. Edmond foge ocupando seu lugar no saco funerário.",
        "movie": "Faria morre no desabamento do túnel. Edmond também escapa no saco funerário."
    },
    "julgamento": {
        "name": "O julgamento",
        "category": "acontecimentos",
        "book": "Benedetto revela sua filiação durante o próprio julgamento. Villefort termina em colapso psicológico.",
        "movie": "André revela sua origem no processo envolvendo Danglars e depois mata Villefort."
    }
};

// 02. Ferramentas compartilhadas. querySelector retorna null se nada for encontrado.
// Cada função confere seus elementos: o mesmo arquivo atende a todas as páginas.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileScreen = window.matchMedia("(max-width: 56rem)");

function getHashTarget(hash = window.location.hash) {
    if (!hash || hash === "#") return null;
    try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
        // Um endereço digitado com codificação incompleta não deve parar o site.
        return null;
    }
}

function focusTarget(target) {
    // Títulos e seções não são focáveis por padrão. tabindex=-1 permite focá-los
    // sem criar uma parada extra na navegação por Tab.
    if (!target.matches("a, button, input, select, textarea, summary, [tabindex]")) {
        target.setAttribute("tabindex", "-1");
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
    }
    target.focus({ preventScroll: true });
}

function createDialogController(dialog) {
    if (!dialog || typeof dialog.showModal !== "function") return null;

    let opener = null;
    let pressedOutside = false;
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "dialog-close";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Fechar janela");
    closeButton.autofocus = true;
    dialog.querySelectorAll("[autofocus]").forEach((element) => element.removeAttribute("autofocus"));
    dialog.prepend(closeButton);
    closeButton.addEventListener("click", () => dialog.close());

    function isOutside(event) {
        const box = dialog.getBoundingClientRect();
        return event.target === dialog && (event.clientX < box.left || event.clientX > box.right ||
            event.clientY < box.top || event.clientY > box.bottom);
    }
    dialog.addEventListener("pointerdown", (event) => { pressedOutside = isOutside(event); });
    dialog.addEventListener("click", (event) => {
        // Não confundir um clique no espaço interno com um clique no backdrop.
        if (pressedOutside && isOutside(event)) dialog.close();
        pressedOutside = false;
    });
    dialog.addEventListener("close", () => {
        if (opener && opener.isConnected && opener.getClientRects().length) {
            opener.focus({ preventScroll: true });
        }
    });

    dialog.addEventListener("keydown", (event) => {
        if (event.key !== "Tab") return;
        // Completar o comportamento nativo com um ciclo previsível entre o primeiro
        // e o último controle. Itens ocultos ou desabilitados não entram no ciclo.
        const controls = [...dialog.querySelectorAll("a[href], button, input, select, textarea, summary, [tabindex]")]
            .filter((element) => !element.disabled && element.tabIndex >= 0 && element.getClientRects().length);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    // showModal torna o restante da página inerte e oferece ESC nativo.
    // O formulário method=dialog fecha a janela sem listeners globais.
    const controller = {
        open(trigger) {
            opener = trigger || document.activeElement;
            if (!dialog.open) dialog.showModal();
            dialog.scrollTop = 0;
            closeButton.focus({ preventScroll: true });
        }
    };
    return controller;
}

function initFilters(fieldset, items, status, describe, onChange = () => {}) {
    if (!fieldset || !items.length) return null;
    const buttons = [...fieldset.querySelectorAll("[data-filter]")];
    function select(category) {
        if (!buttons.some((button) => button.dataset.filter === category)) category = "todos";
        // Array.filter retorna apenas os itens que satisfazem a condição.
        const visible = items.filter((item) => category === "todos" || item.dataset.category === category);
        items.forEach((item) => { item.hidden = !visible.includes(item); });
        buttons.forEach((button) => {
            const active = button.dataset.filter === category;
            button.setAttribute("aria-pressed", String(active));
            button.classList.toggle("active", active);
        });
        if (status) status.textContent = describe(visible);
        onChange(visible);
    }
    buttons.forEach((button) => button.addEventListener("click", () => select(button.dataset.filter)));
    fieldset.disabled = false;
    select("todos");
    return select;
}

// 03. Menu, cabeçalho e links internos.
function initMobileMenu() {
    const button = document.querySelector("[data-menu-toggle]");
    const menu = document.getElementById("menu-principal");
    if (!button || !menu) return;

    function setOpen(open, returnFocus = false) {
        button.setAttribute("aria-expanded", String(open));
        button.textContent = open ? "Fechar menu" : "Menu principal";
        menu.hidden = !open;
        if (returnFocus) button.focus();
    }
    function updateScreen() {
        // Ao voltar ao desktop, restauramos os links mesmo se o menu estava fechado.
        const focusWasInMenu = menu.contains(document.activeElement);
        const focusWasOnButton = document.activeElement === button;
        button.hidden = !mobileScreen.matches;
        setOpen(!mobileScreen.matches);
        if (mobileScreen.matches && focusWasInMenu) button.focus();
        if (!mobileScreen.matches && focusWasOnButton) menu.querySelector("a")?.focus();
    }
    button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (event) => {
        if (event.target.closest("a") && mobileScreen.matches) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileScreen.matches && !menu.hidden && !document.querySelector("dialog[open]")) {
            setOpen(false, true);
        }
    });
    mobileScreen.addEventListener("change", updateScreen);
    updateScreen();
}

function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const update = () => header.classList.toggle("scrolled", window.scrollY > 12);
    window.addEventListener("scroll", update, { passive: true });
    update();
}

function initSmoothScroll() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");
        if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey ||
            event.shiftKey || event.altKey || link.hasAttribute("download") || link.target === "_blank") return;
        const url = new URL(link.href, window.location.href);
        if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
        const target = getHashTarget(url.hash);
        if (!target || target.hidden) return;
        event.preventDefault();
        if (location.hash !== url.hash) history.pushState(null, "", url.hash);
        target.classList.add("reveal-visible");
        target.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
        focusTarget(target);
    });
}

// 04. Revelação progressiva. O observador substitui cálculos em cada pixel rolado.
function initRevealAnimations() {
    const elements = [...document.querySelectorAll(".reveal, [data-animate]")];
    if (!elements.length) return;
    elements.forEach((element) => element.classList.add("reveal"));
    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
        elements.forEach((element) => element.classList.add("reveal-visible"));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target); // Animamos apenas a primeira entrada.
            }
        });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    document.body.classList.add("reveal-ready");
    reducedMotion.addEventListener("change", (event) => {
        if (event.matches) {
            elements.forEach((element) => element.classList.add("reveal-visible"));
            observer.disconnect();
        }
    });
}

function initChapters() {
    document.querySelectorAll("details[data-expandable], details[data-character-profile]").forEach((details) => {
        const summary = details.querySelector("summary");
        if (!summary) return;
        const sync = () => summary.setAttribute("aria-expanded", String(details.open));
        // Não interceptar click: details já funciona com mouse, Enter e Espaço.
        details.addEventListener("toggle", sync);
        sync();
    });
}

// 05. Personagens: conteúdo vem dos objetos; data-character relaciona ficha e dados.
function initCharacters() {
    const cards = [...document.querySelectorAll("[data-character]")];
    if (!cards.length) return;
    const select = initFilters(document.querySelector("[data-character-filters]"), cards,
        document.getElementById("personagens-status"), (visible) => `${visible.length} de ${cards.length} personagens`);
    const dialog = document.querySelector("[data-character-dialog]");
    const controller = createDialogController(dialog);
    if (controller) {
        cards.forEach((card) => {
            const button = card.querySelector("[data-open-character]");
            const character = characters[card.dataset.character];
            if (!button || !character) return;
            function open() {
                dialog.querySelectorAll("[data-modal-field]").forEach((field) => {
                    // textContent insere texto, nunca interpreta o conteúdo como HTML.
                    field.textContent = character[field.dataset.modalField] || "Não informado.";
                });
                controller.open(button);
            }
            button.hidden = false;
            button.addEventListener("click", open);
            card.addEventListener("click", (event) => {
                // O perfil expansível e os botões mantêm sua própria ação.
                if (!event.target.closest("a, button, details") && !window.getSelection().toString()) open();
            });
        });
    }
    function revealLinkedCard() {
        const target = getHashTarget();
        const card = target?.closest("[data-character]");
        if (card && card.hidden && select) select("todos");
    }
    window.addEventListener("hashchange", revealLinkedCard);
    revealLinkedCard();
}

function initTimeline() {
    const events = [...document.querySelectorAll(".timeline-event")];
    if (!events.length || !("IntersectionObserver" in window)) return;
    const visible = new Set();
    let frame = 0;
    function updateCurrent() {
        frame = 0;
        // O evento mais próximo do primeiro terço da tela orienta a leitura.
        const current = [...visible].sort((a, b) =>
            Math.abs(a.getBoundingClientRect().top - innerHeight / 3) -
            Math.abs(b.getBoundingClientRect().top - innerHeight / 3))[0];
        events.forEach((event) => {
            event.classList.toggle("active", event === current);
            if (event === current) event.setAttribute("aria-current", "step");
            else event.removeAttribute("aria-current");
        });
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
        updateCurrent();
    }, { threshold: 0 });
    events.forEach((event) => observer.observe(event));
    window.addEventListener("scroll", () => {
        if (!frame) frame = requestAnimationFrame(updateCurrent);
    }, { passive: true });
}

// 06. O Plano: cada par de definição é uma etapa; classes destacam suas conexões.
function initDossiers() {
    const board = document.querySelector(".investigation-board");
    if (!board) return;
    const cards = [...board.querySelectorAll(".dossier")];
    const dossiers = cards.map((card) => ({ card, steps: [...card.querySelectorAll("[data-dossier-step]")], revealed: 0 }));
    function render(dossier) {
        const { card, steps, revealed } = dossier;
        steps.forEach((step, index) => { step.hidden = index >= revealed; });
        card.querySelector("[data-select-dossier]").setAttribute("aria-expanded", String(revealed > 0));
        const next = card.querySelector("[data-dossier-next]");
        next.disabled = revealed === 0 || revealed === steps.length;
        next.textContent = revealed === steps.length ? "Dossiê completo" : "Revelar próxima etapa";
        card.querySelector("[data-dossier-reset]").disabled = revealed === 0;
        card.querySelector("[data-dossier-status]").textContent = revealed
            ? `${revealed} de ${steps.length} etapas — ${steps[revealed - 1].querySelector("dt").textContent}`
            : "Selecione o alvo para iniciar.";
    }
    function select(dossier) {
        dossiers.forEach((item) => item.card.classList.toggle("active", item === dossier));
        board.dataset.connection = dossier.card.dataset.node;
        board.querySelectorAll(".dossier-center a").forEach((link) => {
            const active = link.hash === `#${dossier.card.id}`;
            link.classList.toggle("active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
        });
        if (!dossier.revealed) dossier.revealed = 1;
        render(dossier);
    }
    dossiers.forEach((dossier) => {
        const { card, steps } = dossier;
        if (!steps.length) return;
        card.querySelector("[data-dossier-controls]").hidden = false;
        card.querySelector("[data-select-dossier]").addEventListener("click", () => select(dossier));
        card.querySelector("[data-dossier-next]").addEventListener("click", () => {
            select(dossier);
            dossier.revealed = Math.min(dossier.revealed + 1, steps.length);
            render(dossier);
            if (dossier.revealed === steps.length) focusTarget(steps[steps.length - 1]);
        });
        card.querySelector("[data-dossier-reset]").addEventListener("click", () => {
            // Mover o foco antes de desabilitar o botão que o usuário acabou de usar.
            card.querySelector("[data-select-dossier]").focus();
            dossier.revealed = 0;
            render(dossier);
            if (location.hash === `#${card.id}`) {
                history.replaceState(null, "", location.pathname + location.search);
            }
            if (card.classList.contains("active")) {
                card.classList.remove("active");
                delete board.dataset.connection;
                board.querySelectorAll(".dossier-center a").forEach((link) => {
                    link.classList.remove("active");
                    link.removeAttribute("aria-current");
                });
            }
        });
        render(dossier);
    });
    board.querySelectorAll(".dossier-center a").forEach((link) => link.addEventListener("click", () => {
        const dossier = dossiers.find((item) => `#${item.card.id}` === link.hash);
        if (dossier) select(dossier);
    }));
    function selectLinkedDossier() {
        const dossier = dossiers.find((item) => item.card === getHashTarget());
        if (dossier) select(dossier);
    }
    window.addEventListener("hashchange", selectLinkedDossier);
    selectLinkedDossier();
}

// 07. Livro × Filme. O estado é pequeno: categoria e assunto selecionados.
function initComparison() {
    const container = document.getElementById("comparacoes");
    const select = document.querySelector("[data-comparison-select]");
    const filters = document.querySelector("[data-comparison-categories]");
    if (!container || !select || !filters) return;
    const cards = [...container.querySelectorAll("[data-comparison]")];
    const links = [...document.querySelectorAll('nav[aria-label="Índice de comparações"] a')];
    const status = document.querySelector("[data-comparison-status]");
    const buttons = [...filters.querySelectorAll("[data-filter]")];
    let category = "todos";
    let selected = "todos";

    cards.forEach((card) => {
        const data = comparisons[card.dataset.comparison];
        if (!data) return;
        card.dataset.category = data.category;
        card.querySelector("h2").textContent = data.name;
        const columns = card.querySelectorAll(".comparison-columns section p");
        columns[0].textContent = data.book;
        columns[1].textContent = data.movie;
    });
    function matchesCategory(id) {
        return category === "todos" || comparisons[id]?.category === category;
    }
    function render() {
        cards.forEach((card) => {
            const id = card.dataset.comparison;
            card.hidden = !matchesCategory(id) || (selected !== "todos" && selected !== id);
            card.classList.toggle("active", selected === id);
        });
        links.forEach((link) => {
            const id = link.hash.replace("#comparacao-", "");
            link.parentElement.hidden = !matchesCategory(id);
            link.classList.toggle("active", selected === id);
            if (selected === id) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
        });
        [...select.options].forEach((option) => {
            option.hidden = option.value !== "todos" && !matchesCategory(option.value);
            option.disabled = option.hidden;
        });
        buttons.forEach((button) => {
            const active = button.dataset.filter === category;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });
        select.value = selected;
        if (status) status.textContent = selected === "todos"
            ? `${cards.filter((card) => !card.hidden).length} comparações disponíveis`
            : `Comparação: ${comparisons[selected].name}`;
    }
    function choose(id) {
        if (!comparisons[id]) return;
        category = comparisons[id].category;
        selected = id;
        render();
    }
    buttons.forEach((button) => button.addEventListener("click", () => {
        category = button.dataset.filter;
        selected = "todos";
        render();
        history.replaceState(null, "", location.pathname + location.search);
    }));
    select.addEventListener("change", () => {
        selected = select.value;
        render();
        history.replaceState(null, "", selected === "todos" ? location.pathname + location.search : `#comparacao-${selected}`);
    });
    links.forEach((link) => link.addEventListener("click", () => choose(link.hash.replace("#comparacao-", ""))));
    function syncHash() {
        const id = getHashTarget()?.dataset.comparison;
        if (id) choose(id);
        else { category = "todos"; selected = "todos"; render(); }
    }
    window.addEventListener("hashchange", syncHash);
    filters.disabled = false;
    select.disabled = false;
    syncHash();
}

function initHistoricalContext() {
    const cards = [...document.querySelectorAll("main > section[data-category]")];
    const select = initFilters(document.querySelector("[data-context-filters]"), cards,
        document.querySelector("[data-context-status]"), (visible) => `${visible.length} de ${cards.length} categorias`);
    if (!select) return;
    document.querySelectorAll('nav[aria-label="Categorias do contexto"] a').forEach((link) => {
        link.addEventListener("click", () => select(getHashTarget(link.hash)?.dataset.category || "todos"));
    });
    function syncHash() {
        const category = getHashTarget()?.dataset.category;
        if (category) select(category);
    }
    window.addEventListener("hashchange", syncHash);
    syncHash();
}

// 08. Galeria: só imagens disponíveis e da categoria atual entram no carrossel.
function initGallery() {
    const figures = [...document.querySelectorAll("[data-gallery-item]")];
    if (!figures.length) return;
    let filtered = figures;
    initFilters(document.querySelector("[data-gallery-filters]"), figures,
        document.querySelector("[data-gallery-status]"), (visible) =>
            `${visible.length} espaços · ${visible.filter((item) => item.dataset.imageStatus === "available").length} imagens disponíveis`,
        (visible) => { filtered = visible; });
    const dialog = document.querySelector("[data-lightbox]");
    const controller = createDialogController(dialog);
    if (!controller) return;
    const image = dialog.querySelector("[data-lightbox-image]");
    const caption = dialog.querySelector("[data-lightbox-caption]");
    const title = dialog.querySelector("h2");
    const description = dialog.querySelector("[data-lightbox-description]");
    const previous = dialog.querySelector("[data-lightbox-prev]");
    const next = dialog.querySelector("[data-lightbox-next]");
    const status = dialog.querySelector("[data-lightbox-status]");
    let slides = [];
    let index = 0;

    function render() {
        const figure = slides[index];
        if (!figure) return;
        const source = figure.querySelector("img");
        const label = (figure.querySelector("[data-image-title]") || figure.querySelector("figcaption")).textContent.trim();
        image.src = source.currentSrc || source.src;
        image.alt = source.alt;
        title.textContent = label;
        caption.textContent = label;
        description.textContent = source.alt;
        status.textContent = `${index + 1} de ${slides.length} — ${label}`;
        previous.disabled = next.disabled = slides.length < 2;
    }
    function advance(step) {
        if (slides.length < 2) return;
        index = (index + step + slides.length) % slides.length;
        render();
    }
    figures.filter((figure) => figure.dataset.imageStatus === "available").forEach((figure) => {
        const button = figure.querySelector("[data-open-lightbox]");
        const source = figure.querySelector("img");
        if (!button || !source) return;
        function open() {
            slides = filtered.filter((item) => item.dataset.imageStatus === "available");
            index = slides.indexOf(figure);
            if (index < 0) return;
            render();
            controller.open(button);
        }
        button.hidden = false;
        button.addEventListener("click", open);
        source.addEventListener("click", open);
    });
    previous.addEventListener("click", () => advance(-1));
    next.addEventListener("click", () => advance(1));
    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            advance(event.key === "ArrowRight" ? 1 : -1);
        }
    });
    image.addEventListener("error", () => { description.textContent = "Não foi possível carregar esta imagem."; });
}

// 09. Arquivos especiais e cartas. A nota da carta é editorial, não um documento histórico.
function initArchive() {
    const dialog = document.querySelector("[data-archive-dialog]");
    const controller = createDialogController(dialog);
    if (!controller) return;
    document.querySelectorAll("[data-open-archive]").forEach((button) => {
        button.hidden = false;
        button.addEventListener("click", () => controller.open(button));
    });
}

function initLetters() {
    document.querySelectorAll("details[data-letter]").forEach((letter) => {
        const summary = letter.querySelector("summary");
        const label = letter.querySelector("[data-letter-label]");
        function sync() {
            letter.classList.toggle("letter-open", letter.open);
            if (summary) summary.setAttribute("aria-expanded", String(letter.open));
            if (label) label.textContent = letter.open ? "Fechar carta do arquivo" : "Abrir carta do arquivo";
        }
        letter.addEventListener("toggle", sync);
        sync();
    });
}

function initEasterEggs() {
    const logo = document.querySelector(".site-logo");
    if (!logo) return;
    // Cinco ativações em até cinco segundos. sessionStorage mantém a contagem
    // ao seguir o logo até a página inicial; não guardamos dados pessoais.
    const key = "montecristo-logo-secret";
    let sequence = { count: 0, time: 0 };
    try {
        const saved = JSON.parse(sessionStorage.getItem(key));
        if (saved && Number.isFinite(saved.count) && Number.isFinite(saved.time)) sequence = saved;
    } catch { /* Armazenamento opcional. */ }
    const message = document.createElement("p");
    message.className = "archive-secret-message";
    message.setAttribute("role", "status");
    message.setAttribute("aria-live", "polite");
    message.hidden = true;
    document.body.append(message);
    let timer;
    logo.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const now = Date.now();
        sequence.count = now - sequence.time < 5000 ? sequence.count + 1 : 1;
        sequence.time = now;
        if (sequence.count >= 5) {
            event.preventDefault();
            sequence.count = 0;
            message.hidden = false;
            message.textContent = "EDMOND DANTÈS ESTÁ MORTO.";
            clearTimeout(timer);
            timer = setTimeout(() => { message.hidden = true; message.textContent = ""; }, 5000);
        }
        try { sessionStorage.setItem(key, JSON.stringify(sequence)); } catch { /* O site funciona sem storage. */ }
    });
}

// 10. Inicialização. Funções independentes tornam o fluxo mais fácil de estudar.
initMobileMenu();
initHeader();
initRevealAnimations();
initChapters();
initCharacters();
initTimeline();
initDossiers();
initComparison();
initHistoricalContext();
initGallery();
initArchive();
initLetters();
initEasterEggs();
// Registrar por último permite que filtros revelem o destino antes da rolagem.
initSmoothScroll();
