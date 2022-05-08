// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
export function getBootcamps(req, res, next) {
    res.status(200).json({ success: true, message: 'Show all bootcamps.' });
}

// @desc        Get a single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
export function getBootcamp(req, res, next) {
    res.status(200).json({ success: true, message: `Show bootcamp with id: ${ req.params.id }.` });
}

// @desc        Create a new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
export function createBootcamp(req, res, next) {
    res.status(200).json({ success: true, message: 'Create a new bootcamp.' });
}

// @desc        Update a single bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
export function updateBootcamp(req, res, next) {
    res.status(200).json({ success: true, message: `Update bootcamp with id: ${ req.params.id }.` });
}

// @desc        Delete a single bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Public
export function deleteBootcamp(req, res, next) {
    res.status(200).json({ success: true, message: `Delete bootcamp with id: ${ req.params.id }.` });
}