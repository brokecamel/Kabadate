import { NextResponse } from "next/server";

import { google } from "googleapis";

// Path to your service account key file
// Service account credentials
const CLIENT_EMAIL =
  "kaba-userdata@singular-server-430715-j5.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCyuKTtDUQbgaka\n7HyzM/qIDfzDrclcTt088LOisizlWPAsTxzzQKvzqdEAXSxtaxXjk3irou/CWSN9\nkGq/xC4NoOnaBLZ3an1J+hlT6L0mXt+Q6sGkVRkcntobWfmDjqGInXTMKrKqcW33\nPbg6bHHw/cXKnwI4IF0bTHEG/JhvUEMEMl/9uAGbiBiAYiskXozqJ2bfAeg6sP9R\njz5+CGC8DwemBlOBYkSMQ0TxjJ7yvoUMJmNTZyTJZkokdAmzE5kK7IdLqTw9p9nr\nkCH3C1T7l0fn1awLYbbQmWqQmFD6B9lNly6oYcg22+FWb70Qd0AG30/P+9jIhwF5\nWAEWTIyNAgMBAAECgf8CXD0ms4w+6SIh11878nPKTAN4SPfZuiS38nXal9Ukh5pz\npgWLGIBRblpsps5dHXqmbmSLHLQmSqWO3mWWtQzCFSEBgybNYL86qJkCXhyzriuO\n1sfQS2fMi0BWKFPygTjd3ipLMqavgTGE4aEfhe2Zx0ZPWo1LbWsitDUTE08g09yg\nWh3dcmrjXHwhLZc+hK2V0nj74i4/YvG6tVClqjUjPgokA8wB01vKIscQEilrb4/k\nuxwDfw7HrFdDt/h5s0fzX6VXFJEL70SNgMaL4muKTS3+x0tnGbDfA4Y2W4pyI41a\n/nyVCCkgf1xAUu8/FBlkMqQuOqypEZpc59C89SECgYEA+XeZcStDzCG7okGYuc4U\nd+Ng2E3rLL2WI3B4O8tmXCaFC53m+BiaqgwCM0+sb86UucDSPtCJue8k1sEhgMIL\ndaw6R+DEeghy3fl1T10ggVoTrfOxT5x05RJ8Qd8s4sd2Njq9jZZMeUrKtN+wQTu+\nKPNyMW10hOMgLdla/NelX7kCgYEAt2bFoReNr++BWEniOB8oThb73ibM+axNO6wT\npuMHKStcHFNS9MneZLT1rA6yVbYDg31B5Oxvcsb3ZhMZEa/O3HGh7IbWL5SpzDmK\n+h/UH6SRmR74yU1rIzlu/lVofRS9Dd6r5TaKInIewUokyzxL/k/eBVaywTYkAkNm\ngJRatXUCgYEAm1MZKbpbcy0Jq8QV+JJUcjUTpnoVVH0SjyxG4EwLhpLBQfNlzNFc\n80WY1SPlZJQGTAW/ojarmiZJFKGZX5byFalPfFN5YdYC1yysGucMBx3zpNpXaw8q\nRTqWPVlclDLG6or2XMLZCKhFwAqKroMpKkwxrI7O/rJ/5awwl78ZC5kCgYBBqllu\nYUmIyb9NBj8qCvXaZ95MXyYa6vdIO0daBIVm1zCGr8rO/IxVEHm53hU6HQ5LAQkb\n1w/cT6L6+DGMpJ7zTPhGAM0lghv9lEjPX6AKqFi9M1qucLrAhOrZw2jDCC7cjXKM\ngieZR7T9Tfe4kOFAsAX1cWJVTXY9HTbRKM0FlQKBgFL8B579qnOUKyqbjE43Q0jR\n4oaCAt3ImAFPppqY8YIAxqVf4gNIaTK58NxBUtXkp9UJwnRKoGcVdHZx/TQf2gUO\nCOWObsyG/7UBpaHs3aqNCW7GmnOq0epoxXqoNa3h9PeFgYY7ncPecpxnSyCpjo75\nqFDWHhDN5MEh9VqZUDWJ\n-----END PRIVATE KEY-----\n";
// The ID and range of your spreadsheet
const SPREADSHEET_ID = "1d39fbEv6YmkEH8wouEnpNjSZ1geHKS233TnBEMvVHUk";
const RANGE = "Worksheet"; // Use the sheet name to get all data from the sheet

// Load the service account key file
const auth = new google.auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, [
  "https://www.googleapis.com/auth/spreadsheets.readonly",
]);
function sortDataByCount(data) {
  // Convert the data into an array of objects
  const entries = Object.entries(data).map(([location, count]) => ({
    location,
    count,
  }));

  // Sort the array by count in descending order
  entries.sort((a, b) => b.count - a.count);

  return entries;
}

// If you want to convert it back to an object

function prepareData(users) {
  const locationCounts = {};

  let totalUsers = 0;
  users.forEach((user) => {
    const location = user[0]; // Assume location is a country or city
    if (locationCounts[location]) {
      locationCounts[location]++;
    } else {
      locationCounts[location] = 1;
    }
    totalUsers++;
  });
  console.log("Number of Users:", totalUsers);
  const sortedData = sortDataByCount(locationCounts);
  // const sortedDataObject = Object.fromEntries(
  //   sortedData.map(({ location, count }) => [location, count])
  // );
  // console.log("Sorted Data (Array):", sortedData);
  // console.log("Sorted Data (Object):", sortedDataObject);
  return { sortedData, totalUsers };
}
export async function GET(req, res) {
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });
    const rows = res.data.values;
    const data = prepareData(rows);
    return NextResponse.json({
      message: "Api worked successfully",
      success: true,
      data: data.sortedData,
      totalUsers: data.totalUsers,
    });
  } catch (err) {
    console.error("Error reading spreadsheet:", err);
    return NextResponse.json({
      message: err.message,
      success: false,
    });
  }
}
