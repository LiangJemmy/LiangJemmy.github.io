// ===== 页脚年份自动更新 =====
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footerYear');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} 梁嘉铭 · 保持热爱，持续编码`;
    }

    // ===== 点击邮箱/GitHub链接时的控制台提示 =====
    const emailLink = document.getElementById('emailLink');
    const githubLink = document.getElementById('githubLink');

    if (emailLink) {
        emailLink.addEventListener('click', function (e) {
            console.log('📧 正在打开邮件客户端，发送至 3465463740@qq.com');
        });
    }

    if (githubLink) {
        githubLink.addEventListener('click', function (e) {
            console.log('🐙 正在跳转到 GitHub 主页：github.com/liangjiaming');
        });
    }

    console.log('✨ 个人简介已加载，极简风格 + 微交互');
});