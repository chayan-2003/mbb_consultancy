// controllers/aboutUsController.js
export const getAboutUsPage = (req, res) => {
    try {
      // Your logic to fetch data for the about us page
      res.status(200).json({ message: 'About Us page data' });
    } catch (error) {
      console.error('Error fetching about us page data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  