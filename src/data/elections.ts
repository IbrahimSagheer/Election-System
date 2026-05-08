export type ElectionEntry = {
  key: string;
  country: "bahamas" | "slovenia";
  year: number;
  date: string;
  title: string;
  system: string;
  totalSeats: number;
  upcoming?: boolean;
  parties: {
    name: string;
    leader: string;
    orientation: string;
    seats: number;
    voteShare: number;
    color: string;
    ruling?: boolean;
  }[];
  turnout: {
    registered: number | null;
    cast: number | null;
    percentage: number | null;
    invalid: string;
  } | null;
  outcome: string;
  ruling: string;
  systemDetail: string;
};

export const elections: ElectionEntry[] = [
  // ─── BAHAMAS ────────────────────────────────────────────────────────────────
  {
    key: "bhs-2017",
    country: "bahamas",
    year: 2017,
    date: "10 May 2017",
    title: "General Election",
    system: "First-Past-the-Post (FPTP)",
    systemDetail:
      "39 single-member constituencies. Members of the House of Assembly elected by plurality vote to serve 5-year terms. The Senate (16 seats) is unelected — appointed by the Governor-General. Since 1997, every general election has resulted in a change of government.",
    totalSeats: 39,
    parties: [
      { name: "Free National Movement (FNM)", leader: "Hubert Minnis", orientation: "Centre-right / Liberal-conservative", seats: 35, voteShare: 57, color: "#F59E0B", ruling: true },
      { name: "Progressive Liberal Party (PLP)", leader: "Perry Christie (PM)", orientation: "Centre-left / Social-democratic", seats: 4, voteShare: 36, color: "#3B82F6" },
      { name: "Democratic National Alliance (DNA)", leader: "Branville McCartney", orientation: "Centrist / Reform", seats: 0, voteShare: 5, color: "#10B981" },
      { name: "Independents / Others", leader: "—", orientation: "—", seats: 0, voteShare: 2, color: "#6B7280" },
    ],
    turnout: { registered: 181543, cast: 160409, percentage: 88.3, invalid: "~2,500 (estimated)" },
    outcome:
      "FNM under PM Hubert Minnis won a landslide — 35 of 39 seats, the largest seat share in modern Bahamian electoral history. PLP was reduced to just 4 seats. Single-party majority government formed.",
    ruling: "Free National Movement (FNM)",
  },
  {
    key: "bhs-2021",
    country: "bahamas",
    year: 2021,
    date: "16 September 2021",
    title: "General Election",
    system: "First-Past-the-Post (FPTP)",
    systemDetail:
      "39 single-member constituencies. Members of the House of Assembly elected by plurality vote to serve 5-year terms. The Senate (16 seats) is unelected — appointed by the Governor-General.",
    totalSeats: 39,
    parties: [
      { name: "Progressive Liberal Party (PLP)", leader: "Philip 'Brave' Davis", orientation: "Centre-left / Social-democratic", seats: 32, voteShare: 52.5, color: "#3B82F6", ruling: true },
      { name: "Free National Movement (FNM)", leader: "Hubert Minnis (PM)", orientation: "Centre-right / Liberal-conservative", seats: 7, voteShare: 36.2, color: "#F59E0B" },
      { name: "Coalition of Independents (COI)", leader: "Lincoln Bain", orientation: "Independent / Populist", seats: 0, voteShare: 6.8, color: "#8B5CF6" },
      { name: "Democratic National Alliance (DNA)", leader: "Arinthia Komolafe", orientation: "Centrist / Reform", seats: 0, voteShare: 1.3, color: "#10B981" },
      { name: "Independents / Others", leader: "—", orientation: "—", seats: 0, voteShare: 3.2, color: "#6B7280" },
    ],
    turnout: { registered: 194524, cast: 126495, percentage: 65.0, invalid: "Not officially published" },
    outcome:
      "PLP under Philip 'Brave' Davis won 32 of 39 seats. Turnout collapsed from 88.3% to 65% — a historic low attributed to snap election timing, COVID-19 concerns, and the new permanent voters' register. Davis sworn in 17 September 2021.",
    ruling: "Progressive Liberal Party (PLP)",
  },
  {
    key: "bhs-2026",
    country: "bahamas",
    year: 2026,
    date: "c. May 2026",
    title: "General Election (Upcoming)",
    system: "First-Past-the-Post (FPTP)",
    systemDetail:
      "39 single-member constituencies. Next election expected by May 2026 within the 5-year parliamentary term. As of April 2026, no date officially confirmed.",
    totalSeats: 39,
    upcoming: true,
    parties: [],
    turnout: null,
    outcome:
      "Next election expected by May 2026. PLP government under Philip Davis will contest. Major parties preparing include PLP, FNM, and new entrants. All 39 constituencies under FPTP system.",
    ruling: "TBD",
  },

  // ─── SLOVENIA ───────────────────────────────────────────────────────────────
  {
    key: "svn-2018",
    country: "slovenia",
    year: 2018,
    date: "3 June 2018",
    title: "Parliamentary Election",
    system: "Mixed Proportional Representation (PR)",
    systemDetail:
      "90-seat unicameral National Assembly (Državni zbor). 88 seats via open-list PR across 8 eleven-seat constituencies (Droop quota + D'Hondt top-up). 2 seats reserved for Italian and Hungarian minorities (Borda count). 4% electoral threshold. Coalition governments are the norm.",
    totalSeats: 90,
    parties: [
      { name: "Slovenian Democratic Party (SDS)", leader: "Janez Janša", orientation: "Centre-right / Conservative-nationalist", seats: 25, voteShare: 24.92, color: "#1E40AF" },
      { name: "List of Marjan Šarec (LMŠ)", leader: "Marjan Šarec", orientation: "Centre / Liberal-populist", seats: 13, voteShare: 12.60, color: "#0EA5E9", ruling: true },
      { name: "Modern Centre Party (SMC)", leader: "Miro Cerar (PM)", orientation: "Centre / Social-liberal", seats: 10, voteShare: 9.75, color: "#06B6D4" },
      { name: "Social Democrats (SD)", leader: "Dejan Židan", orientation: "Centre-left / Social-democratic", seats: 10, voteShare: 9.93, color: "#EF4444" },
      { name: "The Left (Levica)", leader: "Luka Mesec", orientation: "Left / Democratic socialist", seats: 9, voteShare: 9.33, color: "#DC2626" },
      { name: "New Slovenia (NSi)", leader: "Matej Tonin", orientation: "Centre-right / Christian-democratic", seats: 7, voteShare: 7.16, color: "#92400E" },
      { name: "DeSUS (Pensioners' Party)", leader: "Karl Erjavec", orientation: "Centre / Pensioners' rights", seats: 5, voteShare: 4.93, color: "#65A30D" },
      { name: "Alenka Bratušek Party (SAB)", leader: "Alenka Bratušek", orientation: "Centre-left / Liberal", seats: 5, voteShare: 5.12, color: "#A855F7" },
      { name: "Ethnic Minority Seats", leader: "Italian + Hungarian", orientation: "—", seats: 2, voteShare: 0, color: "#6B7280" },
    ],
    turnout: { registered: 1700000, cast: 901454, percentage: 52.63, invalid: ">10,000 protest ballots" },
    outcome:
      "SDS won most seats but couldn't form government. Marjan Šarec (LMŠ) formed a 5-party minority coalition with SD, SMC, SAB, and DeSUS (~43 seats). Šarec resigned Jan 2020; Janez Janša then formed a right-wing majority coalition with SMC, NSi, and DeSUS.",
    ruling: "LMŠ-led minority coalition → SDS coalition",
  },
  {
    key: "svn-2022",
    country: "slovenia",
    year: 2022,
    date: "24 April 2022",
    title: "Parliamentary Election",
    system: "Mixed Proportional Representation (PR)",
    systemDetail:
      "90-seat unicameral National Assembly. Open-list PR, 4% threshold. Turnout reached highest level since 2000. Women elected: 36 of 90 (40%) — record high.",
    totalSeats: 90,
    parties: [
      { name: "Freedom Movement (GS)", leader: "Robert Golob", orientation: "Centre-left / Green-liberal", seats: 41, voteShare: 34.45, color: "#10B981", ruling: true },
      { name: "Slovenian Democratic Party (SDS)", leader: "Janez Janša (PM)", orientation: "Centre-right / Conservative-nationalist", seats: 27, voteShare: 23.48, color: "#1E40AF" },
      { name: "New Slovenia (NSi)", leader: "Matej Tonin", orientation: "Centre-right / Christian-democratic", seats: 8, voteShare: 6.86, color: "#92400E" },
      { name: "Social Democrats (SD)", leader: "Tanja Fajon", orientation: "Centre-left / Social-democratic", seats: 7, voteShare: 6.69, color: "#EF4444", ruling: true },
      { name: "The Left (Levica)", leader: "Luka Mesec", orientation: "Left / Democratic socialist", seats: 5, voteShare: 4.46, color: "#DC2626", ruling: true },
      { name: "Ethnic Minority Seats", leader: "Italian + Hungarian", orientation: "—", seats: 2, voteShare: 0, color: "#6B7280" },
    ],
    turnout: { registered: 1730000, cast: 1220000, percentage: 70.97, invalid: "—" },
    outcome:
      "Freedom Movement (41) + Social Democrats (7) + The Left (5) = 53 seats — a working majority. Coalition signed 24 May 2022. PM Robert Golob sworn in 1 June 2022. Turnout highest since 2000; 36 of 90 MPs were women (40%, record high).",
    ruling: "GS + SD + Levica coalition",
  },
  {
    key: "svn-2026",
    country: "slovenia",
    year: 2026,
    date: "22 March 2026",
    title: "Parliamentary Election",
    system: "Mixed Proportional Representation (PR)",
    systemDetail:
      "90-seat unicameral National Assembly. 7 parties entered parliament (up from 5 in 2022). 4% electoral threshold. Result: hung parliament — smallest GS–SDS margin in Slovenian electoral history.",
    totalSeats: 90,
    parties: [
      { name: "Freedom Movement (GS)", leader: "Robert Golob (PM)", orientation: "Centre-left / Green-liberal", seats: 29, voteShare: 28.6, color: "#10B981" },
      { name: "Slovenian Democratic Party (SDS)", leader: "Janez Janša", orientation: "Centre-right / Conservative-nationalist", seats: 28, voteShare: 28.0, color: "#1E40AF" },
      { name: "NSi–SLS–Focus Coalition", leader: "Matej Tonin (NSi)", orientation: "Centre-right / Christian-democratic", seats: 9, voteShare: 9.3, color: "#92400E" },
      { name: "Democrats (Demokrati)", leader: "Anže Logar", orientation: "Centre-right / Pro-European", seats: 6, voteShare: 6.7, color: "#6366F1" },
      { name: "Social Democrats (SD)", leader: "Matjaž Han", orientation: "Centre-left / Social-democratic", seats: 6, voteShare: 6.7, color: "#EF4444" },
      { name: "Levica–Vesna", leader: "Luka Mesec", orientation: "Left / Green", seats: 5, voteShare: 5.6, color: "#DC2626" },
      { name: "Resni.ca (Truth)", leader: "Zoran Stevanović", orientation: "Right-wing populist", seats: 5, voteShare: 5.5, color: "#F97316" },
      { name: "Ethnic Minority Seats", leader: "Italian + Hungarian", orientation: "—", seats: 2, voteShare: 0, color: "#6B7280" },
    ],
    turnout: { registered: 1700000, cast: null, percentage: 68.4, invalid: "—" },
    outcome:
      "Hung parliament. GS led SDS by just 1 seat (29 vs 28) — smallest margin in Slovenian history. Left bloc held ~40 seats (short of 46 majority). Golob moved to opposition on 20 April 2026. Right-leaning bloc holds ~48 seats but faces internal divisions — Resni.ca refused to back a Janša government. Negotiations ongoing.",
    ruling: "Ongoing negotiations",
  },
];

export const availableYears = {
  bahamas: [2017, 2021, 2026],
  slovenia: [2018, 2022, 2026],
};
