# GitHub Pages + お名前.com ドメイン設定ガイド

GitHub Pagesとお名前.comで取得したドメインを接続する手順です。

## 📝 前提条件

- ✅ GitHub Pagesでサイトが公開済み
- ✅ お名前.comでドメインを取得済み
- ✅ GitHubアカウントでログイン可能

---

## 🔧 ステップ1: GitHubリポジトリの確認

1. **現在のGitHub Pages URLを確認**
   - 例: `https://username.github.io/repository-name/`
   - または: `https://username.github.io/`

2. **リポジトリ設定を開く**
   - GitHubのリポジトリページにアクセス
   - 「Settings」タブをクリック
   - 左メニューから「Pages」を選択

---

## 🌐 ステップ2: GitHub Pagesでカスタムドメインを設定

### 2-1. カスタムドメインを入力

1. **GitHub Pages設定画面**
   - 「Custom domain」セクションを探す

2. **ドメイン名を入力**
   - 取得したドメインを入力（例: `es-symphony.co.jp`）
   - 「Save」をクリック

3. **DNSチェックを確認**
   - GitHub が DNS 設定を確認します
   - 一時的にエラーが表示されますが、後で解決します

### 2-2. HTTPS を有効化（重要）

- 「Enforce HTTPS」にチェックを入れる
- ※DNS設定後、24時間以内に自動的に有効になります

---

## 🔧 ステップ3: お名前.comでDNS設定

### 3-1. お名前.comにログイン

1. **お名前.com管理画面にアクセス**
   - https://www.onamae.com/
   - ログイン

2. **DNS設定画面を開く**
   - 「ドメイン一覧」から該当ドメインを選択
   - 「DNS設定/転送設定」をクリック
   - 「DNS設定」を選択

### 3-2. DNSレコードを設定

以下の4つのAレコードと1つのCNAMEレコードを追加します。

#### ✅ Aレコード（ルートドメイン用）

GitHub PagesのIPアドレスを設定します：

```
【レコード1】
ホスト名: @（または空欄）
TYPE: A
VALUE: 185.199.108.153
TTL: 3600

【レコード2】
ホスト名: @（または空欄）
TYPE: A
VALUE: 185.199.109.153
TTL: 3600

【レコード3】
ホスト名: @（または空欄）
TYPE: A
VALUE: 185.199.110.153
TTL: 3600

【レコード4】
ホスト名: @（または空欄）
TYPE: A
VALUE: 185.199.111.153
TTL: 3600
```

#### ✅ CNAMEレコード（wwwサブドメイン用）

```
ホスト名: www
TYPE: CNAME
VALUE: <あなたのGitHubユーザー名>.github.io
TTL: 3600
```

例: GitHubユーザー名が `essymphony` の場合
```
VALUE: essymphony.github.io
```

### 3-3. 設定を保存

- 「追加」または「確認画面へ進む」をクリック
- 設定内容を確認して「設定する」

---

## 📄 ステップ4: CNAMEファイルをリポジトリに追加

GitHubリポジトリに `CNAME` ファイルを追加します。

### 方法A: GitHubのWeb画面から追加

1. **リポジトリのルートディレクトリを開く**

2. **新しいファイルを作成**
   - 「Add file」→「Create new file」

3. **ファイル名を入力**
   - ファイル名: `CNAME`（拡張子なし、すべて大文字）

4. **ドメイン名を入力**
   - 内容: `es-symphony.co.jp`（改行なし、ドメイン名のみ）

5. **コミット**
   - 「Commit new file」をクリック

### 方法B: ローカルで追加してプッシュ

1. **CNAMEファイルを作成**
   ```bash
   echo "es-symphony.co.jp" > CNAME
   ```

2. **Gitにコミット**
   ```bash
   git add CNAME
   git commit -m "Add CNAME for custom domain"
   git push origin main
   ```

---

## ⏱️ ステップ5: 反映を待つ

### DNS反映時間
- **通常**: 数時間〜24時間
- **最大**: 72時間

### SSL証明書の発行
- DNS設定後、GitHubが自動的にSSL証明書を発行
- 「Enforce HTTPS」が有効になるまで最大24時間

---

## ✅ ステップ6: 動作確認

### 1. ドメインでアクセス
```
http://es-symphony.co.jp
```

ウェブサイトが表示されるか確認

### 2. HTTPSでアクセス
```
https://es-symphony.co.jp
```

SSL証明書が有効か確認（鍵マークが表示される）

### 3. wwwサブドメインも確認
```
https://www.es-symphony.co.jp
```

wwwありでもアクセスできるか確認

---

## 🆘 トラブルシューティング

### 問題1: 「DNS check unsuccessful」エラー

**原因**: DNS設定がまだ反映されていない

**解決策**:
- 24時間待つ
- お名前.comのDNS設定を再確認
- 設定したAレコードのIPアドレスが正しいか確認

### 問題2: サイトが表示されない

**原因**: CNAMEファイルが正しくない、またはDNS設定が間違っている

**解決策**:
1. リポジトリに `CNAME` ファイルが存在するか確認
2. CNAME ファイルの内容がドメイン名のみか確認（`https://` などの接頭辞は不要）
3. お名前.comのDNS設定を再確認
4. ブラウザのキャッシュをクリア

### 問題3: 「Enforce HTTPS」が有効にならない

**原因**: SSL証明書がまだ発行されていない

**解決策**:
- DNS設定後、24〜48時間待つ
- GitHub Pagesの設定で一度「Custom domain」を削除して再設定
- ブラウザで `https://` でアクセスしてみる

### 問題4: 404エラーが表示される

**原因**: リポジトリの構成やファイル配置が間違っている

**解決策**:
1. `index.html` がリポジトリのルートまたは公開ディレクトリに存在するか確認
2. GitHub Pagesの「Source」設定を確認（Branch: main, Folder: / (root)）
3. リポジトリが Public になっているか確認（Privateの場合はProプラン必要）

### 問題5: CSSや画像が表示されない

**原因**: 相対パスの設定が間違っている

**解決策**:
- HTMLファイル内の画像やCSSのパスを確認
- 相対パス（`images/logo.png`）または絶対パス（`/images/logo.png`）を使用
- `https://username.github.io/repository-name/` 形式の場合、パスに注意

---

## 📋 設定チェックリスト

カスタムドメイン設定が完了したか、以下を確認してください：

- [ ] GitHub Pagesの「Custom domain」にドメイン名を入力済み
- [ ] お名前.comでAレコード（4つ）を設定済み
- [ ] お名前.comでCNAMEレコード（www用）を設定済み
- [ ] GitHubリポジトリに `CNAME` ファイルを追加済み
- [ ] DNS設定の反映を待った（24時間以上）
- [ ] `http://ドメイン名` でアクセスできる
- [ ] `https://ドメイン名` でアクセスできる（SSL有効）
- [ ] GitHub Pagesの「Enforce HTTPS」が有効

---

## 🔒 セキュリティ設定（推奨）

### HTTPSリダイレクト

GitHub Pagesは自動的にHTTPからHTTPSにリダイレクトします。
「Enforce HTTPS」を有効にすることで、すべてのアクセスがHTTPSになります。

### robots.txt の確認

検索エンジン対策として、`robots.txt` がリポジトリのルートに配置されているか確認してください。

---

## 📞 サポート

- **GitHub Pages ドキュメント**: https://docs.github.com/ja/pages
- **お名前.com サポート**: https://www.onamae.com/support/
- **GitHub Community**: https://github.community/

---

## 💡 重要なポイント

1. **4つのAレコード**を正確に設定する（GitHubの冗長性のため）
2. **CNAMEファイル**をリポジトリに必ず配置
3. **DNS反映には時間がかかる**（焦らず待つ）
4. **HTTPS化は自動**（DNS設定後、GitHubが自動発行）

設定完了後、独自ドメインでウェブサイトにアクセスできるようになります！
