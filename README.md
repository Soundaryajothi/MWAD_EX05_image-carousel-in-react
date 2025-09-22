# MWAD_EX05_image-carousel-in-react
## Date:22.09.2025
## Name:SOUNDARYA J
## Reg.no:212223220108

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## OUTPUT:
<img width="1920" height="1080" alt="Screenshot 2025-09-22 191323" src="https://github.com/user-attachments/assets/fb46976c-632b-475a-9a09-e3e466c70c89" />

<img width="1920" height="1080" alt="Screenshot 2025-09-22 191337" src="https://github.com/user-attachments/assets/537f1eaa-aedd-4867-adf6-f26f9148ea73" />


## RESULT
The program for creating Image Carousel using React is executed successfully.
