export default [
    {
        url: "/api/users",
        method: "get",
        response: req => {
            return {
                code: 0,
                data: [
                    {
                        id:"1523",
                        name: "tom",
                    },
                    {
                        id:"1423",
                        name: "jerry",
                    },
                ],
            };
        },
    },
    {
        url: "/api/post",
        method: "post",
        timeout: 2000,
        response: {
            code: 0,
            data: {
                name: "vben",
            },
        },
    },
];
