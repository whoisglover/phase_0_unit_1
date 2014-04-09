# U1.W2: Chrome Dev Tools Challenge Reflection

* **Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?**
  * The Document Object Model (DOM) is simply a way to think of an HTML page.  This methodology states that the HTML page is a document, and the different pieces of HTML inside are objects.  Tags like header, div, or p are all objects.  Next it states that these objects are in a tree like hierarchy.  Objects can be nested inside of each other, always have a parent, and can have multiple or no children.  This tree structure really makes sense to me.  After studying computer science for a few years I have a great deal of experience nesting code and building things like binary search trees.  I have come to greatly appreciate the organization and optimization a tree structure can provide.  What doesn't make sense right away is how incorporating languages outside of HTML (i.e. php or javascript) relate to the DOM. Are these objects as well?  I found this on Mozilla's guide but I'm still a bit skeptical:
  
```
  "the DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Though we focus on JavaScript throughout this site, implementations of the DOM can be built for any language." - Mozzila Guide
```
* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?

	* My site had very little in the DOM when inspected by Chrome Web Tools.  Wordpress.com on the other hand had an amazing amount of objects.  The head tag alone blew my mind with its complexity.  It was also really cool to see wordpress using the new HTML tags like video.

* Did you find Chrome Web Tools fun, helpful, or a pain to work with?
	* I felt a little nervous using Chrome Web Tools.  It seemed like driving a Ferrari.  Extremely powerful but very sensitive.  I often found myself accidently clicking things and ending up somewhere on the Web Tools I didn't mean to be.  I think practice will make perfect and I'm really excited about the idea of being able to harness it's full power.
* Did you have an "aha" moments or were any concepts solidified?
	* The javascript section that explained minify was a definite aha moment for me. I had seen minify js files before but never had an explanation as to why they were used.  I really like the optimization aspect of Web Tools and I think thats where I will use it most.
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.
	* I didn't use any resources other than code school but I have always been a fan of Code School, I think Greg Pollack is an awesome teacher and I hope we get to use more of his lectures.
