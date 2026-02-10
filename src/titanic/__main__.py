"""Command-line entry point for the project."""

from __future__ import annotations

import textwrap


def main() -> None:
    message = """
    PyTorch Titanic repository scaffold

    This project currently focuses on the notebook workflow. To get started:
      1) Install dependencies from requirements.txt
      2) Download the Kaggle Titanic dataset
      3) Open the notebook in notebooks/ or the repository root
    """
    print(textwrap.dedent(message).strip())


if __name__ == "__main__":
    main()
