/**
 * Mock Data
 */

const FIELD_DATA = {
    'web-dev': {
        title: 'Web Development',
        questions: [
            {
                q: 'What does HTML stand for?',
                options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink Text Management Links', 'Home Tool Markup Language'],
                correct: 0
            },
            {
                q: 'Which CSS property is used to change the background color?',
                options: ['color', 'bg-color', 'background-color', 'fill'],
                correct: 2
            },
            {
                q: 'What is the correct way to write a JavaScript array?',
                options: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = {red, green, blue}'],
                correct: 2
            },
            {
                q: 'Which HTML element is used for the largest heading?',
                options: ['<heading>', '<h6>', '<h1>', '<head>'],
                correct: 2
            },
            {
                q: 'How do you create a function in JavaScript?',
                options: ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'create.function.myFunction'],
                correct: 1
            }
        ],
        roadmap: [
            { id: 1, title: 'HTML Mastery', desc: 'Semantic tags, forms, and accessibility structures.' },
            { id: 2, title: 'CSS Layouts', desc: 'Flexbox, Grid, and Responsive Web Design techniques.' },
            { id: 3, title: 'JavaScript Logic', desc: 'ES6+ features, fetch API, and DOM manipulation.' },
            { id: 4, title: 'React.js', desc: 'Component-based architecture and state management.' },
            { id: 5, title: 'Backend Node.js', desc: 'Express servers, REST APIs, and database basics.' }
        ],
        jobs: [
            { 
                title: 'Frontend Developer', 
                company: 'TechBloom Solutions',
                location: 'Remote',
                type: 'Full-time',
                salary: '₹6L – ₹12L', 
                skills: ['HTML', 'CSS', 'React'] 
            },
            { 
                title: 'Full Stack Engineer', 
                company: 'Garden Systems',
                location: 'Bangalore, IN',
                type: 'Full-time',
                salary: '₹10L – ₹18L', 
                skills: ['Node.js', 'React', 'Mongo'] 
            },
            { 
                title: 'UI/UX Developer', 
                company: 'Pixel Flora',
                location: 'Mumbai, IN',
                type: 'Contract',
                salary: '₹5L – ₹10L', 
                skills: ['Figma', 'CSS', 'JS'] 
            }
        ]
    },
    'ai': {
        title: 'Artificial Intelligence',
        questions: [
            {
                q: 'What is the Turing Test designed to determine?',
                options: ['A machine\'s intelligence', 'A human\'s memory', 'A computer\'s speed', 'A network\'s security'],
                correct: 0
            },
            {
                q: 'Which language is most commonly used for AI development?',
                options: ['C++', 'Python', 'Java', 'Ruby'],
                correct: 1
            },
            {
                q: 'What does "ML" stand for in AI?',
                options: ['Main Logic', 'Machine Learning', 'Multi Layer', 'Manual Loading'],
                correct: 1
            },
            {
                q: 'What is a Neural Network modeled after?',
                options: ['Electrical circuits', 'Biological brains', 'Social networks', 'Star constellations'],
                correct: 1
            },
            {
                q: 'What is "Deep Learning"?',
                options: ['Learning while sleeping', 'Advanced data entry', 'Complex Neural Networks', 'Studying deep oceans'],
                correct: 2
            }
        ],
        roadmap: [
            { id: 1, title: 'Mathematics for AI', desc: 'Linear algebra, calculus, and probability.' },
            { id: 2, title: 'Python Programming', desc: 'NumPy, Pandas, and basic data structures.' },
            { id: 3, title: 'Machine Learning', desc: 'Supervised and unsupervised learning basics.' },
            { id: 4, title: 'Deep Learning', desc: 'Neural networks with TensorFlow or PyTorch.' },
            { id: 5, title: 'NLP & Computer Vision', desc: 'Advanced AI applications and libraries.' }
        ],
        jobs: [
            { 
                title: 'ML Engineer', 
                company: 'Neural Networks Corp',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salary: '₹12L – ₹25L', 
                skills: ['Python', 'PyTorch', 'Math'] 
            },
            { 
                title: 'AI Researcher', 
                company: 'Cognitive Lab',
                location: 'Zurich, CH',
                type: 'Full-time',
                salary: '₹15L – ₹30L', 
                skills: ['Algorithms', 'Deep Learning'] 
            },
            { 
                title: 'Data Scientist', 
                company: 'Insight Dynamics',
                location: 'Hybrid',
                type: 'Full-time',
                salary: '₹10L – ₹20L', 
                skills: ['Statistics', 'SQL', 'Python'] 
            }
        ]
    },
    'data-science': {
        title: 'Data Science',
        questions: [
            {
                q: 'What is the primary library for data manipulation in Python?',
                options: ['Matplotlib', 'Pandas', 'Requests', 'Pygame'],
                correct: 1
            },
            {
                q: 'Which of these is a categorical variable?',
                options: ['Age', 'Weight', 'Eye Color', 'Salary'],
                correct: 2
            },
            {
                q: 'What is the mean of [2, 4, 6]?',
                options: ['2', '4', '6', '12'],
                correct: 1
            },
            {
                q: 'Which tool is commonly used for data visualization?',
                options: ['Excel', 'Tableau', 'PowerBI', 'All of the above'],
                correct: 3
            },
            {
                q: 'What is SQL used for?',
                options: ['Styling web pages', 'Managing databases', 'Writing mobile apps', 'Compiling code'],
                correct: 1
            }
        ],
        roadmap: [
            { id: 1, title: 'Statistics Dasar', desc: 'Understanding distributions and hypothesis testing.' },
            { id: 2, title: 'Python for Data', desc: 'Pandas, NumPy, and Scikit-learn Mastery.' },
            { id: 3, title: 'SQL Fundamentals', desc: 'Querying and managing relational databases.' },
            { id: 4, title: 'Data Visualization', desc: 'Building dashboards with Tableau or Matplotlib.' },
            { id: 5, title: 'Advanced Analytics', desc: 'Big Data tools and Predictive Modeling.' }
        ],
        jobs: [
            { 
                title: 'Data Analyst', 
                company: 'DataFlow Inc.',
                location: 'London, UK',
                type: 'Full-time',
                salary: '₹5L – ₹10L', 
                skills: ['Excel', 'SQL', 'Tableau'] 
            },
            { 
                title: 'Business Intelligence', 
                company: 'Market Vision',
                location: 'Remote',
                type: 'Full-time',
                salary: '₹8L – ₹15L', 
                skills: ['PowerBI', 'Statistics'] 
            },
            { 
                title: 'Big Data Engineer', 
                company: 'Cloud Scale',
                location: 'New York, US',
                type: 'Full-time',
                salary: '₹14L – ₹28L', 
                skills: ['Hadoop', 'Spark', 'Scala'] 
            }
        ]
    },
    'cybersecurity': {
        title: 'Cybersecurity',
        questions: [
            {
                q: 'What does "VPN" stand for?',
                options: ['Virtual Private Network', 'Very Personal Network', 'Variable Path Node', 'Verified Public Net'],
                correct: 0
            },
            {
                q: 'Which of these is a type of malware?',
                options: ['Firewall', 'Ransomware', 'Antivirus', 'Encryption'],
                correct: 1
            },
            {
                q: 'What is "Phishing"?',
                options: ['A sport', 'A network protocol', 'A deceptive email trick', 'A fast computer chip'],
                correct: 2
            },
            {
                q: 'What is the "HTTPS" S for?',
                options: ['Speed', 'Socket', 'Secure', 'Static'],
                correct: 2
            },
            {
                q: 'What describes a "White Hat" hacker?',
                options: ['A beginner', 'An ethical hacker', 'A criminal', 'A hardware engineer'],
                correct: 1
            }
        ],
        roadmap: [
            { id: 1, title: 'Networking Basics', desc: 'TCP/IP, DNS, and HTTP/S protocols.' },
            { id: 2, title: 'Security Principles', desc: 'CIA Triad, Encryption, and Access Control.' },
            { id: 3, title: 'Linux Mastery', desc: 'Command line focus and shell scripting.' },
            { id: 4, title: 'Penetration Testing', desc: 'Ethical hacking and vulnerability assessment.' },
            { id: 5, title: 'Incident Response', desc: 'Digital forensics and threat hunting.' }
        ],
        jobs: [
            { 
                title: 'Security Analyst', 
                company: 'Secure Guard',
                location: 'Singapore, SG',
                type: 'Full-time',
                salary: '₹7L – ₹14L', 
                skills: ['Networking', 'Linux'] 
            },
            { 
                title: 'Pentester', 
                company: 'Cyber Shield',
                location: 'Remote',
                type: 'Contract',
                salary: '₹10L – ₹20L', 
                skills: ['Ethical Hacking', 'Python'] 
            },
            { 
                title: 'Security Architect', 
                company: 'Fortress IT',
                location: 'Sydney, AU',
                type: 'Full-time',
                salary: '₹18L – ₹35L', 
                skills: ['Network Security', 'Policy'] 
            }
        ]
    }
};

const RESOURCES = [
    { title: 'HTML Crash Course', desc: 'Learn the essentials of HTML5 in one hour.', type: 'Video' },
    { title: 'Modern CSS Guide', desc: 'A complete handbook for CSS Flexbox and Grid.', type: 'Guide' },
    { title: 'JS Fundamentals', desc: 'Master variables, functions, and arrays.', type: 'Course' },
    { title: 'AI Ethics 101', desc: 'Exploring the social impact of AI.', type: 'Guide' },
    { title: 'Cyber Defense Basics', desc: 'Protect yourself from online threats.', type: 'Video' },
    { title: 'Data Cleaning Tips', desc: 'How to handle messy data effectively.', type: 'Course' },
    { title: 'Advance React Patterns', desc: 'Build scalable apps with hooks and context.', type: 'Course' },
    { title: 'Network Security', desc: 'Deep dive into firewalls and encryption.', type: 'Guide' }
];

const EXTRA_SKILLS = [
    { title: 'GitHub Mastery', desc: 'Learn version control and collaboration.' },
    { title: 'Portfolio Design', desc: 'Build a stunning showcase for your work.' },
    { title: 'Technical Writing', desc: 'Document your code like a professional.' },
    { title: 'Open Source', desc: 'Contribute to global projects and grow.' },
    { title: 'Soft Skills', desc: 'Effective communication for engineers.' },
    { title: 'Docker Basics', desc: 'Containerize your applications easily.' }
];

const INITIAL_JOBS = [
    { 
        title: 'Senior Frontend Developer', 
        company: 'CloudStream Systems',
        location: 'Remote',
        type: 'Full-time',
        salary: '₹12L – ₹22L', 
        skills: ['React', 'TypeScript', 'Tailwind'] 
    },
    { 
        title: 'AI Research Scientist', 
        company: 'Neural Labs',
        location: 'Bangalore, IN',
        type: 'Full-time',
        salary: '₹18L – ₹35L', 
        skills: ['Python', 'PyTorch', 'NLP'] 
    },
    { 
        title: 'Cyber Security Analyst', 
        company: 'Fortress Core',
        location: 'Hyderabad, IN',
        type: 'Hybrid',
        salary: '₹8L – ₹15L', 
        skills: ['Ethical Hacking', 'Networking'] 
    },
    { 
        title: 'Backend Engineer', 
        company: 'Ocean Data',
        location: 'Mumbai, IN',
        type: 'Contract',
        salary: '₹10L – ₹18L', 
        skills: ['Node.js', 'PostgreSQL', 'AWS'] 
    },
    { 
        title: 'Product Designer', 
        company: 'Bloom Designs',
        location: 'Bangalore, IN',
        type: 'Full-time',
        salary: '₹9L – ₹16L', 
        skills: ['Figma', 'UI/UX', 'Prototyping'] 
    },
    { 
        title: 'Data Scientist', 
        company: 'Insight Analytics',
        location: 'Hybrid',
        type: 'Full-time',
        salary: '₹14L – ₹24L', 
        skills: ['Python', 'SQL', 'Tableau'] 
    }
];

/**
 * App Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 0. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 0.1 Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 1. Loading Screen
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }, 1500);

    // 2. Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 3. Onboarding Flow
    const getStartedBtn = document.getElementById('get-started-btn');
    const heroBtn = document.querySelector('.hero-btns .btn-primary');
    const onboardingSection = document.getElementById('onboarding');
    const heroSection = document.getElementById('home');

    const startOnboarding = () => {
        heroSection.classList.add('hidden');
        onboardingSection.classList.remove('hidden');
        onboardingSection.scrollIntoView();
    };

    getStartedBtn.addEventListener('click', startOnboarding);
    heroBtn.addEventListener('click', startOnboarding);

    const onboardingForm = document.getElementById('onboarding-form');
    let userProfile = {
        interest: '',
        studyTime: 0,
        experience: '',
        score: 0,
        currentQuestion: 0,
        selectedFieldData: null
    };

    onboardingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        userProfile.interest = document.getElementById('interest').value;
        userProfile.studyTime = document.getElementById('study-time').value;
        userProfile.experience = document.getElementById('experience').value;
        userProfile.selectedFieldData = FIELD_DATA[userProfile.interest];

        onboardingSection.classList.add('hidden');
        renderQuiz();
    });

    // 4. Quiz Logic
    const quizSection = document.getElementById('quiz');
    const questionCard = document.getElementById('question-card');
    const currentQSpan = document.getElementById('current-q');
    const totalQSpan = document.getElementById('total-q');
    const quizBar = document.getElementById('quiz-bar');
    const quizTopic = document.getElementById('quiz-topic');

    const renderQuiz = () => {
        quizSection.classList.remove('hidden');
        quizTopic.innerText = `Skill Assessment: ${userProfile.selectedFieldData.title}`;
        const questions = userProfile.selectedFieldData.questions;
        totalQSpan.innerText = questions.length;
        
        displayQuestion();
    };

    const displayQuestion = () => {
        const questions = userProfile.selectedFieldData.questions;
        const qData = questions[userProfile.currentQuestion];
        
        currentQSpan.innerText = userProfile.currentQuestion + 1;
        quizBar.style.width = `${((userProfile.currentQuestion + 1) / questions.length) * 100}%`;

        questionCard.innerHTML = `
            <h3>${qData.q}</h3>
            <div class="quiz-options">
                ${qData.options.map((opt, i) => `
                    <button class="option-btn" data-index="${i}">${opt}</button>
                `).join('')}
            </div>
        `;

        const options = questionCard.querySelectorAll('.option-btn');
        options.forEach(btn => {
            btn.addEventListener('click', () => {
                const selected = parseInt(btn.dataset.index);
                if (selected === qData.correct) {
                    userProfile.score++;
                }

                userProfile.currentQuestion++;
                if (userProfile.currentQuestion < questions.length) {
                    displayQuestion();
                } else {
                    finishQuiz();
                }
            });
        });
    };

    const finishQuiz = () => {
        quizSection.classList.add('hidden');
        calculateScore();
        renderDashboard();
        renderRoadmap();
        renderJobs(userProfile.selectedFieldData.jobs);
        showResults();
    };

    const calculateScore = () => {
        const total = userProfile.selectedFieldData.questions.length;
        // Foundation is 50% max. If 5/5 correct, foundation = 50%
        const foundationalPercentage = (userProfile.score / total) * 50;
        userProfile.displayScore = Math.round(foundationalPercentage);
    };

    // 5. Rendering Sections
    const dashboardSection = document.getElementById('dashboard');
    const roadmapSection = document.getElementById('roadmap');
    const jobsSection = document.getElementById('jobs');

    const showResults = () => {
        dashboardSection.classList.remove('hidden');
        roadmapSection.classList.remove('hidden');
        dashboardSection.scrollIntoView();
    };

    const renderDashboard = () => {
        document.getElementById('knowledge-score').innerText = userProfile.displayScore;
        document.getElementById('score-bar').style.width = `${userProfile.displayScore}%`;
        
        // Mocking completed vs remaining
        const totalRoadmapSteps = userProfile.selectedFieldData.roadmap.length;
        // Assume score correlates to steps already understood
        const completed = Math.floor((userProfile.score / 5) * 3); 
        document.getElementById('completed-topics').innerText = completed;
        document.getElementById('remaining-topics').innerText = totalRoadmapSteps - completed;
    };

    const renderRoadmap = () => {
        const roadmapContainer = document.getElementById('roadmap-container');
        const roadmapData = userProfile.selectedFieldData.roadmap;
        
        roadmapContainer.innerHTML = roadmapData.map(step => `
            <div class="card roadmap-card">
                <span class="card-tag">Step ${step.id}</span>
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
                <div class="card-meta">Recommended: ${userProfile.studyTime}h/day</div>
            </div>
        `).join('');
    };

    const renderJobs = (jobsData) => {
        const jobsGrid = document.getElementById('jobs-grid');
        
        if (!jobsData || jobsData.length === 0) {
            jobsGrid.innerHTML = '<p class="no-data">No jobs found matching your criteria.</p>';
            return;
        }

        jobsGrid.innerHTML = jobsData.map(job => `
            <div class="card job-card">
                <div class="job-header">
                    <span class="job-type-tag">${job.type}</span>
                    <span class="job-salary-tag">${job.salary}</span>
                </div>
                <h3 class="job-title">${job.title}</h3>
                <div class="job-company">
                    <i class="fas fa-building"></i> ${job.company}
                </div>
                <div class="job-location">
                    <i class="fas fa-map-marker-alt"></i> ${job.location}
                </div>
                <div class="job-skills">
                    ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <button class="btn btn-outline btn-block job-apply-btn">Apply Now</button>
            </div>
        `).join('');
    };

    // Initial Static Rendering
    const renderResources = () => {
        const resourcesGrid = document.getElementById('resources-grid');
        resourcesGrid.innerHTML = RESOURCES.map(res => `
            <div class="card resource-card">
                <span class="card-tag">${res.type}</span>
                <h3>${res.title}</h3>
                <p>${res.desc}</p>
                <button class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Access Now</button>
            </div>
        `).join('');
    };

    const renderExtraSkills = () => {
        const extraGrid = document.getElementById('extra-grid');
        extraGrid.innerHTML = EXTRA_SKILLS.map(skill => `
            <div class="card extra-card">
                <h3>${skill.title}</h3>
                <p>${skill.desc}</p>
                <div class="card-meta">Suggested for All</div>
            </div>
        `).join('');
    };

    renderResources();
    renderExtraSkills();
    renderJobs(INITIAL_JOBS);

    // Smooth Scrolling for data-target buttons
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
