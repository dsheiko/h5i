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