import { describe, it, expect } from "vitest";
import { formatMoney, formatDuration } from "./format";

describe("formatMoney", () => {
  it("sépare les milliers par des espaces", () => {
    expect(formatMoney(1234567)).toBe("1 234 567 $");
  });
  it("affiche les dépenses avec un moins", () => {
    expect(formatMoney(-60000)).toBe("-60 000 $");
  });
  it("arrondit à l'unité", () => {
    expect(formatMoney(999.6)).toBe("1 000 $");
  });
  it("gère zéro", () => {
    expect(formatMoney(0)).toBe("0 $");
  });
});

describe("formatDuration", () => {
  it("minutes:secondes sous une heure", () => {
    expect(formatDuration(65000)).toBe("1:05");
  });
  it("heures:minutes:secondes au-delà", () => {
    expect(formatDuration(3725000)).toBe("1:02:05");
  });
  it("affiche les jours", () => {
    expect(formatDuration((2 * 86400 + 3 * 3600) * 1000)).toBe("2 j 3:00:00");
  });
  it("ne descend jamais sous zéro", () => {
    expect(formatDuration(-5000)).toBe("0:00");
  });
  it("1 jour, 1 heure, 1 minute, 1 seconde", () => {
    expect(formatDuration(90061000)).toBe("1 j 1:01:01");
  });
});