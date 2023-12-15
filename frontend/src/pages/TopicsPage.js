import React from 'react';

function TopicsPage() {
  return (
    <>
      <h2>Web Development Concepts</h2>
      <nav class="contents">
        <h3>Table of Contents</h3>
        <a href="#web-servers">About Web Servers</a>
        <a href="#frontend-design">Frontend Design</a>
        <a href="#optimizing-images">Optimizing Images</a>
        <a href="#cascading-stylesheets">Cascading Stylesheets</a>
        <a href="#forms">Form Usability, Elements and Attributes, Best
          Practices, And
          Accessibility</a>
        <a href="#node">Node, npm, and Express</a>
        <a href="#javascript">JavaScript</a>
        <a href="#dom">DOM Changes</a>
      </nav>
      <article id="web-servers">
        <h3>About Web Servers</h3>
        <p>
          I created this page by opening up VS Code, then opening up the
          folder I wanted to work in, then creating a new file and named it
          'index.html'. The name 'index' is referred to as the name of the
          HTML file, and it is the default homepage. The way it works is that
          the user's web browser will request the index.html file from the web
          server, then if the file exists, the server will send the file back
          to the web browser to be displayed.
        </p>
        <p>
          Looking at the Chrome Developer Tools, I see that in the Network
          tab, the status code for the GET request is code 200. Which means
          the request was successful.
        </p>
        <p>
          Looking at the Network tab on Chrome Developer Tools for the local
          HTML file versus the web server's HTML file, I notice that they have
          a few differences. The GET request for both of the files is 200
          which means the request was successful. As for the Response Headers,
          the web server's file has a lot more headers. The same is true for
          the Request Headers, the web server file also has more headers than
          the local. Then the body of the files are the same, they both send
          back the same HTML code for the body.
        </p>
        <p>
          The reason the favicon.ico file has a status of 200 is that the web
          browser sent a GET request to
          https://web.engr.oregonstate.edu/favicon.ico and the web server
          responded with a 200 status. The reason main.css and main.js don't
          have status 200 is that those files do not exist at their respective
          request URLs.
        </p>
        <p>
          Full URL: https://web.engr.oregonstate.edu/~lerich/a1-lerich/,
          Scheme: 'https', Subdomain: 'web.engr', Host Domain:
          'oregonstate.edu', Resources: '/~lerich/a1-lerich/'. This URL is
          split into 4 distinct parts which I have categorized earlier:
          scheme, subdomain, host domain, and resources.
        </p>
      </article>
      <article id="frontend-design">
        <h3>Frontend Design</h3>
        <p>
          <strong>Frontend design</strong> is about creating the user's
          experience with a website, which includes visual and interactive
          components. Basically, the goal of good frontend design is to make
          the website look and feel good. The term used for measuring the
          quality of a website's frontend design is called
          <strong>usability</strong>. It is important to understand have good
          frontend design because at we want the user to have a good
          experience when using the website so that they are more likely to
          return the next time.
        </p>
        <dl>
          <dt><strong>Effective</strong></dt>
          <dd>
            Helping users complete their goals. The website should leave the
            user feeling that they get exactly what they wanted.
          </dd>
          <dt><strong>Efficient</strong></dt>
          <dd>
            Helping users complete their tasks as fast as possible. The faster
            the user can do what they want, the better the experience is.
          </dd>
          <dt><strong>Easy to navigate</strong></dt>
          <dd>
            Having a strong new user experience is significant for feeling
            comfortable. The high learning curve pushes new users away.
          </dd>
          <dt><strong>Error-free</strong></dt>
          <dd>
            Making sure the user is able to get what they need done without
            any problems.
          </dd>
          <dt><strong>Enjoyable or Engaging</strong></dt>
          <dd>
            The user had a positive experience and is more likely to come
            back. A combination of the four previous E's.
          </dd>
        </dl>
        <p>
          The purpose of <strong>page layout tags</strong> is to help browsers
          to know what type of content is being read so that when the machine
          reads it, they can properly organize the data. This is important for
          screen readers and search engines because they help other users
          understand the website better. The purpose is to make our website
          more accessible to as many people as possible. Tags such as header,
          nav, main, section, article, and footer help give characterization
          to sections of data without need for visual interpretation.
        </p>
        <p>
          <strong>Anchor tags</strong> are able to link to other webpages by
          using the anchor tag '&lt;a&gt;' with an 'href' attribute whose
          value is the URL. Then the text between the anchor tags is linked to
          the URL, so that if a user clicks on that text they will be sent to
          the URL. The conceptual difference between the navigation tags and
          the anchor tags is that the navigation tags are block level
          elements, while anchors are a line level element. The way I like to
          think about it is, navigation bars are a space to be filled by
          links, while anchors are the links themselves. That is the
          relationship between the two!
        </p>
      </article>
      <article id="optimizing-images">
        <h3>Optimizing Images</h3>
        <p>
          There are 6 major specifications for images on the web. The first is
          <strong>descriptive file names</strong>. Naming image files so that
          they describe the image well is important for
          <strong>Search Engine Optimization</strong>. Improving SEO helps
          users find images they are looking for, faster. The second
          specification is <strong>small file size</strong>. The smaller the
          file size is, the faster it is to load images. The third
          specification is <strong>exact dimensions</strong>, which is about
          making sure images fit the space of our webpage. Images that have a
          large resolution and small webspace takes longer to load. The fourth
          specification is <strong>correct file formats</strong>. Certain
          formats have strengths and weaknesses, and it's critical to make
          sure we are using the right formats to make improve user experience.
          The fifth specification is <strong>reduced resolution</strong>.
          There are higher resolutions now, so having multiple image sizes is
          becoming more essential. The last specification is
          <strong>color mode</strong>, which is about having the right color
          mode.
        </p>
        <p>
          The photo file formats that are most suitable for photos are .JPG
          and WebP, while the formats most suitable for line art are .GIF,
          .PNG, and .SVG.
        </p>
      </article>
      <article id="cascading-stylesheets">
        <h3>Cascading Stylesheets</h3>
        <p>
          Stylesheets are important to websites and apps since it provides
          structure, usability, readability, and legibility. It also gives
          personality, to websites, which is very critical for brands since
          they generally want to provide an experience in line with their own
          personality.
        </p>
        <p>
          There are five ways to incorporate stylesheets. The first is
          <strong>external CSS rules</strong>, which is linking a stylesheet
          file in the head of the HTML webpage. This is the standard way to
          incorporate styles. The second is <strong>embedded</strong> rules.
          In HTML, you can use style tags and write CSS code between those
          tags to incorporate styles. The third way is
          <strong>inline</strong>, which is using HTML attributes and values
          to assign styles. The fourth way is
          <strong>JavaScript template literals</strong>, which uses JavaScript
          functions to style. The last way is
          <strong>regular JavaScript</strong>, which uses DOM methods to
          select elements to give it style. These are the five ways to
          incorporate styles to webpages.
        </p>
      </article>
      <article id="forms">
        <h3>
          Form Usability, Elements and Attributes, Best Practices, And
          Accessibility
        </h3>
        <p>
          There are six main goals of accessible forms. The first one is to
          <strong>provide clear instructions</strong> above the form and
          labels. The user should never feel lost or confused while filling
          out the form. The second goal is to <strong>inform the users</strong>
          on why we are gathering data and which parts of the formed are
          required. The third goal is to <strong>set the first form field</strong>
          to autofocus, so users can start filling out the form right away.
          The third is to <strong>ensure each part of the form can be filled
            without using a keyboard</strong> for the people that cannot use a
          mouse or trackpad. The fifth goal is <strong>adding tab indexing</strong>
          so that users know in which order the form should be filled out. The
          last and sixth goal is <strong>ensuring validation messages are
            screen readable</strong>. Since the built-in HTML browser messages
          are not screen readable, it is up to the developers to make sure
          these messages are. Each of these goals are factors determining
          accessibility of forms.
        </p>
        <p>
          The major tags of the forms are the <strong>form tag</strong>,
          <strong>field set tags</strong>, and <strong>legend tags</strong>.
          These tags build up the skeleton of the form so that we can then
          place actual data gathering components. The next important tags that
          we use are the <strong>label tags</strong> and the <strong>input
            tags</strong>. Each input tag needs an accompanying label tag to
          identify what the question is. The significant attributes of the
          form tag include <strong>action</strong>, which is the URL the form
          data is sent to, and <strong>method</strong>, which determines if
          the data is displayed in the URL or the request body. The essential
          attribute for the label tag is the <strong>for</strong> attribute.
          This connects with the name and ID of the input tags to properly
          identify which label is for which input. Input tags have many
          attributes, which include: <strong>type, name, and ID</strong>. The
          type attribute determines the type of input it is. There are many
          types such as buttons, radios, text boxes, checkboxes, etc. Then the
          name and ID attributes connect the form data to the specified
          name/ID so that when we want to pull information the naming
          convention makes it easy to reference the data. There are many more
          attributes that can be very important, but this is enough
          information for form data for now.
        </p>
        <p>
          It is highly recommended to style forms so that the form is more
          readable and intuitive. There are simple things like adding a red
          asterisk next to the labels of the required form elements. Then
          there are more fancy things like adding in a border to the form
          element the user is currently focused on. Major recommendations
          include changing the margins and padding of the field set, label,
          inputs, buttons, textareas, and selects so that it's a lot easier to
          read. A good rule of thumb is to make the form elements big enough
          that a finger is able to complete the form.
        </p>
      </article>
      <article id="node">
        <h3>Node, npm, and Express</h3>
        <p>
          <strong>Node</strong> basically helps users run web applications on
          the computer. <strong>Npm</strong> is a package manager for node,
          which means it helps organize add-ons and customizations for the
          user's website. Different projects generally require different
          packages, and npm helps organize all of that. Lastly, <strong>Express</strong>
          is a framework which we install using npm and Node. Express helps
          the developer get, post, and delete data. It basically establishes
          the networking side of web applications. These three technologies
          are creates a functional environment for our websites. It unlocks
          the ability to receive form data and create responses based on that
          submitted data.
        </p>
      </article>
      <article id="javascript">
        <h3>JavaScript</h3>
        <p>
          JavaScript has 6 main data types, and they include: numbers, Boolean
          which is either true or false, strings, symbols, special values such
          as undefined or null, and objects. Each data type is called a
          <strong>primitive type</strong> other than objects.
        </p>
        <p>
          <strong>Objects</strong>, <strong>Arrays</strong>, and <strong>JSON</strong>
          are data structures that do great work in organizing and exchanging
          data. JSON, especially, is a commonly used for exchanging data in
          web applications. These data structures hold data using key value
          pairs, so each data has an address associated with it. This makes
          accessing data easier and that is why they are commonly used.
        </p>
        <p>
          <strong>Conditionals</strong> and <strong>Loops</strong> are
          important for developers to be able to branch and iterate. Branching
          is useful for creating situations to happen based on some sort of
          statement. A good example of this is in the order form, based on
          what item is ordered, is what price is attached. There needs to be
          some sort of true or false statement that determines whether the
          outcome of the conditional, and therefore which way the program
          decides to branch. Loops are helpful for moving through data
          structures without accessing each value one at a time. Combining
          loops with conditionals gives us a conditional loop, which is
          another powerful tool for accessing information from data
          structures.
        </p>
        <p>
          <strong>Object-Oriented Programming (OOP)</strong> is a way to
          program objects that can represent objects similar to real life.
          Objects have <strong>properties</strong> that hold values such as a
          price and a number, or a grocery bag and an array of items. Objects
          also have <strong>methods</strong>, which are like actions. A method
          can be called 'getPrice' which would return the number value at
          property price. We create objects by using the keyword <strong>class</strong>
          and usually a <strong>constructor</strong> to initialize the object
          with specific properties and values.
        </p>
        <p>
          <strong>Functional Programming</strong> is about creating functions
          to help automate tasks. A function can be as simple as taking a
          number and return 2 times that number. The point is to reduce the
          amount of code that needs to be written by making a repetitive task
          automated. So functional programming is about increasing efficiency
          by writing functions.
        </p>
      </article>
      <article id="dom">
        <h3>DOM Changes</h3>
        <p>Developers use <strong>JavaScript</strong> and <strong>Express</strong>
          to make <strong>DOM</strong> changes because it can save it a lot of
          time. A good example of this is on our staff page, instead of
          populating each row by hand, we use data from a JSON and
          automatically add person information to the table with a click of a
          button. So for tasks that need to be repeated developers can connect
          JavaScript and Express to directly change our HTML which improves
          efficiency.</p>
      </article>
    </>
  );
}

export default TopicsPage;