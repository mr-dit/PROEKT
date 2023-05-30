const Router = require('express').Router;
const UserController = require('../controllers/user-controller');
const ProjectController = require('../controllers/project-controller')
const NoteController = require('../controllers/note-controller')
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const AuditoryController = require('../controllers/auditory-controller')
const ResourceFinanceController = require('../controllers/resorceFinance-controller')
const ResourceWorkController = require('../controllers/resourceWork-controller')
const ResourceTimeController = require('../controllers/resourceTime-controller')
const EducationController = require('../controllers/education-controller')
const PromotionController = require('../controllers/promotion-controller')
const fileMiddleware = require('../middlewares/file-middleware')
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/'); // Папка, куда сохранять загруженные файлы
	},
	filename: (req, file, cb) => {
		cb(null, new Date().getMilliseconds() + new Date().toISOString() + '-' + file.originalname) // Имя файла после сохранения
	}
});

const upload = multer({
	storage: storage,

	limits: { fileSize: 1024 * 1024 * 5 }, // Ограничение размера файла (5MB)
});





router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
// router.get('/activate/:link', userController.activate);
router.get('/refresh', UserController.refresh);

router.post('/project',upload.fields([{ name: 'file', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), ProjectController.create)
router.post('/project/:id', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), ProjectController.update)
router.get('/project/:id', ProjectController.getProjectById)
router.get('/project', ProjectController.getProjects)

router.post('/uploadAvatar', upload.single('avatar'), UserController.setAvatar)
router.get('/getAvatar', UserController.getAvatar)

router.post('/notes/:id', NoteController.create)
router.post('/note', NoteController.update)
router.post('/noteDelete', NoteController.delete)
router.get('/notes/:id', NoteController.getNotes)

router.post('/auditory/:id', AuditoryController.update)
router.get('/auditory/:id', AuditoryController.getAuditoryById)

router.post('/resourceFinance/:id', ResourceFinanceController.update)
router.get('/resourceFinance/:id', ResourceFinanceController.getResourceFinanceById)

router.post('/resourceWork/:id', ResourceWorkController.update)
router.get('/resourceWork/:id', ResourceWorkController.getResourceWorkById)

router.post('/resourceTime/:id', ResourceTimeController.update)
router.get('/resourceTime/:id', ResourceTimeController.getResourceTimeById)

router.post('/educations/:id', EducationController.update)
router.get('/educations/:id', EducationController.getEducationById)

router.post('/promotion/:id', PromotionController.update)
router.get('/promotion/:id', PromotionController.getPromotionById)


router.get('/users', authMiddleware, UserController.getUsers);
module.exports = router
