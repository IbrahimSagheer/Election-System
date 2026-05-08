"use client";
import { useState } from "react";
import { elections, availableYears } from "@/data/elections";
import ElectionView from "@/components/ElectionView";

type Step = "intro" | "country" | "year" | "result";

export default function Home() {
  const [step, setStep] = useState<Step>("intro");
  const [country, setCountry] = useState<"bahamas" | "slovenia" | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const selectedElection = elections.find(
    (e) => e.country === country && e.year === year
  );

  const reset = () => {
    setStep("intro");
    setCountry(null);
    setYear(null);
  };

  const selectCountry = (c: "bahamas" | "slovenia") => {
    setCountry(c);
    setStep("year");
  };

  const selectYear = (y: number) => {
    setYear(y);
    setStep("result");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <header style={{
        borderBottom: "1px solid var(--border)",
        padding: "0 40px",
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "var(--bg)",
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <button onClick={reset} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, background: "var(--accent)", borderRadius: "50%" }} />
            <span className="font-display" style={{ fontSize: 18, color: "var(--text)", letterSpacing: "0.05em" }}>
              ELECTION INTEL
            </span>
          </button>
          {step !== "intro" && (
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "var(--border2)" }}>›</span>
              <span className="font-mono" style={{ fontSize: 11, color: "var(--text2)", textTransform: "uppercase" }}>
                {country === "bahamas" ? "🇧🇸 Bahamas" : "🇸🇮 Slovenia"}
              </span>
              {year && (
                <>
                  <span style={{ color: "var(--border2)" }}>›</span>
                  <span className="font-mono" style={{ fontSize: 11, color: "var(--accent)" }}>{year}</span>
                </>
              )}
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em" }}>
            S25BINCE1M04033
          </span>
          {step !== "intro" && (
            <button onClick={reset} style={{
              background: "none",
              border: "1px solid var(--border2)",
              color: "var(--text2)",
              padding: "4px 12px",
              cursor: "pointer",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
            }}>
              ← RESET
            </button>
          )}
        </div>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* ── INTRO ── */}
        {step === "intro" && (
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 40px",
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}>
            <div className="animate-in" style={{ marginBottom: 12 }}>
              <span className="font-mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Research Summary · 2016–2026
              </span>
            </div>

            <h1 className="font-display animate-in delay-1" style={{
              fontSize: "clamp(80px, 14vw, 180px)",
              lineHeight: 0.9,
              color: "var(--text)",
              marginBottom: 32,
            }}>
              ELECTION<br />
              <span style={{ color: "var(--accent)", WebkitTextStroke: "0px" }}>DATA</span><br />
              INTEL
            </h1>

            <p className="font-condensed animate-in delay-2" style={{
              fontSize: 20,
              color: "var(--text2)",
              fontWeight: 300,
              maxWidth: 560,
              lineHeight: 1.6,
              marginBottom: 56,
            }}>
              Electoral intelligence across The Bahamas & Slovenia — covering every election from 2016 through 2026. Pick a country and year to drill in.
            </p>

            <div className="animate-in delay-3">
              <button
                onClick={() => setStep("country")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                  background: "var(--accent)",
                  color: "#000",
                  border: "none",
                  padding: "18px 40px",
                  cursor: "pointer",
                  fontFamily: "Bebas Neue, sans-serif",
                  fontSize: 22,
                  letterSpacing: "0.1em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)"; }}
              >
                SELECT ELECTION
                <span style={{ fontSize: 28 }}>→</span>
              </button>
            </div>

            {/* Bottom stats bar */}
            <div className="animate-in delay-4" style={{
              display: "flex",
              gap: 48,
              marginTop: 80,
              paddingTop: 32,
              borderTop: "1px solid var(--border)",
            }}>
              {[
                { label: "Countries", value: "02" },
                { label: "Elections Covered", value: "05" },
                { label: "Years Covered", value: "2016–2026" },
                { label: "Total Seats Analysed", value: "39 + 90" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display" style={{ fontSize: 36, color: "var(--text)", lineHeight: 1 }}>{s.value}</div>
                  <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── COUNTRY SELECT ── */}
        {step === "country" && (
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 40px",
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}>
            <div className="animate-in" style={{ marginBottom: 16 }}>
              <span className="font-mono" style={{ fontSize: 11, color: "var(--text3)", letterSpacing: "0.15em" }}>
                STEP 01 / 02 — SELECT COUNTRY
              </span>
            </div>
            <h2 className="font-display animate-in delay-1" style={{ fontSize: "clamp(48px, 8vw, 100px)", marginBottom: 48, lineHeight: 0.95 }}>
              WHICH<br />COUNTRY?
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 780 }}>
              {(["bahamas", "slovenia"] as const).map((c, i) => (
                <button
                  key={c}
                  onClick={() => selectCountry(c)}
                  className={`animate-in delay-${i + 2}`}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border2)",
                    padding: "40px 36px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.background = "var(--bg3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = "var(--border2)";
                    el.style.background = "var(--surface)";
                  }}
                >
                  <div style={{ fontSize: 52, marginBottom: 16 }}>
                    {c === "bahamas" ? "🇧🇸" : "🇸🇮"}
                  </div>
                  <div className="font-display" style={{ fontSize: 36, color: "var(--text)", marginBottom: 8 }}>
                    {c === "bahamas" ? "THE BAHAMAS" : "SLOVENIA"}
                  </div>
                  <div className="font-mono" style={{ fontSize: 11, color: "var(--text3)", letterSpacing: "0.08em" }}>
                    {c === "bahamas" ? "3 ELECTIONS · FPTP · 39 SEATS" : "3 ELECTIONS · PR · 90 SEATS"}
                  </div>
                  <div style={{
                    position: "absolute",
                    bottom: 20,
                    right: 24,
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: 40,
                    color: "var(--border2)",
                  }}>
                    →
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── YEAR SELECT ── */}
        {step === "year" && country && (
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 40px",
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}>
            <div className="animate-in" style={{ marginBottom: 16 }}>
              <span className="font-mono" style={{ fontSize: 11, color: "var(--text3)", letterSpacing: "0.15em" }}>
                STEP 02 / 02 — SELECT ELECTION YEAR
              </span>
            </div>
            <h2 className="font-display animate-in delay-1" style={{ fontSize: "clamp(48px, 8vw, 100px)", marginBottom: 16, lineHeight: 0.95 }}>
              WHICH<br />YEAR?
            </h2>
            <p className="font-condensed animate-in delay-2" style={{ fontSize: 18, color: "var(--text2)", marginBottom: 48 }}>
              {country === "bahamas" ? "🇧🇸 The Bahamas" : "🇸🇮 Slovenia"} — select an election year below
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {availableYears[country].map((y, i) => {
                const el = elections.find(e => e.country === country && e.year === y);
                return (
                  <button
                    key={y}
                    onClick={() => selectYear(y)}
                    className={`animate-in delay-${i + 3}`}
                    style={{
                      background: "var(--bg3)",
                      border: "1px solid var(--border2)",
                      padding: "32px 40px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                      minWidth: 220,
                    }}
                    onMouseEnter={e => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.borderColor = "var(--accent)";
                      btn.style.background = "#1A1A00";
                    }}
                    onMouseLeave={e => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.borderColor = "var(--border2)";
                      btn.style.background = "var(--bg3)";
                    }}
                  >
                    <div className="font-display" style={{ fontSize: 72, color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}>
                      {y}
                    </div>
                    <div className="font-condensed" style={{ fontSize: 14, color: "var(--text2)" }}>
                      {el?.date}
                    </div>
                    <div className="font-condensed" style={{ fontSize: 13, color: "var(--text3)", marginTop: 4 }}>
                      {el?.title}
                    </div>
                    {el?.upcoming && (
                      <div className="font-mono" style={{
                        fontSize: 9,
                        color: "#F59E0B",
                        letterSpacing: "0.1em",
                        marginTop: 8,
                        border: "1px solid #F59E0B",
                        display: "inline-block",
                        padding: "2px 8px",
                      }}>
                        UPCOMING
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button onClick={() => setStep("country")} style={{
              marginTop: 40,
              background: "none",
              border: "none",
              color: "var(--text3)",
              cursor: "pointer",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              textAlign: "left",
            }}>
              ← BACK TO COUNTRY
            </button>
          </div>
        )}

        {/* ── RESULT ── */}
        {step === "result" && selectedElection && (
          <ElectionView
            election={selectedElection}
            onBack={() => setStep("year")}
            onReset={reset}
          />
        )}

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em" }}>
          PARLIAMENTARY REGISTRATION DEPT · STATE ELECTION COMMISSION SLOVENIA · IFES · IPU PARLINE
        </span>
        <span className="font-mono" style={{ fontSize: 10, color: "var(--text3)" }}>
          S25BINCE1M04033
        </span>
      </footer>
    </div>
  );
}
