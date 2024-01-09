// controllers/clientsController.js
export const getClientsPage = (req, res) => {
    try {
      // Your logic to fetch data for the clients page
      res.status(200).json({ message: 'Clients page data' });
    } catch (error) {
      console.error('Error fetching clients page data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  