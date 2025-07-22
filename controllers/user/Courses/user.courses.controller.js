import Course from "../../../models/course.model.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).select(
      "name description totalTopics courseImgUrl"
    );
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
