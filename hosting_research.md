# Top 3 Free Static-Site Hosting Options in 2026

## Overview

Static-site hosting has matured significantly, with major platforms offering generous free tiers, global CDN delivery, and seamless Git integration. Below is a detailed comparison of the three best free options for deploying a static portfolio site in 2026.

---

## 1. Vercel

**URL:** https://vercel.com

### Key Features
- **Global Edge Network:** Vercel operates a CDN with 300+ edge locations worldwide, ensuring sub-100ms latency for most users globally.
- **Git Integration:** Connect a GitHub, GitLab, or Bitbucket repository and every push to the main branch triggers an automatic deployment. Preview deployments are generated for every pull request.
- **Zero-Config Framework Support:** Native support for Next.js, Nuxt, SvelteKit, Astro, and plain HTML/CSS/JS projects. For a plain static site, Vercel detects the `index.html` at the root and serves it correctly.
- **Custom Domains:** Free SSL certificates via Let's Encrypt. Custom domain setup takes under 2 minutes with automatic DNS verification.
- **Analytics:** Built-in web analytics dashboard showing page views, unique visitors, and geographic distribution — no third-party scripts required.
- **Serverless Functions:** Free tier includes 100GB of bandwidth and 100,000 function invocations per month, useful if you later add a contact form backend.

### Free Tier Limits (2026)
| Resource | Limit |
|---|---|
| Bandwidth | 100 GB/month |
| Build Minutes | 6,000 minutes/month |
| Serverless Function Invocations | 100,000/month |
| Edge Middleware Requests | 1,000,000/month |
| Deployments | Unlimited |
| Team Members | 1 (solo) |

### Deployment Steps
1. Push your static site repository to GitHub.
2. Sign up at vercel.com with your GitHub account.
3. Click "Add New Project" and select your repository.
4. Vercel auto-detects the framework. For plain HTML, set the build command to empty and the output directory to `/`.
5. Click "Deploy" — your site goes live at `your-project.vercel.app` within 30 seconds.

### Pros
- Fastest deployment pipeline (typically under 60 seconds from push to live).
- Excellent developer experience with instant preview URLs for every branch.
- Built-in analytics without privacy concerns.
- Automatic HTTPS and HTTP/2.

### Cons
- Free tier is limited to solo developers (no team collaboration).
- Advanced features like edge caching rules require the Pro plan.
- Less flexible than Netlify for form handling without serverless functions.

---

## 2. Netlify

**URL:** https://netlify.com

### Key Features
- **Drag-and-Drop Deploy:** Upload a zip file or drag a folder directly to the Netlify dashboard for instant deployment — no Git required.
- **Git Integration:** Full CI/CD pipeline with GitHub, GitLab, and Bitbucket. Every branch gets a unique preview URL.
- **Netlify Forms:** Built-in form handling with spam protection, email notifications, and webhook forwarding — no backend needed. Free tier includes 100 form submissions per month.
- **Identity & Access:** Built-in authentication system with email, OAuth, and passwordless login options.
- **Functions:** Serverless functions powered by AWS Lambda, with 125,000 free invocations per month.
- **Image Optimization:** Automatic image resizing and format conversion (WebP, AVIF) via the Netlify Image CDN.
- **Branch Deployments:** Every Git branch gets its own live URL, making collaboration and review straightforward.

### Free Tier Limits (2026)
| Resource | Limit |
|---|---|
| Bandwidth | 100 GB/month |
| Build Minutes | 300 minutes/month |
| Serverless Function Invocations | 125,000/month |
| Form Submissions | 100/month |
| Deployments | Unlimited |
| Team Members | 1 (solo) |
| Custom Domains | 1 |

### Deployment Steps
1. Push your static site repository to GitHub.
2. Sign up at netlify.com with your GitHub account.
3. Click "Add new site" and select your repository.
4. Set the build command to empty and the publish directory to `/`.
5. Click "Deploy site" — your site goes live at `your-site.netlify.app`.

### Pros
- Drag-and-drop deployment is the easiest option for beginners.
- Built-in form handling eliminates the need for third-party services.
- Image optimization is automatic and requires no configuration.
- Excellent documentation and community support.

### Cons
- Build minutes on the free tier (300) are lower than Vercel's (6,000), which matters for complex builds.
- Custom domain setup requires manual DNS configuration in some cases.
- The free tier is limited to one custom domain.

---

## 3. GitHub Pages

**URL:** https://pages.github.com

### Key Features
- **Native GitHub Integration:** Hosting is built directly into GitHub. No third-party account needed — your repository is your hosting platform.
- **Jekyll Support:** Built-in Jekyll static site generator, though plain HTML works perfectly without it.
- **Custom Domains:** Support for custom domains with automatic SSL via Let's Encrypt.
- **GitHub Actions:** Use GitHub Actions workflows to automate builds and deployments directly from your repository.
- **Unlimited Bandwidth:** No bandwidth cap on the free tier — GitHub Pages serves unlimited traffic.
- **Repository-Level Hosting:** Each repository can have its own GitHub Pages site, making it easy to manage multiple projects.

### Free Tier Limits (2026)
| Resource | Limit |
|---|---|
| Bandwidth | Unlimited |
| Storage | 1 GB per repository |
| Build Minutes | 2,000 minutes/month (GitHub Actions) |
| Deployments | Unlimited |
| Team Members | Unlimited (public repos) |
| Custom Domains | Unlimited |

### Deployment Steps
1. Push your static site repository to GitHub.
2. Go to repository Settings > Pages.
3. Under "Build and deployment," select "Deploy from a branch."
4. Choose the `main` branch and the `/` (root) folder.
5. Click "Save" — your site goes live at `username.github.io/repo-name` within 1-2 minutes.

### Pros
- Completely free with no bandwidth limits — ideal for high-traffic sites.
- No separate account or platform required; everything stays within GitHub.
- Unlimited custom domains and team members on public repositories.
- GitHub Actions provides a powerful CI/CD pipeline for automated deployments.
- Best option for open-source projects and academic portfolios.

### Cons
- No built-in form handling or serverless functions.
- Deployment is slower than Vercel or Netlify (1-2 minutes vs. 30 seconds).
- Limited to GitHub repositories — no support for GitLab or Bitbucket.
- No built-in analytics or image optimization.
- Custom domain SSL setup can be finicky and may require manual DNS configuration.

---

## Comparison Summary

| Feature | Vercel | Netlify | GitHub Pages |
|---|---|---|---|
| **Bandwidth** | 100 GB/month | 100 GB/month | Unlimited |
| **Build Minutes** | 6,000/month | 300/month | 2,000/month |
| **Deploy Speed** | ~30 seconds | ~45 seconds | ~1-2 minutes |
| **Custom Domains** | Yes (free SSL) | Yes (free SSL) | Yes (free SSL) |
| **Form Handling** | Via serverless functions | Built-in (100/month) | Not available |
| **Image Optimization** | Via serverless functions | Built-in | Not available |
| **Analytics** | Built-in | Via Netlify Analytics | Not available |
| **Git Platforms** | GitHub, GitLab, Bitbucket | GitHub, GitLab, Bitbucket | GitHub only |
| **Drag-and-Drop** | No | Yes | No |
| **Serverless Functions** | 100K invocations/month | 125K invocations/month | Not available |
| **Team Members** | 1 (solo) | 1 (solo) | Unlimited (public) |

---

## Recommendation for This Portfolio Site

**Vercel** is the recommended hosting platform for this data-science student portfolio for the following reasons:

1. **Fastest deployment:** Sub-60-second deploy times ensure the site is live almost immediately after pushing to GitHub.
2. **Built-in analytics:** Track visitor engagement without adding third-party scripts that could affect page load performance.
3. **Edge network:** 300+ global locations ensure fast load times for visitors worldwide.
4. **Future-proof:** If the portfolio later needs serverless functions (e.g., for a contact form or API integration), Vercel's free tier provides 100,000 invocations per month.
5. **Simple configuration:** For a plain HTML/CSS/JS static site, Vercel requires zero configuration — just push and deploy.

**Runner-up:** Netlify is an excellent alternative if built-in form handling is needed, as its free tier includes 100 form submissions per month without requiring serverless functions.

**Best for unlimited bandwidth:** GitHub Pages is the best choice if the site is expected to receive very high traffic, as it has no bandwidth cap. However, it lacks the developer experience features of Vercel and Netlify.

---

## Sources

- Vercel Pricing: https://vercel.com/pricing
- Netlify Pricing: https://www.netlify.com/pricing/
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com/
