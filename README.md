# **Next vs Gatsby**

## **Gatsby vs NextJS Similarities:**
Before we dive into the differences between the two frameworks, let us discuss a few similarities between them:

1. Both Gatsby and NextJS are React-based frameworks with many features that React does not support natively.
2. As both deliver pre-rendered HTML, websites are SEO friendly.
3. Code-splitting and code optimisation are taken care out of the box by both these frameworks with built-in routing.
4. The page load speed is fast in both NextJS and Gatsby as they pre-fetch the links before they appear in the viewport of the user.
5. Both of these frameworks support Static-Site Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR).
6. Similiarities in Image Optimization:

    * Both offer to resize and optimize images

    * Both lazy-load by default to speed up page loads

    * Both prevent layout shift by specifying the placeholder size

    * Both use sharp locally for the image optimization

    * Both allow you to adjust the quality of images

## **Gatsby vs NextJS Differences:**

1. **Data Fetching:**

    Gatsby: Gatsby does support sourcing data without using GraphQL, but It prefers and recommends data fetching done via GraphQL.

    NextJS: NextJS allows to implement data fetching via REST API, GraphQL, or Anything else.

    Conclusion: GATSBY is perfect for you if you wish to stick with GraphQL or want to use it as an opportunity to learn it.However, if you do not like GraphQL then NextJS may suit you better.

2. **Plugin & Starter Templates:**

    Gatsby: It provides a community driven plugin ecosystem that allows you to get started quickly and utilise some great features.

    NextJS: NextJS does not have a plugin ecosystem like gatsby. Developers have to do all of the setup by themselves.

    Conclusion: If you wish to have full control over your project and data system, then NextJS will be better option.If you don't want control over your project and don't want to do manual setup and want to utilise great gatsby plugin features, then Gatsby is for you.
3. **Rendering approach:**

    both of the frameworks now support Server Side Rendering (SSR), Static Site Generation (SSG), Client Side Rendering(CSR). The only Difference is in the way these frameworks handle deferred rendering.

    Gatsby: It uses something called Deferred Static Generation (DSG). Deferred Static Generation is developers can choose to defer building certain pages until the first time a user requests it. DSG is just delaying the generation of static pages. So, DSG will improve build time of gatsby application. Once a page is generated (upon first request), it's just static. If your data changes, Gatsby rebuilds the page engine and invalidates the DSG page. Then it’s rebuilt on next request.

    NextJS: It uses something called Incremental Static Regeneration (ISR).Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, without needing to rebuild the entire site.ISR will be able regenerate your page on a given interval. Once a page is generated, it'll be served from cache till the time it is regenerated and the regeneration happens in the background. This is really powerful as the page regeneration will be able to fetch updated data from your data source.

    Conclusion: Depending on how frequently your data changes, you can use either approach. Where Gatsby provides a more robust data state, NextJS provides up-to-date data upon user request. It is also worth mentioning that because Gatsby uses the data from the last full build, it is a more robust offering because gatsby is not dependent on any third-party APIs. but, With Next.js if any third-party APIs go offline as ISR tries to render a page, the build fails and you’re stuck with old data and stale page. As mentioned before it comes down to how essential the latest data is for you, From that you have to decide what framework you want to use.

4. **Image Optimization:**

    Gatsby: There is one plugin in gatsby called gatsby-image, resizes your images at build time, meaning smaller screen devices like smartphones no longer have to download desktop-sized images. Gatsby Image is not a drop-in replacement for img tags. It's instead optimized for fixed width and height images. So there's some options for img that aren't available for Gatsby Image. Gatsby Image is based around GraphQL. Gatsby Image optimizes all images at build-time. This can increase build times as the number of images in your repo increases. Gatsby Image supports blur-up placeholders.

    NextJS: It provides a tag for automatic image optimisation to convert the images to the modern image format WebP that provides the highest quality and best size. next/image optimizes images on demand. This can reduce overall build time. next/image can support remote images from any CMS.

    Conclusion: Gatsby Image is based around GraphQL, where next/image is not opinionated about how you fetch your images (local or remote). So, Gatsby is for you if you are using GraphQL or want to learn GraphQL. However, if you don't like GraphQL then NextJS is the better option.