// controllers/projectsController.js
export const getProjectsPage= (req, res) => {
    try {
      // Your logic to fetch data for the projects page
      res.status(200).json({ message: 'Projects page data' });
    } catch (error) {
      console.error('Error fetching projects page data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  