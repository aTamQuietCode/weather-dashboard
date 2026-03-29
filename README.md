# 🌦️ Weather Dashboard

リアルタイムの天気情報と、検索履歴の保存機能を備えた天気予報ダッシュボード

## 🚀 デプロイ先
[https://atamquietcode.github.io/weather-dashboard/]

## ✨ 主な機能
* **リアルタイム天気検索**: OpenWeatherMap API を使用して、世界中の都市の天気を取得。
* **検索履歴の保存**: React Context API と localStorage を使用し、ブラウザを閉じても履歴を保持。
* **コンポーネント管理**: Storybook を導入し、UIパーツ単体での開発・テストを効率化。
* **自動デプロイ**: GitHub Actions を使用した CI/CD 環境の構築。

## 🛠 使用技術
* **Frontend**: React (Vite), TypeScript
* **State Management**: Context API
* **UI Development**: Storybook
* **API**: OpenWeatherMap API
* **Testing**: Vitest, React Testing Library
* **Infrastructure**: GitHub Actions, GitHub Pages

## 📦 セットアップ・起動方法
1. リポジトリをクローン
   ```bash
   git clone [https://github.com/aTamQuietCode/weather-dashboard.git](https://github.com/aTamQuietCode/weather-dashboard.git)
   ```
2. 依存関係のインストール
   ```bash
   npm install
   ```
3. 環境変数の設定
   ルートディレクトリに .env ファイルを作成し、APIキーを記述してください。
   ```コード スニペット
   VITE_OPENWEATHER_API_KEY=あなたのAPIキー
   ```
4. 開発サーバーの起動
   ```bash
   npm run dev
   ```