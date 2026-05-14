# machiorcho


日本の市区町村に関する知識を試すシンプルなクイズアプリです。町名の「町」という漢字の読み方が「まち」なのか「ちょう」なのかを当てることができますか？

## デモ

[▶ クイズをプレイ: まちかちょうか？](https://code4fukui.github.io/machiorcho/)

## 機能

- 日本の市区町村の網羅的なリストからランダムに生成される全10問のクイズ。
- 正しい読み方を当てるシンプルな2択インターフェース。
- 回答に対する即時のフィードバックと、正解率を含む最終スコア。
- デスクトップおよびモバイルブラウザ向けのレスポンシブデザイン。
- クイズ終了後、データソースについて詳しく知るか、もう一度プレイするかのオプション。

## 仕組み

これはバニラJavaScriptで構築され、完全にブラウザ上で動作するシングルページアプリケーションです。ビルド手順やインストールは必要ありません。

1. `city.csv` ファイルから最新の市区町村データを取得します。
2. `CSV.js` を使用してデータを解析し、名前が「町」で終わる町をフィルタリングします。
3. `shuffle.js` を使用してリストをランダム化し、クイズ用に10問を生成します。
4. `q2.js` フレームワークがクイズのロジックとUIの更新を処理します。

## ローカルでの実行

このリポジトリをクローンし、モダンなウェブブラウザで `index.html` を開きます。

```bash
git clone https://github.com/code4fukui/machiorcho.git
cd machiorcho
# ブラウザで index.html を開く
```

## データとクレジット

- **クイズデータ**: 問題は、[Code for FUKUIのaddress-japanプロジェクト](https://github.com/code4fukui/address-japan)によってCSV形式で提供されている、[デジタル庁のアドレス・ベース・レジストリ](https://www.digital.go.jp/policies/base_registry_address/)のデータを使用して生成されています。
  - 使用データファイル: [city.csv](https://code4fukui.github.io/address-japan/data/city.csv)
- **アプリフレームワーク**: このアプリは、[fukuno.jig.jp](https://fukuno.jig.jp/) による [2択クイズアプリ framework q2.js](https://fukuno.jig.jp/3597) (CC BY) を使用して構築されています。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
