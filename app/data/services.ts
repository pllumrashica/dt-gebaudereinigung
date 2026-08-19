export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  introduction: string[];
  includedServices: string[];
  benefits: string[];
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "bueroreinigung",
    number: "01",
    title: "Büroreinigung",
    shortDescription:
      "Saubere Arbeitsplätze und Gemeinschaftsflächen für ein gepflegtes, professionelles Arbeitsumfeld.",
    description:
      "Eine abgestimmte Büroreinigung unterstützt einen guten ersten Eindruck und schafft angenehme Räume für Mitarbeitende und Besucher.",
    image: "/images/services/bueroreinigung-team.jpg",
    imageAlt: "Reinigung eines Bürobereichs",
    introduction: [
      "Büros werden täglich unterschiedlich genutzt. Deshalb orientiert sich unsere Büroreinigung an Ihren Räumen, Arbeitsabläufen und gewünschten Intervallen.",
      "Gemeinsam legen wir fest, welche Bereiche gereinigt werden und welche Aufgaben zu Ihrem individuellen Leistungsumfang gehören.",
    ],
    includedServices: [
      "Arbeitsplätze und frei zugängliche Oberflächen",
      "Besprechungs- und Empfangsbereiche",
      "Küchen- und Pausenbereiche nach Vereinbarung",
      "Sanitärbereiche nach vereinbartem Umfang",
      "Bodenflächen und Laufwege",
      "Leeren vereinbarter Abfallbehälter",
    ],
    benefits: [
      "Gepflegter Eindruck für Mitarbeitende und Gäste",
      "Planbarer Umfang passend zum Büroalltag",
      "Klare Abstimmung der regelmäßig benötigten Aufgaben",
    ],
    seoTitle: "Büroreinigung – individuell und zuverlässig",
    seoDescription:
      "Individuell abgestimmte Büroreinigung für Arbeitsplätze, Besprechungsräume und Gemeinschaftsflächen.",
    relatedSlugs: ["unterhaltsreinigung", "sanitaerreinigung", "fensterreinigung"],
  },
  {
    slug: "unterhaltsreinigung",
    number: "02",
    title: "Unterhaltsreinigung",
    shortDescription:
      "Regelmäßige Reinigung nach einem klar abgestimmten Plan für dauerhaft gepflegte Räumlichkeiten.",
    description:
      "Die Unterhaltsreinigung bündelt wiederkehrende Aufgaben in einem verständlichen Reinigungsplan.",
    image: "/images/services/unterhaltsreinigung.jpg",
    imageAlt: "Heller, gepflegter Innenraum",
    introduction: [
      "Bei regelmäßig genutzten Räumen sorgt ein definierter Ablauf für Übersicht. Wir stimmen Intervalle und Aufgaben auf Nutzung, Größe und Anforderungen Ihres Objekts ab.",
      "So entsteht eine wiederkehrende Reinigungslösung, die weder unnötig umfangreich noch zu knapp geplant ist.",
    ],
    includedServices: [
      "Regelmäßige Reinigung in vereinbarten Intervallen",
      "Boden- und Oberflächenreinigung",
      "Pflege gemeinsam genutzter Bereiche",
      "Sanitärreinigung nach Vereinbarung",
      "Individuell definierter Reinigungsplan",
      "Abgestimmte Routinen für wiederkehrende Aufgaben",
    ],
    benefits: [
      "Verlässliche, wiederkehrende Abläufe",
      "Leistungsumfang passend zur tatsächlichen Nutzung",
      "Weniger organisatorischer Aufwand im Alltag",
    ],
    seoTitle: "Unterhaltsreinigung nach individuellem Plan",
    seoDescription:
      "Regelmäßige Unterhaltsreinigung mit individuell vereinbarten Intervallen und Aufgaben für gepflegte Räume.",
    relatedSlugs: ["bueroreinigung", "gebaeudereinigung", "sanitaerreinigung"],
  },
  {
    slug: "gebaeudereinigung",
    number: "03",
    title: "Gebäudereinigung",
    shortDescription:
      "Professionelle Reinigung und Pflege von Immobilien – bedarfsgerecht und klar organisiert.",
    description:
      "Von Eingangsbereichen bis zu allgemeinen Innenflächen planen wir die Gebäudereinigung passend zur Immobilie.",
    image: "/images/services/gebaeudereinigung.jpg",
    imageAlt: "Moderner Eingangsbereich eines Geschäftsgebäudes",
    introduction: [
      "Unterschiedliche Immobilien bringen unterschiedliche Anforderungen mit. Entscheidend sind Nutzung, Besucherfrequenz, Flächen und gewünschte Reinigungsintervalle.",
      "Wir besprechen diese Punkte vorab und entwickeln daraus einen nachvollziehbaren Leistungsumfang für Ihr Objekt.",
    ],
    includedServices: [
      "Eingangs- und Empfangsbereiche",
      "Allgemeine Innen- und Verkehrsflächen",
      "Treppen und Gemeinschaftsbereiche nach Vereinbarung",
      "Boden- und Oberflächenreinigung",
      "Individuell geplante, wiederkehrende Pflege",
      "Abstimmung ergänzender Reinigungsleistungen",
    ],
    benefits: [
      "Einheitlich gepflegter Gesamteindruck",
      "Objektbezogene Planung statt Standardpaket",
      "Kombinierbar mit weiteren Leistungen",
    ],
    seoTitle: "Gebäudereinigung für gepflegte Immobilien",
    seoDescription:
      "Bedarfsgerechte Gebäudereinigung für Eingänge, Gemeinschaftsflächen und allgemeine Innenbereiche.",
    relatedSlugs: ["unterhaltsreinigung", "fensterreinigung", "sonderreinigung"],
  },
  {
    slug: "fensterreinigung",
    number: "04",
    title: "Fensterreinigung",
    shortDescription:
      "Klare Fenster und gepflegte Glasflächen für private und gewerbliche Immobilien.",
    description:
      "Saubere Glasflächen tragen sichtbar zum gepflegten Eindruck eines Gebäudes oder Zuhauses bei.",
    image: "/images/services/fensterreinigung.jpg",
    imageAlt: "Reinigung einer Fensterscheibe von innen",
    introduction: [
      "Wir reinigen zugängliche Fenster und Glasflächen passend zu den Gegebenheiten vor Ort. Auf Wunsch werden Rahmen und angrenzende Bereiche in den vereinbarten Umfang aufgenommen.",
      "Vor der Ausführung klären wir Flächen, Zugänglichkeit und den gewünschten Termin, damit das Angebot realistisch auf Ihr Objekt abgestimmt ist.",
    ],
    includedServices: [
      "Zugängliche Fensterflächen",
      "Glastrennwände und Glasflächen",
      "Rahmenreinigung nach Vereinbarung",
      "Innen- und Außenseiten nach Zugänglichkeit",
      "Einmalige oder regelmäßige Termine",
      "Private und gewerbliche Objekte",
    ],
    benefits: [
      "Heller, gepflegter Gesamteindruck",
      "Individuelle Abstimmung nach Glasfläche",
      "Kombinierbar mit Objekt- oder Haushaltsreinigung",
    ],
    seoTitle: "Fensterreinigung für klare Glasflächen",
    seoDescription:
      "Fenster- und Glasreinigung für private und gewerbliche Objekte – Umfang individuell vereinbart.",
    relatedSlugs: ["gebaeudereinigung", "haushaltsreinigung", "sonderreinigung"],
  },
  {
    slug: "haushaltsreinigung",
    number: "05",
    title: "Haushaltsreinigung",
    shortDescription:
      "Vertrauensvolle Unterstützung für Wohnungen und Häuser – regelmäßig oder als einmaliger Auftrag.",
    description:
      "Die Haushaltsreinigung wird respektvoll und passend zu Ihren persönlichen Räumen geplant.",
    image: "/images/services/haushaltsreinigung.jpg",
    imageAlt: "Heller, moderner Wohnbereich",
    introduction: [
      "Jeder Haushalt hat eigene Prioritäten. Wir besprechen, welche Räume und Aufgaben berücksichtigt werden sollen und ob Sie eine einmalige oder wiederkehrende Unterstützung wünschen.",
      "Der vereinbarte Umfang bleibt transparent und richtet sich nach Ihrem tatsächlichen Bedarf.",
    ],
    includedServices: [
      "Wohnungen und Häuser",
      "Regelmäßige oder einmalige Reinigung",
      "Böden und frei zugängliche Oberflächen",
      "Küche und Bad nach Vereinbarung",
      "Individuelle Schwerpunktbereiche",
      "Ergänzende Fensterreinigung nach Abstimmung",
    ],
    benefits: [
      "Unterstützung passend zu Ihrem Alltag",
      "Persönlich abgestimmter Leistungsumfang",
      "Flexible Kombination einzelner Aufgaben",
    ],
    seoTitle: "Haushaltsreinigung für Wohnung und Haus",
    seoDescription:
      "Individuelle Haushaltsreinigung für Wohnungen und Häuser – einmalig oder regelmäßig vereinbarbar.",
    relatedSlugs: ["fensterreinigung", "sanitaerreinigung", "sonderreinigung"],
  },
  {
    slug: "bauendreinigung",
    number: "06",
    title: "Bauendreinigung",
    shortDescription:
      "Gründliche Innenreinigung nach Bau-, Renovierungs- oder Sanierungsarbeiten.",
    description:
      "Nach Abschluss von Arbeiten bereiten wir Innenräume durch abgestimmte Reinigungsleistungen auf die weitere Nutzung vor.",
    image: "/images/services/bauendreinigung.jpg",
    imageAlt: "Heller Innenraum während einer Renovierung",
    introduction: [
      "Bau- und Renovierungsarbeiten hinterlassen Staub und gewöhnliche baubedingte Verschmutzungen. Die Bauendreinigung konzentriert sich auf die vereinbarten Innenflächen und unterstützt einen sauberen Abschluss.",
      "Welche Bereiche berücksichtigt werden, wird anhand des Objektzustands und der Zugänglichkeit individuell festgelegt. Eine technische Bauabnahme ist nicht Teil der Reinigungsleistung.",
    ],
    includedServices: [
      "Staub- und Oberflächenreinigung",
      "Entfernung gewöhnlicher baubedingter Verschmutzungen",
      "Reinigung vereinbarter Bodenflächen",
      "Fenster und Glasflächen nach Abstimmung",
      "Innenreinigung ausgewählter Räume",
      "Objektbezogene Leistungsplanung",
    ],
    benefits: [
      "Sauberer Übergang zur Nutzung des Objekts",
      "Umfang passend zum tatsächlichen Bauzustand",
      "Klare Abgrenzung der vereinbarten Leistungen",
    ],
    seoTitle: "Bauendreinigung nach Bau und Renovierung",
    seoDescription:
      "Individuelle Bauendreinigung nach Bau-, Renovierungs- oder Sanierungsarbeiten für einen sauberen Abschluss.",
    relatedSlugs: ["gebaeudereinigung", "fensterreinigung", "sonderreinigung"],
  },
  {
    slug: "sanitaerreinigung",
    number: "07",
    title: "Sanitärreinigung",
    shortDescription:
      "Sorgfältige Reinigung häufig genutzter Sanitärbereiche nach abgestimmtem Umfang.",
    description:
      "Sanitärräume benötigen klare Routinen und eine sorgfältige, regelmäßig planbare Reinigung.",
    image: "/images/services/sanitaerreinigung.jpg",
    imageAlt: "Sorgfältige Reinigung eines Waschbeckens",
    introduction: [
      "Wir stimmen die Reinigung von Waschbecken, Armaturen, Oberflächen und Bodenbereichen auf Nutzung und gewünschte Intervalle ab.",
      "Dabei verwenden wir bewusst sachliche Leistungsbeschreibungen: Medizinische Desinfektion oder zertifizierte Spezialverfahren sind nur dann Bestandteil, wenn dies ausdrücklich vereinbart und fachlich abgedeckt ist.",
    ],
    includedServices: [
      "Waschbecken und Armaturen",
      "Toilettenbereiche nach Vereinbarung",
      "Spiegel und frei zugängliche Oberflächen",
      "Bodenflächen in Sanitärräumen",
      "Regelmäßige oder einmalige Reinigung",
      "Abstimmung nach Nutzung und Raumgröße",
    ],
    benefits: [
      "Gepflegte, angenehm nutzbare Sanitärbereiche",
      "Planbare Routinen für häufig genutzte Räume",
      "Klare Definition des vereinbarten Umfangs",
    ],
    seoTitle: "Sanitärreinigung für gepflegte Waschräume",
    seoDescription:
      "Sorgfältige Sanitärreinigung für Waschbecken, Oberflächen und Bodenbereiche nach individuellem Plan.",
    relatedSlugs: ["unterhaltsreinigung", "bueroreinigung", "gebaeudereinigung"],
  },
  {
    slug: "sonderreinigung",
    number: "08",
    title: "Sonderreinigung",
    shortDescription:
      "Individuell geprüfte Reinigungslösungen für Anforderungen außerhalb der Standardleistungen.",
    description:
      "Nicht jede Aufgabe passt in ein festes Paket. Wir prüfen Ihre konkrete Anfrage und stimmen eine geeignete Lösung ab.",
    image: "/images/services/sonderreinigung.jpg",
    imageAlt: "Professionell zusammengestellte Reinigungsgeräte",
    introduction: [
      "Bei ungewöhnlichen Verschmutzungen, besonderen Flächen oder einmaligen Situationen ist zuerst eine genaue Beschreibung wichtig.",
      "Senden Sie uns Informationen zum Objekt und zur Aufgabe. Anschließend klären wir, ob und in welchem Umfang DT-Gebäudereinigung die gewünschte Leistung übernehmen kann.",
    ],
    includedServices: [
      "Individuelle Prüfung Ihrer Anfrage",
      "Abstimmung von Flächen und Anforderungen",
      "Einmalige Reinigung außerhalb regelmäßiger Pläne",
      "Kombination geeigneter Standardleistungen",
      "Transparente Abgrenzung des Leistungsumfangs",
      "Objektbezogene Termin- und Ablaufplanung",
    ],
    benefits: [
      "Keine unpassenden Standardpakete",
      "Klare Einschätzung vor der Beauftragung",
      "Lösung orientiert an der konkreten Aufgabe",
    ],
    seoTitle: "Sonderreinigung nach individueller Anfrage",
    seoDescription:
      "Individuell geprüfte Sonderreinigung für Anforderungen außerhalb klassischer Reinigungspakete.",
    relatedSlugs: ["gebaeudereinigung", "bauendreinigung", "fensterreinigung"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
