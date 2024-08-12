# Eisken Properties

## Project Overview

Eisken Properties is a real estate and property sales and letting agency. This project was created for personal learning, inspired by a local house letting agency in Swansea. The project simulates a real-world property management platform, where users can explore, add, and interact with property listings.

## Features

- **User Authentication & Authorization:** Google Auth integration for secure login.
- **Property Management:** Browse, add, edit, and delete properties.
- **Bookmarking:** Save properties for later viewing.
- **Messaging System:** Send messages directly to property owners.
- **Geo-location:** Display property locations using Mapbox.
- **Image Management:** Handle property images with Cloudinary.

## Tech Stack

- **Frontend:** Next.js (React framework)
- **Backend:** Node.js with MongoDB
- **Styling:** Tailwind CSS
- **Authentication:** Google Auth
- **Geo-location:** Mapbox
- **Image Storage:** Cloudinary

## Getting Started

### Clone The Repository

```bash
git clone https://github.com/vineethpradeep/eiskenProperties.git
cd eisken-properties
```

Install Dependencies
bash
Copy code
npm install
Set Up Environment Variables
Create a .env.local file and add the necessary environment variables:

makefile
Copy code
NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_api_key
CLOUDINARY_URL=your_cloudinary_url
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Run The Development Server
bash
Copy code
npm run dev
Open The App
Visit http://localhost:3000 to view the project in your browser.

Future Enhancements
Add advanced search filters based on property criteria.
Implement user roles (e.g., admin, property manager).
Expand the messaging system with real-time chat.
Enhance the UI/UX with additional animations and transitions.
License
This project is licensed under the MIT License.

This markdown file will provide a clear and organized overview of the project when viewed on GitHub or any markdown viewer.
