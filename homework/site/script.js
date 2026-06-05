/* ============================================
   網頁設計作業總覽 - 互動腳本
   ============================================ */

(function () {
    'use strict';

    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    /* -------- 手機版選單切換 -------- */
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    /* -------- 滾動時自動高亮當前導覽項目 -------- */
    function setActiveLink() {
        const scrollY = window.pageYOffset;
        const offset = 120;

        let current = 'home';
        sections.forEach(section => {
            const top = section.offsetTop - offset;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                current = id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    /* -------- 滾動時元素淡入動畫 -------- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .code-block, .learn-box, .version, .reflection, .link-box, .ex, .terminal, .block-title, .api-grid').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });

    /* -------- 程式碼區塊:點擊複製 -------- */
    document.querySelectorAll('.code-block, .terminal').forEach(block => {
        block.style.position = 'relative';
        block.style.cursor = 'copy';

        const hint = document.createElement('span');
        hint.textContent = '點擊複製';
        hint.style.cssText = `
            position: absolute;
            top: 12px;
            right: 90px;
            font-size: 11px;
            color: var(--text-muted);
            background: var(--bg);
            padding: 3px 8px;
            border-radius: 4px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s;
        `;
        block.appendChild(hint);

        block.addEventListener('mouseenter', () => {
            hint.style.opacity = '1';
        });
        block.addEventListener('mouseleave', () => {
            hint.style.opacity = '0';
        });

        block.addEventListener('click', async (e) => {
            if (e.target.tagName === 'A') return;
            const pre = block.querySelector('pre');
            if (!pre) return;
            try {
                await navigator.clipboard.writeText(pre.textContent);
                const original = hint.textContent;
                hint.textContent = '✓ 已複製';
                hint.style.color = 'var(--accent-5)';
                setTimeout(() => {
                    hint.textContent = original;
                    hint.style.color = '';
                }, 1200);
            } catch (err) {
                console.warn('複製失敗:', err);
            }
        });
    });

    /* -------- 頁面載入完成後的初始化 -------- */
    window.addEventListener('load', () => {
        setActiveLink();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });

    /* -------- Tab 切換 (30 題總覽) -------- */
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const target = document.getElementById(targetId);
            if (target) target.classList.add('active');
        });
    });

    /* -------- Console 彩蛋 -------- */
    console.log(
        '%c🎬 「劇」在一起 作業總覽網站 ',
        'background: linear-gradient(135deg, #7c5cff, #00d4ff); color: white; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: bold;'
    );
    console.log('%c陳郁安 ・ 國立金門大學 資工系 ・ 114 學年度第 2 學期', 'color: #9a9aae; font-size: 12px;');
})();
