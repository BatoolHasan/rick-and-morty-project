# Rick and Morty Project

This project was created using [Create React App](https://github.com/facebook/create-react-app). 
It displays a list of characters and allows the user to search, filter, and view character details.

## Live Demo

[Click here to view the live demo.](https://rick-and-morty-project-pink.vercel.app/)

## Steps to Run the Project

### 1) Clone the project in your desired folder.

### 2) Make sure that node and npm are installed on your device. My specific versions of node and npm are v16.13.1 and 8.1.2, respectively.

### 3) Inside your project folder, run `npm i` in your terminal.

### 4) Inside your project folder, run `npm start` in your terminal.

## Improvements
Improved the user experience by:
<br/>
1- Adding an animated placeholder for the images while they load using the LazyImage utility component.
<br/>
2- Adding a fallback placeholder for the alt text instead of the default alt in the LazyImage utility component.
<br/>
These improvements depend on checking when the image has finished loading and whether its source is valid.
