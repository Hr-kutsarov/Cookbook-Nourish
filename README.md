## Preview:
> A little backstory     
It's 2p.m. and my shift just started. The head chef comes to me and says: "You have to make five types of salad for tomorrow's event. Any ideas?". To which I respond "Yeah I can cotally manage this!". When he leaves I reach for my phone and open the book called The Flavor Bible by Karen Page and Andrew Dornenburg. Then spend more than half an hour looking for whatever I have to find on a pdf file through a free pdf reader.   
More than two years later I already know how this book should look like as an application. You have cohlrabi in your hands and you want to make a soup? Search for kohlrabi and find it's flavor affinities.
Create a list of the food items you found. Compare their flavor profiles and nutrition. Choose the right one for your dish. See the nutrition and food cost already calculated. Make changes and save your choice as a recipe or a log. Are you calculating the cost for each dish in a hotel or create an exciting menu for your guests this Saturday,  or you're trying to figure out how much 2000 calories actually are?

This app is for the homecook who seeks inspiration.    
It is for the kitchen chef who wants to calculate recipes.    
   It is for the mindful who watch what they eat and how much.      
 It's also for the students who wants to cook tasty but cheap.     It is also for all amateurs in the kitchen who can now match flavors perfectly in two clicks.
   It's for those who love to cook and want to surprize their guests next week.

## Status: Alpha version available [here](https://nourish-app.vercel.app/)

This app is created to satisfy the need of browsing several cookbooks at once. You can track your nutrition, calculate your food costs, create recipes, match flavors, discover flavor affinities or simply find what you can cook with all the products that you have at home on Wednesday evening.

## Tech stack

Next 13 with Supabase (PostgreSQL), TypeScript, Zod, Tailwind CSS, Framer Motion, React-Hook-Form, Zustand

## Key concepts

Optimized for big screen. I want to see tables, graphs, charts, everything. Should have responsive design.

Ordered display of data. Easy on the eyes looking tables, implement color theory.

Login and authentication. Only the admin should be able to create primary data. 

Foods have properties and their behavior can be changed with React dynamically. This allows for great app experience and efficient workflow.

## Progress

- ***DONE*** NextJS init, Supabase Auth implementation, routing, redirecting, protected pages.

- ***DONE*** Create models in Supabase. Enable row access.

- ***DONE*** Create dynamic header content: The logo and nav items are pre-rendered while the Auth component changes relatively to the user session. Displays a logout button if there is no session.

- ***DONE*** Create a slide in menu with Framer Motion. It presents a form that creates food items. Implement Tailwind, create row validation, display info as small modals on hover. Enable submit only for the admin. Implement Zod for type validation and React-hook-form for row validation, state management and request handling.

- ***DONE*** Create a main menu button that opens a nav section. This section contains simplified linear site map. The quick links lead to SSR pages for the sake of SEO.

- ***DONE*** Break down the data properties into sections and display it as a table but NOT in table tags.  

- ***DONE*** Create a loading screen between pages. (*having some fun with Framer-motion. The used effects can be seen on the /playground page*)

- ***DONE*** Displayed food items can be 'bookmarked' and put in a list where their individual weight is changed and their properties such as nutrition value and price are calculated. The user should be able to manipulate only the weight and the values of all macronutrients and price should change. The summed data is displayed in additional field.

- ***DONE*** Optimized for all screens

- ***DONE*** Deploy alpha version

# THIS PROJECT IS DISCONTINUED. THE THE NEW VERSION IS [AVALABLE HERE](https://github.com/Hr-kutsarov/Nourish_WebApp_v2)

