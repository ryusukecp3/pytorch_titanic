# PyTorch Titanic

このリポジトリは、Kaggle の Titanic データセットを用いて PyTorch でニューラルネットワークを学習する例を提供します。

## リポジトリ構成

- `20200923 Pytorch_Titanic.ipynb`: 学習用ノートブック
- `src/titanic`: パッケージの足場 (CLI など拡張用)
- `notebooks/`: 追加ノートブック置き場
- `data/`: データセット置き場 (Git 管理外)
- `webapp/`: デモ UI (HTML/CSS/JS)

## 必要条件

- Python 3
- pandas
- numpy
- torch

依存関係は次のコマンドでインストールできます:

```bash
pip install -r requirements.txt
```

## 使い方

1. Kaggle から Titanic データセットをダウンロードします。
2. `20200923 Pytorch_Titanic.ipynb` を Jupyter Notebook で開きます。
3. セルを順に実行してモデルを学習・評価します。

CLI の雛形を確認する場合は次を実行します:

```bash
python -m titanic
```

## デモアプリ

簡易的な生存予測 UI をブラウザで確認できます:

```bash
python -m http.server 8000 --directory webapp
```

ブラウザで `http://localhost:8000` を開くと、デモ画面が表示されます。

## 参考

このノートブックは次の記事を参考にしています:
https://rf00.hatenablog.com/entry/2018/05/13/180739
