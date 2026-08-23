#!/usr/bin/env python3
"""Plot the verified water-autoionization CV-selection smoke-test data."""

from __future__ import annotations

import csv
from pathlib import Path

import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle


ROOT = Path(__file__).resolve().parent
DATA = ROOT / "selection_plot_data.csv"
OUTPUT = ROOT.parent / "water-autoionization-selection.png"


def load_rows(path: Path) -> list[dict[str, float | int]]:
    rows: list[dict[str, float | int]] = []
    with path.open(newline="", encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            rows.append(
                {
                    "frame": int(row["frame"]),
                    "time": float(row["time"]),
                    "reaction_progress": float(row["reaction_progress"]),
                    "separation": float(row["separation"]),
                    "max_devi_f": float(row["max_devi_f"]),
                    "selected": int(row["selected"]),
                }
            )
    return rows


def main() -> None:
    rows = load_rows(DATA)
    selected = [row for row in rows if row["selected"]]

    fig, ax = plt.subplots(figsize=(8.2, 5.6), dpi=200)
    short_region = Rectangle(
        (0.2, 0.2), 0.8, 1.8, facecolor="#dbe8f5", edgecolor="#2f6690",
        hatch="///", linewidth=1.2, alpha=0.55, label="Short-separation region",
    )
    long_region = Rectangle(
        (1.4, 0.2), 0.6, 1.8, facecolor="#f7e7bf", edgecolor="#a66a16",
        hatch="...", linewidth=1.2, alpha=0.55, label="Long-separation region",
    )
    ax.add_patch(short_region)
    ax.add_patch(long_region)

    scatter = ax.scatter(
        [row["separation"] for row in rows],
        [row["reaction_progress"] for row in rows],
        c=[row["max_devi_f"] for row in rows],
        cmap="Blues",
        s=24,
        edgecolors="#29445c",
        linewidths=0.25,
        alpha=0.78,
        zorder=3,
    )
    ax.scatter(
        [row["separation"] for row in selected],
        [row["reaction_progress"] for row in selected],
        marker="*",
        s=190,
        facecolor="#e07a1f",
        edgecolor="#5b3512",
        linewidth=0.8,
        label="Selected frame",
        zorder=5,
    )
    for row in selected:
        ax.annotate(
            f"frame {row['frame']}",
            (row["separation"], row["reaction_progress"]),
            xytext=(7, 7),
            textcoords="offset points",
            fontsize=7.5,
            color="#333333",
        )

    colorbar = fig.colorbar(scatter, ax=ax, pad=0.02)
    colorbar.set_label(r"Maximum force model deviation (eV Å$^{-1}$)")
    ax.set(
        xlim=(-0.03, 2.08),
        ylim=(-0.03, 2.08),
        xlabel="Ion-pair separation CV (Å)",
        ylabel="Reaction-progress CV",
        title="Water autoionization CV-space candidate selection\n"
        "201 model-deviation candidates; 3 CV-eligible selected frames",
    )
    ax.grid(color="#d9dde2", linewidth=0.6, alpha=0.7)
    ax.spines[["top", "right"]].set_visible(False)
    ax.legend(loc="upper left", frameon=True, fontsize=7.5)
    fig.tight_layout()
    fig.savefig(OUTPUT, bbox_inches="tight", facecolor="white")


if __name__ == "__main__":
    main()
