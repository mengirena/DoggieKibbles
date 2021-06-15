# Pricing component

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)](https://app.netlify.com/sites/doggiekibbles/deploys)

## Demo

![caption](https://cvws.icloud-content.com/B/AbsXmq6I7kua-PtrabdOesIYKSWyAef8PaSanrvI7iVMzjYZwECnJf54/Screen+Shot.png?o=AgzGrD7NrPF31dxayufv1fhPPdixA1Yx3R21nk-5ZrnN&v=1&x=3&a=CAogvhnQoMsW5s6FGf86bWaKeZWxz24yzJkZKmZWshscQCUSbRD2ttOGoS8Ylq6Kh6EvIgEAUgQYKSWyWgSnJf54aiZmXQ-e83m3LG1k6YuBneTlp6Ssy2J3KTGZjcpmGIvtKIn0bZCZtXImUGLGNqbc0wSNHeZgEWB6fJ54qbFtwmWvcCWpHpsrppUtRXVDp9s&e=1623780923&fl=&r=e79fa858-e030-4b53-b975-f3c41f52f21b-1&k=dnC9UUK22IVxA0cB96ADlA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=34&s=R-qYVmEyqfy7lpZlntTb_p0ZQgg&cd=i)

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
