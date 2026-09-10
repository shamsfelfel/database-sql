/* data.js - every case database snapshot, embedded so the course runs
   directly from file:// with NO web server. The SQL widget reads snapshots from
   window.SQLLAB_DATA (see widget.js fetchSnapshot); it falls back to fetching the
   JSON files under /data when the page IS served over http(s).
   Generated from the data/case-<x>/chapter-<n>.json files - regenerate on change. */
window.SQLLAB_DATA = {
  "a": {
    "1": {
      "tables": {
        "authors": [
          {
            "id": 1,
            "name": "Laila Hammoud"
          },
          {
            "id": 2,
            "name": "Marcus Reyes"
          },
          {
            "id": 3,
            "name": "Aiko Tanaka"
          },
          {
            "id": 4,
            "name": "Daniel Kessler"
          },
          {
            "id": 5,
            "name": "Fatima Zahra"
          },
          {
            "id": 6,
            "name": "Tom Whitfield"
          }
        ]
      }
    },
    "2": {
      "tables": {
        "authors": [
          {
            "id": 1,
            "name": "Laila Hammoud"
          },
          {
            "id": 2,
            "name": "Marcus Reyes"
          },
          {
            "id": 3,
            "name": "Aiko Tanaka"
          },
          {
            "id": 4,
            "name": "Daniel Kessler"
          },
          {
            "id": 5,
            "name": "Fatima Zahra"
          },
          {
            "id": 6,
            "name": "Tom Whitfield"
          }
        ],
        "books": [
          {
            "id": 1,
            "title": "The Glass Bridge",
            "price": 18.5,
            "published_year": 2019,
            "in_stock": true
          },
          {
            "id": 2,
            "title": "Coastal Winters",
            "price": 12,
            "published_year": 2021,
            "in_stock": true
          },
          {
            "id": 3,
            "title": "A Quiet Machine",
            "price": 24.99,
            "published_year": 2017,
            "in_stock": false
          },
          {
            "id": 4,
            "title": "Paper Kingdoms",
            "price": 15.75,
            "published_year": 2022,
            "in_stock": true
          },
          {
            "id": 5,
            "title": "The Long Ledger",
            "price": 21,
            "published_year": 2015,
            "in_stock": false
          },
          {
            "id": 6,
            "title": "Nightshift Diaries",
            "price": 9.99,
            "published_year": 2023,
            "in_stock": true
          },
          {
            "id": 7,
            "title": "Salt and Circuits",
            "price": 19.25,
            "published_year": 2020,
            "in_stock": true
          }
        ]
      }
    },
    "3": {
      "tables": {
        "authors": [
          {
            "id": 1,
            "name": "Laila Hammoud"
          },
          {
            "id": 2,
            "name": "Marcus Reyes"
          },
          {
            "id": 3,
            "name": "Aiko Tanaka"
          },
          {
            "id": 4,
            "name": "Daniel Kessler"
          },
          {
            "id": 5,
            "name": "Fatima Zahra"
          },
          {
            "id": 6,
            "name": "Tom Whitfield"
          }
        ],
        "books": [
          {
            "id": 1,
            "title": "The Glass Bridge",
            "price": 18.5,
            "published_year": 2019,
            "in_stock": true,
            "author_id": 2
          },
          {
            "id": 2,
            "title": "Coastal Winters",
            "price": 12,
            "published_year": 2021,
            "in_stock": true,
            "author_id": 5
          },
          {
            "id": 3,
            "title": "A Quiet Machine",
            "price": 24.99,
            "published_year": 2017,
            "in_stock": false,
            "author_id": 1
          },
          {
            "id": 4,
            "title": "Paper Kingdoms",
            "price": 15.75,
            "published_year": 2022,
            "in_stock": true,
            "author_id": 3
          },
          {
            "id": 5,
            "title": "The Long Ledger",
            "price": 21,
            "published_year": 2015,
            "in_stock": false,
            "author_id": 2
          },
          {
            "id": 6,
            "title": "Nightshift Diaries",
            "price": 9.99,
            "published_year": 2023,
            "in_stock": true,
            "author_id": 6
          },
          {
            "id": 7,
            "title": "Salt and Circuits",
            "price": 19.25,
            "published_year": 2020,
            "in_stock": true,
            "author_id": 1
          }
        ]
      }
    },
    "4": {
      "tables": {
        "authors": [
          {
            "id": 1,
            "name": "Laila Hammoud",
            "country": "Lebanon",
            "birth_year": 1975
          },
          {
            "id": 2,
            "name": "Marcus Reyes",
            "country": "Canada",
            "birth_year": 1982
          },
          {
            "id": 3,
            "name": "Aiko Tanaka",
            "country": "Japan",
            "birth_year": 1968
          },
          {
            "id": 4,
            "name": "Daniel Kessler",
            "country": "Canada",
            "birth_year": 1990
          },
          {
            "id": 5,
            "name": "Fatima Zahra",
            "country": "Morocco",
            "birth_year": 1979
          },
          {
            "id": 6,
            "name": "Tom Whitfield",
            "country": "United Kingdom",
            "birth_year": 1965
          }
        ],
        "books": [
          {
            "id": 1,
            "title": "The Glass Bridge",
            "price": 18.5,
            "published_year": 2019,
            "in_stock": true,
            "author_id": 2,
            "genre": "Fiction"
          },
          {
            "id": 2,
            "title": "Coastal Winters",
            "price": 12,
            "published_year": 2021,
            "in_stock": true,
            "author_id": 5,
            "genre": "Fiction"
          },
          {
            "id": 3,
            "title": "A Quiet Machine",
            "price": 24.99,
            "published_year": 2017,
            "in_stock": false,
            "author_id": 1,
            "genre": "Science Fiction"
          },
          {
            "id": 4,
            "title": "Paper Kingdoms",
            "price": 15.75,
            "published_year": 2022,
            "in_stock": true,
            "author_id": 3,
            "genre": "Fantasy"
          },
          {
            "id": 5,
            "title": "The Long Ledger",
            "price": 21,
            "published_year": 2015,
            "in_stock": false,
            "author_id": 2,
            "genre": "Fiction"
          },
          {
            "id": 6,
            "title": "Nightshift Diaries",
            "price": 9.99,
            "published_year": 2023,
            "in_stock": true,
            "author_id": 6,
            "genre": "Science Fiction"
          },
          {
            "id": 7,
            "title": "Salt and Circuits",
            "price": 19.25,
            "published_year": 2020,
            "in_stock": true,
            "author_id": 1,
            "genre": "Science Fiction"
          }
        ]
      }
    }
  },
  "b": {
    "1": {
      "tables": {
        "categories": [
          {
            "id": 1,
            "name": "Laptops"
          },
          {
            "id": 2,
            "name": "Smartphones"
          },
          {
            "id": 3,
            "name": "Audio"
          },
          {
            "id": 4,
            "name": "Wearables"
          },
          {
            "id": 5,
            "name": "Gaming"
          },
          {
            "id": 6,
            "name": "Accessories"
          }
        ]
      }
    },
    "2": {
      "tables": {
        "categories": [
          {
            "id": 1,
            "name": "Laptops"
          },
          {
            "id": 2,
            "name": "Smartphones"
          },
          {
            "id": 3,
            "name": "Audio"
          },
          {
            "id": 4,
            "name": "Wearables"
          },
          {
            "id": 5,
            "name": "Gaming"
          },
          {
            "id": 6,
            "name": "Accessories"
          }
        ],
        "products": [
          {
            "id": 1,
            "name": "Voyager 14 Laptop",
            "price": 1299,
            "stock_qty": 8,
            "is_featured": true
          },
          {
            "id": 2,
            "name": "Pulse Buds",
            "price": 89.99,
            "stock_qty": 40,
            "is_featured": false
          },
          {
            "id": 3,
            "name": "Nimbus Phone S",
            "price": 799,
            "stock_qty": 15,
            "is_featured": true
          },
          {
            "id": 4,
            "name": "TrailCam Mini",
            "price": 149.5,
            "stock_qty": 22,
            "is_featured": false
          },
          {
            "id": 5,
            "name": "Aria Smartwatch",
            "price": 229,
            "stock_qty": 12,
            "is_featured": true
          },
          {
            "id": 6,
            "name": "FlexPad Tablet",
            "price": 349,
            "stock_qty": 0,
            "is_featured": false
          },
          {
            "id": 7,
            "name": "GridKey Mechanical",
            "price": 59,
            "stock_qty": 65,
            "is_featured": false
          }
        ]
      }
    },
    "3": {
      "tables": {
        "categories": [
          {
            "id": 1,
            "name": "Laptops"
          },
          {
            "id": 2,
            "name": "Smartphones"
          },
          {
            "id": 3,
            "name": "Audio"
          },
          {
            "id": 4,
            "name": "Wearables"
          },
          {
            "id": 5,
            "name": "Gaming"
          },
          {
            "id": 6,
            "name": "Accessories"
          }
        ],
        "products": [
          {
            "id": 1,
            "name": "Voyager 14 Laptop",
            "price": 1299,
            "stock_qty": 8,
            "is_featured": true,
            "category_id": 1
          },
          {
            "id": 2,
            "name": "Pulse Buds",
            "price": 89.99,
            "stock_qty": 40,
            "is_featured": false,
            "category_id": 3
          },
          {
            "id": 3,
            "name": "Nimbus Phone S",
            "price": 799,
            "stock_qty": 15,
            "is_featured": true,
            "category_id": 2
          },
          {
            "id": 4,
            "name": "TrailCam Mini",
            "price": 149.5,
            "stock_qty": 22,
            "is_featured": false,
            "category_id": 6
          },
          {
            "id": 5,
            "name": "Aria Smartwatch",
            "price": 229,
            "stock_qty": 12,
            "is_featured": true,
            "category_id": 4
          },
          {
            "id": 6,
            "name": "FlexPad Tablet",
            "price": 349,
            "stock_qty": 0,
            "is_featured": false,
            "category_id": 1
          },
          {
            "id": 7,
            "name": "GridKey Mechanical",
            "price": 59,
            "stock_qty": 65,
            "is_featured": false,
            "category_id": 6
          }
        ]
      }
    },
    "4": {
      "tables": {
        "categories": [
          {
            "id": 1,
            "name": "Laptops",
            "department": "Electronics"
          },
          {
            "id": 2,
            "name": "Smartphones",
            "department": "Electronics"
          },
          {
            "id": 3,
            "name": "Audio",
            "department": "Home"
          },
          {
            "id": 4,
            "name": "Wearables",
            "department": "Electronics"
          },
          {
            "id": 5,
            "name": "Gaming",
            "department": "Home"
          },
          {
            "id": 6,
            "name": "Accessories",
            "department": "Office"
          }
        ],
        "products": [
          {
            "id": 1,
            "name": "Voyager 14 Laptop",
            "price": 1299,
            "stock_qty": 8,
            "is_featured": true,
            "category_id": 1,
            "brand": "Voyager"
          },
          {
            "id": 2,
            "name": "Pulse Buds",
            "price": 89.99,
            "stock_qty": 40,
            "is_featured": false,
            "category_id": 3,
            "brand": "Pulse"
          },
          {
            "id": 3,
            "name": "Nimbus Phone S",
            "price": 799,
            "stock_qty": 15,
            "is_featured": true,
            "category_id": 2,
            "brand": "Nimbus"
          },
          {
            "id": 4,
            "name": "TrailCam Mini",
            "price": 149.5,
            "stock_qty": 22,
            "is_featured": false,
            "category_id": 6,
            "brand": "Trailon"
          },
          {
            "id": 5,
            "name": "Aria Smartwatch",
            "price": 229,
            "stock_qty": 12,
            "is_featured": true,
            "category_id": 4,
            "brand": "Aria"
          },
          {
            "id": 6,
            "name": "FlexPad Tablet",
            "price": 349,
            "stock_qty": 0,
            "is_featured": false,
            "category_id": 1,
            "brand": "Voyager"
          },
          {
            "id": 7,
            "name": "GridKey Mechanical",
            "price": 59,
            "stock_qty": 65,
            "is_featured": false,
            "category_id": 6,
            "brand": "GridKey"
          }
        ]
      }
    }
  },
  "c": {
    "1": {
      "tables": {
        "departments": [
          {
            "id": 1,
            "name": "Computer Science"
          },
          {
            "id": 2,
            "name": "Mathematics"
          },
          {
            "id": 3,
            "name": "Physics"
          },
          {
            "id": 4,
            "name": "Biology"
          },
          {
            "id": 5,
            "name": "Business Administration"
          },
          {
            "id": 6,
            "name": "Fine Arts"
          }
        ]
      }
    },
    "2": {
      "tables": {
        "departments": [
          {
            "id": 1,
            "name": "Computer Science"
          },
          {
            "id": 2,
            "name": "Mathematics"
          },
          {
            "id": 3,
            "name": "Physics"
          },
          {
            "id": 4,
            "name": "Biology"
          },
          {
            "id": 5,
            "name": "Business Administration"
          },
          {
            "id": 6,
            "name": "Fine Arts"
          }
        ],
        "courses": [
          {
            "id": 1,
            "title": "Intro to Algorithms",
            "credits": 4,
            "level": "undergrad",
            "active": true
          },
          {
            "id": 2,
            "title": "Linear Algebra",
            "credits": 3,
            "level": "undergrad",
            "active": true
          },
          {
            "id": 3,
            "title": "Distributed Systems",
            "credits": 4,
            "level": "graduate",
            "active": true
          },
          {
            "id": 4,
            "title": "Classical Mechanics",
            "credits": 3,
            "level": "undergrad",
            "active": false
          },
          {
            "id": 5,
            "title": "Cell Biology",
            "credits": 3,
            "level": "undergrad",
            "active": true
          },
          {
            "id": 6,
            "title": "Advanced Statistics",
            "credits": 4,
            "level": "graduate",
            "active": true
          }
        ]
      }
    },
    "3": {
      "tables": {
        "departments": [
          {
            "id": 1,
            "name": "Computer Science"
          },
          {
            "id": 2,
            "name": "Mathematics"
          },
          {
            "id": 3,
            "name": "Physics"
          },
          {
            "id": 4,
            "name": "Biology"
          },
          {
            "id": 5,
            "name": "Business Administration"
          },
          {
            "id": 6,
            "name": "Fine Arts"
          }
        ],
        "courses": [
          {
            "id": 1,
            "title": "Intro to Algorithms",
            "credits": 4,
            "level": "undergrad",
            "active": true,
            "department_id": 1
          },
          {
            "id": 2,
            "title": "Linear Algebra",
            "credits": 3,
            "level": "undergrad",
            "active": true,
            "department_id": 2
          },
          {
            "id": 3,
            "title": "Distributed Systems",
            "credits": 4,
            "level": "graduate",
            "active": true,
            "department_id": 1
          },
          {
            "id": 4,
            "title": "Classical Mechanics",
            "credits": 3,
            "level": "undergrad",
            "active": false,
            "department_id": 3
          },
          {
            "id": 5,
            "title": "Cell Biology",
            "credits": 3,
            "level": "undergrad",
            "active": true,
            "department_id": 4
          },
          {
            "id": 6,
            "title": "Advanced Statistics",
            "credits": 4,
            "level": "graduate",
            "active": true,
            "department_id": 2
          }
        ]
      }
    },
    "4": {
      "tables": {
        "departments": [
          {
            "id": 1,
            "name": "Computer Science",
            "building": "Sciences Hall",
            "budget": 500000
          },
          {
            "id": 2,
            "name": "Mathematics",
            "building": "Sciences Hall",
            "budget": 320000
          },
          {
            "id": 3,
            "name": "Physics",
            "building": "Sciences Hall",
            "budget": 410000
          },
          {
            "id": 4,
            "name": "Biology",
            "building": "Life Sciences",
            "budget": 380000
          },
          {
            "id": 5,
            "name": "Business Administration",
            "building": "Commerce",
            "budget": 290000
          },
          {
            "id": 6,
            "name": "Fine Arts",
            "building": "Arts Center",
            "budget": 210000
          }
        ],
        "courses": [
          {
            "id": 1,
            "title": "Intro to Algorithms",
            "credits": 4,
            "level": "undergrad",
            "active": true,
            "department_id": 1,
            "enrollment_cap": 120
          },
          {
            "id": 2,
            "title": "Linear Algebra",
            "credits": 3,
            "level": "undergrad",
            "active": true,
            "department_id": 2,
            "enrollment_cap": 90
          },
          {
            "id": 3,
            "title": "Distributed Systems",
            "credits": 4,
            "level": "graduate",
            "active": true,
            "department_id": 1,
            "enrollment_cap": 60
          },
          {
            "id": 4,
            "title": "Classical Mechanics",
            "credits": 3,
            "level": "undergrad",
            "active": false,
            "department_id": 3,
            "enrollment_cap": 80
          },
          {
            "id": 5,
            "title": "Cell Biology",
            "credits": 3,
            "level": "undergrad",
            "active": true,
            "department_id": 4,
            "enrollment_cap": 100
          },
          {
            "id": 6,
            "title": "Advanced Statistics",
            "credits": 4,
            "level": "graduate",
            "active": true,
            "department_id": 2,
            "enrollment_cap": 70
          }
        ]
      }
    }
  }
};
