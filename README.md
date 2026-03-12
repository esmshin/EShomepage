# 株式会社ESシンフォニー - コーポレートサイト

## プロジェクト概要

株式会社ESシンフォニー様のコーポレートサイトの基本構成を作成しました。タブ切り替え型のシングルページアプリケーション（SPA）として構築されており、レスポンシブデザインに対応しています。

## 現在完成している機能

### ✅ 実装済み機能

1. **タブナビゲーション**
   - ページ上部に5つのタブメニュー（ホーム、製品、事業紹介、会社概要、お問い合わせ）
   - タブクリックでページ遷移なしにコンテンツ切り替え
   - URLハッシュ対応（ブックマーク・共有可能）
   - ブラウザの戻る/進むボタン対応
   - ヘッダーにロゴ画像統合

2. **ホームページ**
   - ヒーローセクション（実際の画像配置済み、オーバーレイテキスト、「Read More」ボタン）
   - キャッチコピー：「技術によって実現する自然と生活の調和」
   - サブテキスト表示
   - Newsセクション（モーダルウィンドウ付きニュース表示）
   - 主力製品紹介セクション（Onari One シリーズ 2製品）
   - 我々の取り組み（3つのカード形式で表示）

3. **製品ページ（縦並びレイアウト）**
   - 製品詳細表示（Onari One Field / Onari One Portable）
   - 各製品に実際の製品画像配置
   - 製品概要、主な特徴、仕様表、PDFダウンロードボタン
   - 追加画像用プレースホルダー（サブ画像2枚分）
   - 2カラムレイアウト（画像 | 詳細情報）
   - 縦積みレイアウトで詳細情報を掲載可能
   - PDFパンフレット配置済み（Field用、Portable用）

4. **事業紹介ページ**
   - 音響による野生動物被害対策事業（詳細テキスト配置済み）
   - 工場内の機器監視事業（詳細テキスト配置済み）
   - 受託開発（詳細テキスト配置済み）
   - 各事業の理念・哲学を強調表示

5. **会社概要ページ**
   - 会社理念セクション（社名の由来、ミッション）
   - 会社情報を表形式で表示
   - 会社名、代表者、所在地、連絡先などの項目

6. **お問い合わせページ**
   - お問い合わせフォーム（会社名、お名前、メールアドレス、電話番号、件名、内容）
   - Formspree連携準備済み（メール送信機能）

7. **レスポンシブデザイン**
   - PC、タブレット、スマートフォンに対応
   - 768px以下、480px以下でレイアウト調整
   - 製品詳細ページのレスポンシブ対応（画像配置・テーブル表示切替）

8. **デザイン要素**
   - Font Awesome アイコン統合
   - Noto Sans JP フォント使用
   - ブランドカラー配色（背景 #FFFFFF、本文 #111111、セクション帯 #3A3F45、アクセント #FFD400/#FFA200）
   - 工学的で実直なトーンのデザイン
   - スムーズなアニメーション効果

## ファイル構成

```
/
├── index.html                          # メインHTMLファイル
├── css/
│   └── style.css                      # スタイルシート
├── js/
│   └── main.js                        # JavaScript（タブ切り替え、ニュースモーダル、フォーム処理）
├── images/
│   ├── logo.png                       # ヘッダーロゴ (10 KB)
│   ├── hero-image.jpg                 # ヒーロー画像 (292 KB)
│   ├── onari-one-field.jpg           # Onari One Field 製品画像 (1.6 MB)
│   └── onari-one-portable.jpg        # Onari One Portable 製品画像 (261 KB)
├── pdfs/
│   ├── onari-one-field-brochure.pdf   # Onari One Field パンフレット（4.87 MB）
│   └── onari-one-portable-brochure.pdf # Onari One Portable パンフレット（909 KB）
└── README.md                          # このファイル
```

## 利用している外部ライブラリ（CDN）

- **Font Awesome 6.4.0** - アイコンライブラリ
- **Google Fonts (Noto Sans JP)** - 日本語Webフォント

## 未実装・要追加の項目

### 📝 追加可能なコンテンツ

以下の項目はオプションとして追加可能です：

1. **ホームページ**
   - 我々の取り組みの各カード説明文（現在はプレースホルダー）
   - 追加のニュース記事（js/main.jsのnewsArticlesオブジェクトに追加）

2. **製品ページ**
   - 製品のサブ画像（追加写真2枚分のプレースホルダーあり）
   - 製品仕様の詳細データ（電源、音圧レベル、検知範囲など）
   - 製品の特徴の詳細説明文

3. **会社概要ページ**
   - 代表者名
   - 設立年月日
   - 資本金
   - 郵便番号・住所
   - 電話番号・FAX番号
   - メールアドレス
   （※現在はプレースホルダー表示）

4. **お問い合わせフォーム**
   - Formspreeの設定（YOUR_FORM_IDを実際のIDに置き換える必要があります）

### 🔧 Formspree設定方法

お問い合わせフォームでメールを受信するには：

1. [Formspree](https://formspree.io/) にアクセスしてアカウント作成
2. 新しいフォームを作成し、受信用のGmailアドレスを設定
3. 取得したフォームID（例：xbjqnndp）を確認
4. `index.html` の313行目を編集：
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   `YOUR_FORM_ID` を実際のIDに置き換える

## 推奨される次のステップ

1. **残りのコンテンツの追加**
   - 会社概要ページの具体的な情報（代表者名、住所、連絡先など）
   - 製品仕様の詳細データ
   - 製品のサブ画像（追加写真2枚）
   - 我々の取り組みの説明文

2. **お問い合わせフォームの有効化**
   - Formspreeアカウントを作成し、フォームIDを設定

3. **ニュース記事の追加**
   - js/main.jsのnewsArticlesオブジェクトに新しい記事を追加
   - HTMLのニュースリストに対応するli要素を追加

4. **Cloudflare Pagesでの公開**
   - Publishタブから公開
   - ランダムURLで限定公開（URLを知る人のみアクセス可能）

5. **SEO対策（オプション）**
   - meta description、keywords等の追加
   - OGPタグの設定（SNSシェア対応）

6. **アクセシビリティ向上（オプション）**
   - aria-label等の追加
   - キーボードナビゲーション対応の強化

7. **画像の最適化（オプション）**
   - WebP形式の使用を検討
   - 遅延読み込み（lazy loading）の実装

## デプロイ方法

### オプション1：Publishタブからデプロイ（推奨）

**Publishタブからワンクリックでデプロイ可能です**

Publishタブに移動して「公開」ボタンをクリックすると、自動的にサイトがデプロイされ、公開URLが発行されます。

### オプション2：全ファイルをダウンロードして外部サービスにデプロイ

**ダウンロード方法：**

画面左側のファイル一覧から、以下のファイル・フォルダをダウンロードしてください：

1. **HTMLファイル**
   - `index.html`

2. **CSSフォルダ**
   - `css/style.css`

3. **JavaScriptフォルダ**
   - `js/main.js`

4. **画像フォルダ**（全て含む）
   - `images/logo.png`
   - `images/hero-image.jpg`
   - `images/onari-one-field.jpg`
   - `images/onari-one-portable.jpg`

5. **PDFフォルダ**（全て含む）
   - `pdfs/onari-one-field-brochure.pdf`
   - `pdfs/onari-one-portable-brochure.pdf`

**ダウンロード後のフォルダ構成：**

```
your-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── hero-image.jpg
│   ├── onari-one-field.jpg
│   └── onari-one-portable.jpg
└── pdfs/
    ├── onari-one-field-brochure.pdf
    └── onari-one-portable-brochure.pdf
```

このフォルダ構成のまま、以下のサービスにアップロードできます：

- **Cloudflare Pages**：GitHubリポジトリ連携または直接アップロード
- **Netlify**：ドラッグ&ドロップで簡単デプロイ（https://app.netlify.com/drop）
- **Vercel**：GitHubリポジトリ連携
- **GitHub Pages**：リポジトリにプッシュして自動デプロイ

**注意事項：**
- 全ての画像は相対パスで設定済みです（外部URLから自己ホスト型に変更済み）
- フォルダ構成を維持してアップロードしてください

## 技術仕様

- **HTML5** - セマンティックなマークアップ
- **CSS3** - Flexbox、Grid、アニメーション
- **JavaScript (ES6+)** - タブ切り替え、フォーム処理
- **レスポンシブ対応** - モバイルファーストアプローチ

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- モバイルブラウザ（iOS Safari、Chrome Mobile）

## ライセンス

© 2024 株式会社ESシンフォニー All Rights Reserved.

---

## 開発メモ

- タブ切り替えはJavaScriptで実装（ページリロードなし）
- URLハッシュを使用してタブ状態を保持
- Formspreeを使用した静的サイト向けフォーム処理
- プレースホルダー画像は実際の画像に差し替える必要あり
