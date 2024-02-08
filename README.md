# FEDAssg2
## Guess the Flag
### Overview:
In this project, we have created a quiz game where users are incentivized to guess the name of a country based on their flag. By being exposed to such country flags
that have unique or intricate design to them, it will definitely make users curious as to reasons behind the design, allowing for them to research more and appreciate
the country's history. This is important as nowadays, with technological advancements, people tend to become very closed-minded and are simply unwilling to learn more about
a country's culture. Therefore, with this game, these people will not only be incentivized to play our game, but they will also be more encouraged to learn about a country's
culture depending on what flag sparked their interest.


## Design Process
- The work behind the development was split into two based on our strengths. Ming hui worked on the HTML and CSS along with shop.js and Ashton worked on the Javascript for each website along with leaderboard.html.
  We decided that it was important to create the game.html first along with its corresponding Javascript (script.js) since we understood that there is no 'Guess the Flag' game without an actual quiz game.


This website is targeted primarily at users who do not have a good knowledge of the world, although the website is welcomed to any user.

- As a user with limited world knowledge, I want to play 'Guess the Flag', so that I can learn more about our world through flags whilst claiming goodies
- As a user with a competitive spirit, I want to become proficient in 'Guess the Flag', so that I can take over the leaderboard.

XD wireframe url: [FEDAssg2_WireFrame](https://xd.adobe.com/view/38cc78b6-c8e0-42c5-8817-e01886437634-6d9f/)

After translating our logic of the game into JavaScript code, we started branching out to create other pages. It was also around this time where we created our own database
for storing and manipulating of user information and statistics. 

## Features
### Existing Features:
- Points Shop: allows user to redeem goodies with the points they earn from playing 'Guess the Flag'
- Leaderboard: allows user to compete against others for who can guess the most number of countries without getting it wrong
- Quiz Game: allows user to earn points daily which can be used to redeem goodies in the Points Shop

## Technologies Used
- [REST Countries API](https://restcountries.com/v3.1/all): 
  - To get all 250 countries along with their flags.png (url link)
- [JQuery](https://jquery.com)
  - Only used JQuery to append information into the mini leaderboard found in homepage.html

## Testing
1. New User
    - Click on the Create new account from Sign In page
    - Provide login credentials that user can remember
    - From Homepage, navigate to the Shop
    - Try to redeem any one of the goodies
2. Existing User
    - Enter existing credentials in Sign In page
    - From Homepage, navigate to 'Guess the Flag' game
    - Try to earn some points
    - Once user won some points, navigate back to Homepage found within the popup window that appears after losing
    - Navigate to the Shop Page
    - Try to redeem any one of the goodies

A few interesting bugs that we discovered, and solved were
  - A game logic bug where dailyScore wasn't resetted back to 0 even when it was a new day.
  - Another bug within the game page where user's totalScore was being added too much, hence the existence of differenceDaily.
  - Another bug within the game page where user leaves the game page immediately after losing before playerData was updated.

A bug that we noticed and unsolved is
  - Desktop view causes website layout to be altered, can be fixed by zooming in to 125%

## Walkthrough Video:
[FED_GuessTheFlag_pitch.mp4](https://drive.google.com/file/d/1S_o2GqfeN_PG0pPL2KNBEQ2e7M5_-tTZ/view?usp=drive_link)

## Github Pages:
https://ashuri17.github.io/FEDAssg2/
## Media used:
- Background (homepage.html): [https://www.wallpaperflare.com/static/829/209/298/adventure-time-cartoon-earth-digital-wallpaper.jpg](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fssss--786300416179670440%2F&psig=AOvVaw3wa-zdhp0LIXMiiDVdCW5z&ust=1707367708092000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDxs8K2mIQDFQAAAAAdAAAAABAE)
- Background (game.html & leaderboard.html): [https://img.freepik.com/free-vector/gradient-galaxy-background-with-colorful-planets_23-2148999259.jpg](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcartoon-space-background&psig=AOvVaw0-YI0dmtLtcQgT5NZ6yZ8Y&ust=1707365854286000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCAq86vmIQDFQAAAAAdAAAAABAE)
- Background (index.html & create.html): [https://wallpaperaccess.com/full/269158.jpg](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperswide.com%2Fspacedog-wallpapers.html&psig=AOvVaw1Af9lciOcxdw-8fWHR8HNa&ust=1707365910439000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDgoumvmIQDFQAAAAAdAAAAABAE)
- Background (shop.html): [https://png.pngtree.com/background/20220726/original/pngtree-cartoon-space-landscape-comic-planet-picture-image_1823156.jpg](https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Fcartoon-space-landscape-comic-planet_1823156.html&psig=AOvVaw1_i7g9_Y5xY2pMD0ftEjvy&ust=1707367457723000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiT-sq1mIQDFQAAAAAdAAAAABAE)
- Google gift card: [https://cardzstore.com/content/images/370944ad-5d83-4ed5-9789-fe3937d89bc3.jpg](https://www.google.com/url?sa=i&url=https%3A%2F%2Fcardzstore.com%2Fen%2Fgoogle-play-us%2Fproduct%2F1085%2Fgoogle-play-gift-card-15-us-store&psig=AOvVaw21niS_vSL_rBopSFTsFHcY&ust=1707365765726000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPD678KvmIQDFQAAAAAdAAAAABAN)
- Apple gift card: [https://i0.wp.com/www.cheapgamesng.com/wp-content/uploads/2020/07/Apple-Store-iTunes-Gift-Card-3.jpg?fit=1500%2C1500&ssl=1](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cheapgamesng.com%2Fproduct%2Fbuy-15-itunes-gift-card%2F&psig=AOvVaw3sDm-kOSkC2bq7h0trUyTu&ust=1707365314782000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKD8j_GumIQDFQAAAAAdAAAAABAE)
- Spotify gift card: [https://www.thewarehouse.co.nz/on/demandware.static/-/Sites-twl-master-catalog/default/dwf4ae969a/images/hi-res/1C/D7/R2512812_40.jpg](https://www.thewarehouse.co.nz/p/spotify-15-gift-card/R2512812.html)
- Starbucks gift card: https://www.walmart.com/ip/Starbucks-15-Gift-Card/49226317


