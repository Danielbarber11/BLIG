<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>מטיילים עם אמיר</title>
    <!-- Tailwind CSS CDN for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles for the Inter font and general body styling */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f2f5; /* Light gray background */
            color: #333; /* Darker text color */
        }
        /* Styling for the main container to center content and add padding */
        .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 1.5rem;
        }
        /* Styling for blog post cards */
        .blog-post {
            background-color: #ffffff; /* White background for posts */
            border-radius: 0.75rem; /* Rounded corners */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }
        /* Styling for the header section with a background image */
        .header-section {
            background-color: #ffffff; /* White background for header */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            padding-bottom: 2rem; /* Add padding at the bottom */
            border-bottom-left-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
            overflow: hidden; /* Ensure image doesn't overflow rounded corners */
            position: relative; /* Needed for absolute positioning of text */
        }
        .header-image {
            width: 100%;
            height: 300px; /* Fixed height for the cover image */
            object-fit: cover; /* Cover the area, cropping if necessary */
            border-bottom-left-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
        }
        /* Styling for the header text overlay */
        .header-text-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); /* Center the text */
            color: #ffffff; /* White text color */
            font-size: 3.5rem; /* Large font size */
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for readability */
            z-index: 10; /* Ensure text is above the image */
            text-align: center;
            width: 100%; /* Ensure text can span full width for centering */
        }
        /* Styling for the header title below the image */
        .header-title {
            background: linear-gradient(to right, #6366f1, #a855f7); /* Gradient background for title */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        /* CSS for truncating text to 3 lines in the main blog view */
        .truncated-text {
            display: -webkit-box;
            -webkit-line-clamp: 3; /* Limit to 3 lines */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    </style>
</head>
<body class="antialiased">
    <!-- Header section -->
    <header class="header-section">
        <!-- Cover image: generic Israeli nature landscape -->
        <img src="https://placehold.co/1200x300/4CAF50/ffffff?text=נוף+הרים+וטבע+ישראלי" alt="תמונת שער: נוף הרים וטבע ישראלי" class="header-image">
        <!-- Overlay text for the blog title on the cover image -->
        <div class="header-text-overlay">מטיילים עם אמיר</div>
        <div class="container text-center mt-6">
            <h1 class="text-5xl font-extrabold header-title">בלוג הטיולים שלי בישראל</h1>
            <p class="mt-2 text-lg text-gray-600">גלו את היופי הנסתר של ארצנו</p>
        </div>
    </header>

    <!-- Main content area -->
    <main class="container">
        <!-- Navigation bar -->
        <nav class="mb-8 p-4 bg-white rounded-lg shadow-sm flex justify-center space-x-4 space-x-reverse">
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-50">בית</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-50">אודות</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-50">יעדים</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-50">צור קשר</a>
        </nav>

        <!-- Main blog posts section (initially visible) -->
        <section id="main-blog-view">
            <!-- Posts will be dynamically inserted here with truncated content -->
        </section>

        <!-- Single post view section (initially hidden) -->
        <section id="single-post-view" class="hidden">
            <button id="back-to-blog-btn" class="mb-4 text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-50 border border-blue-600">
                &larr; חזרה לבלוג
            </button>
            <article id="current-single-post" class="blog-post">
                <!-- Full post content will be inserted here dynamically -->
            </article>
        </section>
    </main>

    <!-- Footer section -->
    <footer class="bg-gray-800 text-white py-6 mt-8 rounded-t-lg">
        <div class="container text-center text-gray-400">
            <p>&copy; 2025 מטיילים עם אמיר. כל הזכויות שמורות.</p>
        </div>
    </footer>

    <script>
        // Data for all blog posts, including full and truncated content
        const postsData = [
            {
                id: 'post-1',
                title: 'מעיינות עמק בית שאן: חוויה כחולה-ירוקה בלב בקעת הירדן',
                date: 'יוני 22, 2025',
                image: 'https://blogger.googleusercontent.com/img/a/AVvXsEh3kgOemw4FrYop3qyF9zZIXYvvQ8fmNlCfLoyJgL-lSfaPWZIPt-kdG3wN8eiPP0BC4x9ptKbXynicJx2ZLnUgCnhZlqYI3wOQycitMVY2nLBdARy_zGdK9n3TXF5xSXPSUV273bmDUo7h2t0gr88WiDG4rZb2n77q76iASRVW05l_Mw5sqJU7RORZwzk',
                fullContent: `מחפשים יום שלם של שכשוך במים קרירים, פיקניקים על גדות נחלים וטיולים בטבע שופע? עמק בית שאן, או בשמו המוכר יותר עמק המעיינות, הוא גן עדן אמיתי של מים, צמחייה ירוקה ונופים פסטורליים. זהו המקום המושלם לבילוי משפחתי רגוע או יום כיף של חברים, המתמקד ביופי הטבעי, השלווה והשפע האקולוגי של האזור, ללא כל קשר לדת או למחלוקות.
                <br><br>
                <strong>מיקום ונגישות בעמק המעיינות:</strong> עמק בית שאן ממוקם בצפון מזרח ישראל, בין בקעת הירדן לעמק חרוד, והוא מוקף ממערב ברכס הרי הגלבוע. האזור רווי במעיינות טבעיים הנובעים מכל עבר, ויוצרים עורקי מים רבים ובריכות טבעיות.
                <br>
                <strong>הגעה:</strong> לב העמק הוא פארק המעיינות, המהווה נקודת כניסה נוחה ומרכזית לחוויית המעיינות. ניתן להגיע לפארק הסמוך לקיבוץ ניר דוד (הידוע גם כסחנה) ובית שאן. השתמשו באפליקציית המיקום המועדפת עליכם וחפשו "פארק המעיינות" או "עמק המעיינות". הגישה נוחה מאוד, עם חניונים מסודרים בנקודות הכניסה.
                <br>
                <strong>מסלול טיול וחוויה: קפיצה ממעיין למעיין:</strong> עמק המעיינות הוא לא מסלול הליכה קלאסי אחד, אלא יותר קומפלקס של מעיינות, בריכות ונחלים, המחוברים ביניהם בדרכים נוחות המאפשרות הליכה, רכיבה על אופניים או נסיעה ברכב גולף (השכרה בתשלום בפארק). תוכלו לבחור לטייל בין המעיינות השונים, לשכשך במימיהם הקרירים, לערוך פיקניק בצל העצים או פשוט ליהנות מהשלווה.
                <br>
                <strong>מעיינות מומלצים:</strong>
                <ul>
                    <li>**עין מודע:** אחד המעיינות הפופולריים ביותר, עם בריכה גדולה ועמוקה יחסית, מושלמת לשחייה.</li>
                    <li>**עין שוקק:** מעיין גדול ורחב ידיים, עם מים רדודים יותר המתאימים גם לקטנטנים. סביבו יש מדשאות רחבות לפיקניקים.</li>
                    <li>**נחל הקיבוצים:** מסלול הליכה קצר ורטוב בתוך נחל זורם, חוויה מהנה לכל המשפחה.</li>
                    <li>**עין צמד:** מעיין קטן ואינטימי יותר, מוקף בצמחייה עשירה.</li>
                </ul>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>הגיעו מוקדם, במיוחד בסופי שבוע ובחגים, כדי ליהנות מהשקט ולמצוא חניה נוחה.</li>
                    <li>הצטיידו במים לשתייה, כובעים, קרם הגנה וביגוד מתאים לרחצה.</li>
                    <li>קחו איתכם ציוד לפיקניק – ישנם שולחנות פיקניק רבים ברחבי הפארק.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                    <li>ניתן לשכור רכבי גולף בפארק לניידות נוחה יותר בין המעיינות.</li>
                </ul>
                עמק המעיינות הוא פנינה אמיתית, המציעה מפלט מרענן מהשגרה וחוויה בלתי נשכחת בחיק הטבע הישראלי.
                `
            },
            {
                id: 'post-2',
                title: 'נחל צלמון: פנינת טבע זורמת בלב הגליל התחתון',
                date: 'יוני 22, 2025',
                image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjg2X-IT4SJ1S1QBuZaMLC0EGe9n_aQndfY9r6ShR5H7ryE1RhOyOi3UBv7TPW-DATpG3FEjYZnZ92cgK5jPRdlihwpJPrrAQRUoXOv1Zso8PwnbcYaCQWQjPrE03zw6igfmOTPgd87RqkcDQVC0t6kIncHhEeonmkPpdc4J8b6TKsiAUu8sdIlD5BFgSU',
                fullContent: `מחפשים טיול רגוע ומרענן בחיק הטבע, עם מים זורמים, צמחייה עשירה ונופים פסטורליים? נחל צלמון, הזורם בערוץ נסתר ויפהפה בלב הגליל התחתון, מציע לכם חוויה שלווה של ירוק וכחול. זהו מקום מושלם לבילוי יום מהנה, המתמקד ביופיו הטבעי ובקסמו המרגיע של הנחל.
                <br><br>
                <strong>מיקום ונגישות בגליל התחתון:</strong> נחל צלמון ממוקם בגליל התחתון המרכזי, מערבית לצומת גולני ודרומית לכרמיאל, וזורם לעבר הכנרת. הוא עובר באזור חקלאי וירוק, ומהווה ריאה ירוקה של ממש.
                <br>
                <strong>הגעה:</strong> כדי להגיע, תוכלו להשתמש באפליקציית המיקום המועדפת עליכם ולחפש "נחל צלמון" או "שמורת נחל צלמון". קיימות מספר נקודות כניסה למסלולים שונים לאורך הנחל. הגישה לרוב נוחה, באמצעות כבישים סלולים המובילים לקרבת נקודות ההתחלה, עם חנייה מסודרת או מאולתרת בהתאם לנקודה.
                <br>
                <strong>מסלול טיול: הליכה נינוחה לצד המים:</strong> נחל צלמון מציע בעיקר מסלולי הליכה קלים ומוצלים לאורך גדותיו, כאשר פלג המים מלווה אתכם כמעט לכל אורך הדרך.
                <br>
                <strong>תיאור המסלול:</strong> המסלול בנחל צלמון הוא לרוב הליכה קווית או הלוך-חזור בתוך הערוץ המוצל והירוק. הליכה ירוקה ומוצלת: השבילים עוברים תחת עצי דולב ענקיים ועצי צפצפה, המעניקים צל נעים ומרענן גם בימי הקיץ החמים. לאורך הנחל תמצאו פינות ישיבה נעימות, המתאימות לפיקניק משפחתי או פשוט למנוחה והתבוננות בטבע.
                <br>
                <strong>נקודות עניין לאורך הנחל:</strong>
                <ul>
                    <li>**טחנות קמח עתיקות:** לאורך הנחל פזורות שרידי טחנות קמח עתיקות, המעידות על הפעילות החקלאית הענפה שהייתה באזור בעבר.</li>
                    <li>**בריכות שכשוך:** בחלקים מסוימים של הנחל תמצאו בריכות מים רדודות המתאימות לשכשוך והתרעננות.</li>
                    <li>**צמחיית נחלים עשירה:** הנחל הוא בית גידול למגוון רחב של צמחי מים וצמחיית גדות, המעניקים לו מראה ירוק ושופע.</li>
                </ul>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>המסלול מתאים לכל המשפחה, כולל ילדים קטנים.</li>
                    <li>הצטיידו במים לשתייה, כובעים וקרם הגנה.</li>
                    <li>מומלץ להגיע עם נעליים נוחות להליכה בטבע, ואף נעלי מים אם אתם מתכננים לשכשך.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                </ul>
                נחל צלמון הוא יעד מושלם למי שמחפש שילוב של רוגע, טבע יפהפה וחוויה מרעננת בלב הגליל.
                `
            },
            {
                id: 'post-3',
                title: 'נחל תבור: טיול קסום בין בזלת למים זורמים',
                date: 'יוני 22, 2025',
                image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjg2X-IT4SJ1S1QBuZaMLC0EGe9n_aQndfY9r6ShR5H7ryE1RhOyOi3UBv7TPW-DATpG3FEyYZnZ92cgK5jPRdlihwpJPrrAQRUoXOv1Zso8PwnbcYaCQWQjPrE03zw6igfmOTPgd87RqkcDQVC0t6kIncHhEeonmkPpdc4J8b6TKsiAUu8sdIlD5BFgSU',
                fullContent: `מחפשים הרפתקה בטבע הצפוני, שמשלבת נופים געשיים, מים זורמים ומסלול הליכה ייחודי? נחל תבור, הזורם למרגלות הר תבור, מציע לכם חוויה מרתקת של קניונים בזלתיים, בריכות טבעיות והליכה רעננה בתוך ירוק ושקט. זהו מסלול ללא כל אלמנט דתי או פוליטי, אלא התמזגות עם יופיו הגאולוגי והטבעי של הגליל התחתון.
                <br><br>
                <strong>מיקום ונגישות בגליל התחתון:</strong> נחל תבור ממוקם בגליל התחתון המזרחי, בין כפר קיש וייבנאל, ונשפך לנהר הירדן. הוא נובע ממעיינות באזור כפר קמא וזורם בתוך נוף וולקני מרשים.
                <br>
                <strong>הגעה:</strong> כדי להגיע, תוכלו להשתמש באפליקציית המיקום המועדפת עליכם ולחפש "נחל תבור" או "נחל תבור - חניון כפר קיש". קיימות מספר נקודות כניסה למסלולים שונים, כאשר הנפוצה ביותר היא מכיוון כפר קיש, שם יש חנייה מסודרת.
                <br>
                <strong>מסלול טיול: הליכה בקניון הבזלת בין מים לבריכות:</strong> נחל תבור ידוע בעיקר במסלולו הפופולרי, המשלב הליכה בחלקו היבש של הנחל ולאחר מכן הליכה רטובה ומרעננת בתוך המים ובריכות קטנות.
                <br>
                <strong>תיאור המסלול:</strong> המסלול המוכר הוא מסלול קווי (הדורש הקפצת רכבים) או מסלול הלוך ושוב לחלק מהנחל. הוא עובר בתוך קניון בזלתי מרשים, עם קירות אנכיים המעניקים תחושה של מסע בתוך נוף פראי.
                <br>
                <strong>נקודות עניין לאורך הנחל:</strong>
                <ul>
                    <li>**קניון הבזלת:** החלק המרשים ביותר של המסלול, בו הנחל חרץ את דרכו בסלע הבזלת הכהה ויצר קירות גבוהים ומרשימים.</li>
                    <li>**בריכות טבעיות:** לאורך המסלול תמצאו מספר בריכות טבעיות, חלקן עמוקות מספיק לשחייה מרעננת, במיוחד בימי הקיץ.</li>
                    <li>**מפלים קטנים:** מפלים יפים הנופלים אל הגבים, ויוצרים פינות חמד מרעננות.</li>
                    <li>**צמחיית נחלים:** למרות האופי המדברי-למחצה של האזור, לאורך הנחל יש צמחייה ירוקה עשירה המעניקה צל ויופי.</li>
                </ul>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>מומלץ לבדוק את זרימת המים בנחל לפני ההגעה, במיוחד לאחר ימים גשומים, מכיוון שהזרימה משתנה.</li>
                    <li>הצטיידו במים לשתייה, כובעים, קרם הגנה ונעליים נוחות להליכה במים ובשטח סלעי.</li>
                    <li>המסלול בחלקו הרטוב דורש זהירות, במיוחד על סלעים חלקלקים.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                </ul>
                נחל תבור הוא יעד מומלץ לחובבי טבע והרפתקאות, המציע שילוב ייחודי של גיאולוגיה מרתקת ורעננות מים.
                `
            },
            {
                id: 'post-4',
                title: 'פארק קנדה: נוף, היסטוריה וטבע בלב הרי יהודה',
                date: 'יוני 22, 2025',
                image: 'https://placehold.co/800x400/a855f7/ffffff?text=פארק+קנדה',
                fullContent: `מחפשים יעד ירוק ומרווח לטיול בחיק הטבע, המשלב מסלולי הליכה, אתרים היסטוריים ונופים פסטורליים? פארק קנדה (פארק איילון), השוכן בלב הרי יהודה, מציע חוויה רחבה ומגוונת לכל המשפחה. זהו מקום מושלם ליום בילוי רגוע או פעיל, המתמקד ביופיו הטבעי של האזור ובהיסטוריה העשירה המשתלבת בו, ללא כל קשר לדת או למחלוקות.
                <br><br>
                <strong>מיקום ונגישות נוחה בהרי יהודה:</strong> פארק קנדה ממוקם בהרי יהודה, בסמוך למחלף לטרון ולכביש 1 (כביש תל אביב-ירושלים). הוא נמצא בנקודה אסטרטגית ונוחה לגישה ממרכז הארץ ומירושלים.
                <br>
                <strong>הגעה:</strong> כדי להגיע, תוכלו להשתמש באפליקציית המיקום המועדפת עליכם ולחפש "פארק קנדה" או "פארק איילון". הגישה נוחה מאוד, עם דרכים סלולות ומשולטות היטב המובילות למספר נקודות חניה מסודרות בתוך הפארק.
                <br>
                <strong>מסלול טיול: מגוון אפשרויות לכל סוגי המטיילים:</strong> פארק קנדה הוא פארק גדול ורחב ידיים, המציע שילוב של מסלולי הליכה ורכיבת אופניים ברמות קושי שונות, לצד אתרים ארכיאולוגיים מרתקים.
                <br>
                <strong>המסלולים והאטרקציות המרכזיות:</strong>
                <ul>
                    <li>**הליכה ורכיבה על אופניים:** בפארק קיימת רשת ענפה של שבילים סלולים וכבושים, המתאימים להליכה נינוחה, ריצה או רכיבת אופניים. השבילים עוברים בין עצי חורש, מטעים ונופים פתוחים.</li>
                    <li>**שער טיטוס:** שרידי שער רומי עתיק, המהווה נקודת עניין היסטורית מרתקת.</li>
                    <li>**מערת הקולומבריום:** מערה עתיקה ששימשה לגידול יונים, עם פתחים חצובים בסלע.</li>
                    <li>**בריכות מים:** בפארק מספר בריכות מים, חלקן טבעיות וחלקן מלאכותיות, המהוות מוקד משיכה למטיילים.</li>
                    <li>**שרידי יישובים עתיקים:** הפארק משמר שרידים של יישובים מתקופות שונות, המעידים על ההיסטוריה העשירה של האזור.</li>
                </ul>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>הפארק גדול, מומלץ להצטייד במפה או להשתמש באפליקציית ניווט.</li>
                    <li>הצטיידו במים לשתייה, כובעים וקרם הגנה, במיוחד בימי הקיץ.</li>
                    <li>ניתן לשכור אופניים במקום או להביא אופניים משלכם.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                </ul>
                פארק קנדה הוא יעד נפלא ליום בילוי משפחתי או קבוצתי, המשלב טבע, היסטוריה ופעילות גופנית באוויר הפתוח.
                `
            },
            {
                id: 'post-5',
                title: 'נחל חרוד: מסע ירוק בעמק המעיינות',
                date: 'יוני 22, 2025',
                image: 'https://placehold.co/800x400/6366f1/ffffff?text=נחל+חרוד',
                fullContent: `מחפשים טיול שליו ומרענן בלב עמק פורה ושופע מים? נחל חרוד, הזורם בעמק המעיינות (עמק בית שאן) ומציע שילוב נהדר של טבע, היסטוריה חקלאית ומים זורמים. זהו מקום מושלם לטיול קליל ומהנה לכל המשפחה, ללא כל קשר לדת או למחלוקות, אלא התמקדות ביופיו הטבעי של האזור ועושר המים שבו.
                <br><br>
                <strong>מיקום ונגישות בעמק המעיינות:</strong> נחל חרוד זורם לאורכו של עמק המעיינות (עמק בית שאן), מזרחית לעמק יזרעאל ועד לנהר הירדן. הוא מהווה עורק מים מרכזי באזור, ואזורים רבים לאורכו טופחו והונגשו למטיילים.
                <br>
                <strong>הגעה:</strong> ניתן להגיע לנחל חרוד ממגוון נקודות. נקודות כניסה פופולריות הן בפארק המעיינות הסמוך לקיבוץ ניר דוד (בתשלום), או באזורים פתוחים יותר לאורך הנחל. כדי להגיע, תוכלו להשתמש באפליקציית המיקום המועדפת עליכם ולחפש "פארק המעיינות", "נחל חרוד" או "עין חרוד". הגישה נוחה, עם חניונים מסודרים בחלק מהנקודות.
                <br>
                <strong>מסלול טיול: הליכה נינוחה לצד המים והיסטוריה חקלאית:</strong> נחל חרוד מציע בעיקר מסלולי הליכה ורכיבת אופניים קלים ומישוריים לאורך גדותיו המטופחות, לצד בריכות מים צלולות. זהו מקום אידיאלי לבילוי רגוע ומהנה.
                <br>
                <strong>תיאור המסלול:</strong> המסלול עובר לאורך הנחל, בין עצי אקליפטוס וצמחיית נחלים עשירה. לאורכו תמצאו פינות ישיבה, שולחנות פיקניק ואף טחנות קמח עתיקות המעידות על ההיסטוריה החקלאית הענפה של העמק.
                <br>
                <strong>נקודות עניין לאורך הנחל:</strong>
                <ul>
                    <li>**גן גורו:** גן חיות אוסטרלי ייחודי הממוקם בסמוך לנחל, ומהווה אטרקציה נהדרת לילדים.</li>
                    <li>**טחנת הקמח של נחל חרוד:** שרידי טחנה עתיקה ששופצה, ומספרת את סיפור החקלאות באזור.</li>
                    <li>**בריכות שכשוך:** לאורכו תמצאו נקודות רבות לשכשוך והתרעננות במים הקרירים.</li>
                </ul>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>המסלול מתאים לכל המשפחה ולכל הגילאים.</li>
                    <li>הצטיידו במים לשתייה, כובעים וקרם הגנה.</li>
                    <li>מומלץ להביא אופניים או לשכור רכב גולף בפארק המעיינות לניידות נוחה יותר.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                </ul>
                נחל חרוד הוא יעד מצוין ליום בילוי רגוע בטבע, המשלב יופי, היסטוריה וכיף במים.
                `
            },
            {
                id: 'post-6',
                title: 'עין בובין: בועת שלווה ירוקה בלב הרי ירושלים',
                date: 'יוני 22, 2025',
                image: 'https://placehold.co/800x400/a855f7/ffffff?text=עין+בובין',
                fullContent: `מחפשים פינת חמד פסטורלית עם מים קרירים וצמחייה עשירה, במרחק נגיעה מההמולה? עין בובין הוא מעיין קסום הממוקם בנוף המוריק של הרי ירושלים, ומציע חוויה מרעננת של טבע, מנוחה ואווירה כפרית. זהו מקום אידיאלי לפיקניק משפחתי או סתם לבילוי רגוע בחיק הטבע, ללא כל קשר לדת או למחלוקות.
                <br><br>
                <strong>מיקום ונגישות בהרי ירושלים:</strong> עין בובין ממוקם בהרי ירושלים, סמוך ליישוב נווה אילן ולקיבוץ נחשון, וצפונית לכביש 1 (כביש תל אביב-ירושלים הישן). הוא חלק מאזור עשיר במעיינות ושבילי טיול.
                <br>
                <strong>הגעה:</strong> כדי להגיע, תוכלו להשתמש באפליקציית המיקום המועדפת עליכם ולחפש "עין בובין" או "עין בוקר". הגישה למעיין נוחה יחסית, לרוב בדרך עפר קצרה אך עבירה לרוב כלי הרכב, היורדת מכביש אספלט. קיימת חניה מאולתרת בשולי הדרך, בקרבת המעיין.
                <br>
                <strong>מסלול טיול וחוויה במים:</strong> הביקור בעין בובין אינו כולל מסלול הליכה ארוך ומאתגר, אלא מתמקד בחוויה סביב המעיין ובריכותיו. זהו מקום נפלא לעצירה והתרעננות.
                <br>
                <strong>תיאור החוויה:</strong> המעיין נובע לתוך בריכה יפהפייה ועגולה, מוקפת בעצי תאנה ענקיים ועצי פרי נוספים המעניקים צל נעים. מי המעיין קרירים וצלולים (אך אינם מי שתייה), ומתאימים לשכשוך והתרעננות בימי הקיץ החמים. סביב הבריכה ישנם משטחי דשא קטנים ופינות ישיבה, המזמינים לפיקניק או פשוט למנוחה.
                <br>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>המעיין פופולרי בסופי שבוע, מומלץ להגיע בשעות הבוקר המוקדמות או בימי חול.</li>
                    <li>הצטיידו במים לשתייה, כובעים, קרם הגנה ומגבות.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                    <li>הכניסה למעיין חופשית.</li>
                </ul>
                עין בובין הוא פנינה ירוקה ושלווה, המציעה מפלט נעים ומרענן בלב הטבע של הרי ירושלים.
                `
            },
            {
                id: 'post-7',
                title: 'נחל ערוגות: יופי מדברי מרענן בלב שמורת עין גדי',
                date: 'יוני 22, 2025',
                image: 'https://placehold.co/800x400/ef4444/ffffff?text=נחל+ערוגות',
                fullContent: `מחפשים טיול מדברי קסום המשלב נופים עוצרי נשימה, מים זורמים ואפשרות לרחצה מרעננת? נחל ערוגות, הממוקם בלב שמורת הטבע עין גדי, מציע לכם חוויה בלתי נשכחת של קניון מדברי יפהפה, גבי מים צלולים ומפלים קטנים, הכל תוך התמקדות ביופיו הטבעי והגיאוגרפי של המקום.
                <br><br>
                <strong>מיקום ונגישות במדבר יהודה:</strong> נחל ערוגות ממוקם במדבר יהודה, בחלקו המזרחי של המדבר, ונשפך לים המלח. הוא אחד משני הנחלים המרכזיים הזורמים דרך שמורת הטבע עין גדי (השני הוא נחל דוד).
                <br>
                <strong>הגעה:</strong> כדי להגיע, סעו בכביש 90 (כביש ים המלח) והגיעו לשמורת הטבע עין גדי. הכניסה לנחל ערוגות היא דרך הכניסה הדרומית של השמורה. מומלץ להשתמש באפליקציית המיקום המועדפת עליכם ולחפש "שמורת הטבע עין גדי - נחל ערוגות". קיים חניון גדול ומסודר בכניסה לשמורה.
                <br>
                <strong>מסלול טיול: הליכה במים ועל שפת הנחל:</strong> נחל ערוגות מציע למטיילים מסלול הליכה קווי (או חלקי מעגלי אם חוזרים באותה דרך) בתוך ערוץ הנחל. המסלול משלב הליכה על שפת הנחל, מעבר במים רדודים (בחלקו) וגבים, ומגיע עד ל"בריכה הנסתרת" המפורסמת.
                <br>
                <strong>תיאור המסלול:</strong> המסלול מתחיל בכניסה לשמורה ומתפתל לאורך הנחל. לאורכו תפגשו:
                <ul>
                    <li>**גבי מים:** בריכות טבעיות בגדלים שונים, המזמינות לשכשוך ורחצה.</li>
                    <li>**מפלים קטנים:** מפלים יפים הנופלים אל הגבים, ויוצרים פינות חמד מרעננות.</li>
                    <li>**צמחיית נחלים מדברית:** למרות האופי המדברי, לאורך הנחל יש צמחייה ירוקה עשירה, המעידה על שפע המים.</li>
                    <li>**חיות בר:** בשמורה ניתן לפגוש יעלים ושפני סלע, במיוחד בשעות הבוקר המוקדמות או בשעות אחר הצהריים המאוחרות.</li>
                    <li>**הבריכה הנסתרת:** נקודת השיא של המסלול, בריכה גדולה ועמוקה יחסית, מוקפת בצוקים, המהווה מקום מושלם למנוחה ושחייה.</li>
                </ul>
                <strong>טיפים לטיול:</strong>
                <ul>
                    <li>מומלץ להגיע מוקדם בבוקר, במיוחד בימי הקיץ, כדי להימנע מהחום ומהעומס.</li>
                    <li>הצטיידו במים לשתייה, כובעים, קרם הגנה ונעליים נוחות להליכה במים ובשטח סלעי.</li>
                    <li>המסלול בחלקו הרטוב דורש זהירות.</li>
                    <li>הקפידו לשמור על הניקיון ולאסוף את האשפה.</li>
                    <li>הכניסה לשמורה בתשלום.</li>
                </ul>
                נחל ערוגות הוא אחד המסלולים היפים והמרעננים במדבר יהודה, המציע חוויה בלתי נשכחת של טבע, מים ושקט מדברי.
                `
            }
        ];

        const mainBlogView = document.getElementById('main-blog-view');
        const singlePostView = document.getElementById('single-post-view');
        const currentSinglePost = document.getElementById('current-single-post');
        const backToBlogBtn = document.getElementById('back-to-blog-btn');

        /**
         * Renders the main blog view with truncated posts.
         */
        function renderMainBlog() {
            mainBlogView.innerHTML = ''; // Clear existing posts
            postsData.forEach(post => {
                const article = document.createElement('article');
                article.className = 'blog-post';
                article.innerHTML = `
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${post.title}</h2>
                    <p class="text-sm text-gray-500 mb-4">פורסם בתאריך: ${post.date}</p>
                    <img src="${post.image}" alt="" class="w-full h-auto rounded-lg mb-4">
                    <p class="text-gray-700 leading-relaxed truncated-text">
                        ${post.fullContent}
                    </p>
                    <a href="#${post.id}" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">קרא עוד»</a>
                `;
                mainBlogView.appendChild(article);
            });
            mainBlogView.classList.remove('hidden');
            singlePostView.classList.add('hidden');
        }

        /**
         * Renders a single post view with full content.
         * @param {string} postId - The ID of the post to display.
         */
        function renderSinglePost(postId) {
            const post = postsData.find(p => p.id === postId);
            if (post) {
                currentSinglePost.innerHTML = `
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${post.title}</h2>
                    <p class="text-sm text-gray-500 mb-4">פורסם בתאריך: ${post.date}</p>
                    <img src="${post.image}" alt="" class="w-full h-auto rounded-lg mb-4">
                    <p class="text-gray-700 leading-relaxed">
                        ${post.fullContent}
                    </p>
                `;
                mainBlogView.classList.add('hidden');
                singlePostView.classList.remove('hidden');
            } else {
                // If post not found, redirect to main blog view
                window.location.hash = '';
            }
        }

        /**
         * Handles changes in the URL hash to display the correct view.
         */
        function handleHashChange() {
            const postId = window.location.hash.substring(1); // Remove the '#'
            if (postId) {
                renderSinglePost(postId);
            } else {
                renderMainBlog();
            }
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', handleHashChange);
        window.addEventListener('hashchange', handleHashChange);

        backToBlogBtn.addEventListener('click', () => {
            window.location.hash = ''; // Clear hash to go back to main view
        });
    </script>
</body>
</html>
