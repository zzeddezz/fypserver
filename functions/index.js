const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({origin: true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({status:200, message:{
        message: "api",
        routes : [
          '/dashboard/analytics/salesbycountry',
          '/dashboard/analytics/websiteviews',
          '/dashboard/analytics/dailysales',
          '/dashboard/analytics/completedtasks',
          '/dashboard/sales/channels',
          '/dashboard/sales/revenue',
          '/dashboard/sales/salesbyage',
          '/dashboard/sales/salesbycountry',
          '/dashboard/sales/topsellingproducts',
          '/pages/profile/profileoverview/conversations',
          '/pages/projects/timeline',
          '/pages/widgets/tasks',
          '/pages/widgets/calories',
          '/pages/widgets/calendar',
          '/pages/widgets/categories',
          '/pages/charts/line',
          '/pages/charts/linegradient',
          '/pages/charts/bar',
          '/pages/charts/barhorizontal',
          '/pages/charts/mixed',
          '/pages/charts/bubble',
          '/pages/charts/doughnut',
          '/pages/charts/pie', 
          '/pages/charts/pie', 
          '/pages/charts/polar',
          '/applications/kanban',
          '/applications/datatable',
          '/applications/calendar',
          '/ecommerce/products/productpage',
          '/ecommerce/orders/orderlist',
        ]
      }})
})

//#region DASHBOARD
// Analytics / Sales By Country
app.get('/dashboard/analytics/salesbycountry', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        country: ["https://iili.io/HFFDmrJ.png", "united state"],
        sales: 1400,
        value: "$2.50",
        bounce: "29.9%",
      },
      {
        country: ["https://iili.io/HFFDZLF.png", "germany"],
        sales: "3.900",
        value: "$420",
        bounce: "40.22%",
      },
      {
        country: ["https://iili.io/HFFDydv.png", "great britain"],
        sales: "1.400",
        value: "$69",
        bounce: "23.44%",
      },
      { country: ["https://iili.io/HFFDb1a.png", "brasil"], sales: 562, value: "$140,297", bounce: "32.14%" },
    ]
  })
})

// Analytics / Website Views
app.get('/dashboard/analytics/websiteviews', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
    }
  })
})

// Analytics / Daily Sales
app.get('/dashboard/analytics/dailysales', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: { label: "Mobile apps", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
    }
  })
})

// Analytics / Completed Tasks
app.get('/dashboard/analytics/completedtasks', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: { label: "Desktop apps", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
    }
  })
})

// Sales / Channels
app.get('/dashboard/sales/channels', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: {
        label: "Projects",
        backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
        data: [15, 20, 12, 60],
      },
    }
  })
})

// Sales / Revenue
app.get('/dashboard/sales/revenue', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Facebook Ads",
          color: "info",
          data: [50, 100, 200, 190, 400, 350, 500, 450, 700],
        },
        {
          label: "Google Ads",
          color: "dark",
          data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
        },
      ],
    }
  })
})

// Sales / Sales By Age
app.get('/dashboard/sales/salesbyage', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
      datasets: [
        {
          label: "Sales by age",
          color: "dark",
          data: [15, 20, 12, 60, 20, 15],
        },
      ],
    }
  })
})

// Sales / Sales By Country
app.get('/dashboard/sales/salesbycountry', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        country: ["https://iili.io/HFFDmrJ.png", "united state"],
        sales: 1400,
        bounce: "29.9%",
      },
      {
        country: ["https://iili.io/HFFDZLF.png", "germany"],
        sales: "3.900",
        bounce: "40.22%",
      },
      {
        country: ["https://iili.io/HFFDydv.png", "great britain"],
        sales: "1.400",
        bounce: "23.44%",
      },
      { country: ["https://iili.io/HFFDb1a.png", "brasil"], sales: 562, bounce: "32.14%" },
      { country: ["https://iili.io/HFFDDqg.png", "australia"], sales: 400, bounce: "56.83%" },
    ]
  })
})

// Sales / Top Selling Products
app.get('/dashboard/sales/topsellingproducts', (req, res)=>{
  res.status(200).json({status:200, message:
    {
  columns: [
    { Header: "product", accessor: "product", width: "55%" },
    { Header: "value", accessor: "value" },
    { Header: "ads spent", accessor: "adsSpent", align: "center" },
    { Header: "refunds", accessor: "refunds", align: "center" },
  ],

  rows: [
    {
      product: {
        image: "https://iili.io/HfHrw1S.md.jpg",
        name: "Nike v22 Running",
        orders: 8.232,
      },
      value: 130.992,
      adsSpent: 9.500,
      refunds: {
        value: 13,
        icon:
        { 
          color: "success", 
          name: "keyboard_arrow_up"
        }
      },
    },
    {
      product: {
        image: "https://iili.io/HfH4Wyg.md.jpg",
        name: "Business Kit (Mug + Notebook)",
        orders: 12.821,
      },
      value: 80.250,
      adsSpent: 4.200,
      refunds: {
        value: 40,
        icon:
        { 
          color: "error", 
          name: "keyboard_arrow_down"
        }
      },
    },
    {
      product: {
        image: "https://iili.io/HfH4jwJ.md.jpg",
        name: "Black Chair",
        orders: 2.421
      },
      value: 40.600,
      adsSpent: 9.430,
      refunds: {
        value: 54,
        icon:
        { 
          color: "success", 
          name: "keyboard_arrow_up"
        }
      },
    },
    {
      product: {
        image: "https://iili.io/HfH4k6N.md.jpg",
        name: "Wireless Charger",
        orders: 5.921
      },
      value: 91.300,
      adsSpent: 7.364,
      refunds: {
        value: 5,
        icon:
        { 
          color: "error", 
          name: "keyboard_arrow_down"
        }
      },
    },
    {
      product: {
        image: "https://iili.io/HfH4U8X.md.jpg",
        name: "Mountain Trip Kit (Camera + Backpack)",
        orders: 921
      },
      value: 140.925,
      adsSpent: 20.531,
      refunds: {
        value: 121,
        icon:
        { 
          color: "success", 
          name: "keyboard_arrow_up"
        }
      },
    },
  ],
}
  })
})


//#endregion


//#region PAGES
// Profile / Profile Overview / Conversations
app.get('/pages/profile/profileoverview/conversations', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        image: "https://iili.io/HF3lbRa.jpg",
        name: "Sophie B.",
        description: "Hi! I need more information..",
        action: {
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "info",
          label: "reply",
        },
      },
      {
        image: "https://iili.io/HF31pGp.jpg",
        name: "Anne Marie",
        description: "Awesome work, can you..",
        action: {
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "info",
          label: "reply",
        },
      },
      {
        image: "https://iili.io/HF3GYen.jpg",
        name: "Ivanna",
        description: "About files I can..",
        action: {
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "info",
          label: "reply",
        },
      },
      {
        image: "https://iili.io/HF3MrG4.jpg",
        name: "Peterson",
        description: "Have a great afternoon..",
        action: {
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "info",
          label: "reply",
        },
      },
      {
        image: "https://iili.io/HF3WHWG.jpg",
        name: "Nick Daniel",
        description: "Hi! I need more information..",
        action: {
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "info",
          label: "reply",
        },
      },
    ]
  })
})

// Account / Settings / Basic Info
app.get('/pages/account/settings/basicinfo', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      gender: ["Male", "Female"],
      birthDate: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      years: [
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
      ],
      skills: ["react", "vue", "angular", "svelte", "javascript", "flutter", "kotlin", "firebase"],
    }
  })
})

// Projects / Timeline
app.get('/pages/projects/timeline', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        color: "success",
        icon: "notifications",
        title: "$2400, Design changes",
        dateTime: "22 DEC 7:20 PM",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["design"],
      },
      {
        color: "error",
        icon: "inventory_2",
        title: "New order #1832412",
        dateTime: "21 DEC 11 PM",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["order", "#1832412"],
      },
      {
        color: "info",
        icon: "shopping_cart",
        title: "Server payments for April",
        dateTime: "21 DEC 9:34 PM",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["server", "payments"],
      },
      {
        color: "warning",
        icon: "payment",
        title: "New card added for order #4395133",
        dateTime: "20 DEC 2:20 AM",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["card", "#4395133", "priority"],
      },
      {
        color: "primary",
        icon: "vpn_key",
        title: "Unlock packages for development",
        dateTime: "18 DEC 4:54 AM",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["development"],
      },
      {
        color: "success",
        icon: "inbox",
        title: "New message unread",
        dateTime: "16 DEC",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["message"],
      },
      {
        color: "info",
        icon: "campaign",
        title: "Notifications unread",
        dateTime: "15 DEC",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
      },
      {
        color: "warning",
        icon: "archive",
        title: "New request",
        dateTime: "14 DEC",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["request", "priority"],
      },
      {
        color: "secondary",
        icon: "sports_esports",
        title: "Controller issues",
        dateTime: "13 DEC",
        description:
          "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
        badges: ["controller"],
        lastItem: true,
      },
    ]
  })
})

// Widgets / Tasks
app.get('/pages/widgets/tasks', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [40, 45, 42, 41, 40, 43, 40, 42, 39],
    }
  })
})

// Widgets / Calories
app.get('/pages/widgets/calories', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Calories",
          color: "dark",
          data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
        },
      ],
    }
  })
})

// Widgets / Calendar
app.get('/pages/widgets/calendar', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        title: "All day conference",
        start: "2021-08-01",
        end: "2021-08-01",
        className: "success",
      },
    
      {
        title: "Meeting with Mary",
        start: "2021-08-03",
        end: "2021-08-03",
        className: "info",
      },
    
      {
        title: "Cyber Week",
        start: "2021-08-04",
        end: "2021-08-04",
        className: "warning",
      },
    
      {
        title: "Winter Hackaton",
        start: "2021-08-05",
        end: "2021-08-05",
        className: "error",
      },
    
      {
        title: "Digital event",
        start: "2021-08-09",
        end: "2021-08-11",
        className: "warning",
      },
    
      {
        title: "Marketing event",
        start: "2021-08-12",
        end: "2021-08-12",
        className: "primary",
      },
    
      {
        title: "Dinner with Family",
        start: "2021-08-21",
        end: "2021-08-21",
        className: "error",
      },
    
      {
        title: "Black Friday",
        start: "2021-08-25",
        end: "2021-08-25",
        className: "info",
      },
    ]
  })
})

// Widgets / Categories
app.get('/pages/widgets/categories', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        color: "dark",
        icon: "launch",
        name: "Devices",
        description: {
          content: "250 in stock, ",
          typography: {
            variant: "caption",
            color: "text",
            fontWeight: "medium",
            content: "346+ sold",
          }
        },
        route: "/",
      },
      {
        color: "dark",
        icon: "book_online",
        name: "Tickets",
        description: {
          content: "123 closed, ",
          typography: {
            variant: "caption",
            color: "text",
            fontWeight: "medium",
            content: "15 open",
          }
        },
        route: "/",
      },
      {
        color: "dark",
        icon: "priority_high",
        name: "Error logs",
        description: {
          content: "1 is active, ",
          typography: {
            variant: "caption",
            color: "text",
            fontWeight: "medium",
            content: "40 closed",
          }
        },
        route: "/",
      },
      {
        color: "dark",
        icon: "insert_emoticon",
        name: "Happy users",
        description: {
          content: "",
          typography: {
            variant: "caption",
            color: "text",
            fontWeight: "medium",
            content: "+ 430",
          }
        },
        route: "/",
      },
    ]
  })
})

// Charts / Line Chart
app.get('/pages/charts/line', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Organic Search",
          color: "info",
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        },
        {
          label: "Referral",
          color: "dark",
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        },
        {
          label: "Direct",
          color: "primary",
          data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
        },
      ],
    }
  })
})

// Charts / Line Chart With Gradient
app.get('/pages/charts/linegradient', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Mobile apps",
          color: "info",
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        },
        {
          label: "Websites",
          color: "dark",
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        },
      ],
    }
  })
})

// Charts / Bar Chart
app.get('/pages/charts/bar', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
      datasets: [
        {
          label: "Sales by age",
          color: "dark",
          data: [15, 20, 12, 60, 20, 15],
        },
      ],
    }
  })
})

// Charts / Bar Chart Horizontal
app.get('/pages/charts/barhorizontal', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
      datasets: [
        {
          label: "Sales by age",
          color: "dark",
          data: [15, 20, 12, 60, 20, 15],
        },
      ],
    }
  })
})

// Charts / Mixed Chart
app.get('/pages/charts/mixed', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          chartType: "thin-bar",
          label: "Organic Search",
          color: "dark",
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        },
        {
          chartType: "gradient-line",
          label: "Referral",
          color: "info",
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        },
      ],
    }
  })
})

// Charts / Bubble Chart
app.get('/pages/charts/bubble', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
      datasets: [
        {
          label: "Dataset 1",
          color: "info",
          data: [
            { x: 100, y: 0, r: 10 },
            { x: 60, y: 30, r: 20 },
            { x: 40, y: 350, r: 10 },
            { x: 80, y: 80, r: 10 },
            { x: 20, y: 30, r: 15 },
            { x: 0, y: 100, r: 5 },
          ],
        },
        {
          label: "Dataset 2",
          color: "dark",
          data: [
            { x: 70, y: 40, r: 10 },
            { x: 30, y: 60, r: 20 },
            { x: 10, y: 300, r: 25 },
            { x: 60, y: 200, r: 10 },
            { x: 50, y: 300, r: 15 },
            { x: 20, y: 350, r: 5 },
          ],
        },
      ],
    }
  })
})

// Charts / Doughnut Chart
app.get('/pages/charts/doughnut', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
      datasets: {
        label: "Projects",
        backgroundColors: ["info", "dark", "error", "secondary", "primary"],
        data: [15, 20, 12, 60, 20],
      },
    }
  })
})

// Charts / Pie Chart
app.get('/pages/charts/pie', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: {
        label: "Projects",
        backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
        data: [15, 20, 12, 60],
      },
    }
  })
})

// Charts / Radar Chart
app.get('/pages/charts/radar', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [
        {
          label: "Student A",
          color: "dark",
          data: [65, 75, 70, 80, 60, 80],
          borderDash: [5, 5],
        },
        {
          label: "Student B",
          color: "info",
          data: [54, 65, 60, 70, 70, 75],
        },
      ],
    }
  })
})

// Charts / Polar Chart
app.get('/pages/charts/polar', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14],
        backgroundColors: ["info", "primary", "dark", "secondary", "success"],
      },
    }
  })
})


//#endregion


//#region APPLICATIONS
// Kanban
app.get('/applications/kanban', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      columns: [
        {
          title: "Backlog",
          cards: [
            {
              template: "Change me to change title",
            },
            {
              template: "Drag me to 'In progress' section",
            },
            {
              template: {
                  image: "https://iili.io/HCvz0ZX.md.jpg",
                  badge: { color: "dark", label: "pending" },
                  content: "Website Design: New cards for blog section and profile details",
                  attachedFiles: 3,
                  members: ["https://iili.io/HCvoiUQ.jpg", "https://iili.io/HCvoP0x.jpg", "https://iili.io/HCvo6fj.jpg"],
                }
            },
          ],
        },
        {
          title: "In progress",
          cards: [
            {
              template: {
                  badge: { color: "error", label: "errors" },
                  content: "Fix firefox errors",
                  attachedFiles: 9,
                  members: ["https://iili.io/HCvoP0x.jpg", "https://iili.io/HCvo6fj.jpg"],
                }
            },
            {
              template: {
                  badge: { color: "info", label: "updates" },
                  content: "Argon Dashboard PRO - React",
                  attachedFiles: 3,
                  members: ["https://iili.io/HCvogWu.jpg" , "https://iili.io/HCvorib.jpg"],
                }
            },
            {
              template: {
                  image: "https://iili.io/HCvzEnn.md.jpg",
                  badge: { color: "info", label: "updates" },
                  content: "ReactJS v17 Updates",
                  attachedFiles: 3,
                  members: ["https://iili.io/HCvoiUQ.jpg", "https://iili.io/HCvoP0x.jpg", "https://iili.io/HCvo6fj.jpg"],
                }
            },
          ],
        },
        {
          title: "In review",
          cards: [
            {
              template: {
                  badge: { color: "warning", label: "in testing" },
                  content: "Responsive Changes",
                  attachedFiles: 11,
                  members: ["https://iili.io/HCvo6fj.jpg", "https://iili.io/HCvoP0x.jpg"],
                }
            },
            {
              template: {
                  badge: { color: "success", label: "in review" },
                  content: "Change images dimension",
                  progress: 80,
                  members: ["https://iili.io/HCvo6fj.jpg"],
                }
            },
            {
              template: {
                  badge: { color: "info", label: "in review" },
                  content: "Update links",
                  progress: 60,
                  attachedFiles: 6,
                  members: ["https://iili.io/HCvogWu.jpg" , "https://iili.io/HCvoiUQ.jpg"],
                }
            },
          ],
        },
        {
          title: "Done",
          cards: [
            {
              template: {
                  image: "https://iili.io/HCvzGGs.md.jpg",
                  badge: { color: "success", label: "done" },
                  content: "Redesign for the home page",
                  attachedFiles: 8,
                  members: ["https://iili.io/HCvogWu.jpg" , "https://iili.io/HCvoiUQ.jpg", "https://iili.io/HCvorib.jpg"],
                }
            },
            {
              template: {
                  badge: { color: "success", label: "done" },
                  content: "Schedule winter campaign",
                  attachedFiles: 2,
                  members: ["https://iili.io/HCvoiUQ.jpg", "https://iili.io/HCvorib.jpg"],
                }
            },
          ],
        },
      ],
    }
  })
})

// Datatable
app.get('/applications/datatable', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      columns: [
        { Header: "name", accessor: "name", width: "20%" },
        { Header: "position", accessor: "position", width: "25%" },
        { Header: "office", accessor: "office" },
        { Header: "age", accessor: "age", width: "7%" },
        { Header: "start date", accessor: "startDate" },
        { Header: "salary", accessor: "salary" },
      ],
    
      rows: [
        {
          name: "Hanny Baniard",
          position: "Data Coordiator",
          office: "Baorixile",
          age: 42,
          startDate: "4/11/2021",
          salary: "$474,978",
        },
    
        {
          name: "Lara Puleque",
          position: "Payment Adjustment Coordinator",
          office: "Cijangkar",
          age: 47,
          startDate: "8/2/2021",
          salary: "$387,287",
        },
        {
          name: "Torie Repper",
          position: "Administrative Officer",
          office: "Montpellier",
          age: 25,
          startDate: "4/21/2021",
          salary: "$94,780",
        },
        {
          name: "Nat Gair",
          position: "Help Desk Technician",
          office: "Imider",
          age: 57,
          startDate: "12/6/2020",
          salary: "$179,177",
        },
        {
          name: "Maggi Slowan",
          position: "Help Desk Technician",
          office: "Jaunpils",
          age: 56,
          startDate: "11/7/2020",
          salary: "$440,874",
        },
        {
          name: "Marleah Snipe",
          position: "Account Representative II",
          office: "Orekhovo-Borisovo Severnoye",
          age: 31,
          startDate: "7/18/2021",
          salary: "$404,983",
        },
        {
          name: "Georgia Danbury",
          position: "Professor",
          office: "Gniezno",
          age: 50,
          startDate: "10/1/2020",
          salary: "$346,576",
        },
        {
          name: "Bev Castan",
          position: "Design Engineer",
          office: "Acharnés",
          age: 19,
          startDate: "1/14/2021",
          salary: "$445,171",
        },
        {
          name: "Reggi Westney",
          position: "Financial Advisor",
          office: "Piuí",
          age: 56,
          startDate: "3/21/2021",
          salary: "$441,569",
        },
        {
          name: "Bartholomeus Prosh",
          position: "Project Manager",
          office: "Kelīshād va Sūdarjān",
          age: 28,
          startDate: "5/27/2021",
          salary: "$336,238",
        },
        {
          name: "Sheffy Feehely",
          position: "Software Consultant",
          office: "Ndibène Dahra",
          age: 27,
          startDate: "3/23/2021",
          salary: "$473,391",
        },
        {
          name: "Euphemia Chastelain",
          position: "Engineer IV",
          office: "Little Baguio",
          age: 63,
          startDate: "5/1/2021",
          salary: "$339,489",
        },
        {
          name: "Sharai Labat",
          position: "Geological Engineer",
          office: "Býšť",
          age: 53,
          startDate: "6/18/2021",
          salary: "$403,178",
        },
        {
          name: "Nicolis Bremmell",
          position: "Analyst Programmer",
          office: "Piraí do Sul",
          age: 27,
          startDate: "1/29/2021",
          salary: "$443,473",
        },
        {
          name: "Mattie Rait",
          position: "Budget/Accounting Analyst IV",
          office: "Meziměstí",
          age: 30,
          startDate: "6/9/2021",
          salary: "$233,875",
        },
        {
          name: "Inger Gawkes",
          position: "Internal Auditor",
          office: "Kangar",
          age: 27,
          startDate: "4/20/2021",
          salary: "$378,343",
        },
        {
          name: "Aldus Marginson",
          position: "Chief Design Engineer",
          office: "Pingdingshan",
          age: 29,
          startDate: "3/24/2021",
          salary: "$223,231",
        },
        {
          name: "Wendel Swaite",
          position: "Speech Pathologist",
          office: "Rubirizi",
          age: 22,
          startDate: "6/5/2021",
          salary: "$325,812",
        },
        {
          name: "Duffy Cicconetti",
          position: "Software Test Engineer I",
          office: "Sendai-shi",
          age: 58,
          startDate: "5/2/2021",
          salary: "$335,397",
        },
        {
          name: "Mandi Paulley",
          position: "Account Representative III",
          office: "Independencia",
          age: 25,
          startDate: "4/27/2021",
          salary: "$367,351",
        },
        {
          name: "Gladi Doorly",
          position: "Dental Hygienist",
          office: "Longwy",
          age: 52,
          startDate: "4/28/2021",
          salary: "$306,827",
        },
        {
          name: "Johnnie Godfray",
          position: "Human Resources Manager",
          office: "Afikpo",
          age: 31,
          startDate: "4/15/2021",
          salary: "$275,513",
        },
        {
          name: "Rudolph Jurczik",
          position: "Web Developer III",
          office: "Jaciara",
          age: 36,
          startDate: "11/19/2020",
          salary: "$193,993",
        },
        {
          name: "Annmarie Fulbrook",
          position: "Cost Accountant",
          office: "Lisala",
          age: 25,
          startDate: "9/30/2020",
          salary: "$423,486",
        },
        {
          name: "Daisey Nickolls",
          position: "Electrical Engineer",
          office: "Xucheng",
          age: 60,
          startDate: "2/26/2021",
          salary: "$209,415",
        },
        {
          name: "Mordecai Dace",
          position: "Help Desk Technician",
          office: "Busuanga",
          age: 22,
          startDate: "1/29/2021",
          salary: "$263,774",
        },
        {
          name: "Melisande Spall",
          position: "VP Accounting",
          office: "Xiakouyi",
          age: 50,
          startDate: "11/21/2020",
          salary: "$290,169",
        },
        {
          name: "Karlik Sherrock",
          position: "GIS Technical Architect",
          office: "Bagumbayan",
          age: 50,
          startDate: "3/13/2021",
          salary: "$217,224",
        },
        {
          name: "Constance Vinick",
          position: "Physical Therapy Assistant",
          office: "Jiaoba",
          age: 46,
          startDate: "3/23/2021",
          salary: "$146,130",
        },
        {
          name: "Kimberlee Hoogendorp",
          position: "Dental Hygienist",
          office: "Santo Antônio de Pádua",
          age: 63,
          startDate: "4/11/2021",
          salary: "$401,826",
        },
        {
          name: "Jephthah McIlvenny",
          position: "Executive Secretary",
          office: "Poligny",
          age: 40,
          startDate: "2/25/2021",
          salary: "$397,099",
        },
        {
          name: "Claudetta Ivanchenkov",
          position: "Computer Systems Analyst III",
          office: "Barranca de Upía",
          age: 22,
          startDate: "2/4/2021",
          salary: "$497,394",
        },
        {
          name: "Gordie Winterbottom",
          position: "General Manager",
          office: "Kaeng Khro",
          age: 18,
          startDate: "6/11/2021",
          salary: "$85,498",
        },
        {
          name: "Yvor Ching",
          position: "Systems Administrator IV",
          office: "Sobreira",
          age: 43,
          startDate: "10/4/2020",
          salary: "$445,688",
        },
        {
          name: "Marilin Swires",
          position: "Electrical Engineer",
          office: "Longnan",
          age: 38,
          startDate: "10/30/2020",
          salary: "$121,519",
        },
        {
          name: "Tobey Fernan",
          position: "Compensation Analyst",
          office: "Hushan",
          age: 31,
          startDate: "3/17/2021",
          salary: "$275,670",
        },
        {
          name: "Jan Trustrie",
          position: "Developer IV",
          office: "Mashava",
          age: 34,
          startDate: "12/3/2020",
          salary: "$200,260",
        },
        {
          name: "Silva Linger",
          position: "Nurse Practicioner",
          office: "Cosne-Cours-sur-Loire",
          age: 25,
          startDate: "1/14/2021",
          salary: "$490,838",
        },
        {
          name: "Jocko Oriel",
          position: "Design Engineer",
          office: "Clisson",
          age: 61,
          startDate: "12/2/2020",
          salary: "$401,741",
        },
        {
          name: "Barbra Ready",
          position: "Paralegal",
          office: "Xuedian",
          age: 29,
          startDate: "11/3/2020",
          salary: "$246,939",
        },
        {
          name: "Cynde Blakeslee",
          position: "Software Consultant",
          office: "Kembangan",
          age: 23,
          startDate: "1/9/2021",
          salary: "$186,173",
        },
        {
          name: "Erminia O' Shea",
          position: "Analog Circuit Design manager",
          office: "Tungawan",
          age: 51,
          startDate: "12/8/2020",
          salary: "$209,678",
        },
        {
          name: "Pietro Hoggins",
          position: "Account Coordinator",
          office: "Lexington",
          age: 34,
          startDate: "7/1/2021",
          salary: "$245,579",
        },
        {
          name: "Cobb Fish",
          position: "VP Product Management",
          office: "General Elizardo Aquino",
          age: 60,
          startDate: "8/27/2020",
          salary: "$201,191",
        },
        {
          name: "Goddart Zorzutti",
          position: "Office Assistant I",
          office: "Hedi",
          age: 44,
          startDate: "4/14/2021",
          salary: "$89,168",
        },
        {
          name: "Joyce Gason",
          position: "VP Product Management",
          office: "Jingzhou",
          age: 48,
          startDate: "10/10/2020",
          salary: "$285,350",
        },
        {
          name: "Juliet Lemm",
          position: "Junior Executive",
          office: "Tečovice",
          age: 37,
          startDate: "4/28/2021",
          salary: "$479,963",
        },
        {
          name: "Filberte Dobrowolski",
          position: "Senior Cost Accountant",
          office: "Puncakmanis",
          age: 55,
          startDate: "8/21/2020",
          salary: "$424,438",
        },
        {
          name: "Justinian Faraday",
          position: "Help Desk Technician",
          office: "Bacong",
          age: 60,
          startDate: "1/24/2021",
          salary: "$369,012",
        },
        {
          name: "Amata Cahan",
          position: "Technical Writer",
          office: "Hradec Králové",
          age: 56,
          startDate: "9/22/2020",
          salary: "$385,712",
        },
        {
          name: "Gunar Albrecht",
          position: "Tax Accountant",
          office: "Chernivtsi",
          age: 52,
          startDate: "6/30/2021",
          salary: "$392,642",
        },
        {
          name: "Mal Deignan",
          position: "Senior Cost Accountant",
          office: "Nefta",
          age: 57,
          startDate: "7/18/2021",
          salary: "$322,031",
        },
        {
          name: "Hamil Cicci",
          position: "Programmer Analyst IV",
          office: "Fukushima-shi",
          age: 34,
          startDate: "10/7/2020",
          salary: "$471,172",
        },
        {
          name: "Stormie Peacop",
          position: "GIS Technical Architect",
          office: "Emiliano Zapata",
          age: 57,
          startDate: "10/21/2020",
          salary: "$217,522",
        },
        {
          name: "Kayle Fallon",
          position: "Technical Writer",
          office: "Midleton",
          age: 19,
          startDate: "12/10/2020",
          salary: "$294,275",
        },
        {
          name: "Cassandre Watters",
          position: "Technical Writer",
          office: "Karang Tengah",
          age: 21,
          startDate: "7/31/2021",
          salary: "$213,508",
        },
        {
          name: "Cobb Fish",
          position: "VP Product Management",
          office: "General Elizardo Aquino",
          age: 60,
          startDate: "8/27/2020",
          salary: "$201,191",
        },
      ],
    }
  })
})

// Calendar
app.get('/applications/calendar', (req, res)=>{
  res.status(200).json({status:200, message:
    [
      {
        title: "All day conference",
        start: "2021-08-01",
        end: "2021-08-01",
        className: "success",
      },
    
      {
        title: "Meeting with Mary",
        start: "2021-08-03",
        end: "2021-08-03",
        className: "info",
      },
    
      {
        title: "Cyber Week",
        start: "2021-08-04",
        end: "2021-08-04",
        className: "warning",
      },
    
      {
        title: "Winter Hackaton",
        start: "2021-08-05",
        end: "2021-08-05",
        className: "error",
      },
    
      {
        title: "Digital event",
        start: "2021-08-09",
        end: "2021-08-11",
        className: "warning",
      },
    
      {
        title: "Marketing event",
        start: "2021-08-12",
        end: "2021-08-12",
        className: "primary",
      },
    
      {
        title: "Dinner with Family",
        start: "2021-08-21",
        end: "2021-08-21",
        className: "error",
      },
    
      {
        title: "Black Friday",
        start: "2021-08-25",
        end: "2021-08-25",
        className: "info",
      },
    ]
  })
})


//#endregion


//#region ECommerce
// Products / Product Page
app.get('/ecommerce/products/productpage', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      columns: [
        { Header: "product", accessor: "product", width: "50%" },
        { Header: "price", accessor: "price", width: "10%" },
        { Header: "review", accessor: "review", align: "center" },
        { Header: "availability", accessor: "availability", align: "center", width: "40%" },
        { Header: "id", accessor: "id", align: "center" },
      ],
    
      rows: [
        {
          product: {
            image: "https://iili.io/HCvn34R.md.jpg",
            name: "Christopher Knight Home",
          },
          price: 89.53,
          review: {
            rating: 4.5
          },
          availability: {
            width: "8rem",
            variant: "gradient",
            color: 80,
            value: "success"
          },
          id: 230019,
        },
        {
          product: {
            image: "https://iili.io/HCvnK2p.md.jpg",
            name: "Bar Height Swivel Barstool"
          },
          price: 99.99,
          review: {
            rating: 5
          },
          availability: {
            width: "8rem",
            variant: "gradient",
            color: "success",
            value: 90
          },
          id: 87120,
        },
        {
          product: {
            image: "https://iili.io/HCvnfYN.md.jpg",
            name: "Signature Design by Ashley"
          },
          price: 129.00,
          review: {
            rating: 4.5
          },
          availability: {
            width: "8rem",
            variant: "gradient",
            color: "warning",
            value: 60
          },
          id: 412301,
        },
        {
          product: {
            image: "https://iili.io/HCvnqvI.md.jpg",
            name: "Modern Square"
          },
          price: 59.99,
          review: {
            rating: 4.5
          },
          availability: {
            width: "8rem",
            variant: "gradient",
            color: "warning",
            value: 40
          },
          id: 312392,
        },
      ],
    }
  })
})

// Orders / Order List
app.get('/ecommerce/orders/orderlist', (req, res)=>{
  res.status(200).json({status:200, message:
    {
      columns: [
        { Header: "id", accessor: "id"},
        {
          Header: "date",
          accessor: "date",
        },
        {
          Header: "status",
          accessor: "status",
        },
        {
          Header: "customer",
          accessor: "customer",
        },
        {
          Header: "product",
          accessor: "product",
        },
        { Header: "revenue", accessor: "revenue", },
      ],
    
      rows: [
        {
          id: "#10421",
          date: "1 Nov, 10:20 AM",
          status: "paid",
          customer: ["Orlando Imieto", { image: "https://iili.io/HCvoP0x.jpg" }],
          product: "Nike Sport V2",
          revenue: "$140,20",
        },
        {
          id: "#10422",
          date: "1 Nov, 10:53 AM",
          status: "paid",
          customer: ["Alice Murinho", { image: "https://iili.io/HCvoiUQ.jpg" }],
          product: "Valvet T-shirt",
          revenue: "$42,00",
        },
        {
          id: "#10423",
          date: "1 Nov, 11:13 AM",
          status: "refunded",
          customer: ["Michael Mirra", { image: "M" }],
          product: ["Leather Wallet", { suffix: "+1 more" }],
          revenue: "$25,50",
        },
        {
          id: "#10424",
          date: "1 Nov, 12:20 PM",
          status: "paid",
          customer: ["Andrew Nichel", { image: "https://iili.io/HCvo6fj.jpg" }],
          product: "Bracelet Onu-Lino",
          revenue: "$19,40",
        },
        {
          id: "#10425",
          date: "1 Nov, 1:40 PM",
          status: "canceled",
          customer: ["Sebastian Koga", { image: "https://iili.io/HCvorib.jpg" }],
          product: ["Phone Case Pink", { suffix: "x 2" }],
          revenue: "$44,90",
        },
        {
          id: "#10426",
          date: "1 Nov, 2:19 PM",
          status: "paid",
          customer: ["Laur Gilbert", { image: "L" }],
          product: "Backpack Niver",
          revenue: "$112,50",
        },
        {
          id: "#10427",
          date: "1 Nov, 3:42 AM",
          status: "paid",
          customer: ["Iryna Innda", { image: "I" }],
          product: "Adidas Vio",
          revenue: "$200,00",
        },
        {
          id: "#10428",
          date: "2 Nov, 9:32 AM",
          status: "paid",
          customer: ["Arrias Liunda", { image: "A" }],
          product: "Airpods 2 Gen",
          revenue: "$350,00",
        },
        {
          id: "#10429",
          date: "2 Nov, 10:14 AM",
          status: "paid",
          customer: ["Rugna Ilpio", { image: "https://iili.io/HCvogWu.jpg" }],
          product: "Bracelet Warret",
          revenue: "$15,00",
        },
        {
          id: "#10430",
          date: "2 Nov, 10:14 AM",
          status: "refunded",
          customer: ["Anna Landa", { image: "https://iili.io/HCvoUxe.jpg" }],
          product: ["Watter Bottle India", { suffix: "x 3" }],
          revenue: "$25,00",
        },
        {
          id: "#10431",
          date: "2 Nov, 3:12 PM",
          status: "paid",
          customer: ["Karl Innas", { image: "K" }],
          product: "Kitchen Gadgets",
          revenue: "$164,90",
        },
        {
          id: "#10432",
          date: "2 Nov, 5:12 PM",
          status: "paid",
          customer: ["Oana Kilas", { image: "O", color: "info" }],
          product: "Office Papers",
          revenue: "$23,90",
        },
      ],
    }
  })
})


//#endregion

exports.server = functions.https.onRequest(app);