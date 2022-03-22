module.exports = [
    {
        categoryId: 1,
        name: "Foundation",
        completed: false,
        afterCategoryId: null,
        tasks: [
            {
                taskId: 1,
                name: "SetUp Virtual Office",
                completed: false
            },
            {
                taskId: 2,
                name: "Set Mission and Vision",
                completed: false
            },
            {
                taskId: 3,
                name: "Select Business Name",
                completed: false
            },
            {
                taskId: 4,
                name: "Buy Domains",
                completed: false
            },
        ]
    },
    {
        categoryId: 2,
        name: "Discovery",
        completed: false,
        afterCategoryId: 1,
        tasks: [
            {
                taskId: 1,
                name: "Create RoadMap",
                completed: false
            },
            {
                taskId: 2,
                name: "Competitor Analysis",
                completed: false
            }
        ]
    },
    {
        categoryId: 3,
        name: "Delivery",
        completed: false,
        afterCategoryId: 2,
        tasks: [
            {
                taskId: 1,
                name: "Release Marketing Website",
                completed: false
            },
            {
                taskId: 2,
                name: "Release MVP",
                completed: false
            }
        ]
    },
];