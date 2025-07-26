import express from "express";

import {
  loginAdmin,
  forgotAdminPassword,
  resetAdminPasswordWithOtp,
  resetAdminPassword,
  createAdmin,
  refreshTokenAdmin,
} from "../../controllers/admin/Auth/admin.auth.controller.js";
import {
  createBanner,
  deleteBanner,
  getBanners,
  updateBanner,
} from "../../controllers/admin/Banner_Management/admin.banner.controller.js";
import {
  createAnnouncement,
  deleteAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  softDeleteAnnouncement,
  updateAnnouncement,
} from "../../controllers/admin/Announcement/admin.announcement.controller.js";
import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} from "../../controllers/admin/Courses/courses.controller.js";
import {
  createChapter,
  deleteChapter,
  getAllChapters,
  getChapterById,
  updateChapter,
} from "../../controllers/admin/Courses/chapter.controller.js";
import { getAllUsers, getUserByEmail, getUserById, getUserByName } from "../../controllers/admin/Users/userController.js";


const router = express.Router();

// NOTE: 📝 This is login / AUTH Routes

router.post("/login", loginAdmin);
router.post("/forgot-password", forgotAdminPassword);
router.post("/reset-password-otp", resetAdminPasswordWithOtp);
router.post("/reset-password/:adminId", resetAdminPassword);
router.post("/create", createAdmin);
router.post("/refresh-token", refreshTokenAdmin);

// NOTE: 📝 This is Banner Management Routes

router.post("/create/banner", createBanner); // create
router.get("/get/banners", getBanners); // get all
router.put("/get/:bannerId", updateBanner); // edit
router.delete("/delete/:bannerId", deleteBanner); // delete

// NOTE: 📝 This is for Announcement
router.post("/create/announcement", createAnnouncement);
router.get("/getall/announcement", getAllAnnouncements);
router.get("/get/announcement/:id", getAnnouncementById);
router.put("/update/announcement/:id", updateAnnouncement);
router.delete("/delete/announcement/:id", deleteAnnouncement);
router.put("/soft-delete/announcement/:id/inactive", softDeleteAnnouncement); // soft  delete

//** This is Course Routes */
// Create a new course
router.post("/create/courses", createCourse);
// Get all courses
router.get("/get/courses", getCourses);
// Get a specific course by ID
router.get("/get/courseById/:id", getCourseById);
// Update a course by ID
router.put("/update/courseById/:id", updateCourse);
// Delete a course by ID
router.delete("/delete/courseById/:id", deleteCourse);

// * This is Chapter Routes
router.post("/create/chapter", createChapter);
router.get("/get/all/chapters", getAllChapters);
router.get("/get/chapterById/:id", getChapterById);
// Update a chapter by ID
router.put("/update/chapterById/:id", updateChapter);
// Delete a chapter by ID
router.delete("/delete/chapterById/:id", deleteChapter);



// get all users //api
router.get("/get/all/users", getAllUsers)
router.get("/getuserbyid/:id", getUserById);
router.get('/getUserByEmail/:email',getUserByEmail)
router.get('/getUserByName/:Name',getUserByName)


export default router;
