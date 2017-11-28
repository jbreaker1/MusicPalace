# 2.0 Detailed Database Design

## 2.1 Project description, database engine used, potential users, Miscellaneous

### 2.1.1 Project Description
We are working on a music database called Music Palace which allows users to
easily access and store their music. The users will not be able to share
their music with other users; the database will be for personal storage only.
We plan on only storing either the url of a song or the audio file and not
their respective music videos and the database of choice will be mySQL.

### 2.1.2 Database Engine Used
We are using mongo to complete our database project. We want to have it so that our engine makes a table whenever a user makes a new MusicPalace which allows a user to store any type of song in there and is allowed to make different MusicPalaces that allows the user to look up songs and can add them easily or a user can add their own music with the add button which the user must fill out certain criteria such as the name of the song, artist, and album its from. We are going to Mongo because it is a document oriented storage system and it can index on any attribute, has auto-sharing, and rich queries. It also makes it easy to store audio files and urls.

### 2.1.3 Potential users
The primary user base will be people who listen to music so almost everyone. It will
be for people that want to store their music and who want to be able to access it
easily and quickly.

### 2.1.4 Miscellaneous
This database is intended for individual use only. As of now, the user will have access to his or her own songs only. There is no sharing feature for the audio files.

## 2.2 Data Dictionary, meaning a bullet list of the final tables/columns with a complete description of each

### Song Table
- Song ID - This is a unique ID associated with the song. This is the primary key for the song table.
- Title - This is the title of the song that is stored in the user's Music Palace.
- Artist - This is the artist of the song.
- Album - This is the album that the song is associated with.
- Genre - This is the genre of music that the song is associated with. Since certain songs can fall under multiple genres, this value might include several genres.
- Year Produced - This is the year that the song was produced.

### User Table
- User ID - This is a unique ID associated with the user. The User ID is the primary key for the user table.
- User Name - This is the user's first and last name. The user will enter their full name when they create a Music Palace.
- Password - This is the password chosen by the user when they sign up for Music Palace.
- Email Address - This is the email address that the user enter's when they create a Music Palace.
- Date of Birth - This is the date of birth of the user. This will also be entered into the database when a new user signs up.
- Music Palace ID - This is the unique ID associated with the user's Music Palace. This ID will be generated when the user creates the Music Palace.

### Music Palace table
- Music Palace ID - This is the primary key for the Music Palace table. This unique ID is generated when the Music Palace is created.
- Music Palace Name - This is the name of the Music Palace, chosen by the user.
- Songs - This is the list of song ID's that are associated with the Music Palace.

## 2.3 A complete finalized Entity-Relationship Diagram [ERD] for the database

![Image of ERD](/images/ERD2.jpg)
