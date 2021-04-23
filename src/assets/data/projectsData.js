import unitS from "../img/projects-screenshots/unit-project-small.jpg";
import unitL from "../img/projects-screenshots/unit-project.jpg";
import stayAndSkiS from "../img/projects-screenshots/StayAndSki-progect-small.jpg";
import stayAndSkiL from "../img/projects-screenshots/StayAndSki-project.jpg";
import todoJsS from "../img/projects-screenshots/todo-project-small.jpg";
import todoJsL from "../img/projects-screenshots/todo-project.jpg";
import crmS from "../img/projects-screenshots/crm-project-small.jpg";
import crmL from "../img/projects-screenshots/crm-project.jpg";
import squareMeterS from "../img/projects-screenshots/square-project-small.jpg";
import squareMeterL from "../img/projects-screenshots/square-project.jpg";
import budgetCalcS from "../img/projects-screenshots/budget-calculator-small.jpg";
import budgetCalcL from "../img/projects-screenshots/budget-calculator.jpg";
import currencyConverterS from "../img/projects-screenshots/currencyConverter-small.jpg";
import currencyConverterL from "../img/projects-screenshots/currencyConverter.jpg";
import todoReactS from "../img/projects-screenshots/todoReact-small.jpg";
import todoReactL from "../img/projects-screenshots/todoReact.jpg";
import adminPanelS from "../img/projects-screenshots/adminPanel-small.jpg";
import adminPanelL from "../img/projects-screenshots/adminPanel.jpg";
import workersTableS from "../img/projects-screenshots/workersTable-small.jpg";
import workersTableL from "../img/projects-screenshots/workersTable.jpg";
import miniShopS from "../img/projects-screenshots/miniShop-small.jpg";
import miniShopL from "../img/projects-screenshots/miniShop.jpg";

export const projectsData = [
    {
        id: "todoReact",
        linkTitle: "Todo application",
        title: "Todo application",
        type: "Frontend application",
        label: "react",
        mainTech: [
            "html",
            "css",
            "javascript",
            "react",
            "redux",
            "axios",
            "storybook",
            "jest",
        ],
        links: {
            demo: "https://fenix4088.github.io/ToDO-app-React-TS-/",
            git: "https://github.com/Fenix4088/ToDO-app-React-TS-",
        },
        desc:
            "Todolist application works with server. This is nice application for people ho what get their tasks in order",
        project: "Single page application",
        allTech: [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Redux",
            "Axios",
            "Redux-thunk",
            "Storybook",
            "Jest-tests",
        ],
        features:
            "REST API, FLUX architecture, UNIT-tests, an app give an ability to tests most part of components in Storybook" +
            " component UI development tool, used React best practices, separation between BLL, DAL and UI ",

        images: {
            small: todoReactS,
            big: todoReactL,
        },
    },
    {
        id: "workersTable",
        linkTitle: "Workers control system",
        title: "Workers table",
        type: "Frontend + Backend application",
        label: "react",
        mainTech: [
            "html",
            "css",
            "styled-components",
            "typescript",
            "react",
            "redux",
            "node-js",
            "axios",
            "jest",
        ],
        links: {
            demo: "https://fenix4088.github.io/Workers-panel/#/login",
            git: "https://github.com/Fenix4088/Workers-panel",
            backend: "https://github.com/Fenix4088/Workers-Panel-backend"
        },
        desc:
            "Fullstack system for control workers",
        project: "Single page application",
        allTech: [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Redux",
            "Axios",
            "Redux-thunk",
            "Storybook",
            "Jest-tests",
        ],
        features:
            "REST API, FLUX architecture, UNIT-tests, possibility ty add, delete, update or create workers in a table for store information about them" +
            " component UI development tool, used React best practices, separation between BLL, DAL and UI, for backend used Node.js ",

        images: {
            small: workersTableS,
            big: workersTableL,
        },
    },
    {
        id: "miniShop",
        linkTitle: "Mini shop presentation",
        title: "Mini shop",
        type: "Frontend",
        label: "react",
        mainTech: [
            "html",
            "css",
            "styled-components",
            "typescript",
            "react",
            "redux",
            "axios",
            "jest",
        ],
        links: {
            demo: "https://fenix4088.github.io/Mini-shop/#/",
            git: "https://github.com/Fenix4088/Mini-shop",
        },
        desc:
            "Demonstration of simple internet shop",
        project: "Single page application",
        allTech: [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Redux",
            "Axios",
            "Redux-thunk",
            "Storybook",
            "Jest-tests",
        ],
        features:
            "REST API, FLUX architecture, UNIT-tests, possibility ty add, delete, update or create workers in a table for store information about them" +
            " component UI development tool, used React best practices, separation between BLL, DAL and UI, all data save to LocalStorage of browser ",

        images: {
            small: miniShopS,
            big: miniShopL,
        },
    },
    {
        id: "adminPanel",
        linkTitle: "Admin panel",
        title: "Admin panel",
        type: "Frontend application",
        label: "js",
        mainTech: [
            "html",
            "css",
            "javascript",
            "webpack",
            "jest",
        ],
        links: {
            demo: "https://github.com/Fenix4088/Admin-panel",
            git: "https://github.com/Fenix4088/Admin-panel",
        },
        desc: "Administration panel of online hardware store",
        project: "Single page application",
        allTech: [
            "HTML",
            "CSS",
            "JS",
            "Webpack",
            "Jest-tests",
        ],
        features:
            "REST API, Class component architecture, UNIT-tests," +
            " slider, drag and drop and range picker developed on a native js without any plugins or libs, ability to add, remove and edit all items in the store",

        images: {
            small: adminPanelS,
            big: adminPanelL,
        },
    },
    {
        id: "currencyConverter",
        linkTitle: "Currency converter",
        title: "Currency converter",
        type: "Frontend application",
        label: "react",
        mainTech: ["html", "css", "javascript", "react", "redux"],
        links: {
            demo: "https://fenix4088.github.io/CurrencyConverter/",
            git: "https://github.com/Fenix4088/CurrencyConverter",
        },
        desc: "Currency converter. Simple React application. My home project",
        project: "Single page application",
        allTech: ["HTML", "CSS", "JS", "React", "Redux"],
        features: "Currency converter can to convert three currency, RUB, EU, US",
        images: {
            small: currencyConverterS,
            big: currencyConverterL,
        },
    },
    {
        id: "squareMeter",
        linkTitle: "Square meter project",
        title: "Square Meter project",
        type: "Frontend application",
        label: "js",
        mainTech: ["html", "css", "bootstrap", "javascript", "webpack"],
        links: {
            demo: "http://yehorpliasov.ru/projects/Square-meter-demo/index.html",
            git: "https://github.com/Fenix4088/Square-Meter-Project",
        },
        desc:
            "Square Meter Project is a SPA for an online real estate agency. All changes take place on a single page. The SPA has a total of 18 different apartments from five different construction companies. At the start of the page, the filter is loaded and all apartments available on the server are displayed.",
        project: "Single Page App",
        allTech: ["HTML", "CSS", "Bootstrap", "Webpack", "JS", "Babel"],
        features:
            "Square Meter Project consists of a main filter, object display fields, an ascending/descending filter by the real eatate price and area. There are two possible types of displaying objects.",
        images: {
            small: squareMeterS,
            big: squareMeterL,
        },
    },
    {
        id: "budgetCalc",
        linkTitle: 'Project "Budget Calculator"',
        title: "Budget Calculator",
        type: "Frontend application",
        label: "js",
        mainTech: ["html", "css", "bootstrap", "javascript"],
        links: {
            demo: "https://fenix4088.github.io/BudgetCalculator/",
            git: "https://github.com/Fenix4088/BudgetCalculator",
        },
        desc:
            "Budget Calculator application is designed for home bookkeeping. With Budget Calculator, you can easily keep track of your expenses and income as well as track your total budget.",
        project: 'Frontend project "Budget Calculator"',
        allTech: ["HTML", "CSS", "Bootstrap", "JS"],
        features:
            "The application allows you to add expenses and income into the table. The percentage is calculated for both separately recorded expenses and all general expenses in relation to total income. It is also possible to remove each element from the table",
        images: {
            small: budgetCalcS,
            big: budgetCalcL,
        },
    },
    {
        id: "crmJS",
        linkTitle: 'Project "CRM System"',
        title: "CRM System",
        type: "Frontend application",
        label: "js",
        mainTech: ["html", "css", "bootstrap", "javascript"],
        links: {
            demo: "https://fenix4088.github.io/CRMProject/",
            git: "https://github.com/Fenix4088/CRMProject",
        },
        desc:
            "This project is a CRM system for an online school of web development. The system is intended for the submission of an application by the user and allows the administrator to manage, edit and delete the required applications.",
        project: 'Frontend "CRM System"',
        allTech: ["HTML", "CSS", "Bootstrap", "JQuery", "JS"],
        features:
            "The page is written according to the W3C standard using HTML5, CSS3, JavaScript ES6 +, the modules are based on the ES5 standard. Code structured according to MVC model.",
        images: {
            small: crmS,
            big: crmL,
        },
    },
    {
        id: "todoJS",
        linkTitle: 'Project "To Do Application"',
        title: "ToDo application",
        type: "Frontend application",
        label: "js",
        mainTech: ["html", "css", "javascript"],
        links: {
            demo: "https://fenix4088.github.io/TODO-App/",
            git: "https://github.com/Fenix4088/TODO-App",
        },
        desc:
            "ToDo-App is a simple web application that will help you remember what to do.",
        project: 'Frontend project "ToDo App"',
        allTech: ["HTML", "CSS", "Bootstrap", "JS"],
        features:
            "Adding / removing an item to the to-do list. Search through the list by using the filter in the project header",
        images: {
            small: todoJsS,
            big: todoJsL,
        },
    },
    {
        id: "stay_and_ski",
        linkTitle: "Project 'Stay and Ski'",
        title: "Stay & Ski",
        type: "Landing-page project",
        label: "markup",
        mainTech: ["html", "css", "jquery", "javascript"],
        links: {
            demo: "https://fenix4088.github.io/Stay-and-Ski/",
            git: "https://github.com/Fenix4088/Stay-and-Ski",
        },
        desc: "Landing page for a snowboard school in Austria",
        project: 'Landing page "Stay and Ski"',
        allTech: ["AWD/RWD", "HTML", "CSS", "JQuery", "JS", "Animation"],
        features: "Mobile first, OWL Carousel",
        images: {
            small: stayAndSkiS,
            big: stayAndSkiL,
        },
    },
    {
        id: "unit",
        linkTitle: "Project 'Unit'",
        title: "Unit project",
        type: "Landing-page project",
        label: "markup",
        mainTech: ["html", "css", "jquery"],
        links: {
            demo: "https://fenix4088.github.io/Unit-project/",
            git: "https://github.com/Fenix4088/Unit-project",
        },
        desc: "Landing page",
        project: "Landing page 'Unit'",
        allTech: ["AWD/RWD", "HTML", "CSS", "JQuery", "JS"],
        features: "Mobile first, OWL Carousel",
        images: {
            small: unitS,
            big: unitL,
        },
    },
];
