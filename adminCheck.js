require('dotenv').config(); // Load environment variables

const isAdmin = process.env.IS_ADMIN === 'true'; // Convert string to boolean

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}