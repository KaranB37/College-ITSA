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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L0,128L36.9,128L36.9,192L73.8,192L73.8,320L110.8,320L110.8,192L147.7,192L147.7,224L184.6,224L184.6,32L221.5,32L221.5,32L258.5,32L258.5,64L295.4,64L295.4,192L332.3,192L332.3,192L369.2,192L369.2,224L406.2,224L406.2,288L443.1,288L443.1,160L480,160L480,0L516.9,0L516.9,32L553.8,32L553.8,0L590.8,0L590.8,288L627.7,288L627.7,32L664.6,32L664.6,288L701.5,288L701.5,192L738.5,192L738.5,160L775.4,160L775.4,32L812.3,32L812.3,192L849.2,192L849.2,224L886.2,224L886.2,128L923.1,128L923.1,160L960,160L960,288L996.9,288L996.9,192L1033.8,192L1033.8,160L1070.8,160L1070.8,224L1107.7,224L1107.7,288L1144.6,288L1144.6,64L1181.5,64L1181.5,192L1218.5,192L1218.5,64L1255.4,64L1255.4,288L1292.3,288L1292.3,224L1329.2,224L1329.2,288L1366.2,288L1366.2,192L1403.1,192L1403.1,224L1440,224L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>    </section>


  );
}
