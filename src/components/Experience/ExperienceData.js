export const Companies = {
    Ey: {
        name: 'Ernst & Young',
        url: 'https://ey.com'
    },
    It_one: {
        name: 'It-one',
        url: 'https://it-one.ru'
    },
    Colvir: {
        name: 'Colvir Software Solutions',
        url: 'https://colvir.com'
    },
    Codemark: {
        name: 'Codemark',
        url: 'http://codemark.ru/'
    },
    Skillbox: {
        name: 'Skillbox',
        url: 'https://skillbox.ru'
    },
    Nipi: {
        name: 'NIPIGAZ (SIBUR Group)',
        url: 'https://www.nipigas.ru/'
    },
    Sys: {
        name: 'System & networks',
        url: undefined
    },
    Ets: {
        name: 'Electrical systems',
        url: 'http://etsystem.ru/'
    },
    Rostelecom: {
        name: 'Rostelecom',
        url: 'https://rt.ru'
    }
}

export const ExperienceData = [
    {
        period: "10.2021 - now",
        company: Companies.It_one,
        position: "Senior software engineer",
        description: "Developed and maintained banking software for one of the largest banks in the country. Among " +
            "other projects, implemented electronic signature for clients, which involved multiple integrations with " +
            "different systems. This allowed the bank to gain a competitive advantage and attract large dealers, " +
            "resulting in a threefold increase in the number of applications and profits"
    }, {
        period: "09.2020 - 10.2021",
        company: Companies.Colvir,
        position: "Java developer",
        description: "Took part in maintaining the company's main product, banking software, for various banks " +
            "worldwide. Modernized it by migrating logic from database procedures to Java microservices. Developed a " +
            "service for receiving multicast data from the stock exchange, in a multithreading mode from multiple " +
            "channels, with the exclusion of duplicate messages, control of omissions, and the implementation of other " +
            "business logic. This allowed clients (banks) to provide an extended range of services"
    }, {
        period: "07.2020 - 09.2021",
        company: Companies.Codemark,
        position: "Programmer",
        description: "Developed the backend for a sports federation portal and an application for working with the " +
            "database of a government electoral system. Implemented full-text search (by vectors) in the PostgreSQL " +
            "database. Created an approximate search by multiple parameters using the similarity function based on " +
            "trigrams in the database, with the ability to set arbitrary search accuracy. This simplified data entry by " +
            "operators about users, user search, and error correction in a large amount of personal data. Additionally, " +
            "I developed a functionality for mass creation of data records about clients based on uploaded data in text " +
            "format, after passing quality control that was also done by me"
    }, {
        period: "07.2019 - 05.2020",
        company: Companies.Skillbox,
        position: "Student at course Java developer",
        description: "During the learning period, I developed the backend for a blogging engine (RESTful SpringBoot web " +
            "application) deployed on Heroku. Participated in a team project \"Social Network\" using SpringBoot (web, " +
            "data jpa, security), Liquibase, Postgres, Jira, Git, Mapstruct, Lombok, Junit. Created other pet projects " +
            "such as a JSoup/HtmlUnit parser-checker for a website with proxy servers in a multithreaded mode, with " +
            "subsequent publication; a parser for VKontakte groups' data using the VK SDK API; a client for the Bittrex " +
            "exchange; a REST web service using lightweight frameworks Javalin and Guice, MongoDB; and some simple games " +
            "(desktop and Android, including using libGDX)"
    },
];

export const NotRelevantExperienceData = [
    {
        period: "2018 - 2019",
        company: Companies.Nipi,
        position: "Expert at reporting and planning department",
        description: ""
    },
    {
        period: "2017 - 2018",
        company: Companies.Rostelecom,
        position: "Contractor at Nizhne-Bureyskaya HPP construction",
        description: ""
    },
    {
        period: "2015 - 2017",
        company: Companies.Ey,
        position: "Contractor at Blagoveschenskaya TPP reconstruction",
        description: ""
    },
    {
        period: "2013 - 2015",
        company: Companies.Sys,
        position: "Chief project engineer",
        description: ""
    },
    {
        period: "2009 - 2013",
        company: Companies.Ets,
        position: "Lead design engineer",
        description: ""
    }
];

export const EngineeringExperienceData = [
    {
        period: "07.2009 - 11.2019",
        company: `${Companies.Ey.name} / ${Companies.Nipi.name} / ${Companies.Rostelecom.name} / ${Companies.Sys.name} / ${Companies.Ets.name}`,
        position: "Chief project engineer / Lead design engineer / Contractor / Expert",
        description: "As a design engineer/lead design engineer and contractor, I developed designs for 14 substations and " +
            "35-220 kV transmission lines for the construction of the Vostochny Spaceport and the Nizhne-Bureyskaya HPP.\n" +
            "As the chief project engineer, I created and led a design team (15 people) to develop engineering system " +
            "design documentation for the Bureyskaya HPP and the Nizhne-Bureyskaya HPP. Completed over 20 different " +
            "substation and engineering system projects.\n" +
            "As part of an audit, I performed control, monitoring, and technical supervision over the construction " +
            "of the Blagoveschenskaya TPP reconstruction project, analyzed payments for construction and equipment worth " +
            "$100 million.\n" +
            "As an expert, I monitored construction work and equipment delivery for the Amur Gas Processing Plant " +
            "project's industrial infrastructure."
    }
]

export const CoreCompetencies = [
    {name: 'Java'},
    {name: 'Teamwork'},
    {name: 'OOP'},
    {name: 'Confluence'},
    {name: 'Docker'},
    {name: 'Git'},
    {name: 'Spring Framework'},
    {name: 'Jira'},
    {name: 'Liquibase'},
    {name: 'JSON'},
    {name: 'SQL'},
    {name: 'Microservices'},
    {name: 'Scrum'},
    {name: 'Teamcity'},
    {name: 'REST'},
    {name: 'SpringBoot'},
    {name: 'CamundaBPM'},
    {name: 'Bitbucket'},
    {name: 'Maven'},
    {name: 'API'},
    {name: 'PostgreSQL'},
    {name: 'Kafka'},
    {name: 'Kibana'},
    {name: 'Gradle'},
    {name: 'QueryDsl'}
];

export const Certifications = [
    {
        company: "Specialist - Computer Training Center",
        date: "06.2023",
        name: "Refactoring as a systematic approach",
    },{
        company: "IBS Training center",
        date: "05.2023",
        name: "Design patterns (GoF). Java edition. Technologies and Tools for Software and Information Systems Development"
    },{
        company: "IBS Training center",
        date: "12.2022",
        name: "Java Efficiency. Technologies and Tools for Software and Information Systems Development"
    }, {
        company: "Mail.ru",
        date: "04.2020",
        name: "Development of a Web Service in Java"
    }, {
        company: "Geekbrains",
        date: "05.2020",
        name: "Java beginner, medium, advanced level tests"
    }, {
        company: "Fluent cities",
        dateStart: "08.2018",
        dateEnd: "05.2019",
        name: "Business English Intermediate"
    }, {
        company: "Management Systems",
        date: "08.2015",
        name: "Project Management with Oracle Primavera, Basic Course"
    }
];

export const Education = [
    {
        company: "Amur State University",
        additional: "Faculty of Power Engineering",
        qualification: "Specialist degree in Engineering of Power Plants (5-year program)",
        dateStart: "08.2004",
        dateEnd: "07.2009"
    },
    {
        company: "Skillbox",
        qualification: "Student of the \"Java Developer\" course",
        dateStart: "07.2019",
        dateEnd: "05.2020"
    }
]
