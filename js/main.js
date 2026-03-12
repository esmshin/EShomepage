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
