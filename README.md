# LAE [LightWeight Animation Engine]
A 3.15KB animation engine delivering silky-smooth, GPU-accelerated animation even under 20× CPU slowdown using a simple, class based API with zero JavaScript required.

This engine handles custom staggering animation, and custom Image effects without straining the CPU at all
the animation engine is completely automatic needing just 1 class to toggle an animation for any element
not needing any pre splitting of text, since it handles that on its own.

and for credibility I've Developed a website using this animation engine which you could visit Right now with this link : https://foundationstudio.webprogram322.workers.dev/
and feel free to scan this website on pagespeed, since I have done it before and it reached 92 performance on mobile and 98 on desktop, well if you somehow got 80 on mobile, its a problem of me being lazy and using oversized images that take time to load on a mobile

It has also achieved a CLS of Zero. and an INP of <100ms

This animation engine works using HTML classes, which are:

    -- text-animation: tells the engine that this element should use the 'text' animation method
    -- image: tells the engine that this element should use the 'image' animation method

    -- duration: specifices how long each word should take to drop. only works for text
    -- delay: specifices how long the animation for both Image and Text should take to start

# How to use

    First of all, you have to link the core.js file and the styles.css file to you're HTML file, without this step, the engine Of course wont work

    then to actually toggle the engine, there are two classes that tell the engine that it should animate this element which are [text-animation] , [image], once an             element gets one of these classes its automatically handled by the animation engine to deliver you silky smooth animations

# Customization

    This engine also allows customization of when and how long the animation will be or start

    -- class [duration] : use it like a simple HTML class like this <h1 class="duration-100">Demo text</h1>, In this content the number specifices how long the duration            should be by the milisecond and Its completely dynamic, the number is parsed not fetched so you could write any number you want 

    -- class [delay]: Its used just as how you use duration the same context like this <h1 class="delay-100">Demo Text</h1> this one just as we said before                      delays the text animation by a set amount (by miliseconds) like in our case, once the text is on the screen after 100ms the animation triggers

# Examples on use

    -- to inform the engine that this element should be given the text animation method use this class

        <h1 class="text-animation">Demo Text</h1>

    -- to inform the engine that this element should be given the image animation method use this class

        <img class="image" url="...">


    And for the customization classes,

    -- duration: <h1 class="duration-100">Demo text</h1>
    -- delay: <h1 class="delay-100">Demo text</h1>

# Notes

    -- The animation auto handles text splitting meaning you could just write you're content in an h1 tag or in a span or any other type and the engine would handle it on          its own, Keep in mind too, that its space senesitive so Do Not Add Any Extra Spaces

    -- for image class, it only accpets delay and doesnt accept duration as I said earlier 

    -- For Images I'd prefer to use a <div> and add an 'image' class to it to inform the engine that this element should be animated using the image method, and add the            actual image using CSS for more control, it can work for <img>, I would prefer using a <div> for more 'background image control'
