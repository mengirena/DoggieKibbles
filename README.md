# Pricing component

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)](https://doggiekibbles.netlify.app)

👆🏽 click to check the live page

This pricing component could be further implemented in your website to show differernt plans to subscribe to your products. 

## Demo

<img width="615" alt="Screen Shot" src="https://user-images.githubusercontent.com/51871665/122101457-2bafe380-cdc9-11eb-87fa-05396ee4cd60.png">

<!--[Site](https://doggiekibbles.netlify.app)-->

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

The stacking context is the concept of making elements to have z-axis degree of freedom. Some elements have special properties to form a stacking context. Some scenarios are:

 - With `transform`, `filter`, `perspective`, `clip-path`, `mask` / `mask-image` / `mask-border` properties and their values are not none.

 - With `position` value `absolute` or `relative` and `z-index` is not auto or with value `fixed` or `sticky`

 - A child of flex or grid container and the z-index is not auto

 [other scenarios...](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#the_stacking_context)
 
The rendering order starting from the root elements in the same stacking context with lower z-index being rendered first. The z-index is independent from different stacking contexts. 

### Get the first child from NodeList

Use `firstElementChild`

To add class to the nodeList, use `classList.add(className)`. On the contrary, if we were to remove a classslist, use `classList.remove("className")`. 

The event type "mouseleave" is differernt from "mouseout". "mouseout" will trigger bubble effect.  

### How do we make slide button
### How do we make fluid font size

We can use `vh` or `vw` lenght unit. 


Reference
<a href='https://www.freepik.com/photos/dog'>Dog photo created by freepik - www.freepik.com</a>
