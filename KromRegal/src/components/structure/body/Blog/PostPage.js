// // PostPage.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchData } from "./dataFetcher"; // Import the data fetching function

// function PostPage() {
//     const { id } = useParams(); // Get the post ID from the URL parameter
//     const [loading, setLoading] = useState(true);
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         fetchData() // Fetch data from the API or JSON
//             .then((data) => {
//                 // Find the post with the matching ID
//                 const foundPost = data.find((item) => item.id === Number(id));
//                 if (foundPost) {
//                     setPost(foundPost);
//                 } else {
//                     console.error("Post not found");
//                 }
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, [id]);

//     return (
//         <div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : post ? (
//                 <div>
//                     <h1>{post.Title}</h1>
//                     <p>{post.PostText}</p>
//                     {/* Additional post content can be displayed here */}
//                 </div>
//             ) : (
//                 <p>Post not found.</p>
//             )}
//         </div>
//     );
// }

// export default PostPage;
