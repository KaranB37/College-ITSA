import React from "react";
import "../Component.css";
import "./Contact.css";

export default function Contact() {
  return (
    <section class="bg-black" id="contact">
    <div class="py-16 lg:py-32 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-6xl tracking-tight font-extrabold font-oswald text-center text-gray-900 dark:text-white">Contact Us</h2>
        <div className="light-saber2"></div> 
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a feature? Need details about our Events or Workshop? Let us know.</p>
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm text-center text-white rounded-lg bg-sky-500 sm:w-fit hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L6.2,154.7C12.3,181,25,235,37,218.7C49.2,203,62,117,74,101.3C86.2,85,98,139,111,149.3C123.1,160,135,128,148,96C160,64,172,32,185,42.7C196.9,53,209,107,222,138.7C233.8,171,246,181,258,202.7C270.8,224,283,256,295,229.3C307.7,203,320,117,332,112C344.6,107,357,181,369,186.7C381.5,192,394,128,406,138.7C418.5,149,431,235,443,250.7C455.4,267,468,213,480,192C492.3,171,505,181,517,197.3C529.2,213,542,235,554,202.7C566.2,171,578,85,591,74.7C603.1,64,615,128,628,165.3C640,203,652,213,665,208C676.9,203,689,181,702,176C713.8,171,726,181,738,160C750.8,139,763,85,775,85.3C787.7,85,800,139,812,154.7C824.6,171,837,149,849,133.3C861.5,117,874,107,886,122.7C898.5,139,911,181,923,170.7C935.4,160,948,96,960,101.3C972.3,107,985,181,997,181.3C1009.2,181,1022,107,1034,106.7C1046.2,107,1058,181,1071,229.3C1083.1,277,1095,299,1108,256C1120,213,1132,107,1145,85.3C1156.9,64,1169,128,1182,128C1193.8,128,1206,64,1218,37.3C1230.8,11,1243,21,1255,58.7C1267.7,96,1280,160,1292,192C1304.6,224,1317,224,1329,240C1341.5,256,1354,288,1366,266.7C1378.5,245,1391,171,1403,138.7C1415.4,107,1428,117,1434,122.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>


    </section>


  );
}
