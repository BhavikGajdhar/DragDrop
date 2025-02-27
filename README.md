Installation & Setup

1. Clone the repository
   git clone
2. Install Dependency
   npm install
3. Start the application
   npm run dev
4. Start the Json-Server
   json-server --watch db.json
   for relevant db.json files file path // ignore this point if json-server is on vercel deploy.

Usage:

1. Open the application in your browser(https://drag-drop-vinays-projects-d97bd6b4.vercel.app/)
2. Drag and drop widgets to rearrange them.
3. Resize the widget by dragging the top corner buttons
4. Data loads automatically from the mock API.
5. The layout is saved automatically in local storage and restored on refresh.

Additional Feature:
Dark mode
Add/Remove widgets Dynamically

Technologies Used

1. React.js - Frontend framework
2. Context API - State management
3. React-Grid-Layout for - Drag-and-drop functionality
4. Recharts - Data visualization
5. JSONPlaceholder API - Mock data source
6. Tailwind CSS / Styled Components - UI styling
