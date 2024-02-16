# Riscord - COSC 310 Project

### A web-based application that is similar in functionality to the popular social-media platform, Discord.

# Technologies Used
HTML, CSS, and React.js for the Frontend, Node.js for the Backend, MongoDB for Database operations, Git for Version Control, GitHub actions for Continuous Integration/Continouos Delivery.

# Testing Strategy
Agile testing strategy, which includes iterative and incremental testing in the all branches every time a new set of features are pushed upstream before merging with the production branch. The aim for each major testing iteration is to achieve > 95% code coverage, and ensure the project remains functional throughout the Software Development Life Cycle (SDLC).

# User Requirements
The list of user requirements based on user stories with acceptance criteria as follows:
1. Users should be able to create new servers, edit server settings, and delete servers.
2. Users should be able to create, rename, modify, and delete channels within servers.
3. Users should have access to live text and voice chat features within servers.
4. Users should be able to modify permissions within servers to assign roles and manage access levels.
5. Users should receive notifications for new events within servers and should be able to customize their notification preferences for each server.
6. Users should be able to send direct messages to other users for private communication.
7. Users should have the ability to join and leave multiple servers.
8. Users should be able to create an account for themselves and delete an account.
9. Users should be able to send friend requests to other users.
10. Users should be able to see the online/offline status of other users within a server and with other users they are friends with.
11. Users should have the ability to add media (images, videos, Stickers, GIFs, emojis, etc.) and embed links within a message to another user or within a server.
12. Users should be able to tag other users by user ID, and everyone within a server. 
13. Users should have the ability to change application/server themes.

# User Stories
The user stories created for this project based on the discord application listed with their appropriate acceptance criteria are as follows:
1. As a server admin, I want to be able to create, modify and delete a server so that I can comunicate with other friends in ways that are customizable, or to end communication with other users
   
   **Acceptance criteria**:
   Server admin should have access to options to create a new server, modify server details, and delete a server.
   When creating a new server, the admin should be prompted to provide a server name and optional profile picture.
   Upon deletion of a server, all server data, including channels and messages, should be permanently removed.
   Changes made to server details (name, profile picture) should be immediately reflected across the platform.


2. As a regular user, I want to be able to register as a user, and have a personal account so that I can access the app's features in its entirety
   
   **Acceptance criteria**:
   New users should be able to register by providing required information such as username, email, and password.
   Upon successful registration, users should receive a confirmation email or message.
   Registered users should have access to all features of the application upon logging in.

3. As a regular user, I want to be able to modify and delete my account so that I can stop using the application
   
   **Acceptance criteria**:
   Users should have access to settings allowing them to modify their account details.
   Account deletion option should be available in the user settings menu.
   Upon deletion, the user's account and all associated data should be permanently removed from the system.

4. As a regular user, I want to be able send friend requests to other users so that I can communicate with them effectively
   
   **Acceptance criteria**:
   Users should be able to send friend requests to other users.
   The recipient should receive a notification of the friend request and have the option to accept or decline it.
   Upon acceptance, the users should be added to each other's friends list.

5. As a regular user, I want to be able to see my friends' list so that I can communicate them when needed
   
   **Acceptance criteria**:
   Users should have access to a friends list displaying all accepted friend connections.
   The friends list should include information such as friend usernames and online/offline status.
   Users should be able to access their friends list from the application's main interface.

6. As a regular user, I want to be able to access online/offline status along with the member list for each server so that I can see which user is online and to communicate or send friends requests to users in the server
   
   **Acceptance criteria**:
   Users should be able to view the online/offline status of other users within a server.
   The member list of each server should display usernames along with their online/offline status.
   Users should be able to access the member list from the server interface.

7. As a regular user, I want to able to directly message a user by their username so that I can communicate with a user from a server or just by username
   
   **Acceptance criteria**:
   Users should have the ability to send direct messages to other users by entering their usernames.
   Direct messages should be delivered in real-time, and users should receive notifications for new messages.

8. As a regular user, I want to be able to attach media such as images, videos, stickers, GIFs, emojis, etc. and embed links so that I can send media to users in a server or via direct messaging
   
   **Acceptance criteria**:
   Users should be able to attach various types of media (images, videos, stickers, GIFs, emojis) to messages.
   Links pasted into messages should be automatically embedded with a preview.
   Media and links should be accessible and viewable by recipients in the chat.

9. As a regular user, I want to able to receive push notifications to users involved in a server where a message was sent or via direct messaging so that I can see the messages sent as they reach the server or the direct messaging chat
   
   **Acceptance criteria**:
   Users should receive push notifications for new messages in servers and direct messages.
   Notifications should be delivered in real-time and should include information about the sender and message content.

10. As a server admin, I want to able to create, modify, and delete a channel in a server so that I can effectively categories interactions between users in a server, or remove categories of communication that serve no purpose
   
    **Acceptance criteria**:
    Server admin should be able to create a new channel or category within a server, modify existing channel settings, and delete channels.
    When creating a new channel or category, the admin should specify the channel or category name and type (text, voice).
    Modifications to channel or category settings should include options to change the channel or category name, type, and permissions.
    Deleted channels or categories should be removed from the server interface, and all associated messages should be permanently deleted.

11. As a regular user, I want to be able to tag/mention server members using @ so that I can talk to specific users or all the users in a server
   
    **Acceptance criteria**:
    Users should be able to tag or mention other users in messages using the "@" symbol followed by the username.
    Tagged users should receive notifications, and their usernames should be highlighted in the message.

12. As a server admin, I want to be able to change server themes, so that I can let the server members have a different visual when they open the server
   
    **Acceptance criteria**:
    Server admin should have the ability to change the theme of the server interface.
    Themes should include options for color schemes, background images, and other visual elements.
    Changes to server themes should be immediately visible to all server members upon application.

13. As a regular user, I want to be able to join and leave multiple servers so that I can communicate with a community of users or stop communicating with a community of users
   
    **Acceptance criteria**:
    Users should have the ability to join multiple servers and leave servers they no longer wish to participate in.
    Joining a server should be initiated by accepting an invitation or searching for and selecting a server from a list.
    Leaving a server should remove the user from the server's member list and channels.

14. As a regular user, I want to be able to communicate via text and voice so that I can communicate effectively with other users in servers and via direct message
   
    **Acceptance criteria**:
    Users should have access to both text and voice communication features within servers and direct messages.
    Text chat should support real-time messaging, while voice chat should provide clear audio communication.
    Both text and voice chat features should be accessible from the server interface and direct message windows.

15. As a regular user, I want to be able to search for other users by user name so that I can send friend requests to other users
   
     **Acceptance criteria**:
    Users should have access to a search feature allowing them to find other users by their usernames.
    Search results should display matching usernames, and users should be able to click on a result to view the user profile.
    As a regular user, I want to be able to access online/offline status along with the member list for each server so that I can see which user is online and to communicate or send friend requests to users on the server.

16. As a regular user, I want to be able to customize notification frequency, so that I can make sure I get notifications as and when I want to see them
   
     **Acceptance criteria**:
    Users should have access to settings allowing them to customize notification preferences.
    Options should include frequency settings for different types of notifications (e.g., message mentions, friend requests).
    Changes to notification settings should be applied immediately.

17. As a regular user, I want to be able to modify permissions on a server if given a role so that I can enforce regulations on a server
   
     **Acceptance criteria**:
    Users with appropriate permissions (e.g., server admins, moderators) should be able to modify user permissions within a server.
    Changes to permissions should be immediately reflected for affected users.
    Options for modifying permissions should be accessible from the server settings menu.

# Functional Requirements

1. Server Management
a. Allow users to create, modify, and delete servers.
b. Acceptance Criteria: Users should be able to initiate server setup, change server
details, and remove a server without encountering errors.

2. Category Management
a. Enable users to create, modify, and delete categories within servers.
b. Acceptance Criteria: Users should have the ability to add new categories, rename existing categories, reorganize categories, and delete categories as needed.

3. Channel Management
a. Allow users to create, modify, and delete text and voice channels within servers.
b. Acceptance Criteria: Users should be able to add channels, adjust channel settings, and remove channels successfully.

4. Communication Tools
a. Support live text and voice chat.
b. Acceptance Criteria: Users should be able to engage in real-time communication through text and voice without experiencing noticeable lag or quality issues.

5. Permission Settings
a. Allow server owners to modify user permissions.
b. Acceptance Criteria: Server owners should be able to change permissions, and those changes should be reflected immediately for affected users.

6. Account Registration and Management
a. Enable new users to register and existing users to modify or delete their accounts.
b. Acceptance Criteria: Users should be able to register a new account, modify their account details, and delete their account as needed.

7. Server Membership
a. Allow users to join multiple servers, leave servers, and switch between servers.
b. Acceptance Criteria: Users should be able to seamlessly join or leave servers and switch the active server view without encountering system errors.

8. Social Interaction
a. Provide a feature for users to send friend requests, manage a friends list, and display online/offline statuses.
b. Acceptance Criteria: Users should be able to send friend requests, accept or decline friend requests, manage their friends list, and view the online/offline status of other users.

9. Direct Messaging
a. Offer a direct messaging feature for private user communication.
b. Acceptance Criteria: Users should be able to send, receive, and view direct messages with other users in real time.

10. Media and Link Sharing
a. Allow users to add media and embed links in their messages.
b. Acceptance Criteria: Users should be able to upload and share media files and links, which should be accessible to others in the chat.

11. Notifications
a. Provide customizable notifications for various user activities.
b. Acceptance Criteria: Users should receive notifications according to their settings and have the ability to customize what they are notified about.

12. Tagging and Mentioning
a. Support the functionality to tag or mention users in chats.
b. Acceptance Criteria: When a user is tagged, they should receive a notification, and the tag should be visible in the chat.

13. Customization
a. Allow users to change server themes.
b. Acceptance Criteria: Users should be able to change the theme of a server and see the visual changes on the user interface.

# Non-Functional Requirements
1. Performance
a. Efficiently handle user traffic to ensure smooth operation.
b. Acceptance Criteria: The system should maintain responsiveness and stability even when several users are accessing various features simultaneously.
2. Usability
a. Ensure that the platform is adaptable and easy to use for all users.
b. Acceptance Criteria: Users should be able to navigate the system effortlessly or at least perform basic tasks without requiring guidance or instructions.

3. Reliability
a. Maintain system stability and prevent crashes or failures.
b. Acceptance Criteria: The system should operate without disruption during demonstrations, and even if there are disruptions, it should be able to recover from them easily.

4. Scalability
a. Ensure that the system can accommodate increase in users and user engagement without having to manually tailor the platform each time there is a growth.
b. Acceptance Criteria: The system should be able to add additional mock users, servers, categories, channels, etc. without the need for manual adjustments in the database or the platform’s code base.

5. Security
a. Protection of user data and privacy.
b. Acceptance Criteria: Basic security measures such as hashed passwords should be implemented to protect user accounts and other sensitive information.

6. Compatibility
a. Ensure that the functionality of the platform remains consistent across different browsers and environments
b. Acceptance Criteria: The system should perform as expected on Chrome, Firefox, Safari, etc. during demonstrations to showcase compatibility with commonly used web browsers.