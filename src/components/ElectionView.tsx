"use client";
import { ElectionEntry } from "@/data/elections";

interface Props {
  election: ElectionEntry;
  onBack: () => void;
  onReset: () => void;
}

function fmt(n: number | null) {
  if (!n) return "—";
  return n.toLocaleString();
}

export default function ElectionView({ election, onBack, onReset }: Props) {
  const majority = Math.floor(election.totalSeats / 2) + 1;
  const seatedParties = election.parties.filter((p) => p.seats > 0);

  return (
    <div style={{ flex: 1 }}>

      {/* BIG HERO */}
      <div style={{
        background: "var(--bg2)",
        borderBottom: "1px solid var(--border)",
        padding: "48px 40px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background year watermark */}
        <div className="font-display" style={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "30vw",
          color: "var(--border)",
          lineHeight: 1,
          userSelect: "none",
          opacity: 0.4,
        }}>
          {election.year}
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-in" style={{ marginBottom: 8, display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: 28 }}>
              {election.country === "bahamas" ? "🇧🇸" : "🇸🇮"}
            </span>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--text3)", letterSpacing: "0.15em" }}>
              {election.country === "bahamas" ? "THE BAHAMAS" : "SLOVENIA"} · {election.date}
            </span>
            {election.upcoming && (
              <span className="font-mono" style={{
                fontSize: 9,
                color: "#F59E0B",
                border: "1px solid #F59E0B",
                padding: "2px 8px",
                letterSpacing: "0.1em",
              }}>
                UPCOMING
              </span>
            )}
          </div>

          <h1 className="font-display animate-in delay-1" style={{
            fontSize: "clamp(56px, 9vw, 120px)",
            lineHeight: 0.9,
            color: "var(--text)",
            marginBottom: 8,
          }}>
            {election.year}<br />
            <span style={{ color: "var(--accent)" }}>{election.title.toUpperCase()}</span>
          </h1>

          <p className="font-condensed animate-in delay-2" style={{
            fontSize: 16,
            color: "var(--text2)",
            maxWidth: 640,
            marginTop: 16,
            lineHeight: 1.6,
          }}>
            {election.systemDetail}
          </p>
        </div>
      </div>

      {/* Content grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: election.parties.length > 0 ? "1fr 1fr" : "1fr",
        gap: 0,
        maxWidth: "100%",
      }}>

        {/* LEFT: Seat distribution + parties */}
        {election.parties.length > 0 && (
          <div style={{ borderRight: "1px solid var(--border)", padding: "40px" }}>

            {/* Seat bar */}
            <div className="animate-in" style={{ marginBottom: 32 }}>
              <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.15em", marginBottom: 16, textTransform: "uppercase" }}>
                Seat Distribution — {election.totalSeats} Total · Majority: {majority}
              </div>

              {/* Full bar */}
              <div style={{
                display: "flex",
                height: 40,
                border: "1px solid var(--border2)",
                overflow: "hidden",
                marginBottom: 8,
                position: "relative",
              }}>
                {seatedParties.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${(p.seats / election.totalSeats) * 100}%`,
                      background: p.color,
                      transition: "opacity 0.2s",
                      position: "relative",
                    }}
                    title={`${p.name}: ${p.seats}`}
                  >
                    {(p.seats / election.totalSeats) > 0.12 && (
                      <span className="font-mono" style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: 11,
                        color: "rgba(0,0,0,0.8)",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}>
                        {p.seats}
                      </span>
                    )}
                  </div>
                ))}
                {/* Majority line */}
                <div style={{
                  position: "absolute",
                  left: `${(majority / election.totalSeats) * 100}%`,
                  top: 0, bottom: 0,
                  width: 2,
                  background: "var(--accent)",
                  zIndex: 3,
                }} />
              </div>
              <div className="font-mono" style={{ fontSize: 9, color: "var(--accent)", textAlign: "right", letterSpacing: "0.08em" }}>
                ▲ MAJORITY LINE ({majority})
              </div>
            </div>

            {/* Party list */}
            <div className="animate-in delay-1">
              <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.15em", marginBottom: 12, textTransform: "uppercase" }}>
                Parties &amp; Results
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {election.parties.map((p, i) => (
                  <div
                    key={i}
                    className={`animate-in delay-${Math.min(i + 2, 7)}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "3px 1fr auto auto",
                      gap: 12,
                      alignItems: "center",
                      padding: "10px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div style={{ width: 3, height: "100%", background: p.color, borderRadius: 2, alignSelf: "stretch" }} />
                    <div>
                      <div className="font-condensed" style={{
                        fontSize: 15,
                        color: p.ruling ? "var(--text)" : "var(--text2)",
                        fontWeight: p.ruling ? 600 : 300,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}>
                        {p.name}
                        {p.ruling && (
                          <span style={{
                            fontSize: 9,
                            fontFamily: "JetBrains Mono, monospace",
                            color: "#fff",
                            background: "var(--accent)",
                            padding: "1px 6px",
                            letterSpacing: "0.08em",
                          }}>RULING</span>
                        )}
                      </div>
                      <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)" }}>{p.leader}</div>
                    </div>
                    <div className="font-display" style={{ fontSize: 28, color: p.seats > 0 ? "var(--text)" : "var(--text3)", textAlign: "right" }}>
                      {p.seats > 0 ? p.seats : "—"}
                    </div>
                    <div className="font-mono" style={{ fontSize: 11, color: "var(--text3)", width: 48, textAlign: "right" }}>
                      {p.voteShare > 0 ? `${p.voteShare}%` : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RIGHT: Stats + outcome */}
        <div style={{ padding: "40px" }}>

          {/* Turnout stats */}
          {election.turnout && (
            <div className="animate-in" style={{ marginBottom: 36 }}>
              <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.15em", marginBottom: 16, textTransform: "uppercase" }}>
                Voter Turnout
              </div>

              {/* Big turnout number */}
              <div style={{
                background: "var(--bg3)",
                border: "1px solid var(--border2)",
                padding: "24px 28px",
                marginBottom: 2,
              }}>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em", marginBottom: 6 }}>TURNOUT RATE</div>
                <div className="font-display" style={{ fontSize: 72, color: election.turnout.percentage && election.turnout.percentage > 70 ? "var(--accent)" : "var(--text)", lineHeight: 1 }}>
                  {election.turnout.percentage ? `${election.turnout.percentage}%` : "—"}
                </div>
                {/* Turnout bar */}
                {election.turnout.percentage && (
                  <div style={{ marginTop: 12, height: 4, background: "var(--border)" }}>
                    <div style={{
                      width: `${election.turnout.percentage}%`,
                      height: "100%",
                      background: election.turnout.percentage > 70 ? "var(--accent)" : "var(--accent3)",
                      transition: "width 1s ease",
                    }} />
                  </div>
                )}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                {[
                  { label: "Registered", value: fmt(election.turnout.registered) },
                  { label: "Votes Cast", value: fmt(election.turnout.cast) },
                  { label: "Invalid Ballots", value: election.turnout.invalid },
                  { label: "System", value: election.system.split(" ")[0] },
                ].map((s) => (
                  <div key={s.label} style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    padding: "16px 18px",
                  }}>
                    <div className="font-mono" style={{ fontSize: 9, color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                      {s.label}
                    </div>
                    <div className="font-condensed" style={{ fontSize: 18, color: "var(--text)", fontWeight: 600 }}>
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          <div className="animate-in delay-2">
            <div className="font-mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.15em", marginBottom: 12, textTransform: "uppercase" }}>
              {election.upcoming ? "Status / Notes" : "Outcome"}
            </div>
            <div style={{
              background: "var(--bg3)",
              border: "1px solid var(--border2)",
              borderLeft: `3px solid ${election.upcoming ? "#F59E0B" : "var(--accent)"}`,
              padding: "20px 24px",
            }}>
              <p className="font-condensed" style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.7, fontWeight: 300 }}>
                {election.outcome}
              </p>
            </div>

            {!election.upcoming && (
              <div style={{
                marginTop: 2,
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <span className="font-mono" style={{ fontSize: 9, color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0 }}>
                  RULING PARTY:
                </span>
                <span className="font-condensed" style={{ fontSize: 16, color: "var(--accent)", fontWeight: 600 }}>
                  {election.ruling}
                </span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="animate-in delay-3" style={{ marginTop: 40, display: "flex", gap: 12 }}>
            <button onClick={onBack} style={{
              flex: 1,
              background: "none",
              border: "1px solid var(--border2)",
              color: "var(--text2)",
              padding: "12px",
              cursor: "pointer",
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: 16,
              letterSpacing: "0.1em",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--text2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)"; }}
            >
              ← DIFFERENT YEAR
            </button>
            <button onClick={onReset} style={{
              flex: 1,
              background: "var(--accent)",
              border: "1px solid var(--accent)",
              color: "#fff",
              padding: "12px",
              cursor: "pointer",
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: 16,
              letterSpacing: "0.1em",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)"; }}
            >
              START OVER →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
