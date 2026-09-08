// - image: put a screenshot/thumbnail in src/assets/projects/ and import it, or leave null for a placeholder
// - link: URL to the live project, case study, or repo
// - detail: shown on the full project page (src/components/ProjectDetail.jsx) for projects that have one

import siitHero from '../assets/projects/siit-super-app-hero.webp'
import siitAcademicPlanning from '../assets/projects/siit-academic-planning.webp'
import siitCourseEnrollment from '../assets/projects/siit-course-enrollment.webp'
import siitLibraryBooking from '../assets/projects/siit-library-booking.webp'
import siitLearningResources from '../assets/projects/siit-learning-resources.webp'

import friendsHero from '../assets/projects/friends-and-funds-hero.webp'
import friendsGroupScheduling from '../assets/projects/friends-group-scheduling.webp'
import friendsItemSplitting from '../assets/projects/friends-item-splitting.webp'

import actTrackHero from '../assets/projects/acttrack-hero.webp'
import actTrackActivityTracking from '../assets/projects/acttrack-activity-tracking.webp'
import actTrackGoalSetting from '../assets/projects/acttrack-goal-setting.webp'
import actTrackActivityInsights from '../assets/projects/acttrack-activity-insights.webp'
import actTrackSocialMotivation from '../assets/projects/acttrack-social-motivation.webp'

import managingHero from '../assets/projects/managing-hero.webp'
import managingCustomInventory from '../assets/projects/managing-custom-inventory.webp'
import managingInventoryManagement from '../assets/projects/managing-inventory-management.webp'
import managingTeamCollaboration from '../assets/projects/managing-team-collaboration.webp'
import managingSupportCommunication from '../assets/projects/managing-support-communication.webp'

export const projectCategories = ['UX Research', 'Product Design', 'Academic Research']
// No Academic Research project yet — the category stays in the filter tabs (showing 0) until one is added.

export const projects = [
  {
    id: 1,
    category: 'UX Research',
    title: 'Retail Banking UX Research',
    subtitle: 'UX Research Intern, ttb',
    description:
      'Conducted end-to-end research across 12 projects in 6 product areas — customer service, retail lending, investment, wealth management, protection, and corporate banking — from problem framing through synthesis. Specifics are confidential and have been generalized to protect internal business information.',
    image: null,
    link: '#',
  },
  {
    id: 2,
    category: 'Product Design',
    title: 'SIIT Super App',
    subtitle: 'All-in-One Campus App',
    description: 'Bringing academic services, learning resources, and campus life together in one app.',
    image: siitHero,
    link: '/work/siit-super-app',
    detail: {
      slug: 'siit-super-app',
      hero: siitHero,
      role: 'UX/UI Designer',
      course: 'Human Interface Design',
      platform: 'Mobile Application',
      tools: 'Figma, Procreate',
      longDescription:
        'An all-in-one university app for enrollment, schedules, grades, library bookings, and learning resources. Designed to make campus life simpler and more connected.',
      keyFeatures: [
        {
          title: 'Academic Planning',
          description: 'View class and exam schedules, exam scores, and grades in one place.',
          image: siitAcademicPlanning,
        },
        {
          title: 'Course Enrollment',
          description: 'Enroll, withdraw, and manage course selections directly from the app.',
          image: siitCourseEnrollment,
        },
        {
          title: 'Library Booking',
          description: 'Check room availability and reserve study spaces across campuses.',
          image: siitLibraryBooking,
        },
        {
          title: 'Learning Resources',
          description: 'Access course materials and revisit recorded lectures anytime.',
          image: siitLearningResources,
        },
      ],
    },
  },
  {
    id: 3,
    category: 'Product Design',
    title: 'Friends & Funds',
    subtitle: 'Group Planning & Expense App',
    description: 'Plan activities, find shared free time, and split expenses with friends.',
    image: friendsHero,
    link: '/work/friends-and-funds',
    detail: {
      slug: 'friends-and-funds',
      hero: friendsHero,
      role: 'UX/UI Designer',
      course: 'System Analysis and Design',
      platform: 'Mobile Application',
      tools: 'Figma',
      longDescription:
        'A group planning app that helps friends find a convenient time to meet, organize shared activities, split expenses, and keep track of payments in one place.',
      keyFeatures: [
        {
          title: 'Group Scheduling',
          description: 'Compare group availability and use polls to find the best time to meet.',
          image: friendsGroupScheduling,
        },
        {
          title: 'Item-Based Splitting',
          description: 'Turn receipts into individual items and let friends choose what they pay for.',
          image: friendsItemSplitting,
        },
      ],
    },
  },
  {
    id: 4,
    category: 'Product Design',
    title: 'ActTrack',
    subtitle: 'Fitness Tracking & Goal App',
    description: 'Track daily activities, set personal goals, and stay motivated with friends.',
    image: actTrackHero,
    link: '/work/acttrack',
    detail: {
      slug: 'acttrack',
      hero: actTrackHero,
      role: 'UX/UI Designer',
      course: 'Cloud-Based Application',
      platform: 'Web Application',
      tools: 'Figma, Procreate',
      longDescription:
        'A fitness tracking web app that helps users monitor daily activities, set personal goals, and stay motivated through friends and leaderboards.',
      keyFeatures: [
        {
          title: 'Activity Tracking',
          description: 'Track walking, standing, cycling, and stair climbing throughout the day.',
          image: actTrackActivityTracking,
        },
        {
          title: 'Goal Setting',
          description: 'Create one-time or recurring goals and track progress.',
          image: actTrackGoalSetting,
        },
        {
          title: 'Activity Insights',
          description: 'View daily, weekly, and monthly activity summaries in one place.',
          image: actTrackActivityInsights,
        },
        {
          title: 'Social Motivation',
          description: 'Connect with friends and compare progress through activity leaderboards.',
          image: actTrackSocialMotivation,
        },
      ],
    },
  },
  {
    id: 5,
    category: 'Product Design',
    title: 'ManagIng',
    subtitle: 'Inventory Management',
    description: 'Create flexible inventories, manage stock, and collaborate with your team.',
    image: managingHero,
    link: '/work/managing',
    detail: {
      slug: 'managing',
      hero: managingHero,
      role: 'UX/UI Designer, Frontend Developer',
      course: 'Database Lab',
      platform: 'Web Application',
      tools: 'Figma',
      longDescription:
        'A collaborative inventory management web app that helps teams organize stock, customize inventory fields, and manage products together in one place.',
      keyFeatures: [
        {
          title: 'Custom Inventory Setup',
          description: 'Create inventories and customize the information needed for different types of products.',
          image: managingCustomInventory,
        },
        {
          title: 'Inventory Management',
          description: 'Add, edit, search, and manage product details and stock quantities in one place.',
          image: managingInventoryManagement,
        },
        {
          title: 'Team Collaboration',
          description: 'Share inventories with team members and collaborate through invitations.',
          image: managingTeamCollaboration,
        },
        {
          title: 'Support & Communication',
          description: 'Receive updates and contact administrators for inventory support.',
          image: managingSupportCommunication,
        },
      ],
    },
  },
]
