import Neighborhood from '../models/Neighborhood.js'

// POST /api/neighborhoods
export const createNeighborhood = async (req, res) => {
  try {
    const {
      name, city, safety,
      affordability, walkability,
      nightlife, schools
    } = req.body

    const neighborhood = new Neighborhood({
      name,
      city,
      safety,
      affordability,
      walkability,
      nightlife,
      schools
    })

    await neighborhood.save()
    res.status(201).json({ message: 'Neighborhood created successfully', neighborhood })
  } catch (error) {
    console.error('Error creating neighborhood:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
//get by id...>>

export const getNeighborhoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const neighborhood = await Neighborhood.findById(id);

    if (!neighborhood) {
      return res.status(404).json({ message: 'Neighborhood not found' });
    }

    res.status(200).json(neighborhood);
  } catch (error) {
    console.error('Error fetching neighborhood by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
