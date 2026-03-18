# Formspree 設定ガイド

お問い合わせフォームを有効化するための設定手順です。

## 📧 ステップ1: Formspreeアカウント作成

1. **Formspree公式サイトにアクセス**
   - https://formspree.io/

2. **アカウント登録**
   - 画面右上の「Sign Up」をクリック
   - メールアドレスとパスワードを入力
   - または、GitHubアカウントでログイン

3. **メール認証**
   - 登録したメールアドレスに確認メールが届きます
   - メール内のリンクをクリックして認証完了

## 📝 ステップ2: フォームを作成

1. **ダッシュボードにログイン**
   - https://formspree.io/forms にアクセス

2. **新しいフォームを作成**
   - 「+ New Form」ボタンをクリック

3. **フォーム情報を入力**
   - **Form Name**: `ESシンフォニー お問い合わせ` （任意の名前）
   - **Email**: `info@es-symphony.co.jp` （問い合わせを受信するメールアドレス）
   - 「Create Form」をクリック

4. **フォームIDを取得**
   - フォーム作成後、画面に **Form ID** が表示されます
   - 例: `xbjqnndp` や `abc123def` のような英数字の文字列
   - **このIDをコピーしてメモしてください**

## 🔧 ステップ3: HTMLファイルを更新

1. **index.htmlファイルを開く**

2. **364行目を探す**
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

3. **YOUR_FORM_IDを置き換える**
   - `YOUR_FORM_ID` の部分を、ステップ2で取得した実際のフォームIDに置き換えます
   
   例: フォームIDが `xbjqnndp` の場合
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/xbjqnndp" method="POST">
   ```

4. **ファイルを保存**

## ✅ ステップ4: 動作確認

1. **ウェブサイトを公開**
   - ファイルをアップロードまたはデプロイ

2. **テスト送信**
   - お問い合わせフォームに情報を入力して送信
   - 初回送信時、Formspreeの確認ページが表示されます
   - 「Confirm your email」をクリック

3. **メール受信確認**
   - `info@es-symphony.co.jp` にお問い合わせ内容が届くことを確認

## 🎛️ オプション設定（推奨）

Formspreeのダッシュボードで以下の設定が可能です：

### 1. **自動返信メール設定**
   - Settings → Autoresponder
   - お問い合わせ送信者に自動返信メールを送信

### 2. **スパム対策**
   - Settings → Spam Protection
   - reCAPTCHAやハニーポットでスパムを防止

### 3. **通知設定**
   - Settings → Notifications
   - 複数のメールアドレスに通知を送信可能

### 4. **送信完了後のリダイレクト**
   - フォーム送信後に特定のページにリダイレクト可能

## 💡 料金プラン

- **Freeプラン**: 月50件まで無料
- **Basicプラン**: $10/月（月1,000件まで）
- **Goldプラン**: $40/月（月10,000件まで）

通常の企業サイトであれば、Freeプランで十分です。

## 🆘 トラブルシューティング

### フォームが送信されない
- フォームIDが正しく設定されているか確認
- ブラウザのコンソールでエラーを確認

### メールが届かない
- Formspreeのダッシュボードで送信履歴を確認
- 迷惑メールフォルダを確認
- 受信メールアドレスが正しいか確認

### 送信ボタンを押すとエラーページに飛ぶ
- `YOUR_FORM_ID` が実際のIDに置き換えられていない可能性
- index.htmlの364行目を再確認

## 📞 サポート

Formspreeの公式ドキュメント: https://help.formspree.io/

---

設定が完了したら、このファイルは削除しても構いません。
