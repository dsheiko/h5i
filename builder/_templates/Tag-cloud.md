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
