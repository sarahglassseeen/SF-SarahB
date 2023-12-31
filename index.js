const puppeteer = require('puppeteer');

const cookies = [
    {
        "key": "dbln",
        "value": "%7B%2261553973584944%22%3A%22B6Zksd4c%22%7D",
        "domain": "facebook.com",
        "path": "/login/device-based/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.371Z",
        "lastAccessed": "2023-12-31T01:54:46.379Z"
    },
    {
        "key": "datr",
        "value": "dOiPZfXUUyc_PZvc-vXX4uky",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "sb",
        "value": "dOiPZdVOQmPTHgBazx0GvB5y",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "locale",
        "value": "vi_VN",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "vpd",
        "value": "v1%3B664x360x2",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "wd",
        "value": "360x664",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "fr",
        "value": "0chKaU5UShKoegCqR.AWW2QY9b9FBwurbryor_RKg65w8.Blj-h0.lp.AAA.0.0.Blj_rC.AWUDzWPFTEA",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "c_user",
        "value": "61553973584944",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "xs",
        "value": "28%3AU1-0xzEonwQB8w%3A2%3A1703934658%3A-1%3A-1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "fbl_cs",
        "value": "AhAiCF8XWcvZmsN2kPoiMRNsGFVTZXc0REp2WjBvbEhPWGZEY1RGL2RVag",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "fbl_ci",
        "value": "262614733475711",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "fbl_st",
        "value": "101627275%3BT%3A28399028",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    },
    {
        "key": "wl_cbv",
        "value": "v2%3Bclient_version%3A2387%3Btimestamp%3A1703941704",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2023-12-31T01:54:46.380Z",
        "lastAccessed": "2023-12-31T01:54:46.380Z"
    }
];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set cookies
    await page.setCookie(...cookies);

    // Navigate to Facebook
    await page.goto('https://www.facebook.com');

    // Perform actions (you may need to inspect Facebook's structure to find the elements)
    // For example, you can send a message:
    await page.click('[aria-label="Messenger"]');

    // Replace the selector and messageText with your values
    const friendName = 'Phong';
    const quantity = '111';
    const link = 'https://chatgpt.com';
    const messageText = `/tim ${friendName} ${quantity} ${link}`;

    await page.waitForSelector('._1mj');
    await page.click('._1mj');
    await page.type('._1mj', messageText);
    await page.keyboard.press('Enter');

    // Close the browser
    await browser.close();
})();
