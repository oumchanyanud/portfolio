// All project content lives here. Images are imported so Vite fingerprints them.
//
// Shape per project:
//   slug, category, title, titleAccent (portion of the title shown in the accent colour),
//   subtitle, description, image (card thumbnail), link (internal route), layout
//   ('mobile' = phone screenshots side-by-side, 'web' = wide screenshots stacked),
//   footerBubble (per-project line in the contact band),
//   detail: { hero, longDescription, role, course, platform, tools, keyFeatures[], designSystem }
//   keyFeatures[]: { title, description, image (first), images[] }
//   designSystem: { color:{blurb,swatches[]}, typography:{blurb,font,image},
//                   uiElements:{blurb,images[]}, gallery:{label:'Illustrations'|'Icons',blurb,images[]} }

// --- SIIT Super App ---
import siitCard from '../assets/projects/siit/card.webp'
import siitHero from '../assets/projects/siit/hero.webp'
import siitAcademicPlanning1 from '../assets/projects/siit/academic-planning-1.webp'
import siitAcademicPlanning2 from '../assets/projects/siit/academic-planning-2.webp'
import siitCourseEnrollment1 from '../assets/projects/siit/course-enrollment-1.webp'
import siitLibraryBooking1 from '../assets/projects/siit/library-booking-1.webp'
import siitLibraryBooking2 from '../assets/projects/siit/library-booking-2.webp'
import siitLearningResources1 from '../assets/projects/siit/learning-resources-1.webp'
import siitLearningResources2 from '../assets/projects/siit/learning-resources-2.webp'
import siitTypography from '../assets/projects/siit/typography.webp'
import siitUi1 from '../assets/projects/siit/ui-1.webp'
import siitUi2 from '../assets/projects/siit/ui-2.webp'
import siitUi3 from '../assets/projects/siit/ui-3.webp'
import siitIllustrations1 from '../assets/projects/siit/illustrations-1.webp'
import siitIllustrations2 from '../assets/projects/siit/illustrations-2.webp'

// --- Friends & Funds ---
import friendsCard from '../assets/projects/friends/card.webp'
import friendsHero from '../assets/projects/friends/hero.webp'
import friendsGroupScheduling1 from '../assets/projects/friends/group-scheduling-1.webp'
import friendsGroupScheduling2 from '../assets/projects/friends/group-scheduling-2.webp'
import friendsFlexibleBillSplitting1 from '../assets/projects/friends/flexible-bill-splitting-1.webp'
import friendsFlexibleBillSplitting2 from '../assets/projects/friends/flexible-bill-splitting-2.webp'
import friendsItemBasedSplitting1 from '../assets/projects/friends/item-based-splitting-1.webp'
import friendsItemBasedSplitting2 from '../assets/projects/friends/item-based-splitting-2.webp'
import friendsGroupBalance1 from '../assets/projects/friends/group-balance-1.webp'
import friendsGroupBalance2 from '../assets/projects/friends/group-balance-2.webp'
import friendsTypography from '../assets/projects/friends/typography.webp'
import friendsUi1 from '../assets/projects/friends/ui-1.webp'
import friendsUi2 from '../assets/projects/friends/ui-2.webp'
import friendsUi3 from '../assets/projects/friends/ui-3.webp'
import friendsIllustrations1 from '../assets/projects/friends/illustrations-1.webp'
import friendsIllustrations2 from '../assets/projects/friends/illustrations-2.webp'

// --- ActTrack ---
import actTrackCard from '../assets/projects/acttrack/card.webp'
import actTrackHero from '../assets/projects/acttrack/hero.webp'
import actTrackActivityTracking1 from '../assets/projects/acttrack/activity-tracking-1.webp'
import actTrackGoalSetting1 from '../assets/projects/acttrack/goal-setting-1.webp'
import actTrackGoalSetting2 from '../assets/projects/acttrack/goal-setting-2.webp'
import actTrackActivityInsights1 from '../assets/projects/acttrack/activity-insights-1.webp'
import actTrackSocialMotivation1 from '../assets/projects/acttrack/social-motivation-1.webp'
import actTrackSocialMotivation2 from '../assets/projects/acttrack/social-motivation-2.webp'
import actTrackTypography from '../assets/projects/acttrack/typography.webp'
import actTrackUi1 from '../assets/projects/acttrack/ui-1.webp'
import actTrackUi2 from '../assets/projects/acttrack/ui-2.webp'
import actTrackUi3 from '../assets/projects/acttrack/ui-3.webp'
import actTrackIcons1 from '../assets/projects/acttrack/icons-1.webp'
import actTrackIcons2 from '../assets/projects/acttrack/icons-2.webp'
import actTrackIcons3 from '../assets/projects/acttrack/icons-3.webp'
import actTrackIcons4 from '../assets/projects/acttrack/icons-4.webp'

// --- ManagINg ---
import managingCard from '../assets/projects/managing/card.webp'
import managingHero from '../assets/projects/managing/hero.webp'
import managingCustomInventorySetup1 from '../assets/projects/managing/custom-inventory-setup-1.webp'
import managingInventoryManagement1 from '../assets/projects/managing/inventory-management-1.webp'
import managingTeamCollaboration1 from '../assets/projects/managing/team-collaboration-1.webp'
import managingSupportCommunication1 from '../assets/projects/managing/support-communication-1.webp'
import managingTypography from '../assets/projects/managing/typography.webp'
import managingUi1 from '../assets/projects/managing/ui-1.webp'
import managingUi2 from '../assets/projects/managing/ui-2.webp'
import managingUi3 from '../assets/projects/managing/ui-3.webp'
import managingUi4 from '../assets/projects/managing/ui-4.webp'
import managingIcons1 from '../assets/projects/managing/icons-1.webp'
import managingIcons2 from '../assets/projects/managing/icons-2.webp'
import managingIcons3 from '../assets/projects/managing/icons-3.webp'

// Filter tabs on the home + all-projects pages. Only categories in `availableCategories`
// have real projects today; the rest render a "Coming soon" state when selected.
export const projectCategories = ['UX Research', 'Product Design', 'Academic Research']
export const availableCategories = ['Product Design']

export const projects = [
  {
    slug: 'siit-super-app',
    category: 'Product Design',
    title: 'SIIT Super App',
    titleAccent: 'Super App',
    subtitle: 'All-in-One Campus App',
    description:
      'Bringing academic services, learning resources, and campus life together in one app.',
    image: siitCard,
    link: '/work/siit-super-app',
    layout: 'mobile',
    footerBubble: ['Everything students need,', 'in one place!'],
    detail: {
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
          image: siitAcademicPlanning1,
          images: [siitAcademicPlanning1, siitAcademicPlanning2],
        },
        {
          title: 'Course Enrollment',
          description: 'Enroll, withdraw, and manage course selections directly from the app.',
          image: siitCourseEnrollment1,
          images: [siitCourseEnrollment1],
        },
        {
          title: 'Library Booking',
          description: 'Check room availability and reserve study spaces across campuses.',
          image: siitLibraryBooking1,
          images: [siitLibraryBooking1, siitLibraryBooking2],
        },
        {
          title: 'Learning Resources',
          description: 'Access course materials and revisit recorded lectures anytime.',
          image: siitLearningResources1,
          images: [siitLearningResources1, siitLearningResources2],
        },
      ],
      designSystem: {
        color: {
          blurb: 'Purple-led palette with soft neutrals and ocean-inspired accents.',
          swatches: ['#7100B7', '#E4B8FF', '#005576', '#FFFAF7'],
        },
        typography: {
          blurb: 'Friendly handwritten typography with a playful campus feel.',
          font: 'tinymoji',
          image: siitTypography,
        },
        uiElements: {
          blurb: 'Rounded components and clear navigation keep key actions easy to reach.',
          gap: 22,
          images: [siitUi1, siitUi2, siitUi3],
        },
        gallery: {
          label: 'Illustrations',
          kind: 'illustration',
          blurb: 'Orca mascot and ocean visuals create a playful campus identity.',
          images: [
            { src: siitIllustrations1, w: 172.7, h: 129.82 },
            { src: siitIllustrations2, w: 244, h: 61, bleed: true },
          ],
        },
      },
    },
  },
  {
    slug: 'friends-and-funds',
    category: 'Product Design',
    title: 'Friends & Funds',
    titleAccent: null,
    subtitle: 'Group Planning & Expense App',
    description: 'Plan activities, find shared free time, and split expenses with friends.',
    image: friendsCard,
    link: '/work/friends-and-funds',
    layout: 'mobile',
    footerBubble: ['Plan together. Split smarter.'],
    detail: {
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
          image: friendsGroupScheduling1,
          images: [friendsGroupScheduling1, friendsGroupScheduling2],
        },
        {
          title: 'Flexible Bill Splitting',
          description: 'Split expenses equally, by amount, ratio, or randomly.',
          image: friendsFlexibleBillSplitting1,
          images: [friendsFlexibleBillSplitting1, friendsFlexibleBillSplitting2],
        },
        {
          title: 'Item-Based Splitting',
          description: 'Turn receipts into individual items and let friends choose what they pay for.',
          image: friendsItemBasedSplitting1,
          images: [friendsItemBasedSplitting1, friendsItemBasedSplitting2],
        },
        {
          title: 'Group Balance & Settlement',
          description: 'Track who owes whom, view payment details, and settle balances easily.',
          image: friendsGroupBalance1,
          images: [friendsGroupBalance1, friendsGroupBalance2],
        },
      ],
      designSystem: {
        color: {
          blurb: 'Purple palette with soft lavender and clear status colors.',
          swatches: ['#7047BA', '#9C63FD', '#FAF3FF', '#00AB49'],
        },
        typography: {
          blurb: 'Rounded typography creates a friendly and approachable feel.',
          font: 'Outfit',
          image: friendsTypography,
        },
        uiElements: {
          blurb: 'Rounded cards and clear navigation simplify group actions.',
          gap: 15,
          images: [friendsUi1, friendsUi2, friendsUi3],
        },
        gallery: {
          label: 'Illustrations',
          kind: 'illustration',
          blurb: 'Playful visuals make expense sharing feel more approachable.',
          gap: 19,
          images: [
            { src: friendsIllustrations1, w: 172.7, h: 129.82 },
            { src: friendsIllustrations2, w: 172.7, h: 129.82 },
          ],
        },
      },
    },
  },
  {
    slug: 'acttrack',
    category: 'Product Design',
    title: 'ActTrack',
    titleAccent: null,
    subtitle: 'Fitness Tracking & Goal App',
    description: 'Track daily activities, set personal goals, and stay motivated with friends.',
    image: actTrackCard,
    link: '/work/acttrack',
    layout: 'mobile',
    footerBubble: ['Track progress.', 'Reach your goals!'],
    detail: {
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
          image: actTrackActivityTracking1,
          images: [actTrackActivityTracking1],
        },
        {
          title: 'Goal Setting',
          description: 'Create one-time or recurring goals and track progress.',
          image: actTrackGoalSetting1,
          images: [actTrackGoalSetting1, actTrackGoalSetting2],
        },
        {
          title: 'Activity Insights',
          description: 'View daily, weekly, and monthly activity summaries in one place.',
          image: actTrackActivityInsights1,
          images: [actTrackActivityInsights1],
        },
        {
          title: 'Social Motivation',
          description: 'Connect with friends and compare progress through activity leaderboards.',
          image: actTrackSocialMotivation1,
          images: [actTrackSocialMotivation1, actTrackSocialMotivation2],
        },
      ],
      designSystem: {
        color: {
          blurb:
            'Fresh teal palette with soft neutrals for an energetic and clean fitness experience.',
          swatches: ['#00E4CF', '#ECEBF2', '#FFFFFF'],
        },
        typography: {
          blurb: 'Clean sans-serif keeps activity data clear and easy to scan.',
          font: 'Inter',
          image: actTrackTypography,
        },
        uiElements: {
          blurb: 'Rounded cards, progress bars, tabs, and clear actions simplify fitness tracking.',
          gap: 11,
          images: [actTrackUi1, actTrackUi2, actTrackUi3],
        },
        gallery: {
          label: 'Icons',
          kind: 'icon',
          blurb: 'Simple activity icons help users quickly recognize different fitness categories.',
          images: [
            { src: actTrackIcons1, w: 63 },
            { src: actTrackIcons2, w: 63 },
            { src: actTrackIcons3, w: 63 },
            { src: actTrackIcons4, w: 63 },
          ],
        },
      },
    },
  },
  {
    slug: 'managing',
    category: 'Product Design',
    title: 'ManagINg',
    titleAccent: null,
    subtitle: 'Inventory Management',
    description: 'Create flexible inventories, manage stock, and collaborate with your team.',
    image: managingCard,
    link: '/work/managing',
    layout: 'web',
    footerBubble: ['Manage better.', 'Work together!'],
    detail: {
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
          description:
            'Create inventories and customize the information needed for different types of products.',
          image: managingCustomInventorySetup1,
          images: [managingCustomInventorySetup1],
        },
        {
          title: 'Inventory Management',
          description:
            'Add, edit, search, and manage product details and stock quantities in one place.',
          image: managingInventoryManagement1,
          images: [managingInventoryManagement1],
        },
        {
          title: 'Team Collaboration',
          description: 'Share inventories with team members and collaborate through invitations.',
          image: managingTeamCollaboration1,
          images: [managingTeamCollaboration1],
        },
        {
          title: 'Support & Communication',
          description: 'Receive updates and contact administrators for inventory support.',
          image: managingSupportCommunication1,
          images: [managingSupportCommunication1],
        },
      ],
      designSystem: {
        color: {
          blurb: 'Deep red accents with neutral tones create a focused interface.',
          swatches: ['#B90009', '#F05D63', '#01E28E', '#FFFFFF'],
        },
        typography: {
          blurb: 'Inria Serif gives the interface a structured, professional feel.',
          font: 'Inria Serif',
          image: managingTypography,
        },
        uiElements: {
          blurb: 'Structured tables and clear controls simplify inventory tasks.',
          gap: [16, 16, 2],
          images: [
            { src: managingUi1, w: 252, h: 37 },
            { src: managingUi2, w: 252, h: 29 },
            { src: managingUi3, w: 116, h: 29 },
            { src: managingUi4, w: 194, h: 54 },
          ],
        },
        gallery: {
          label: 'Icons',
          kind: 'icon',
          blurb: 'Simple action icons make inventory and communication tasks easy to recognize.',
          images: [
            { src: managingIcons1, w: 63 },
            { src: managingIcons2, w: 63 },
            { src: managingIcons3, w: 63 },
          ],
        },
      },
    },
  },
]
