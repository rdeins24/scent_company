import React from 'react';

function Cards() {
  return (
    <div className="flex justify-center">
      <div className="flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl">
        <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center text-white p-2">
            <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
              <ion-icon name="logo-amplify" className="text-5xl"></ion-icon>
            </div>
            <div className="text-3xl m-2">Personal</div>
            <div className="text-white text-sm my-2 flex flex-col items-center h-60">
              <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">£</div>
                <div className="text-3xl md:text-5xl">9.78</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">1 website</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">50 GB Storage</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">~100,000 Visits Monthly</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">SSL</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">Daily Backups</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">Free E-mail</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center text-white p-2">
            <div className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 rounded-full p-2">
              <ion-icon name="logo-octocat" className="text-5xl"></ion-icon>
            </div>
            <div className="text-3xl m-2">Shared</div>
            <div className="text-white text-sm my-2 flex flex-col items-center h-60">
              <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">£</div>
                <div className="text-3xl md:text-5xl">9.78</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">100 websites</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">500 GB Storage</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">~100,000 Visits Monthly</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">SSL</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">Daily Backups</div>
              </div>
              <div className="flex">
                <ion-icon name="close-sharp"></ion-icon>
                <div className="">Free E-mail</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center text-white p-2">
            <div className="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800 rounded-full p-2">
              <ion-icon name="logo-gitlab" className="text-5xl"></ion-icon>
            </div>
            <div className="text-3xl m-2">Business</div>
            <div className="text-white text-sm my-2 flex flex-col items-center h-60">
              <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">£</div>
                <div className="text-3xl md:text-5xl">9.78</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">100 websites</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">500 GB Storage</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">~100,000 Visits Monthly</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">SSL</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">Daily Backups</div>
              </div>
              <div className="flex">
                <ion-icon name="checkmark-sharp"></ion-icon>
                <div className="">Free E-mail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
