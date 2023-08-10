window.reviewData = [
    {
        name: "Shubh Patel",
        date: new Date(2022, 8, 20),
        rating: 4,
        text: "I had a blast playing basketball with my friends at the college! "
    },
    {
        name: "om gajjar",
        date: new Date(2022, 12, 25),
        rating: 4,
        text: "Basketall is my favorite sport, and playing it in real life is an absolute joy."
    },
    {
        name: "abhi Patel",
        date: new Date(2022, 1, 15),
        rating: 4,
        text: " I was pleasantly surprised by how much fun I had playing the game. It's a great way to stay active and improve my hand-eye coordination."
    },
    {
        name: "riya Patel",
        date: new Date(2023, 4, 12),
        rating: 5,
        text:  "Playing basketball in real life is a fantastic workout and an excellent way to bond with friends and family. The fast-paced nature of the game keeps you on your toes"
    },
    {
        name: "prit patel",
        date: new Date(2023, 7, 1),
        rating: 5,
        text: "Basketball is a game that's filled with energy, excitement, and camaraderie.."
    },
    
 ];
 function generateReviewHTML(reviews) {
    const reviewsContainer = document.getElementById('review-table');
  
    reviews.forEach((review) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
  
   
  
      const datePara = document.createElement('p');
      datePara.textContent = review.date.toLocaleDateString();
      reviewDiv.appendChild(datePara);
  
      const ratingPara = document.createElement('p');
      const ratingString = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      ratingPara.textContent = ratingString;
      ratingPara.classList.add('rating');
      reviewDiv.appendChild(ratingPara);
  
      
  
      reviewsContainer.appendChild(reviewDiv);
    });
  }

// function generateReviewHTML(reviews) {
//     const reviewsContainer = document.getElementById('review-table');
//     reviews.forEach((review) => {
//         const row = document.createElement('tr');

//         const nameCell = document.createElement('td');
//         nameCell.textContent = review.name;
//         row.appendChild(nameCell);

//         const dateCell = document.createElement('td');
//         dateCell.textContent = review.date;
//         row.appendChild(dateCell);

//         const ratingCell = document.createElement('td');
//         ratingCell.textContent = review.rating;
//         row.appendChild(ratingCell);

//         const reviewCell = document.createElement('td');
//         reviewCell.textContent = review.review;
//         row.appendChild(reviewCell);

//         reviewsContainer.appendChild(row);
//     });
// }

// // Call the function with reviewData after the data is available
// generateReviewHTML(reviewData);

// document.addEventListener('DOMContentLoaded', function() {
//     createTable(reviewData);

//     const form = document.querySelector('.review-form-input-area');
//     form.addEventListener('submit', function(event) {
//       // Prevent the default behavior of the form (i.e. reloading the page) when the form is submitted
//       event.preventDefault();
  
//       // Get the values entered by the user
//       const name = document.querySelector('#name').value;
//       const date = document.querySelector('#date').value;
//       const rating = document.querySelector('input[name="rating"]:checked').value;
//       const review = document.querySelector('#review').value;
  
//       // Create a new object with the input data
//       const newReview = { name, date, rating, review };
  
//       // Add the new object to the reviewData array
//       reviewData.push(newReview);
  
//       // Clear the form
//       form.reset();
  
//       // Re-create the table with the updated data
//       createTable(reviewData);
//     });

//   });

// function createTable(reviews) {
//     // Fetching the tbody element
//     let table = document.querySelector("#reviews-table");
//     let newRow, newCell, newText;
  
//     // Iterating through the reviews and creating table
//     reviews.forEach(function (review) {
//       // creates a table row
//       newRow = table.insertRow();
//       newRow.className = "card";
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-name";
//       newCell.textContent = "Name: ";
//       newText = document.createTextNode(review.name);
//       newCell.appendChild(newText);
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-date";
//       newCell.textContent = "Date: ";
//       newText = document.createTextNode(review.date);
//       newCell.appendChild(newText);
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-rating";
//       newCell.textContent = "Rating: ";
//       newText = document.createTextNode(getRatingStars(review.rating));
//       newCell.appendChild(newText);
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-review";
//       newText = document.createTextNode(review.review);
//       newCell.appendChild(newText);
//     });
//   }
  
//   function getRatingStars(rating) {
//     let starsHtml = '';
//     for (let i = 0; i < rating; i++) {
//       starsHtml += '★ ';
//     }
//     for (let i = rating; i < 5; i++) {
//       starsHtml += '☆ ';
//     }
//     return starsHtml.trim();
//   }