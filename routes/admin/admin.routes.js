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
router.put("/soft-delete/announcement/:id/inactive", softDeleteAnnouncement); // soft delete

export default router;
