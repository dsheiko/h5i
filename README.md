# Semantic HTML5 Templates
Collection of templates and snippets of semantic HTML that can be used as boilerplate while working on markup

* Source: https://github.com/dsheiko/h5i
* Homepage: http://dsheiko.github.io/h5i/
* Twitter: [@sheiko](https://twitter.com/sheiko)



## Article details
Here a comprehensive template for article (news, post, entry) details relying on [hNews microformat specification](http://microformats.org/wiki/hnews).

### Example Uses
```html
<article class="hentry">
  <header>
    <h2 class="entry-title">But Will It Make You Happy?</h2>
    <time class="updated" datetime="2010-08-07 11:11:03-0400" pubdate>08-07-2010</time>
    <p class="byline author vcard">
        By <span class="fn">Stephanie Rosenbloom</span>
    </p>
  </header>

  <div class="entry-content">
      <p>...article text...</p>
      <p>...article text...</p>

      <figure>
        <img src="tammy-strobel.jpg" alt="Portrait of Tammy Strobel" />
        <figcaption>Tammy Strobel in her pared-down, 400sq-ft apt.</figcaption>
      </figure>

      <p>...article text...</p>
      <p>...article text...</p>

      <aside>
        <h2>Share this Article</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Etc</li>
        </ul>
      </aside>

      <div class="entry-content-asset">
        <a href="photo-full.png">
          <img src="photo.png" alt="The objects Tammy removed from her life after moving" />
        </a>
      </div>

      <p>...article text...</p>
      <p>...article text...</p>

      <a class="entry-unrelated" href="http://fake.site/">Find Great Vacations</a>
  </div>

  <footer>
    <p>
      A version of this article appeared in print on August 8,
      2010, on page BU1 of the New York edition.
    </p>
    <div class="source-org vcard copyright">
        Copyright 2010 <span class="org fn">The New York Times Company</span>
    </div>
  </footer>
</article>
```

### Source
[http://www.readability.com/developers/guidelines#reader](http://www.readability.com/developers/guidelines#reader)

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


## Bread crumb navigation
The template shows markup for a generic widget used to indicate current page within the pagination path.
The path direction is represented by the right arrow symbol "→" and text lables provide user context.

### Example Uses
```html
<nav>
  <h2>You are here:</h2>
  <ul id="navlist">
    <li><a href="/">Main</a> →</li>
    <li><a href="/products/">Products</a> →</li>
    <li><a href="/products/dishwashers/">Dishwashers</a> →</li>
    <li><a>Second hand</a></li>
  </ul>
</nav>
```
### Source
[http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#rel-up](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#rel-up)

## Company info
Here a template for company information mark up relying on [vCard microformat specification](http://microformats.org/wiki/vcard).

### Example Uses
```html
<div class="vcard">
   <span class="fn org">Crytek Frankfurt</span>
   Located at
    <address class="adr">
       <span class="street-address">Grüneburgweg 16-18</span>,
       <span class="locality">Frankfurt am Main</span>,
       <span class="region">Germany</span>.
    </address>
    <figure>
      <img class="logo" src="http://www.example.com/logo.png" alt="Crytek logo" />
      <figcaption>Crytek Frankfurt</figcaption>
    </figure>
   Phone: <a class="tel" href="tel:+111-111-111">111-111-111</a>
   <a href="http://crytek.com" class="url">http://crytek.com</a>
</div>
```

### Source
[https://support.google.com/webmasters/answer/146861](https://support.google.com/webmasters/answer/146861)
## Conversations
As HTML does not have any explicit way to mark up interactive conversations, here goes an example provided by W3C that can be used as a template for the case.

### Example Uses
```html
<p> Next, you meet a fisherman. You can say one of several greetings:
</p><dl>
 <dt> "Hello there!"
 </dt><dd>
  <p> He responds with "Hello, how may I help you?"; you can respond with:
  </p><dl>
   <dt> "I would like to buy a fish."
   </dt><dd> <p> He sells you a fish and the conversation finishes.
   </p></dd><dt> "Can I borrow your boat?"
   </dt><dd>
    <p> He is surprised and asks "What are you offering in return?".
    </p><dl>
     <dt> "Five gold." (if you have enough)
     </dt><dt> "Ten gold." (if you have enough)
     </dt><dt> "Fifteen gold." (if you have enough)
     </dt><dd> <p> He lends you his boat. The conversation ends.
     </p></dd><dt> "A fish." (if you have one)
     </dt><dt> "A newspaper." (if you have one)
     </dt><dt> "A pebble." (if you have one)
     </dt><dd> <p> "No thanks", he replies. Your conversation options
     at this point are the same as they were after asking to borrow
     his boat, minus any options you've suggested before.
    </p></dd></dl>
   </dd>
  </dl>
 </dd>
 <dt> "Vote for me in the next election!"
 </dt><dd> <p> He turns away. The conversation finishes.
 </p></dd><dt> "Sir, are you aware that your fish are running away?"
 </dt><dd>
  <p> He looks at you skeptically and says "Fish cannot run, sir".
  </p><dl>
   <dt> "You got me!"
   </dt><dd> <p> The fisherman sighs and the conversation ends.
   </p></dd><dt> "Only kidding."
   </dt><dd> <p> "Good one!" he retorts. Your conversation options at this
   point are the same as those following "Hello there!" above.
   </p></dd><dt> "Oh, then what are they doing?"
   </dt><dd> <p> He looks at his fish, giving you an opportunity to steal
   his boat, which you do. The conversation ends.
  </p></dd></dl>
 </dd>
</dl>
```

### Source
[http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#conversations](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#conversations)
## Download link
HTML5 allows you to specify the name, which will be used to store file locally when it is downloaded by the link.

### Example Uses
```html
<!-- will download as "expenses.pdf" -->
<a href="/files/adlafjlxjewfasd89asd8f.pdf" download="expenses.pdf">Download Your Expense Report</a>
```

### Source
[http://www.catswhocode.com/blog/hyper-useful-ready-to-use-html5-snippets](http://www.catswhocode.com/blog/hyper-useful-ready-to-use-html5-snippets)

## Figure + WAI-ARIA
To declare for wider range of access devices that a reference in the text points
to some particular `figure` related with `figcaption` we group these elements by using attribute `aria-labelledby`.

### Example Uses
```html
<a href="#fig1">Figure 1</a>
<figure id="fig1" role="group" aria-labelledby="caption">
  <figcaption id="caption">Code example</figcaption>
       <pre>
       ...
       </pre>
</figure>
```

### Source
[http://www.creativebloq.com/html5/5-html5-and-aria-design-patterns-7133753](http://www.creativebloq.com/html5/5-html5-and-aria-design-patterns-7133753)

# Footnotes: annotations
Paragraphs contain links leading to the footnotes, where the note is linked back to the paragraph as well.

### Example Uses
```html
<article>
<p>
  Announcer: Number 16: The <i>hand</i>.
</p>
<p>
    Interviewer: Good evening. I have with me in the studio tonight
    Mr Norman St John Polevaulter, who for the past few years has been
    contradicting people. Mr Polevaulter, why <em>do</em> you
    contradict people?
</p>
<p>
  Norman: I don't. <sup><a id="r1" href="#fn1">[1]</a></sup>
</p>
<p>
  Interviewer: You told me you did!
    ...
</p>
</article>
<section>
  <p id="fn1"><a href="#r1">[1]</a> This is, naturally, a lie,
    but paradoxically if it were true he could not say so without
    contradicting the interviewer and thus making it false.
  </p>
</section>
```

### Source
[http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#footnotes](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#footnotes)
## Footnotes: side notes
When dealing with side notes (longer annotations on entire sections of text) it makes sense to use aside element.

### Example Uses

```html
<p>
  <span class="speaker">Customer</span>: I will not buy this record, it is scratched.
</p>
<p>
  <span class="speaker">Shopkeeper</span>: I'm sorry?
</p>
<p>
  <span class="speaker">Customer</span>: I will not buy this record, it is scratched.
</p>
<p>
  <span class="speaker">Shopkeeper</span>: No no no, this's'a tobacconist's.
</p>
<aside>
  <p>In 1970, the British Empire lay in ruins, and foreign
   nationalists frequented the streets — many of them Hungarians
   (not the streets — the foreign nationals). Sadly, Alexander
   Yalt has been publishing incompetently-written phrase books.
  </p>
</aside>
```
### Source
[http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#footnotes](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#footnotes)
## Form
HTML5 introduces quite many new elements and attributes related to input and forms. Here an example of a form based on the spec.

### Example Uses
```html
<form class="example1">
    <label for="name">Name:</label>
    <input type="text" placeholder="Name" required="true" name="name"  />
    <label for="email">Email:</label>
    <input type="email" placeholder="Email" autofocus="true" required="true" name="email" />
    <label for="name">Age:</label>
    <input type="number" required="true" name="age" min="18" max="100" />
    <label for="email">Promo code:</label>
    <input type="text" name="promocode" required="true" pattern="[A-Z]{3}[0-9]{4}"
title="Promo code consist of 3 uppercase letters followed by 4 digits." />
    <label for="email">Tel:</label>
     <input type="tel" name="tel" required="true" pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
title="Please enter valid tel." />
    <button type="submit">Submit</button>
</form>
```

### Source
[http://www.html5rocks.com/en/tutorials/forms/html5forms/#toc-inputs-attributes-elements](http://www.html5rocks.com/en/tutorials/forms/html5forms/#toc-inputs-attributes-elements)

## Glossary of terms
While marking up a glossary the definition list (`dl`) is appropriate element. However one shall not forget using use `dfn` to indicate that the word is defined here.

### Example Uses
```html
<h2>Glossary</h2>
<dl>
  <dt><dfn>Progressive enhancement</dfn></dt>
  <dd>A strategy for web design that emphasizes accessibility, semantic HTML markup, and external stylesheet and scripting technologies.</dd>
  <dd>
    A methodology that allows Web developers to concentrate on building the best possible websites while balancing the issues inherent in those websites
    being accessed by multiple unknown user-agents.
  </dd>

  <dt><dfn>Fault-tolerance</dfn></dt>
  <dt><dfn>Graceful degradation</dfn></dt>
  <dd>The property that enables a system (often computer-based) to continue operating properly in the event of the failure of (or one or more faults within) some of its components</dd>
</dl>
```
### Source
[http://html5doctor.com/the-dl-element/](http://html5doctor.com/the-dl-element/)
## Holy Grail Layout
Here the template of a generic [or as MDN has put it - Holy Grail Layout](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes).

### Example Uses
```html
<header>
  <nav>
    <ul>
      <li>Your menu</li>
    </ul>
  </nav>
</header>

<section>

  <article>
    <header>
      <h2>Article title</h2>
      <p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p>
    </header>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  </article>

  <article>
    <header>
      <h2>Article title</h2>
      <p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p>
    </header>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  </article>

</section>

<aside>
  <h2>About section</h2>
  <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</aside>

<footer>
  <p>Copyright 2009 Your name</p>
</footer>
```

### Source
[http://css-tricks.com/snippets/html/html5-page-structure](http://css-tricks.com/snippets/html/html5-page-structure)

## Metadata
Using definition list (`dl`) keep in mind that it one definition may be supported with  multiple descriptions and
contrariwise multiple variations of a definition may have the same description.

### Example Uses
```html
<dl>
  <dt>Authors:</dt>
  <dd>Remy Sharp</dd>
  <dd>Rich Clark</dd>
  <dt>Editor:</dt>
  <dd>Brandan Lennox</dd>
  <dt>Category:</dt>
  <dd>Comment</dd>
</dl>
```
### Source
[http://html5doctor.com/the-dl-element/](http://html5doctor.com/the-dl-element/)
## Quotation
Elements `blockquote` and `cite` were reconsidered in the latest HTML5 specification.
Here an example of appropriate use of them in a combination.

### Example Uses
```html
<blockquote>
  <p>JavaScript: The World's Most Misunderstood Programming Language</p>
  <footer>
  — <cite><a href="http://www.crockford.com/javascript/javascript.html">Douglas Crockford</a></cite>
  </footer>
</blockquote>
```

### Source
[http://html5doctor.com/cite-and-blockquote-reloaded/](http://html5doctor.com/cite-and-blockquote-reloaded/)

## Subheadings, subtitles, alternative titles and taglines
The template show how group heading lines according to the W3C recommendations.
### Example Uses
```html
<header>
  <h2>3D films set for popularity slide </h2>
  <p>
    First drop in 3D box office projected for this year despite hotly tipped summer blockbusters,
   according to Fitch Ratings report
  </p>
</header>
```
### Source
[http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#sub-head](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#sub-head)

## Tag clouds
HTML has no special elements for marking up lists of keywords that apply to a
group of pages (aka tag clouds). W3C recommends relying on list (`ul`) with explicit inline counts that are then hidden and turned into a
presentational effect using a style sheet, or to use SVG.

### Example Uses
```html
<style>
@media screen, print, handheld, tv {
  /* should be ignored by non-visual browsers */
  .tag-cloud > li > span { display: none; }
  .tag-cloud > li { display: inline; }
  .tag-cloud-1 { font-size: 0.7em; }
  .tag-cloud-2 { font-size: 0.9em; }
  .tag-cloud-3 { font-size: 1.1em; }
  .tag-cloud-4 { font-size: 1.3em; }
  .tag-cloud-5 { font-size: 1.5em; }
}
</style>
...
<ul class="tag-cloud">
 <li class="tag-cloud-4"><a title="28 instances" href="/t/apple">apple</a> <span>(popular)</span>
 </li><li class="tag-cloud-2"><a title="6 instances" href="/t/kiwi">kiwi</a> <span>(rare)</span>
 </li><li class="tag-cloud-5"><a title="41 instances" href="/t/pear">pear</a> <span>(very popular)</span>
</li></ul>
```
### Source
[http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#rel-up](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#rel-up)

## Video
Here just an universal snippet for video element with all the relevant fall-backs.
### Example Uses
```html
<!-- first try HTML5 playback: if serving as XML, expand `controls` to `controls="controls"` and autoplay likewise -->
<!-- warning: playback does not work on iOS3 if you include the poster attribute! fixed in iOS4.0 -->
<video width="640" height="360" controls>
	<!-- MP4 must be first for iPad! -->
	<source src="__VIDEO__.MP4" type="video/mp4" /><!-- Safari / iOS video    -->
	<source src="__VIDEO__.OGV" type="video/ogg" /><!-- Firefox / Opera / Chrome10 -->
	<!-- fallback to Flash: -->
	<object width="640" height="360" type="application/x-shockwave-flash" data="__FLASH__.SWF">
		<!-- Firefox uses the `data` attribute above, IE/Safari uses the param below -->
		<param name="movie" value="__FLASH__.SWF" />
		<param name="flashvars" value="controlbar=over&amp;image=__POSTER__.JPG&amp;file=__VIDEO__.MP4" />
		<!-- fallback image. note the title field below, put the title of the video there -->
		<img src="__VIDEO__.JPG" width="640" height="360" alt="__TITLE__"
		     title="No video playback capabilities, please download the video below" />
	</object>
</video>
<!-- you *must* offer a download link as they may be able to play the file locally. customise this bit all you want -->
<p>	<strong>Download Video:</strong>
	Closed Format:	<a href="__VIDEO__.MP4">"MP4"</a>
	Open Format:	<a href="__VIDEO__.OGV">"Ogg"</a>
</p>
```

### Source
[http://css-tricks.com/snippets/html/video-for-everybody-html5-video-with-flash-fallback/](http://css-tricks.com/snippets/html/video-for-everybody-html5-video-with-flash-fallback/)
