# LAE [LightWeight Animation Engine]
A 3.53KB animation engine delivering silky-smooth, GPU-accelerated animation even under 20× CPU slowdown using a simple, class based API with zero JavaScript required.

This engine handles custom staggering animation, and custom Image effects without straining the CPU at all
the animation engine is completely automatic needing just 1 class to toggle an animation for any element
and many customization options via HTML attributes ('data-lae-*)
not needing any pre splitting of text, since it handles that on its own.

and for credibility I've Developed a website using this animation engine which you could visit Right now with this link : https://foundationstudio.webprogram322.workers.dev/
and feel free to scan this website on pagespeed, since I have done it before and it reached 92 performance on mobile and 98 on desktop, well if you somehow got 80 on mobile, its a problem of me being lazy and using oversized images that take time to load on a mobile

# And this Engine works using HTML classes for declaration, and HTML attributes for customization

It has also achieved a CLS of Zero. and an INP of <100ms

# Performance

    CLS (Cumalative layout shift): Zero
    INP (Interaction til next paint): < 100ms
    LCP (Largest contentful paint): 1.18s average, based on the demo site, proving that the engine doesnt impact LCP

    Smooth animation under 20x CPU slowdown
    Runs smoothly on very old devices

# Classes (Declaratives)

    -- text-animation: tells the engine that this element should use the 'text' animation method
    -- image: tells the engine that this element should use the 'image' animation method

# How to use

    First of all, you have to link the core.js file and the styles.css file to you're HTML file, without this step, the engine Of course wont work

    then to actually toggle the engine, there are two classes that tell the engine that it should animate this element which are [text-animation] , [image], once an             element gets one of these classes its automatically handled by the animation engine to deliver you silky smooth animations

# Customization

    This engine also allows customization of when and how long the animation will be or start using HTML attributes

        attribute 1. 'data-lae-delay' : This attribute specifices how long an animation will be delayed until trigger, timer starts once the element is on screen
        attirbute 2. 'data-lae-duration' : This attribute specifices how long an animation takes from start to finish
        attribute 3. 'data-lae-split' : This attribute determines how the engine should split this text which there are three options (word , char , none) with word being           the default meaning if this attribute wasnt declared the engine will result to the word split method, with none, not splitting the text at all

# Examples on use

    -- to inform the engine that this element should be given the text animation method use this class

        <h1 class="text-animation">Demo Text</h1>

    -- to inform the engine that this element should be given the image animation method use this class

        <img class="image" url="...">


    And for the customization attributes,

    -- delay: <h1 data-lae-delay="200">Demo text</h1>
    -- duration: <h1 data-lae-duration="200">Demo text</h1>
    -- splitType: <h1 data-lae-split="char">Demo text</h1>

# Notes

    -- The animation auto handles text splitting meaning you could just write you're content in an h1 tag or in a span or any other type and the engine would handle it on          its own, Keep in mind too, that its space senesitive so Do Not Add Any Extra Spaces

    -- for image class, it only accpets delay and doesnt accept duration as I said earlier 

    -- For Images I'd prefer to use a <div> and add an 'image' class to it to inform the engine that this element should be animated using the image method, and add the            actual image using CSS for more control, it can work for <img>, I would prefer using a <div> for more 'background image control'
