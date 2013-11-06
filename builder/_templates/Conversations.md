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