// controllers/homeController.js
export const getHomePage= (req, res) => {
    try {
      // Your logic to fetch data for the home page
      res.status(200).json({ message: 'Home page data' });
    } catch (error) {
      console.error('Error fetching home page data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  