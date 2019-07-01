---
title: Pseudo Classes and Pseudo Elements in CSS
date: "2019-06-30"
---

Pseudo -[pronounced soo-doh]- means something which isn’t real or gives a pretentious appearance of being real.

![pseudo](./pseudo.png)

Let’s start by understanding the difference between a pseudo class and pseudo element.

Pseudo class falls under the category of CSS selectors but behaves differently from simple selectors. It allows you to select elements which cannot be selected otherwise. Or simply put, Pseudo class is a CSS selector using which you can select something that is not possible with simple selectors. What’s interesting is, you can control and modify the state of the selected element depending on the action being performed.

With the introduction of CSS3, it is recommended to use colon(:) for pseudo classes and double colons(::) in case of pseudo elements. This also makes the difference a lot more clearer between the two.

Here’s a simple demonstration of a pseudo class (:hover) in action:

<iframe height="265" style="width: 100%;" scrolling="no" title="pseudo class" src="//codepen.io/notpluto/embed/preview/QYMreE/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/notpluto/pen/QYMreE/'>pseudo class</a> by srijan
  (<a href='https://codepen.io/notpluto'>@notpluto</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

For a detailed list on Pseudo Class: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

Similarly we will see that Pseudo Elements can be created using CSS but they do not exists in the regular document tree.

<iframe height="265" style="width: 100%;" scrolling="no" title="pseudo element" src="//codepen.io/notpluto/embed/preview/WLLKRq/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/notpluto/pen/WLLKRq/'>pseudo element</a> by srijan
  (<a href='https://codepen.io/notpluto'>@notpluto</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the above snippet we were able to generate an output without text being added to HTML body. This was achieved by using pseudo elements (::before and ::after) Before we explore Pseudo elements further we need to step back and talk about ‘when should we add content using CSS?’

As a thumb rule we shouldn’t use CSS generated content for important piece of information we wish to communicate to the user. This is because:

- A user will not be able to select that ‘content’ like normal text on the page.
- This content will probably get skipped over during Voiceover or while using a screen reader.

An index of pseudo elements can be seen here: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#Index_of_standard_pseudo-elements

Both of these together provide a lot more flexibility for a web-developer in presenting content to the user and are certainly worth experimenting.

I hoped you enjoyed reading my first article and now have a slightly better understanding of the topic. Thanks for reading!

