import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="/assets/logo/One-Captcha-Logo.png" alt="One Captcha Logo" />
            <span>One Captcha</span>
          </div>
        </nav>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>GDPR compliant secure Captcha</h1>
            <h2>
              Use One Captcha to protect websites from spam. One Captcha respects the privacy
              of its users and uses end-to-end encryption.
            </h2>
            <div className={styles.buttons}>
              <a href="https://xyehr.cn/blog/one-captcha" className={`${styles.btn} ${styles.btnPrimary}`}>
                Get Started
              </a>
              <a href="https://onecaptcha.us.kg/test" className={`${styles.btn} ${styles.btnSecondary}`}>
                Try Demo
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/assets/One-Captcha-Preview.png" alt="One Captcha Product" />
            <div className={styles.features}>
              <div className={styles.feature}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8z"/>
                </svg>
                <span>GDPR</span>
                <span>Compliant</span>
              </div>
              <div className={styles.feature}>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 6.50024C13.5 7.32867 12.8284 8.00024 12 8.00024C11.1716 8.00024 10.5 7.32867 10.5 6.50024C10.5 5.67182 11.1716 5.00024 12 5.00024C12.8284 5.00024 13.5 5.67182 13.5 6.50024Z" fill="#0066ff"/>
                  <path d="M6.05132 8.68402C5.87667 9.20796 6.15983 9.77428 6.68377 9.94893C6.85906 10.0071 7.03576 10.0613 7.21265 10.1143C7.5363 10.2114 7.98911 10.3408 8.50746 10.4704C9.08908 10.6158 9.78094 10.7687 10.4783 10.8727C10.4323 11.7654 10.3205 12.4059 10.2166 12.8309L8.10557 17.053C7.85858 17.547 8.05881 18.1477 8.55279 18.3947C9.04677 18.6417 9.64744 18.4414 9.89443 17.9475L12 13.7363L14.1056 17.9475C14.3526 18.4414 14.9532 18.6417 15.4472 18.3947C15.9412 18.1477 16.1414 17.547 15.8944 17.053L13.7834 12.8309C13.6795 12.4059 13.5677 11.7654 13.5217 10.8727C14.2191 10.7687 14.9109 10.6158 15.4925 10.4704C16.0109 10.3408 16.4637 10.2114 16.7873 10.1143C16.963 10.0616 17.1384 10.0077 17.3125 9.95015C17.8261 9.77972 18.1201 9.19822 17.9487 8.68402C17.7741 8.16012 17.2078 7.87697 16.6839 8.05151C16.5277 8.10318 16.3703 8.15138 16.2127 8.19867C15.9113 8.28907 15.4891 8.40969 15.0075 8.5301C14.0216 8.77657 12.8709 9.00024 12 9.00024C11.1291 9.00024 9.97843 8.77657 8.99254 8.5301C8.51089 8.40969 8.0887 8.28907 7.78735 8.19867C7.63167 8.15196 7.47632 8.10404 7.32186 8.05342C6.80235 7.88161 6.22544 8.16164 6.05132 8.68402Z" fill="#0066ff"/>
                </svg>
                <span>Verified</span>
                <span>Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
}
