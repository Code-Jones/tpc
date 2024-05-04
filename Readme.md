## Todo List

- [X] Fix images
- [X] Add dns to domain
- [X] Add readme instructions
- [X] Add layout for about page
- [X] Keep footer on bottom of page
- [X] Style list pages more
- [X] Contact form
- [ ] Captcha


## Markdown
This site give the basic syntax for markdown.
https://www.markdownguide.org/basic-syntax/

Write like normal but use the following syntax to format the text as you would like. 

Any special styling I will do myself.

by the way, this is markdown I'm writing right now.

```markdown
# This is a heading
## This is a subheading
- This is a list item
- [ ] This is a list item
- [X] This is a completed list item
```
but when it's rendered it looks like this:
# This is a heading
## This is a subheading
- This is a list item
- [ ] This is a list item
- [X] This is a completed list item

## To change a page content

1. press the period button on your keyboard to open a in web editor, let it load completely.

you should see something like this:
![explorer](/readme/page.png)

2. Okay now you see the explorer, this is where you can edit the files that make up the site.

All files you will need to edit are in the content folder. 

The directory of files matches how the pages on the site are structured. 

For example, to edit the about page you would edit the file at content/about.md

To edit a service page, let's say welding, you would edit the file at content/services/welding.md

Okay now lets edit a page.

let's open the /content/portfolio/transcanada.md file.

![explorer](/readme/file.png)

3. Now add some text to the file. 

This part at the top is for the server to know how to display the page.
Don't change this part.

```
+++
title = 'Transcanada'
date = 2024-05-01T17:53:47-06:00
+++
```

you can add any mark down to this page. It will be pre-styled to match the rest of the site.
we can add images, links, lists, and more.
I will add anymore special styling myself, just let me know what you want.

Now edit as much as you want before moving to the next step.

4. Now this is the complicated part. Saving and publishing the changes.

Click this button on the left side bar. 

![button](/readme/button.png)

now you should see something like this:

![source](/readme/source.png)

There might be multiple files listed here. These are all the files you have changed.

There will be a plus button there, in the image above i'm hovering over it. It'll say stage all changes. Click that. 

Now in the message bar, add a message. It can be anything. "changes" works.

![source](/readme/source2.png)

It will look like this after you are done. 

Okay press the green button. It will say commit & push. 

Done. 🎉

Okay so now I have set it up so that when you make a change to a file, it will automatically update the site. This can take a few minutes.

If there are any issues, I will get a email and let you know.



