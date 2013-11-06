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
