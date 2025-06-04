# PyTorch Titanic

このリポジトリは、Kaggle の Titanic データセットを用いて PyTorch でニューラルネットワークを学習する例を提供します。

## 必要条件

- Python 3
- pandas
- numpy
- torch

依存関係は次のコマンドでインストールできます:

```bash
pip install pandas numpy torch
```

## 使い方

1. Kaggle から Titanic データセットをダウンロードします。
2. `20200923 Pytorch_Titanic.ipynb` を Jupyter Notebook で開きます。
3. セルを順に実行してモデルを学習・評価します。

## テスト

`pytest` コマンドで単体テストを実行できます。
Jupyter 上で結果を確認したい場合は `run_tests.ipynb` を開いてセルを実行してください。

## 参考

このノートブックは次の記事を参考にしています:
https://rf00.hatenablog.com/entry/2018/05/13/180739
