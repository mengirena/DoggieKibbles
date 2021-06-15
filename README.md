# Pricing component

## Demo

![caption](https://cvws.icloud-content.com/B/AeIF3n9DstSvHbHRrB51wgpvnZkiAQeoQsNLISaBOhyRwaFc3BFA0L4d/Screen+Recording+2021-06-15+at+10.31.16+AM.mov?o=AkwRf1QCETTlWjZhV5lJVR_9K43cPIijh27kfh9yfnCR&v=1&x=3&a=CAogwKKagzhzf9DkeP01xa5yO8rDMyjSJrDE-pl06OCv3cASbRDdjoSGoS8Y_YW7hqEvIgEAUgRvnZkiWgRA0L4daibcvHy9rljRIO6tm7bFuKkV2_VvBVpkwYV0q0igA4phkQOBgerB33ImVLVHUz31OL-McAJrlxeSOK5kbWKh16Iry8lfSCl3UkSzCHh9Er8&e=1623779623&fl=&r=00d378a0-1630-44e8-8f75-6a27a28a5980-1&k=qwMs3VsS0VT0RPjqpdq6jA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=34&s=L9HF69TVx6R9a4VTilg5GtMhvco&cd=i)

[Site](https://doggiekibbles.netlify.app)

## How it's built
**Tech used:** HTML, CSS

## Lesson learned

### To change the marker for a list in CSS

Use `ul li::marker{ content: "something here"}`

### How do we use transition

`transition` can let us decide which property to animate, when the animation should start and how long and how the animation will be. But not all properties can be transitioned. Here are the [properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) can be transitioned. 
We can control the transition by the sub-properties (with default):

- `transition-property: all`

- `transition-duration: 0s`

- `transition-timing-function: ease`

- `transition-delay: 0s`


### 3D CSS properties used 

Use `transform-style: preserve-3D` can preserve element's 3D position

If a `transform` property has a value other than its initial value, a stacking context will be created. 

`transform` can let us do:

- Matrix transformation

- Perspective (3D feeling)
    `perspective`: determine the distance between the z = 0 and the user. Default value is `none`. Giving a `length` value can appply a perspective transform to the element and the content. 

- Rotation

    - `rotateX(angle)`

    - `rotateY(angle)`

    - `rotateZ(angle)`

    - `rotate3d(x,y,z,angle)`
    
    `backgace-visibility` is often used with `transform: rotateY(180deg);` and this can make the back of the element be visible or hidden.  

- Scaling (Resizing)

    - `scaleX(number)`

    - `scaleY(number)`

- Skewing (distortion)

- Translation (moving)

    - `translateX(length-percentage)`

    - `translateY(length-percentage)`

    - `translate(length-percentage, length-percentage?)`

    - `translate3d(length-percentage, length-percentage, length)`

    - `translateZ(length)`

The stacking context 




### Get the first child from NodeList

Use `firstElementChild`

To add class to the nodeList, use `classList.add(className)`. On the contrary, if we were to remove a classslist, use `classList.remove("className")`. 

The event type "mouseleave" is differernt from "mouseout". "mouseout" will trigger bubble effect.  

### How do we make slide button
### How do we make fluid font size

We can use `vh` or `vw` lenght unit. 
