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
