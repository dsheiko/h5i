## Article list
Here a template for article (news, post, entry) list relying on [hNews microformat specification](http://microformats.org/wiki/hnews).

### Example Uses
```html
<section>
  <article class="hentry">
    <header>
      <h2 class="entry-title">Responsive Web Design with HTML5</h2>
      <time class="updated" datetime="2013-10-31 11:11:03-0400" pubdate>2013-10-31</time>
      <nav>
        Tags:
        <ul rel="tag">
          <li>HTML5</li>
          <li>RWD</li>
        </ul>
      </nav>
    </header>
    <div class="entry-summary">
      <p>...article summary text...</p>
    </div>
    <a rel="bookmark" href="http://dsheiko.com/weblog/responsive-web-design-with-html5/">Read Article</a>
  </article>
</section>
```

