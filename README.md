#### angularBlog

A very basic blogging app. Makes requests to an API for 100 random posts and allows users to create and veiw posts.

User posted blogs are posted by making a POST request to the same API. Since the API does not return the new blogs as a part of the GET request, posts are stored in local storage and displayed as the newest posts in the queue.

User authentication was not implemented and user posted blogs are stored using local storage.

## Usage

### Requirements

Manually install the following first:

- npm v5.x

### Setup

Install dependencies:

    npm install

### Run

Compile and run the app in a browser, with automatic reloading when you modify the source code:

    npm run dev
