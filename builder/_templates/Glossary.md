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