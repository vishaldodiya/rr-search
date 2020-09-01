# Search with React & Redux
Slick search engine using React and Redux. With the functionality to pin search results and track analytics.

## Installation

Step 1:
```
npm install
```

Step 2:
```
npm run start
```

Step 3:
```
open http://localhost:3000 in your browser
```

To run test:
```
npm run test
```

## Features

### Pin Search Results
* The search engine has the functionality to pin the search result for future reference, and the user can see all pinned results on `http://localhost:3000/#/pins` route.
* At the same time, users can unpin the pinned results.

### Analytics
* To track user behavior, the application records various user events for example search result pinning and unpinning, dropbox URL copy link functionality, and all the search queries.
* The list of all tracked events can be accessed from `http://localhost:3000/#/analytics` route.
* With each event, analytics keep track of user agent, means from which device the analytics is being tracked and the timestamp at which the event is triggered.

## Design Decisions

### Icons as a data descriptor
Visual objects are way more expressive than simple text. In the application, various functionality and actions are shown as icons. For example pin, result type(dropbox, slack) icon, email, phone numbers, team members, etc. For copy link, I have used simple text because original functionality is to copy the link to clipboard but if the visual icon is ambiguous than it might confuse the user for deciding that particular functionality.

### Human readable date and time
Clear and acceptable information is perceived easily. In the application, all dates and times are formatted in the local timezone with standard date format.

### Information importance through font size
The data have so many information but not all the information are equally important to user and user should easily focus on important information. To do I have increased the font-weight of the important information and reduced the font size of less important information. In the application information main title is highlighted and other meta information like date, phone number, person name, email have smaller font size.

### Feedbacks
Visual feedback can help the user identify the functionality. For example, all links and buttons have a cursor: pointer hover effect with highlighting the element with a little darker background. For pin and unpin functionality, on clicking pin the icon changed to unpin icon so that the user can get feedback that the result is pinned and it can be unpinned only.

### Usability
To increase the usability, each email and phone number has a reference link using mailto and tel in the href links. To increase the usability of pins and analytics functionality, I have added a kind of notification bubble on each functionality in the top navigation bar. On each analytics, the event being tracked, and each pin being added the notification bubble will show the number of events and pinned items and get the attention of users to use those functions.

## Tests
The application have snapshot testing for all the particular cards like calendar, contact, slack, tweet and dropbox.

## Built With
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)
* [React Router](https://reactrouter.com/)
* [Redux](https://redux.js.org/)
* [Jest](https://jestjs.io/)

## Icons From
* [Font Awesome](https://fontawesome.com/)

## Author

* **Vishal Dodiya** - [vishaldodiya](https://github.com/vishaldodiya)

## License

This project is licensed under the ISC License
