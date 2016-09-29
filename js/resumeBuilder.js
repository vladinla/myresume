// Bio 
var bio = {
    'name': 'Vlad Golovin',
    'role': 'Web Developer || Digital Marketer',
    'contacts': {
        'mobile': 'Tel: 646-480-7072',
        'email': 'Email: golovin2011@gmail.com',
        'github': 'Github: vladinla',
        'location': 'Place: New York, USA'
    },
    'welcomeMessage': 'Welcome to my online resume! I am a driven experienced guy who loves web development, coding, digital marketing and technology.',
    'skills': ['Web Development', 'HTML', 'CSS', 'Responsive Web Design',
        'Javascript', 'Online Marketing', 'SEO'
    ],
    'biopic': 'images/vlad.jpg'
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('.header-top').prepend(formattedName + formattedRole);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('.middle-image').append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('.middle-text').append(formattedWelcomeMsg);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts, #footerContacts').append(formattedMobile +
        formattedEmail + formattedGithub + formattedLocation);
    if (bio.skills.length > 0) {
        $('#skills').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('.skills').append(formattedSkill);
        }
    }
};
bio.display();
// Work experience
var work = {
    'jobs': [{
        'employer': 'Multiple projects in Web Dev, Digital Marketing and SEO',
        'title': 'Web Developer and Digital Marketer',
        'location': 'Global',
        'dates': '01/2005 - presemt',
        'description': 'Please see <a href="http://coolweb.tech/my-portfolio/"><strong>this page</strong></a> to learn more about my expertise in Web Development and Coding.<br>Please see <a href="https://is.gd/DigitalExperience"><strong>this page</strong></a> to learn more about my expertise in Digital Marketing and SEO.'
    }, {
        'employer': 'Various companies in various countries',
        'title': 'Consultant and Advisor',
        'location': 'Global',
        'dates': '01/2005 - present',
        'description': 'This is the "offline" part of my experience. <br>I have been working in business development, marketing strategy and sales, both online and offline for multiple companies.<br>To learn more about my extensive experience visit my <a href="https://www.linkedin.com/in/golovin"><strong>LinkedIn page</strong></a>'
    }]
};
work.display = function() {
    $('.work-title').append('<hr class="work-hr">');
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%',
            job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer +
            formattedTitle;
        var formattedLocation = HTMLworkLocation.replace('%data%',
            job.location);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedDescription = HTMLworkDescription.replace(
            '%data%', job.description);
        $('.work-entry:last').append(formattedEmployerTitle +
            formattedDates + formattedLocation +
            formattedDescription);
    });
};
work.display();
// Projects
var projects = {
    'projects': [{
        'title': 'My Web Dev Portfolio - Multiple Projects',
        'dates': '2014 - present',
        'description': 'Multiple Projects: HTML, CSS, JavaScript, C# + some SEO.<br>To see some of my work please visit <a href="http://coolweb.tech/my-portfolio/"><strong>this page</strong></a>',
        'images': ['images/portfolio.png']
    }]
};
projects.display = function() {
    $('.projects-title').append('<hr class="projects-hr">');
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%',
            project.title);
        var formattedDates = HTMLprojectDates.replace('%data%',
            project.dates);
        var formattedDescription = HTMLprojectDescription.replace(
            '%data%', project.description);
        $('.project-entry:last').append(formattedTitle +
            formattedDates + formattedDescription);
        for (var i = 0; i < project.images.length; i++) {
            var formattedImage = HTMLprojectImage.replace('%data%',
                project.images[i]);
            $('.project-entry:last').append(formattedImage);
        }
    });
};
projects.display();
// Education
var education = {
    'schools': [{
        'name': 'UCLA',
        'location': 'Los Angeles, USA',
        'degree': 'Graduate Certificate',
        'dates': '2005',
        'url': 'http://www.ucla.edu/',
        'majors': ['Marketing']
    }, {
        'name': 'Nagoya University',
        'location': 'Nagoya, Japan',
        'degree': 'Masters (LL.M.)',
        'dates': '2000 - 2002',
        'url': 'http://en.nagoya-u.ac.jp/',
        'majors': ['International Relations']
    }],
    'onlineCourses': [{
        'title': 'Front-End Developer',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }, {
        'title': 'Web Developer - Multiple Courses',
        'school': 'ITVDN',
        'dates': '2016',
        'url': 'http://itvdn.com/'
    }]
};
education.display = function() {
    $('.education-title').append('<hr class="education-hr">');
    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace('%data%', school
            .name);
        var formattedDates = HTMLschoolDates.replace('%data%',
            school.dates);
        var formattedLocation = HTMLschoolLocation.replace('%data%',
            school.location);
        var formattedDegree = HTMLschoolDegree.replace('%data%',
            school.degree);
        $('.education-entry:last').append(formattedName +
            formattedDates + formattedLocation +
            formattedDegree);
        for (var i = 0; i < school.majors.length; i++) {
            var formattedMajor = HTMLschoolMajor.replace('%data%',
                school.majors[i]);
            $('.education-entry:last').append(formattedMajor);
        }
    });
    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        $('#education').append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace('%data%',
            onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace('%data%',
            onlineCourse.school);
        var formattedDates = HTMLonlineDates.replace('%data%',
            onlineCourse.dates);
        var formattedUrl = HTMLonlineURL.replace('%data%',
            onlineCourse.url);
        $('.education-entry:last').append(formattedTitle +
            formattedSchool + formattedDates + formattedUrl);
    });
    $('.map-title').append('<hr class="map-hr">');
};
education.display();
// Places I have worked and studied
var living = {
    'places': [{
        'location': 'New York, USA',
    }, {
        'location': 'Tokyo, Japan',
    }, {
        'location': 'Los Angeles, USA',
    }, {
        'location': 'Moscow, Russia',
    }, {
        'location': 'Dubai, UAE',
    }, {
        'location': 'Houston, TX',
    }]
};
// Maps
$('#mapDiv').append(googleMap);
