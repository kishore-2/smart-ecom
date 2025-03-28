export const login = async (req, res) => {
    const { username, password } = req.body;

    // Implement authentication logic here
    // Validate user credentials against the database

    res.status(200).json({ message: 'Login successful' });
};

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // Implement registration logic here
    // Save new user details to the database

    res.status(201).json({ message: 'User registered successfully' });
};