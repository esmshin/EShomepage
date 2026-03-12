// ========================================
// タブ切り替え機能
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // タブアイテムとコンテンツを取得
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    // URLハッシュから初期表示のタブを決定
    function initializeTab() {
        const hash = window.location.hash.substring(1) || 'home';
        activateTab(hash);
    }

    // タブをアクティブ化する関数
    function activateTab(tabId) {
        // すべてのタブとコンテンツから active クラスを削除
        tabItems.forEach(item => item.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // 指定されたタブとコンテンツに active クラスを追加
        const targetTab = document.querySelector(`.tab-item[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(tabId);

        if (targetTab && targetContent) {
            targetTab.classList.add('active');
            targetContent.classList.add('active');
        }

        // ページトップにスクロール
        window.scrollTo(0, 0);
    }

    // タブクリックイベントの設定
    tabItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            window.location.hash = tabId;
            activateTab(tabId);
        });
    });

    // ブラウザの戻る/進むボタンへの対応
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1) || 'home';
        activateTab(hash);
    });

    // 初期化
    initializeTab();
});

// ========================================
// ニュース記事詳細表示機能
// ========================================
const newsArticles = {
    'fukushima-bear': {
        date: '2024.12.00',
        category: 'プレスリリース',
        title: '福島市でのクマ対策の取り組みが複数のメディアで紹介されました',
        content: `
            <p>当社が取り組んでいる野生動物対策の活動について、福島市でのクマ対策の事例が複数のメディアにて紹介されました。</p>
            
            <p>近年、気候変動や山間地域の環境変化の影響などにより、クマをはじめとする野生動物の人里への出没が全国的に増加しています。福島市においてもクマの出没件数は増加傾向にあり、住民の安全確保が重要な課題となっています。</p>
            
            <p>このような状況に対し、自治体による対策の一つとして、音によって野生動物の接近を抑制する装置が活用されています。本取り組みでは、野生動物が嫌がる音を用いた装置により住宅地への接近を抑制することで、被害の未然防止を図る試みが行われています。</p>
            
            <p>また、福島市では状況に応じて緊急銃猟制度を活用するなど、住民の安全を守るための多面的な対策が進められています。今回の報道では、こうした対策の一環として音響装置を活用した取り組みが紹介されました。</p>
            
            <p>当社では今後も、人と野生動物が共存できる社会の実現を目指し、音響技術を活用した野生動物対策の研究・開発および社会実装を進めてまいります。</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('newsModal');
    const modalBody = document.getElementById('newsModalBody');
    const closeBtn = document.querySelector('.news-modal-close');
    
    // ニュースタイトルクリック時
    document.querySelectorAll('.news-title').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const newsId = this.getAttribute('data-news-id');
            
            if (newsId && newsArticles[newsId]) {
                const article = newsArticles[newsId];
                modalBody.innerHTML = `
                    <div class="news-article">
                        <div class="news-article-header">
                            <span class="news-article-date">${article.date}</span>
                            <span class="news-article-category">${article.category}</span>
                        </div>
                        <h2 class="news-article-title">${article.title}</h2>
                        <div class="news-article-content">
                            ${article.content}
                        </div>
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // 閉じるボタン
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // モーダル外クリックで閉じる
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// ========================================
// お問い合わせフォームの処理
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // フォームのデフォルト動作を一時的に防止（検証のため）
            const submitButton = this.querySelector('.btn-submit');
            
            // 送信中の表示
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';

            // Formspreeが処理するため、実際の送信は継続
            // この関数は送信前の視覚的なフィードバックのみを提供
        });
    }
});

// ========================================
// スムーズスクロール機能（オプション）
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // ハッシュのみのリンク（タブ切り替え）は処理しない
        if (href === '#' || href.startsWith('#home') || href.startsWith('#products') || 
            href.startsWith('#business') || href.startsWith('#company') || href.startsWith('#contact')) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// レスポンシブメニューの開閉（モバイル対応）
// ========================================
window.addEventListener('resize', function() {
    // ウィンドウサイズ変更時の処理（必要に応じて追加）
});

// ========================================
// ページ読み込み時のアニメーション
// ========================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
