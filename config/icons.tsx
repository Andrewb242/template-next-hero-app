// ============================================
// ICON IMPORTS
// ============================================

// Material Design Icons
import {
  MdModeEdit,
  MdDelete,
  MdClose,
  MdCheck,
  MdEmail,
  MdNotifications,
} from "react-icons/md";

// Font Awesome Icons
import {
  FaRegFolderOpen,
  FaRegCalendarAlt,
  FaRegEye,
  FaRegEyeSlash,
  FaRegBell,
  FaRegHeart,
  FaHeart,
  FaRegUser,
  FaRegFileAlt,
  FaRegCommentDots,
  FaRegStar,
  FaStar,
  FaSearch,
  FaSave,
  FaEdit,
  FaUserCircle,
} from "react-icons/fa";

import {
  FaHouseUser,
  FaSun,
  FaMoon,
  FaLightbulb,
  FaPlus,
  FaRegClock,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
  FaBars,
  FaFilter,
  FaDownload,
  FaUpload,
  FaShare,
  FaLink,
  FaCopy,
  FaTrash,
  FaUser,
  FaUsers,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

// Bootstrap Icons
import { BsFillPeopleFill, BsGrid, BsList } from "react-icons/bs";

// Hero Icons
import { HiUsers, HiOutlineDocumentDuplicate } from "react-icons/hi2";

// Ionicons
import {
  IoMdArrowRoundBack,
  IoIosWarning,
  IoMdInformationCircle,
  IoMdCheckmarkCircle,
  IoMdCloseCircle,
} from "react-icons/io";

import { IoSettingsSharp, IoHome } from "react-icons/io5";

// Remix Icons
import { RiLogoutBoxRLine, RiDashboardLine, RiMenuLine } from "react-icons/ri";

// Phosphor Icons
import { PiExportBold } from "react-icons/pi";

// Simple Icons
import { GrSchedules } from "react-icons/gr";

// ============================================
// ICON PROPS INTERFACE
// ============================================

export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// ============================================
// NAVIGATION ICONS
// ============================================

export const HomeIcon: React.FC<IconProps> = (props) => <IoHome {...props} />;

export const HouseIcon: React.FC<IconProps> = (props) => (
  <FaHouseUser {...props} />
);

export const DashboardIcon: React.FC<IconProps> = (props) => (
  <RiDashboardLine {...props} />
);

export const BackArrowIcon: React.FC<IconProps> = (props) => (
  <IoMdArrowRoundBack {...props} />
);

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <FaArrowLeft {...props} />
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <FaArrowRight {...props} />
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
  <FaArrowUp {...props} />
);

export const ArrowDownIcon: React.FC<IconProps> = (props) => (
  <FaArrowDown {...props} />
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <FaChevronLeft {...props} />
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <FaChevronRight {...props} />
);

export const ChevronUpIcon: React.FC<IconProps> = (props) => (
  <FaChevronUp {...props} />
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <FaChevronDown {...props} />
);

export const MenuIcon: React.FC<IconProps> = (props) => <FaBars {...props} />;

export const MenuLineIcon: React.FC<IconProps> = (props) => (
  <RiMenuLine {...props} />
);

// ============================================
// ACTION ICONS
// ============================================

export const EditIcon: React.FC<IconProps> = (props) => <FaEdit {...props} />;

export const EditMdIcon: React.FC<IconProps> = (props) => (
  <MdModeEdit {...props} />
);

export const DeleteIcon: React.FC<IconProps> = (props) => (
  <MdDelete {...props} />
);

export const TrashIcon: React.FC<IconProps> = (props) => <FaTrash {...props} />;

export const SaveIcon: React.FC<IconProps> = (props) => <FaSave {...props} />;

export const CopyIcon: React.FC<IconProps> = (props) => <FaCopy {...props} />;

export const DuplicateIcon: React.FC<IconProps> = (props) => (
  <HiOutlineDocumentDuplicate {...props} />
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <FaSearch {...props} />
);

export const FilterIcon: React.FC<IconProps> = (props) => (
  <FaFilter {...props} />
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <FaDownload {...props} />
);

export const UploadIcon: React.FC<IconProps> = (props) => (
  <FaUpload {...props} />
);

export const ExportIcon: React.FC<IconProps> = (props) => (
  <PiExportBold {...props} />
);

export const ShareIcon: React.FC<IconProps> = (props) => <FaShare {...props} />;

export const LinkIcon: React.FC<IconProps> = (props) => <FaLink {...props} />;

export const PlusIcon: React.FC<IconProps> = (props) => <FaPlus {...props} />;

export const CloseIcon: React.FC<IconProps> = (props) => <MdClose {...props} />;

export const CheckIcon: React.FC<IconProps> = (props) => <MdCheck {...props} />;

// ============================================
// USER & PEOPLE ICONS
// ============================================

export const UserIcon: React.FC<IconProps> = (props) => <FaUser {...props} />;

export const UserRegIcon: React.FC<IconProps> = (props) => (
  <FaRegUser {...props} />
);

export const UserCircleIcon: React.FC<IconProps> = (props) => (
  <FaUserCircle {...props} />
);

export const UsersIcon: React.FC<IconProps> = (props) => <FaUsers {...props} />;

export const StaffIcon: React.FC<IconProps> = (props) => <HiUsers {...props} />;

export const ResidentsIcon: React.FC<IconProps> = (props) => (
  <BsFillPeopleFill {...props} />
);

// ============================================
// CONTENT ICONS
// ============================================

export const FolderIcon: React.FC<IconProps> = (props) => (
  <FaRegFolderOpen {...props} />
);

export const FileIcon: React.FC<IconProps> = (props) => (
  <FaRegFileAlt {...props} />
);

export const DocumentIcon: React.FC<IconProps> = (props) => (
  <HiOutlineDocumentDuplicate {...props} />
);

export const CommentIcon: React.FC<IconProps> = (props) => (
  <FaRegCommentDots {...props} />
);

export const EmailIcon: React.FC<IconProps> = (props) => <MdEmail {...props} />;

// ============================================
// STATUS & FEEDBACK ICONS
// ============================================

export const WarningIcon: React.FC<IconProps> = (props) => (
  <IoIosWarning {...props} />
);

export const InfoIcon: React.FC<IconProps> = (props) => (
  <IoMdInformationCircle {...props} />
);

export const SuccessIcon: React.FC<IconProps> = (props) => (
  <IoMdCheckmarkCircle {...props} />
);

export const ErrorIcon: React.FC<IconProps> = (props) => (
  <IoMdCloseCircle {...props} />
);

export const HintIcon: React.FC<IconProps> = (props) => (
  <FaLightbulb {...props} />
);

export const NotificationIcon: React.FC<IconProps> = (props) => (
  <MdNotifications {...props} />
);

export const BellIcon: React.FC<IconProps> = (props) => (
  <FaRegBell {...props} />
);

// ============================================
// VIEW & DISPLAY ICONS
// ============================================

export const EyeIcon: React.FC<IconProps> = (props) => <FaRegEye {...props} />;

export const EyeSlashIcon: React.FC<IconProps> = (props) => (
  <FaRegEyeSlash {...props} />
);

export const GridIcon: React.FC<IconProps> = (props) => <BsGrid {...props} />;

export const ListIcon: React.FC<IconProps> = (props) => <BsList {...props} />;

// ============================================
// TIME & SCHEDULING ICONS
// ============================================

export const CalendarIcon: React.FC<IconProps> = (props) => (
  <FaRegCalendarAlt {...props} />
);

export const ScheduleIcon: React.FC<IconProps> = (props) => (
  <GrSchedules {...props} />
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <FaRegClock {...props} />
);

// ============================================
// RATING & FAVORITES ICONS
// ============================================

export const StarIcon: React.FC<IconProps> = (props) => <FaStar {...props} />;

export const StarRegIcon: React.FC<IconProps> = (props) => (
  <FaRegStar {...props} />
);

export const HeartIcon: React.FC<IconProps> = (props) => <FaHeart {...props} />;

export const HeartRegIcon: React.FC<IconProps> = (props) => (
  <FaRegHeart {...props} />
);

// ============================================
// SETTINGS & SYSTEM ICONS
// ============================================

export const SettingsIcon: React.FC<IconProps> = (props) => (
  <IoSettingsSharp {...props} />
);

export const LogoutIcon: React.FC<IconProps> = (props) => (
  <RiLogoutBoxRLine {...props} />
);

// ============================================
// THEME ICONS
// ============================================

export const SunIcon: React.FC<IconProps> = (props) => <FaSun {...props} />;

export const MoonIcon: React.FC<IconProps> = (props) => <FaMoon {...props} />;

// ============================================
// SOCIAL MEDIA ICONS
// ============================================

export const GithubIcon: React.FC<IconProps> = (props) => (
  <FaGithub {...props} />
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <FaTwitter {...props} />
);

export const LinkedinIcon: React.FC<IconProps> = (props) => (
  <FaLinkedin {...props} />
);

export const DiscordIcon: React.FC<IconProps> = (props) => (
  <FaDiscord {...props} />
);
