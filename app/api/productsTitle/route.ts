import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        products: [
            {

                "title": "iPhone 10",

            }, {

                "title": "iPhone X",

            },
            {

                "title": "Samsung Universe 9",

            },
            {

                "title": "OPPOF19",

            },
            {

                "title": "Huawei P30",

            },
            {

                "title": "MacBook Pro",

            },
            {

                "title": "Samsung Galaxy Book",

            },
            {
                "title": "Microsoft Surface Laptop 4",

            },
            {

                "title": "Infinix INBOOK",

            },
            {

                "title": "HP Pavilion 15-DK1056WM",

            },
        ]

    })
}