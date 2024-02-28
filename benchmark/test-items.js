const TEST_ITEMS = [
    {
        name: "Adding Property",
        obj1: {
            foo: "bar",
            apple: 20,
        },
        obj2: {
            banana: 304,
        },
    },

    {
        name: "Replacing Property",
        obj1: {
            foo: "bar",
            apple: 20,
        },
        obj2: {
            foo: "biz",
        },
    },

    {
        name: "Adding Nested Property",
        obj1: {
            foo: "bar",
            cart: {
                apple: 20,
            },
        },
        obj2: {
            cart: {
                banana: 304,
            },
        },
    },

    {
        name: "Replacing Nested Property",
        obj1: {
            foo: "bar",
            cart: {
                apple: 20,
            },
        },
        obj2: {
            cart: {
                apple: 304,
            },
        },
    },

    {
        name: "Replacing Deep Nested Properties",
        obj1: {
            store: "Big Box Store",
            location: {
                towntown: {
                    employees: ["Carl", "Todd", "Jenny"],
                    items: {
                        apple: 3.2,
                        banana: 1.23,
                        pineapple: 5.0,
                    },
                    shoppers: {
                        Danny: {
                            cash: 237.29,
                            cart: ["apple", "pineapple", "pineapple"],
                        },
                        Edward: {
                            cash: 100.01,
                            cart: ["apple", "apple", "apple", "apple", "apple"],
                        },
                    },
                },
                citytown: {
                    employees: ["Paul", "Connor", "Jesse"],
                    items: {
                        coffee: 3.2,
                        tea: 1.23,
                        pineapple: 5.0,
                        phone: 500.0,
                        gum: 0.5,
                    },
                    shoppers: {
                        Stuart: {
                            cash: 1092.29,
                            cart: ["phone", "coffee", "coffee"],
                        },
                        Frank: {
                            cash: 10.01,
                            cart: ["gum", "gum", "gum", "gum", "gum"],
                        },
                    },
                },
            },
        },
        obj2: {
            location: {
                towntown: {
                    shoppers: {
                        Edward: {
                            cash: 69.69,
                        },
                    },
                },
                citytown: {
                    shoppers: {
                        Frank: {
                            cash: 420.0,
                        },
                    },
                },
            },
        },
    },

    {
        name: "Big Data Smush",
        obj1: {
            _id: "65dced8819c08801d60de3b9",
            index: 0,
            guid: "1dec011f-fc61-4780-b9d5-f7521a79682a",
            isActive: false,
            balance: "$3,660.53",
            picture: "http://placehold.it/32x32",
            age: 36,
            eyeColor: "green",
            name: "Genevieve Mcintosh",
            gender: "female",
            company: "EMERGENT",
            email: "genevievemcintosh@emergent.com",
            phone: "+1 (845) 577-2229",
            address: "881 Lancaster Avenue, Shawmut, Wyoming, 6979",
            about: "Nostrud commodo magna amet enim consequat deserunt fugiat aliquip dolor aliquip aute esse exercitation. Magna culpa consectetur occaecat fugiat et fugiat Lorem. Magna laborum et proident mollit. Deserunt cillum eiusmod labore consequat id aute laborum incididunt. Tempor do minim labore dolore reprehenderit pariatur aliquip voluptate fugiat aute in. Labore id ullamco in proident incididunt consectetur commodo.\r\n",
            registered: "2020-03-18T07:39:21 +04:00",
            latitude: 46.111067,
            longitude: 115.66267,
            tags: ["dolore", "irure", "Lorem", "magna", "in", "dolore", "qui"],
            friends: [
                {
                    id: 0,
                    name: "Horton Avery",
                },
                {
                    id: 1,
                    name: "Kim Patton",
                },
                {
                    id: 2,
                    name: "Marisa Stein",
                },
            ],
            greeting: "Hello, Genevieve Mcintosh! You have 4 unread messages.",
            favoriteFruit: "banana",
        },
        obj2: {
            _id: "65dced88a6da526a005c40c5",
            index: 1,
            guid: "cdd671bc-949b-41a5-86d5-921f3ed697c1",
            isActive: true,
            balance: "$2,565.51",
            picture: "http://placehold.it/32x32",
            age: 37,
            eyeColor: "green",
            name: "Luna Kirby",
            gender: "male",
            company: "ISOTERNIA",
            email: "lunakirby@isoternia.com",
            phone: "+1 (935) 574-3597",
            address: "559 Applegate Court, Frizzleburg, Mississippi, 6730",
            about: "Ad minim exercitation quis officia consequat minim dolore ut. Ea consectetur nisi nulla aliquip reprehenderit. Ea commodo tempor irure aliquip sint. Ea ea culpa reprehenderit ullamco fugiat minim excepteur irure proident non eu. Deserunt aliqua irure proident occaecat veniam adipisicing ad consectetur velit do. Consequat adipisicing qui cillum ullamco cillum. Dolor non occaecat dolore consequat tempor do voluptate excepteur magna.\r\n",
            registered: "2019-07-29T05:26:50 +04:00",
            latitude: -74.707114,
            longitude: -44.296491,
            tags: [
                "laborum",
                "elit",
                "ea",
                "irure",
                "consectetur",
                "incididunt",
                "tempor",
            ],
            friends: [
                {
                    id: 0,
                    name: "Blanche Mcbride",
                },
                {
                    id: 1,
                    name: "Evangelina Burch",
                },
                {
                    id: 2,
                    name: "Copeland Castillo",
                },
            ],
            greeting: "Hello, Luna Kirby! You have 1 unread messages.",
            favoriteFruit: "apple",
        },
    },

    {
        name: "Big Data Smush 2",
        obj1: {
            "user_id": null,
            "full_name": "Elwin Spirit",
            "gender": "Male",
            "age": 87,
            "email": "espirit1@pagesperso-orange.fr",
            "address": null,
            "city": null,
            "country": "Latvia",
            "zipcode": null,
            "phone_number": "330-314-6301",
            "birthdate": null,
            "registration_date": "12/13/2014",
            "is_active": false,
            "subscription_type": null,
            "total_purchases": 2470.54,
            "last_purchase_date": null,
            "avatar_url": "https://robohash.org/rationequibusdamsint.png?size=50x50&set=set1",
            "favorite_color": null,
            "language_preference": "Georgian",
            "job_title": null,
            "company_name": "Chatterbridge",
            "credit_card_number": null,
            "credit_card_type": "visa",
            "account_balance": "Euro",
            "last_login_date": "7/4/2020",
            "membership_level": "Gold",
            "loyalty_points": null,
            "newsletter_subscribed": true,
            "referral_code": {
                "codes": "FRIEND456"
            }
        },
        obj2: {
            "user_id": 1,
            "full_name": "Baird Burfoot",
            "gender": "Male",
            "age": 55,
            "email": "bburfoot0@cdbaby.com",
            "address": "8 Anniversary Circle",
            "city": "Odzi",
            "country": "Zimbabwe",
            "zipcode": null,
            "phone_number": "958-854-0842",
            "birthdate": "3/21/1974",
            "registration_date": "11/7/2014",
            "is_active": true,
            "subscription_type": "Premium",
            "total_purchases": 8469.51,
            "last_purchase_date": "10/10/2021",
            "avatar_url": "https://robohash.org/etdolorumnatus.png?size=50x50&set=set1",
            "favorite_color": "green",
            "language_preference": "Danish",
            "job_title": "Mechanical Systems Engineer",
            "company_name": "Gabtune",
            "credit_card_number": "5587605808584219",
            "credit_card_type": "diners-club-us-ca",
            "account_balance": "Dollar",
            "last_login_date": "12/17/2021",
            "membership_level": "Platinum",
            "loyalty_points": 200,
            "newsletter_subscribed": true,
            "referral_code": "REF123"
        }
    }
];

export default TEST_ITEMS;
