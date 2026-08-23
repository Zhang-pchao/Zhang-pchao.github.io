#!/usr/bin/env python3
"""Reproduce the verified DPGEN2 water-autoionization selection pipeline."""

from __future__ import annotations

import csv
from pathlib import Path

import matplotlib

matplotlib.use("Agg", force=True)

import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap, Normalize
from matplotlib.patches import Rectangle


ROOT = Path(__file__).resolve().parent
DATA = ROOT / "selection_plot_data.csv"
OUTPUT = ROOT.parent / "water-autoionization-selection.png"
TRUST_LO = 0.05
TRUST_HI = 0.10

INK = "#263238"
LIGHT_GREY = "#D9DEE2"
MID_GREY = "#7A858D"
BLUE_LIGHT = "#D8E6F3"
BLUE = "#2F6B9A"
BLUE_DARK = "#173F5F"
ORANGE = "#D97925"
ORANGE_DARK = "#8A4611"

REGIONS = (
    {
        "name": "transition_segment",
        "label": "Transition",
        "x": (1.0, 2.0),
        "y": (0.25, 1.50),
        "box_color": BLUE,
        "color": BLUE_DARK,
        "hatch": "//",
        "marker": "o",
    },
    {
        "name": "separated_segment",
        "label": "Separated",
        "x": (6.0, 8.0),
        "y": (1.00, 1.75),
        "box_color": ORANGE,
        "color": ORANGE_DARK,
        "hatch": "\\\\",
        "marker": "s",
    },
)


def load_rows(path: Path) -> list[dict]:
    rows = []
    with path.open(newline="", encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            rows.append(
                {
                    "frame": int(row["frame"]),
                    "time": float(row["time"]),
                    "reaction_progress": float(row["reaction_progress"]),
                    "separation": float(row["separation"]),
                    "max_devi_f": float(row["max_devi_f"]),
                    "trust_candidate": bool(int(row["trust_candidate"])),
                    "cv_eligible": bool(int(row["cv_eligible"])),
                    "selected": bool(int(row["selected"])),
                    "matched_region": row["matched_region"],
                }
            )
    return rows


def add_region_boxes(ax, *, grid: bool = False) -> None:
    for region in REGIONS:
        x0, x1 = region["x"]
        y0, y1 = region["y"]
        ax.add_patch(
            Rectangle(
                (x0, y0),
                x1 - x0,
                y1 - y0,
                fill=False,
                edgecolor=region["box_color"],
                hatch=None if grid else region["hatch"],
                linewidth=1.4,
                linestyle="--",
                zorder=2,
            )
        )
        if grid:
            for index in range(1, 10):
                x = x0 + (x1 - x0) * index / 10
                y = y0 + (y1 - y0) * index / 10
                ax.plot([x, x], [y0, y1], color=region["box_color"], alpha=0.25, linewidth=0.55)
                ax.plot([x0, x1], [y, y], color=region["box_color"], alpha=0.25, linewidth=0.55)


def main() -> None:
    rows = load_rows(DATA)
    trust = [row for row in rows if row["trust_candidate"]]
    eligible = [row for row in rows if row["cv_eligible"]]
    selected = [row for row in rows if row["selected"]]
    assert (len(rows), len(trust), len(eligible), len(selected)) == (2001, 723, 192, 40)
    assert all(row["trust_candidate"] for row in eligible)
    assert all(row["cv_eligible"] for row in selected)

    cmap = LinearSegmentedColormap.from_list("deviation_blues", [BLUE_LIGHT, BLUE, BLUE_DARK])
    norm = Normalize(
        vmin=min(row["max_devi_f"] for row in eligible),
        vmax=max(row["max_devi_f"] for row in eligible),
    )
    fig, axes = plt.subplots(1, 3, figsize=(16, 4.9))

    ax = axes[0]
    ax.axhspan(TRUST_LO, TRUST_HI, color=BLUE_LIGHT, alpha=0.55, zorder=0)
    ax.scatter(
        [row["time"] for row in rows],
        [row["max_devi_f"] for row in rows],
        s=7,
        color=LIGHT_GREY,
        alpha=0.5,
        linewidths=0,
    )
    ax.scatter(
        [row["time"] for row in trust],
        [row["max_devi_f"] for row in trust],
        s=9,
        color=BLUE_DARK,
        alpha=0.65,
        linewidths=0,
    )
    ax.axhline(TRUST_LO, color=INK, linestyle="--", linewidth=0.9)
    ax.axhline(TRUST_HI, color=INK, linestyle="--", linewidth=0.9)
    ax.set_yscale("log")
    ax.set_xlabel("Time (ps)")
    ax.set_ylabel(r"Maximum force model deviation (eV $\AA^{-1}$)")
    ax.set_title("1  Model-deviation trust gate", loc="left", fontweight="bold")
    accurate = sum(row["max_devi_f"] < TRUST_LO for row in rows)
    failed = sum(row["max_devi_f"] >= TRUST_HI for row in rows)
    ax.text(
        0.02,
        0.96,
        f"{len(trust)} candidates; {accurate} accurate; {failed} failed",
        transform=ax.transAxes,
        va="top",
    )

    ax = axes[1]
    ax.scatter(
        [row["separation"] for row in rows],
        [row["reaction_progress"] for row in rows],
        s=6,
        color=LIGHT_GREY,
        alpha=0.25,
        linewidths=0,
    )
    ax.scatter(
        [row["separation"] for row in trust],
        [row["reaction_progress"] for row in trust],
        s=8,
        color=MID_GREY,
        alpha=0.32,
        linewidths=0,
    )
    points = ax.scatter(
        [row["separation"] for row in eligible],
        [row["reaction_progress"] for row in eligible],
        c=[row["max_devi_f"] for row in eligible],
        cmap=cmap,
        norm=norm,
        s=25,
        edgecolors=INK,
        linewidths=0.25,
        zorder=4,
    )
    add_region_boxes(ax)
    ax.set_xlim(0, max(row["separation"] for row in rows) * 1.02)
    ax.set_ylim(0, max(row["reaction_progress"] for row in rows) * 1.04)
    ax.set_xlabel("Separation (PLUMED units)")
    ax.set_ylabel("Reaction Progress (PLUMED units)")
    ax.set_title("2  CV-region filter", loc="left", fontweight="bold")
    ax.text(
        0.02,
        0.96,
        f"{len(eligible)} trust candidates inside the two target regions",
        transform=ax.transAxes,
        va="top",
    )

    ax = axes[2]
    ax.scatter(
        [row["separation"] for row in eligible],
        [row["reaction_progress"] for row in eligible],
        c=[row["max_devi_f"] for row in eligible],
        cmap=cmap,
        norm=norm,
        s=22,
        alpha=0.45,
        linewidths=0,
    )
    add_region_boxes(ax, grid=True)
    counts = {}
    for region in REGIONS:
        chosen = [row for row in selected if row["matched_region"] == region["name"]]
        counts[region["name"]] = len(chosen)
        ax.scatter(
            [row["separation"] for row in chosen],
            [row["reaction_progress"] for row in chosen],
            s=90,
            marker=region["marker"],
            facecolors="none",
            edgecolors=region["color"],
            linewidths=1.8,
            label=f"Selected: {region['label']}",
            zorder=6,
        )
    ax.set_xlim(0.95, 8.05)
    ax.set_ylim(0.20, 1.80)
    ax.set_xlabel("Separation (PLUMED units)")
    ax.set_ylabel("Reaction Progress (PLUMED units)")
    ax.set_title("3  Grid coverage + max deviation", loc="left", fontweight="bold")
    ax.text(
        0.02,
        0.96,
        f"40 selected: Transition = {counts['transition_segment']}, "
        f"Separated = {counts['separated_segment']}",
        transform=ax.transAxes,
        va="top",
    )
    ax.text(
        0.45,
        0.67,
        "20 + 20 frame quotas\n10 x 10 grid; max deviation per cell",
        transform=ax.transAxes,
        ha="center",
        va="center",
        fontsize=7.2,
    )
    ax.legend(loc="center", bbox_to_anchor=(0.52, 0.45), fontsize=7, frameon=False)

    fig.colorbar(
        points,
        ax=axes[1:],
        fraction=0.028,
        pad=0.02,
        label=r"Maximum force model deviation (eV $\AA^{-1}$)",
    )
    fig.suptitle(
        "DPGEN2 candidate-selection pipeline: model deviation followed by PLUMED CV filtering",
        fontsize=15,
        fontweight="bold",
        y=1.05,
    )
    fig.text(
        0.5,
        0.985,
        "2001 trajectory frames   →   723 trust candidates   →   "
        "192 CV-eligible   →   40 selected",
        ha="center",
        color=INK,
        fontsize=11,
        fontweight="bold",
    )
    fig.text(
        0.5,
        0.005,
        "20 ps trajectory; teacher-label smoke-test scope; "
        "configured min_frame_gap = 0 frames (0.00 ps)",
        ha="center",
        color=MID_GREY,
        fontsize=9,
    )
    fig.savefig(OUTPUT, dpi=220, bbox_inches="tight", facecolor="white")


if __name__ == "__main__":
    plt.rcParams.update(
        {
            "font.family": "DejaVu Sans",
            "font.size": 9,
            "axes.edgecolor": INK,
            "axes.labelcolor": INK,
            "axes.titlecolor": INK,
            "xtick.color": INK,
            "ytick.color": INK,
            "figure.facecolor": "white",
            "axes.facecolor": "white",
        }
    )
    main()
