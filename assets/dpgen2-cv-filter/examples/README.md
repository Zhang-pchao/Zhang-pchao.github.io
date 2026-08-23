# DPGEN2 PLUMED-CV filtering example

This compact bundle accompanies the bilingual tutorial at
`/code/dpgen2-cv-filter`.

## Files

- `explore.cv-filter.fragment.json`: the relevant DPGEN2 exploration fragment.
- `template.plumed`: the 58-water Reactive Soft-Voronoi/OPES input used in the
  bounded smoke test. Update atom selections and the plugin path for a new
  structure.
- `template.lammps`: the matching short LAMMPS exploration template.
- `selection_plot_data.csv`: 201 aligned trajectory/CV/model-deviation rows;
  the three selected rows are marked in the `selected` column.
- `cv_selection.example.csv` and `cv_selection_summary.example.json`: audit
  artifacts emitted by the selector.
- `plot_cv_selection.py`: reproduces the tutorial figure from the compact CSV.

## Provenance and scope

The data are from the one-GPU functional smoke test for
`Zhang-pchao/dpgen2:plumed-cv-filter`, integration run `152876`, code commit
`26f9c7608f3ed6642ca855cf22ed528463c2b394`. The test reused four committee
models, aligned 201 trajectory/model-deviation/COLVAR frames, and selected three
frames in two disjoint two-CV regions.

The final labeling step used a DeePMD teacher only to verify data plumbing. It
is not first-principles labeling, scientific convergence, or a production
active-learning result.

## Reproduce the figure

```bash
python plot_cv_selection.py
```

The script writes `water-autoionization-selection.png` to the parent
`assets/dpgen2-cv-filter/` directory used by the tutorial page.
