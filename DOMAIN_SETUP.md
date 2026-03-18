# ドメイン設定ガイド（お名前.com）

お名前.comで取得したドメインをウェブサイトに接続する手順です。

## 📝 前提条件

- お名前.comでドメインを取得済み
- ウェブサイトのファイル一式が準備済み

---

## 🌐 方法1: Cloudflare Pages を使用する場合

### ステップ1: Cloudflare Pages にサイトをデプロイ

1. **Publishタブから公開**
   - または、https://pages.cloudflare.com/ でアカウント作成
   - GitHubリポジトリと連携、またはファイルを直接アップロード

2. **デフォルトURLを確認**
   - 例: `https://essymphony.pages.dev`

### ステップ2: Cloudflareでカスタムドメインを追加

1. **Cloudflare Pagesのプロジェクトを開く**
   - 「Custom domains」タブをクリック

2. **カスタムドメインを追加**
   - 「Set up a custom domain」をクリック
   - 取得したドメイン名を入力（例: `es-symphony.co.jp`）
   - 「Continue」をクリック

3. **DNS設定情報を確認**
   - Cloudflareが表示するDNS設定をメモ
   - 通常は以下のような設定：
     ```
     タイプ: CNAME
     名前: @ または www
     値: essymphony.pages.dev
     ```

### ステップ3: お名前.comでDNS設定

1. **お名前.comにログイン**
   - https://www.onamae.com/ にアクセス
   - ログインして管理画面へ

2. **DNS設定画面を開く**
   - 「ドメイン設定」→「DNS設定」
   - 該当ドメインを選択

3. **DNSレコードを追加**
   
   **Aレコード（ルートドメイン用）**
   ```
   ホスト名: @（空欄）
   TYPE: A
   VALUE: Cloudflareが指定したIPアドレス
   TTL: 3600
   ```

   **CNAMEレコード（wwwサブドメイン用）**
   ```
   ホスト名: www
   TYPE: CNAME
   VALUE: essymphony.pages.dev
   TTL: 3600
   ```

4. **設定を保存**

### ステップ4: SSL証明書の設定（自動）

- Cloudflare Pagesが自動的にSSL証明書を発行
- 24時間以内に `https://` でアクセス可能になります

---

## 🌐 方法2: Netlify を使用する場合

### ステップ1: Netlifyにサイトをデプロイ

1. **Netlifyにアクセス**
   - https://app.netlify.com/
   - GitHubアカウントでログイン

2. **サイトをアップロード**
   - 「Add new site」→「Deploy manually」
   - プロジェクトフォルダをドラッグ&ドロップ

3. **デフォルトURLを確認**
   - 例: `https://essymphony.netlify.app`

### ステップ2: Netlifyでカスタムドメインを追加

1. **サイト設定を開く**
   - 「Domain settings」をクリック

2. **カスタムドメインを追加**
   - 「Add custom domain」をクリック
   - ドメイン名を入力（例: `es-symphony.co.jp`）

3. **DNS設定情報を確認**
   - Netlifyが表示する設定をメモ

### ステップ3: お名前.comでDNS設定

1. **お名前.comにログイン**

2. **DNS設定画面を開く**

3. **Netlify DNSサーバーを設定**
   
   **方法A: ネームサーバー変更（推奨）**
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

   **方法B: DNSレコード追加**
   ```
   Aレコード:
   ホスト名: @
   TYPE: A
   VALUE: 75.2.60.5
   
   CNAMEレコード:
   ホスト名: www
   TYPE: CNAME
   VALUE: essymphony.netlify.app
   ```

4. **設定を保存**

---

## 🌐 方法3: Vercel を使用する場合

### ステップ1: Vercelにサイトをデプロイ

1. **Vercelにアクセス**
   - https://vercel.com/
   - GitHubアカウントでログイン

2. **プロジェクトをインポート**
   - 「Add New」→「Project」
   - GitHubリポジトリを選択またはファイルをアップロード

### ステップ2: Vercelでカスタムドメインを追加

1. **プロジェクト設定を開く**
   - 「Settings」→「Domains」

2. **カスタムドメインを追加**
   - ドメイン名を入力
   - Vercelが設定方法を表示

### ステップ3: お名前.comでDNS設定

- Vercelの指示に従ってDNSレコードを設定

---

## ⏱️ 反映時間

- **DNS設定の反映**: 数時間〜72時間
- **SSL証明書の発行**: 自動（数時間以内）

## ✅ 動作確認

1. **ドメインでアクセス**
   - ブラウザでドメイン名を入力
   - ウェブサイトが表示されるか確認

2. **HTTPSを確認**
   - URLが `https://` で始まることを確認
   - 鍵マークが表示されることを確認

3. **www付きURLも確認**
   - `www.ドメイン名` でもアクセスできるか確認

## 🆘 トラブルシューティング

### ドメインが表示されない
- DNS設定が反映されるまで最大72時間待つ
- お名前.comのDNS設定を再確認
- キャッシュをクリアしてから再度アクセス

### SSL証明書エラー
- 24時間待ってから再度確認
- ホスティングサービスのSSL設定を確認

### wwwあり/なしで挙動が違う
- 両方のDNSレコード（@とwww）が設定されているか確認
- ホスティングサービス側でリダイレクト設定

---

## 📞 サポート

- **お名前.com サポート**: https://www.onamae.com/support/
- **Cloudflare Pages ドキュメント**: https://developers.cloudflare.com/pages/
- **Netlify ドキュメント**: https://docs.netlify.com/
- **Vercel ドキュメント**: https://vercel.com/docs

---

**次のステップ**

1. 使用するホスティングサービスを決定
2. 取得したドメイン名を確認
3. 上記の手順に従って設定

設定完了後は、ドメイン名でウェブサイトにアクセスできるようになります。
